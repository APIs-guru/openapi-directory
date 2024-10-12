# openapi_client.RankCarListingsApi

All URIs are relative to *https://marketcheck-prod.apigee.net/v2*

Method | HTTP request | Description
------------- | ------------- | -------------
[**rank_car**](RankCarListingsApi.md#rank_car) | **POST** /search/car/active/rank/listings | Compute relative rank for car listings.
[**search_and_rank_car**](RankCarListingsApi.md#search_and_rank_car) | **POST** /search/car/active/rank | Compute relative rank for car listings.


# **rank_car**
> CarRankResponse rank_car(car_rank_request, api_key=api_key, append_api_key=append_api_key)

Compute relative rank for car listings.

Computer rank for car listings based on inputs provided.Weights for ranking parameters can also be provided.

### Example

* Basic Authentication (authorizeEndpoint):

```python
import openapi_client
from openapi_client.models.car_rank_request import CarRankRequest
from openapi_client.models.car_rank_response import CarRankResponse
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://marketcheck-prod.apigee.net/v2
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://marketcheck-prod.apigee.net/v2"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure HTTP basic authorization: authorizeEndpoint
configuration = openapi_client.Configuration(
    username = os.environ["USERNAME"],
    password = os.environ["PASSWORD"]
)

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.RankCarListingsApi(api_client)
    car_rank_request = openapi_client.CarRankRequest() # CarRankRequest | Inputs needed for ranking a group of car listings
    api_key = 'api_key_example' # str | The API Authentication Key. Mandatory with all API calls. (optional)
    append_api_key = True # bool | Flag on whether to include api_key in response API urls (if any) (optional) (default to True)

    try:
        # Compute relative rank for car listings.
        api_response = api_instance.rank_car(car_rank_request, api_key=api_key, append_api_key=append_api_key)
        print("The response of RankCarListingsApi->rank_car:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling RankCarListingsApi->rank_car: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **car_rank_request** | [**CarRankRequest**](CarRankRequest.md)| Inputs needed for ranking a group of car listings | 
 **api_key** | **str**| The API Authentication Key. Mandatory with all API calls. | [optional] 
 **append_api_key** | **bool**| Flag on whether to include api_key in response API urls (if any) | [optional] [default to True]

### Return type

[**CarRankResponse**](CarRankResponse.md)

### Authorization

[authorizeEndpoint](../README.md#authorizeEndpoint)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Rank listings based on inputs provided. |  -  |
**0** | Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **search_and_rank_car**
> CarRankResponse search_and_rank_car(car_rank_request, api_key=api_key, append_api_key=append_api_key, latitude=latitude, longitude=longitude, radius=radius, zip=zip, include_lease=include_lease, include_finance=include_finance, lease_term=lease_term, lease_down_payment=lease_down_payment, lease_emp=lease_emp, finance_loan_term=finance_loan_term, finance_loan_apr=finance_loan_apr, finance_emp=finance_emp, finance_down_payment=finance_down_payment, finance_down_payment_per=finance_down_payment_per, car_type=car_type, carfax_1_owner=carfax_1_owner, carfax_clean_title=carfax_clean_title, year=year, make=make, model=model, trim=trim, vin=vin, body_type=body_type, body_subtype=body_subtype, vehicle_type=vehicle_type, vins=vins, taxonomy_vins=taxonomy_vins, ymmt=ymmt, match=match, cylinders=cylinders, transmission=transmission, doors=doors, drivetrain=drivetrain, exterior_color=exterior_color, interior_color=interior_color, base_exterior_color=base_exterior_color, base_interior_color=base_interior_color, engine=engine, engine_size=engine_size, engine_aspiration=engine_aspiration, engine_block=engine_block, highway_mpg_range=highway_mpg_range, city_mpg_range=city_mpg_range, miles_range=miles_range, price_range=price_range, msrp_range=msrp_range, dom_range=dom_range, sort_by=sort_by, sort_order=sort_order, rows=rows, start=start, include_non_vin_listings=include_non_vin_listings, msa_code=msa_code, facets=facets, range_facets=range_facets, facet_sort=facet_sort, stats=stats, country=country, plot=plot, nodedup=nodedup, dedup=dedup, owned=owned, state=state, city=city, trim_o=trim_o, trim_r=trim_r, dom_active_range=dom_active_range, dom_180_range=dom_180_range, exclude_certified=exclude_certified, fuel_type=fuel_type, dealer_type=dealer_type, photo_links=photo_links, photo_links_cached=photo_links_cached, stock_no=stock_no, last_seen_range=last_seen_range, first_seen_range=first_seen_range, first_seen_at_source_range=first_seen_at_source_range, first_seen_at_mc_range=first_seen_at_mc_range, last_seen_days=last_seen_days, first_seen_days=first_seen_days, first_seen_at_source_days=first_seen_at_source_days, first_seen_at_mc_days=first_seen_at_mc_days, inventory_type=inventory_type, page=page)

Compute relative rank for car listings.

Computer rank for car listings based on inputs provided.Weights for ranking parameters can also be provided.

### Example

* Basic Authentication (authorizeEndpoint):

```python
import openapi_client
from openapi_client.models.car_rank_request import CarRankRequest
from openapi_client.models.car_rank_response import CarRankResponse
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://marketcheck-prod.apigee.net/v2
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://marketcheck-prod.apigee.net/v2"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure HTTP basic authorization: authorizeEndpoint
configuration = openapi_client.Configuration(
    username = os.environ["USERNAME"],
    password = os.environ["PASSWORD"]
)

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.RankCarListingsApi(api_client)
    car_rank_request = openapi_client.CarRankRequest() # CarRankRequest | Inputs needed for ranking a group of car listings
    api_key = 'api_key_example' # str | The API Authentication Key. Mandatory with all API calls. (optional)
    append_api_key = True # bool | Flag on whether to include api_key in response API urls (if any) (optional) (default to True)
    latitude = 3.4 # float | Latitude component of location (optional)
    longitude = 3.4 # float | Longitude component of location (optional)
    radius = 56 # int | Radius around the search location (Unit - Miles) (optional)
    zip = 'zip_example' # str | To filter listing on ZIP around which they are listed (optional)
    include_lease = True # bool | Boolean param to search for listings that include leasing options in them (optional)
    include_finance = True # bool | Boolean param to search for listings that include finance options in them (optional)
    lease_term = 'lease_term_example' # str | Search listings with exact lease term, or inside a range with min and max seperated by a dash like lease_term=30-60 (optional)
    lease_down_payment = 'lease_down_payment_example' # str | Search listings with exact down payment in lease offers, or inside a range with min and max seperated by a dash like lease_down_payment=30-60 (optional)
    lease_emp = 'lease_emp_example' # str | Search listings with lease offers exactly matching Estimated Monthly Payment(EMI), or inside a range with min and max seperated by a dash like lease_emp=30-60 (optional)
    finance_loan_term = 'finance_loan_term_example' # str | Search listings with exact finance loan term, or inside a range with min and max seperated by a dash like finance_loan_term=30-60 (optional)
    finance_loan_apr = 'finance_loan_apr_example' # str | Search listings with finance offers exactly matching loans Annual Percentage Rate, or inside a range with min and max seperated by a dash like finance_loan_apr=30-60 (optional)
    finance_emp = 'finance_emp_example' # str | Search listings with finance offers exactly matching Estimated Monthly Payment(EMI), or inside a range with min and max seperated by a dash like finance_emp=30-60 (optional)
    finance_down_payment = 'finance_down_payment_example' # str | Search listings with exact down payment in finance offers, or inside a range with min and max seperated by a dash like finance_down_payment=30-60 (optional)
    finance_down_payment_per = 'finance_down_payment_per_example' # str | Search listings with exact down payment percentage in finance offers, or inside a range with min and max seperated by a dash like finance_down_payment_per=30-60 (optional)
    car_type = 'car_type_example' # str | Car type. Allowed values are - new / used / certified (optional)
    carfax_1_owner = 'carfax_1_owner_example' # str | Indicates whether car has had only one owner or not (optional)
    carfax_clean_title = 'carfax_clean_title_example' # str | Indicates whether car has clean ownership records (optional)
    year = 'year_example' # str | To filter listing on their year (optional)
    make = 'make_example' # str | To filter listings on their make (optional)
    model = 'model_example' # str | To filter listings on their model (optional)
    trim = 'trim_example' # str | To filter listing on their trim (optional)
    vin = 'vin_example' # str | To filter listing on their VIN (optional)
    body_type = 'body_type_example' # str | To filter listing on their body type (optional)
    body_subtype = 'body_subtype_example' # str | Body subtype to filter the listings on. Valid filter values are those that our Search facets API returns for unique body subtypes. You can pass in multiple body subtype values comma separated (optional)
    vehicle_type = 'vehicle_type_example' # str | To filter listing on their vehicle type (optional)
    vins = 'vins_example' # str | Comma separated list of 17 digit vins to search the matching cars for. Only 10 VINs allowed per request. If the request contains more than 10 VINs the first 10 VINs will be considered. Could be used as a More Like This or Similar Vehicles search for the given VINs. Ths vins parameter is an alternative to taxonomy_vins or ymmt parameters available with the search API. vins and taxonomy_vins parameters could be used to filter our cars with the exact build represented by the vins or taxonomy_vins whereas ymmt is a top level filter that does not filter cars by the build attributes like doors, drivetrain, cylinders, body type, body subtype, vehicle type etc (optional)
    taxonomy_vins = 'taxonomy_vins_example' # str | Comma separated list of 10 letters excert from the 17 letter VIN. The 10 letters to be picked up from the 17 letter VIN are - first 8 letters and the 10th and 11th letter. E.g. For a VIN - 1FTFW1EF3EKE57182 the taxonomy vin would be - 1FTFW1EFEK  A taxonomy VIN identified a build of a car and could be used to filter our cars of a particular build. This is an alternative to the vin or ymmt parameters to the search API. (optional)
    ymmt = 'ymmt_example' # str | Comma separated list of Year, Make, Model, Trim combinations. Each combination needs to have the year,make,model, trim values separated by a pipe '|' character in the form year|make|model|trim. e.g. 2010|Audi|A5,2014|Nissan|Sentra|S 6MT,|Honda|City|   You could just provide strings of the form - 'year|make||' or 'year|make|model' or '|make|model|' combinations. Individual year / make / model filters provied with the API calls will take precedence over the Year, Make, Model, Trim combinations. The Make, Model, Trim values must be valid values as per the Marketcheck Vin Decoder. If you are using a separate vin decoder then look at using the 'vins' or 'taxonomy_vins' parameter to the search api instead the year|make|model|trim combinations. (optional)
    match = 'match_example' # str | Comma separated list of Year, Make, Model, Trim fields. For example - year,make,model,trim fields for which user wants to do an exact match (optional)
    cylinders = 'cylinders_example' # str | To filter listing on their cylinders (optional)
    transmission = 'transmission_example' # str | To filter listing on their transmission (optional)
    doors = 'doors_example' # str | Doors to filter the cars on. Valid filter values are those that our Search facets API returns for unique doors. You can pass in multiple doors values comma separated (optional)
    drivetrain = 'drivetrain_example' # str | To filter listing on their drivetrain (optional)
    exterior_color = 'exterior_color_example' # str | Exterior color to match. Valid filter values are those that our Search facets API returns for unique exterior colors. You can pass in multiple exterior color values comma separated (optional)
    interior_color = 'interior_color_example' # str | Interior color to match. Valid filter values are those that our Search facets API returns for unique interior colors. You can pass in multiple interior color values comma separated (optional)
    base_exterior_color = 'base_exterior_color_example' # str | Base exterior color to match. Valid filter values are those that our Search facets API returns for unique base exterior colors. You can pass in multiple base interior color values comma separated (optional)
    base_interior_color = 'base_interior_color_example' # str | Base interior color to match. Valid filter values are those that our Search facets API returns for unique base interior colors. You can pass in multiple base interior color values comma separated (optional)
    engine = 'engine_example' # str | To filter listing on their engine (optional)
    engine_size = 'engine_size_example' # str | Engine Size to match. Valid filter values are those that our Search facets API returns for unique engine size. You can pass in multiple engine size values comma separated (optional)
    engine_aspiration = 'engine_aspiration_example' # str | Engine Aspiration to match. Valid filter values are those that our Search facets API returns for unique Engine Aspirations. You can pass in multiple Engine aspirations values comma separated (optional)
    engine_block = 'engine_block_example' # str | Engine Block to match. Valid filter values are those that our Search facets API returns for unique Engine Block. You can pass in multiple Engine Block values comma separated (optional)
    highway_mpg_range = 'highway_mpg_range_example' # str | Highway mileage range to filter listings with the mileage in the range given. Range to be given in the format - min-max e.g. 1000-5000 (optional)
    city_mpg_range = 'city_mpg_range_example' # str | City mileage range to filter listings with the mileage in the range given. Range to be given in the format - min-max e.g. 1000-5000 (optional)
    miles_range = '1-' # str | Miles range to filter listings with miles in the given range. Range to be given in the format - min-max e.g. 1000-5000 (optional) (default to '1-')
    price_range = '1-' # str | Price range to filter listings with the price in the range given. Range to be given in the format - min-max e.g. 1000-5000 (optional) (default to '1-')
    msrp_range = 'msrp_range_example' # str | MSRP range to filter listings with the msrp in the range given. Range to be given in the format - min-max e.g. 1000-5000 (optional)
    dom_range = 'dom_range_example' # str | Days on Market range to filter cars with the DOM within the given range. Range to be given in the format - min-max e.g. 10-50 (optional)
    sort_by = 'sort_by_example' # str | Sort by field. Default sort field is distance from the given point (optional)
    sort_order = 'sort_order_example' # str | Sort order - asc or desc. Default sort order is asc (optional)
    rows = 10 # int | Number of results to return. Default is 10. Max is 50 (optional) (default to 10)
    start = 0 # int | Page number to fetch the results for the given criteria. Default is 0. Pagination is allowed only till first 10000 results for the search and sort criteria. The page value can be only between 1 to 10000/rows (optional) (default to 0)
    include_non_vin_listings = False # bool | To include non vin listings. Default is false (optional) (default to False)
    msa_code = 'msa_code_example' # str | To filter listing on msa code in which they are listed (optional)
    facets = 'facets_example' # str | The comma separated list of fields for which facets are requested. Facets could be requested in addition to the listings for the search. Please note - The API calls with lots of facet fields may take longer to respond. (optional)
    range_facets = 'range_facets_example' # str | The comma separated list of numeric fields for which range facets are requested. Range facets could be requested in addition to the listings for the search. Please note - The API calls with lots of range facet fields may take longer to respond. (optional)
    facet_sort = count # str | Control sort order of facets with this parameter with default sort being on count, Other available sort is alphabetical sort, which can be obtained by using index as value for this param (optional) (default to count)
    stats = 'stats_example' # str | The list of fields for which stats need to be generated based on the matching listings for the search criteria. The stats consists of mean, max, average and count of listings based on which the stats are calculated for the field. Stats could be requested in addition to the listings for the search. Please note - The API calls with the stats fields may take longer to respond. (optional)
    country = US # str | To filter listing on Country in which they are listed (optional) (default to US)
    plot = True # bool | If plot has value true results in around 25k coordinates with limited fields to plot respective graph (optional)
    nodedup = True # bool | If nodedup is set to true then API will give results without is_searchable i.e multiple listings for single vin (optional)
    dedup = True # bool | If dedup is set to true then will give results with is_searchable irrespecive of dealer_id or source (optional)
    owned = True # bool | Used in combination with dealer_id or source, when true returns the listings actually owned by dealer himself (optional)
    state = 'state_example' # str | To filter listing on State in which they are listed (optional)
    city = 'city_example' # str | To filter listing on City in which they are listed (optional)
    trim_o = 'trim_o_example' # str | Filter listings on web scraped trim (optional)
    trim_r = 'trim_r_example' # str | Filter trim on custom possible matches (optional)
    dom_active_range = 'dom_active_range_example' # str | Active Days on Market range to filter cars with the DOM within the given range. Range to be given in the format - min-max e.g. 10-50 (optional)
    dom_180_range = 'dom_180_range_example' # str | Last 180 Days on Market range to filter cars with the DOM within the given range. Range to be given in the format - min-max e.g. 10-50 (optional)
    exclude_certified = True # bool | Boolean param to exclude certified cars from search results (optional)
    fuel_type = 'fuel_type_example' # str | To filter listing on their fuel type (optional)
    dealer_type = 'dealer_type_example' # str | Filter based on dealer type independant or franchise (optional)
    photo_links = True # bool | A boolean indicating whether to include only those listings that have photo_links in search results, And discard those that don't have them (optional)
    photo_links_cached = True # bool | A boolean indicating whether to include only those listings that have photo_links_cached in search results, And discard those that don't have them (optional)
    stock_no = 'stock_no_example' # str | To filter listing on their stock number on lot (optional)
    last_seen_range = 'last_seen_range_example' # str | Last seen date range to filter listings with the last seen in the range given. Range to be given in the format [YYYYMMDD] - min-max e.g. 20190523-20190623 (optional)
    first_seen_range = 'first_seen_range_example' # str | First seen date range to filter listings with the first seen in the range given. Range to be given in the format [YYYYMMDD] - min-max e.g. 20190523-20190623 (optional)
    first_seen_at_source_range = 'first_seen_at_source_range_example' # str | First seen at source date range to filter listings with the first seen at source in the range given. Range to be given in the format [YYYYMMDD] - min-max e.g. 20190523-20190623 (optional)
    first_seen_at_mc_range = 'first_seen_at_mc_range_example' # str | First seen at MC date range to filter listings with the first seen at MC in the range given. Range to be given in the format [YYYYMMDD] - min-max e.g. 20190523-20190623 (optional)
    last_seen_days = 'last_seen_days_example' # str | Last seen days range to filter listings with the last seen in the range given. Range to be given in the format - min-max e.g. 25-12 (optional)
    first_seen_days = 'first_seen_days_example' # str | First seen days range to filter listings with the first seen in the range given. Range to be given in the format - min-max e.g. 25-12 (optional)
    first_seen_at_source_days = 'first_seen_at_source_days_example' # str | First seen at source days range to filter listings with the first seen at source in the range given. Range to be given in the format - min-max e.g. 25-12 (optional)
    first_seen_at_mc_days = 'first_seen_at_mc_days_example' # str | First seen at MC days range to filter listings with the first seen at MC in the range given. Range to be given in the format - min-max e.g. 25-12 (optional)
    inventory_type = 'inventory_type_example' # str | To filter listing on their condition. Either used or new (optional)
    page = 3.4 # float | Page number to fetch the results for the given criteria. Default is 1. (optional)

    try:
        # Compute relative rank for car listings.
        api_response = api_instance.search_and_rank_car(car_rank_request, api_key=api_key, append_api_key=append_api_key, latitude=latitude, longitude=longitude, radius=radius, zip=zip, include_lease=include_lease, include_finance=include_finance, lease_term=lease_term, lease_down_payment=lease_down_payment, lease_emp=lease_emp, finance_loan_term=finance_loan_term, finance_loan_apr=finance_loan_apr, finance_emp=finance_emp, finance_down_payment=finance_down_payment, finance_down_payment_per=finance_down_payment_per, car_type=car_type, carfax_1_owner=carfax_1_owner, carfax_clean_title=carfax_clean_title, year=year, make=make, model=model, trim=trim, vin=vin, body_type=body_type, body_subtype=body_subtype, vehicle_type=vehicle_type, vins=vins, taxonomy_vins=taxonomy_vins, ymmt=ymmt, match=match, cylinders=cylinders, transmission=transmission, doors=doors, drivetrain=drivetrain, exterior_color=exterior_color, interior_color=interior_color, base_exterior_color=base_exterior_color, base_interior_color=base_interior_color, engine=engine, engine_size=engine_size, engine_aspiration=engine_aspiration, engine_block=engine_block, highway_mpg_range=highway_mpg_range, city_mpg_range=city_mpg_range, miles_range=miles_range, price_range=price_range, msrp_range=msrp_range, dom_range=dom_range, sort_by=sort_by, sort_order=sort_order, rows=rows, start=start, include_non_vin_listings=include_non_vin_listings, msa_code=msa_code, facets=facets, range_facets=range_facets, facet_sort=facet_sort, stats=stats, country=country, plot=plot, nodedup=nodedup, dedup=dedup, owned=owned, state=state, city=city, trim_o=trim_o, trim_r=trim_r, dom_active_range=dom_active_range, dom_180_range=dom_180_range, exclude_certified=exclude_certified, fuel_type=fuel_type, dealer_type=dealer_type, photo_links=photo_links, photo_links_cached=photo_links_cached, stock_no=stock_no, last_seen_range=last_seen_range, first_seen_range=first_seen_range, first_seen_at_source_range=first_seen_at_source_range, first_seen_at_mc_range=first_seen_at_mc_range, last_seen_days=last_seen_days, first_seen_days=first_seen_days, first_seen_at_source_days=first_seen_at_source_days, first_seen_at_mc_days=first_seen_at_mc_days, inventory_type=inventory_type, page=page)
        print("The response of RankCarListingsApi->search_and_rank_car:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling RankCarListingsApi->search_and_rank_car: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **car_rank_request** | [**CarRankRequest**](CarRankRequest.md)| Inputs needed for ranking a group of car listings | 
 **api_key** | **str**| The API Authentication Key. Mandatory with all API calls. | [optional] 
 **append_api_key** | **bool**| Flag on whether to include api_key in response API urls (if any) | [optional] [default to True]
 **latitude** | **float**| Latitude component of location | [optional] 
 **longitude** | **float**| Longitude component of location | [optional] 
 **radius** | **int**| Radius around the search location (Unit - Miles) | [optional] 
 **zip** | **str**| To filter listing on ZIP around which they are listed | [optional] 
 **include_lease** | **bool**| Boolean param to search for listings that include leasing options in them | [optional] 
 **include_finance** | **bool**| Boolean param to search for listings that include finance options in them | [optional] 
 **lease_term** | **str**| Search listings with exact lease term, or inside a range with min and max seperated by a dash like lease_term&#x3D;30-60 | [optional] 
 **lease_down_payment** | **str**| Search listings with exact down payment in lease offers, or inside a range with min and max seperated by a dash like lease_down_payment&#x3D;30-60 | [optional] 
 **lease_emp** | **str**| Search listings with lease offers exactly matching Estimated Monthly Payment(EMI), or inside a range with min and max seperated by a dash like lease_emp&#x3D;30-60 | [optional] 
 **finance_loan_term** | **str**| Search listings with exact finance loan term, or inside a range with min and max seperated by a dash like finance_loan_term&#x3D;30-60 | [optional] 
 **finance_loan_apr** | **str**| Search listings with finance offers exactly matching loans Annual Percentage Rate, or inside a range with min and max seperated by a dash like finance_loan_apr&#x3D;30-60 | [optional] 
 **finance_emp** | **str**| Search listings with finance offers exactly matching Estimated Monthly Payment(EMI), or inside a range with min and max seperated by a dash like finance_emp&#x3D;30-60 | [optional] 
 **finance_down_payment** | **str**| Search listings with exact down payment in finance offers, or inside a range with min and max seperated by a dash like finance_down_payment&#x3D;30-60 | [optional] 
 **finance_down_payment_per** | **str**| Search listings with exact down payment percentage in finance offers, or inside a range with min and max seperated by a dash like finance_down_payment_per&#x3D;30-60 | [optional] 
 **car_type** | **str**| Car type. Allowed values are - new / used / certified | [optional] 
 **carfax_1_owner** | **str**| Indicates whether car has had only one owner or not | [optional] 
 **carfax_clean_title** | **str**| Indicates whether car has clean ownership records | [optional] 
 **year** | **str**| To filter listing on their year | [optional] 
 **make** | **str**| To filter listings on their make | [optional] 
 **model** | **str**| To filter listings on their model | [optional] 
 **trim** | **str**| To filter listing on their trim | [optional] 
 **vin** | **str**| To filter listing on their VIN | [optional] 
 **body_type** | **str**| To filter listing on their body type | [optional] 
 **body_subtype** | **str**| Body subtype to filter the listings on. Valid filter values are those that our Search facets API returns for unique body subtypes. You can pass in multiple body subtype values comma separated | [optional] 
 **vehicle_type** | **str**| To filter listing on their vehicle type | [optional] 
 **vins** | **str**| Comma separated list of 17 digit vins to search the matching cars for. Only 10 VINs allowed per request. If the request contains more than 10 VINs the first 10 VINs will be considered. Could be used as a More Like This or Similar Vehicles search for the given VINs. Ths vins parameter is an alternative to taxonomy_vins or ymmt parameters available with the search API. vins and taxonomy_vins parameters could be used to filter our cars with the exact build represented by the vins or taxonomy_vins whereas ymmt is a top level filter that does not filter cars by the build attributes like doors, drivetrain, cylinders, body type, body subtype, vehicle type etc | [optional] 
 **taxonomy_vins** | **str**| Comma separated list of 10 letters excert from the 17 letter VIN. The 10 letters to be picked up from the 17 letter VIN are - first 8 letters and the 10th and 11th letter. E.g. For a VIN - 1FTFW1EF3EKE57182 the taxonomy vin would be - 1FTFW1EFEK  A taxonomy VIN identified a build of a car and could be used to filter our cars of a particular build. This is an alternative to the vin or ymmt parameters to the search API. | [optional] 
 **ymmt** | **str**| Comma separated list of Year, Make, Model, Trim combinations. Each combination needs to have the year,make,model, trim values separated by a pipe &#39;|&#39; character in the form year|make|model|trim. e.g. 2010|Audi|A5,2014|Nissan|Sentra|S 6MT,|Honda|City|   You could just provide strings of the form - &#39;year|make||&#39; or &#39;year|make|model&#39; or &#39;|make|model|&#39; combinations. Individual year / make / model filters provied with the API calls will take precedence over the Year, Make, Model, Trim combinations. The Make, Model, Trim values must be valid values as per the Marketcheck Vin Decoder. If you are using a separate vin decoder then look at using the &#39;vins&#39; or &#39;taxonomy_vins&#39; parameter to the search api instead the year|make|model|trim combinations. | [optional] 
 **match** | **str**| Comma separated list of Year, Make, Model, Trim fields. For example - year,make,model,trim fields for which user wants to do an exact match | [optional] 
 **cylinders** | **str**| To filter listing on their cylinders | [optional] 
 **transmission** | **str**| To filter listing on their transmission | [optional] 
 **doors** | **str**| Doors to filter the cars on. Valid filter values are those that our Search facets API returns for unique doors. You can pass in multiple doors values comma separated | [optional] 
 **drivetrain** | **str**| To filter listing on their drivetrain | [optional] 
 **exterior_color** | **str**| Exterior color to match. Valid filter values are those that our Search facets API returns for unique exterior colors. You can pass in multiple exterior color values comma separated | [optional] 
 **interior_color** | **str**| Interior color to match. Valid filter values are those that our Search facets API returns for unique interior colors. You can pass in multiple interior color values comma separated | [optional] 
 **base_exterior_color** | **str**| Base exterior color to match. Valid filter values are those that our Search facets API returns for unique base exterior colors. You can pass in multiple base interior color values comma separated | [optional] 
 **base_interior_color** | **str**| Base interior color to match. Valid filter values are those that our Search facets API returns for unique base interior colors. You can pass in multiple base interior color values comma separated | [optional] 
 **engine** | **str**| To filter listing on their engine | [optional] 
 **engine_size** | **str**| Engine Size to match. Valid filter values are those that our Search facets API returns for unique engine size. You can pass in multiple engine size values comma separated | [optional] 
 **engine_aspiration** | **str**| Engine Aspiration to match. Valid filter values are those that our Search facets API returns for unique Engine Aspirations. You can pass in multiple Engine aspirations values comma separated | [optional] 
 **engine_block** | **str**| Engine Block to match. Valid filter values are those that our Search facets API returns for unique Engine Block. You can pass in multiple Engine Block values comma separated | [optional] 
 **highway_mpg_range** | **str**| Highway mileage range to filter listings with the mileage in the range given. Range to be given in the format - min-max e.g. 1000-5000 | [optional] 
 **city_mpg_range** | **str**| City mileage range to filter listings with the mileage in the range given. Range to be given in the format - min-max e.g. 1000-5000 | [optional] 
 **miles_range** | **str**| Miles range to filter listings with miles in the given range. Range to be given in the format - min-max e.g. 1000-5000 | [optional] [default to &#39;1-&#39;]
 **price_range** | **str**| Price range to filter listings with the price in the range given. Range to be given in the format - min-max e.g. 1000-5000 | [optional] [default to &#39;1-&#39;]
 **msrp_range** | **str**| MSRP range to filter listings with the msrp in the range given. Range to be given in the format - min-max e.g. 1000-5000 | [optional] 
 **dom_range** | **str**| Days on Market range to filter cars with the DOM within the given range. Range to be given in the format - min-max e.g. 10-50 | [optional] 
 **sort_by** | **str**| Sort by field. Default sort field is distance from the given point | [optional] 
 **sort_order** | **str**| Sort order - asc or desc. Default sort order is asc | [optional] 
 **rows** | **int**| Number of results to return. Default is 10. Max is 50 | [optional] [default to 10]
 **start** | **int**| Page number to fetch the results for the given criteria. Default is 0. Pagination is allowed only till first 10000 results for the search and sort criteria. The page value can be only between 1 to 10000/rows | [optional] [default to 0]
 **include_non_vin_listings** | **bool**| To include non vin listings. Default is false | [optional] [default to False]
 **msa_code** | **str**| To filter listing on msa code in which they are listed | [optional] 
 **facets** | **str**| The comma separated list of fields for which facets are requested. Facets could be requested in addition to the listings for the search. Please note - The API calls with lots of facet fields may take longer to respond. | [optional] 
 **range_facets** | **str**| The comma separated list of numeric fields for which range facets are requested. Range facets could be requested in addition to the listings for the search. Please note - The API calls with lots of range facet fields may take longer to respond. | [optional] 
 **facet_sort** | **str**| Control sort order of facets with this parameter with default sort being on count, Other available sort is alphabetical sort, which can be obtained by using index as value for this param | [optional] [default to count]
 **stats** | **str**| The list of fields for which stats need to be generated based on the matching listings for the search criteria. The stats consists of mean, max, average and count of listings based on which the stats are calculated for the field. Stats could be requested in addition to the listings for the search. Please note - The API calls with the stats fields may take longer to respond. | [optional] 
 **country** | **str**| To filter listing on Country in which they are listed | [optional] [default to US]
 **plot** | **bool**| If plot has value true results in around 25k coordinates with limited fields to plot respective graph | [optional] 
 **nodedup** | **bool**| If nodedup is set to true then API will give results without is_searchable i.e multiple listings for single vin | [optional] 
 **dedup** | **bool**| If dedup is set to true then will give results with is_searchable irrespecive of dealer_id or source | [optional] 
 **owned** | **bool**| Used in combination with dealer_id or source, when true returns the listings actually owned by dealer himself | [optional] 
 **state** | **str**| To filter listing on State in which they are listed | [optional] 
 **city** | **str**| To filter listing on City in which they are listed | [optional] 
 **trim_o** | **str**| Filter listings on web scraped trim | [optional] 
 **trim_r** | **str**| Filter trim on custom possible matches | [optional] 
 **dom_active_range** | **str**| Active Days on Market range to filter cars with the DOM within the given range. Range to be given in the format - min-max e.g. 10-50 | [optional] 
 **dom_180_range** | **str**| Last 180 Days on Market range to filter cars with the DOM within the given range. Range to be given in the format - min-max e.g. 10-50 | [optional] 
 **exclude_certified** | **bool**| Boolean param to exclude certified cars from search results | [optional] 
 **fuel_type** | **str**| To filter listing on their fuel type | [optional] 
 **dealer_type** | **str**| Filter based on dealer type independant or franchise | [optional] 
 **photo_links** | **bool**| A boolean indicating whether to include only those listings that have photo_links in search results, And discard those that don&#39;t have them | [optional] 
 **photo_links_cached** | **bool**| A boolean indicating whether to include only those listings that have photo_links_cached in search results, And discard those that don&#39;t have them | [optional] 
 **stock_no** | **str**| To filter listing on their stock number on lot | [optional] 
 **last_seen_range** | **str**| Last seen date range to filter listings with the last seen in the range given. Range to be given in the format [YYYYMMDD] - min-max e.g. 20190523-20190623 | [optional] 
 **first_seen_range** | **str**| First seen date range to filter listings with the first seen in the range given. Range to be given in the format [YYYYMMDD] - min-max e.g. 20190523-20190623 | [optional] 
 **first_seen_at_source_range** | **str**| First seen at source date range to filter listings with the first seen at source in the range given. Range to be given in the format [YYYYMMDD] - min-max e.g. 20190523-20190623 | [optional] 
 **first_seen_at_mc_range** | **str**| First seen at MC date range to filter listings with the first seen at MC in the range given. Range to be given in the format [YYYYMMDD] - min-max e.g. 20190523-20190623 | [optional] 
 **last_seen_days** | **str**| Last seen days range to filter listings with the last seen in the range given. Range to be given in the format - min-max e.g. 25-12 | [optional] 
 **first_seen_days** | **str**| First seen days range to filter listings with the first seen in the range given. Range to be given in the format - min-max e.g. 25-12 | [optional] 
 **first_seen_at_source_days** | **str**| First seen at source days range to filter listings with the first seen at source in the range given. Range to be given in the format - min-max e.g. 25-12 | [optional] 
 **first_seen_at_mc_days** | **str**| First seen at MC days range to filter listings with the first seen at MC in the range given. Range to be given in the format - min-max e.g. 25-12 | [optional] 
 **inventory_type** | **str**| To filter listing on their condition. Either used or new | [optional] 
 **page** | **float**| Page number to fetch the results for the given criteria. Default is 1. | [optional] 

### Return type

[**CarRankResponse**](CarRankResponse.md)

### Authorization

[authorizeEndpoint](../README.md#authorizeEndpoint)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Rank listings based on inputs provided. |  -  |
**0** | Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

