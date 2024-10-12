# openapi_client.CarSearchApi

All URIs are relative to *https://marketcheck-prod.apigee.net/v2*

Method | HTTP request | Description
------------- | ------------- | -------------
[**auto_complete**](CarSearchApi.md#auto_complete) | **GET** /search/car/auto-complete | API for auto-completion of inputs
[**car_dealer_inventory_active_get**](CarSearchApi.md#car_dealer_inventory_active_get) | **GET** /car/dealer/inventory/active | Get dealers active inventory
[**get_listing**](CarSearchApi.md#get_listing) | **GET** /listing/car/{id} | Listing by id
[**listing_car_auction_id_extra_get**](CarSearchApi.md#listing_car_auction_id_extra_get) | **GET** /listing/car/auction/{id}/extra | Long text Listings attributes for Listing with the given id
[**listing_car_auction_id_get**](CarSearchApi.md#listing_car_auction_id_get) | **GET** /listing/car/auction/{id} | Listing by id
[**listing_car_auction_id_media_get**](CarSearchApi.md#listing_car_auction_id_media_get) | **GET** /listing/car/auction/{id}/media | Listing media by id
[**listing_car_fsbo_id_extra_get**](CarSearchApi.md#listing_car_fsbo_id_extra_get) | **GET** /listing/car/fsbo/{id}/extra | Long text Listings attributes for Listing with the given id
[**listing_car_fsbo_id_get**](CarSearchApi.md#listing_car_fsbo_id_get) | **GET** /listing/car/fsbo/{id} | Listing by id
[**listing_car_fsbo_id_media_get**](CarSearchApi.md#listing_car_fsbo_id_media_get) | **GET** /listing/car/fsbo/{id}/media | Listing media by id
[**listing_car_id_extra_get**](CarSearchApi.md#listing_car_id_extra_get) | **GET** /listing/car/{id}/extra | Long text Listings attributes for Listing with the given id
[**listing_car_id_media_get**](CarSearchApi.md#listing_car_id_media_get) | **GET** /listing/car/{id}/media | Listing media by id
[**listing_car_uk_id_extra_get**](CarSearchApi.md#listing_car_uk_id_extra_get) | **GET** /listing/car/uk/{id}/extra | Long text Listings attributes for Listing with the given id
[**listing_car_uk_id_get**](CarSearchApi.md#listing_car_uk_id_get) | **GET** /listing/car/uk/{id} | Listing by id
[**listing_car_uk_id_media_get**](CarSearchApi.md#listing_car_uk_id_media_get) | **GET** /listing/car/uk/{id}/media | Listing media by id
[**search**](CarSearchApi.md#search) | **GET** /search/car/uk/active | Gets active car listings in UK for the given search criteria
[**search_car_active_get**](CarSearchApi.md#search_car_active_get) | **GET** /search/car/active | Gets active car listings for the given search criteria
[**search_car_auction_active_get**](CarSearchApi.md#search_car_auction_active_get) | **GET** /search/car/auction/active | Gets active auction car listings for the given search criteria
[**search_car_fsbo_active_get**](CarSearchApi.md#search_car_fsbo_active_get) | **GET** /search/car/fsbo/active | Gets active private party car listings for the given search criteria
[**search_car_recents_get**](CarSearchApi.md#search_car_recents_get) | **GET** /search/car/recents | Gets Recent car listings for the given search criteria
[**search_car_uk_recents_get**](CarSearchApi.md#search_car_uk_recents_get) | **GET** /search/car/uk/recents | Gets Recent UK car listings for the given search criteria


# **auto_complete**
> SearchAutoCompleteResponse auto_complete(var_field, input, api_key=api_key, year=year, make=make, model=model, trim=trim, body_type=body_type, body_subtype=body_subtype, vehicle_type=vehicle_type, transmission=transmission, drivetrain=drivetrain, fuel_type=fuel_type, exterior_color=exterior_color, interior_color=interior_color, engine=engine, engine_size=engine_size, engine_block=engine_block, state=state, city=city, source=source, dealer_id=dealer_id, country=country, car_type=car_type, include_non_vin_listings=include_non_vin_listings, ignore_case=ignore_case, term_counts=term_counts, sort_by=sort_by, seller_type=seller_type, radius=radius, zip=zip, inventory_count_range=inventory_count_range, exclude_dealer_ids=exclude_dealer_ids, exclude_sources=exclude_sources, in_transit=in_transit, facet_min_count=facet_min_count)

API for auto-completion of inputs

Auto-complete the inputs of your end users

### Example

* Basic Authentication (authorizeEndpoint):

```python
import openapi_client
from openapi_client.models.search_auto_complete_response import SearchAutoCompleteResponse
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
    api_instance = openapi_client.CarSearchApi(api_client)
    var_field = 'var_field_example' # str | Field name for which you want auto-completion
    input = 'input_example' # str | Input entered so far
    api_key = 'api_key_example' # str | The API Authentication Key. Mandatory with all API calls. (optional)
    year = 'year_example' # str | To filter listing on their year (optional)
    make = 'make_example' # str | To filter listings on their make (optional)
    model = 'model_example' # str | To filter listings on their model (optional)
    trim = 'trim_example' # str | To filter listing on their trim (optional)
    body_type = 'body_type_example' # str | To filter listing on their body type (optional)
    body_subtype = 'body_subtype_example' # str | Body subtype to filter the listings on. Valid filter values are those that our Search facets API returns for unique body subtypes. You can pass in multiple body subtype values comma separated (optional)
    vehicle_type = 'vehicle_type_example' # str | To filter listing on their vehicle type (optional)
    transmission = 'transmission_example' # str | To filter listing on their transmission (optional)
    drivetrain = 'drivetrain_example' # str | To filter listing on their drivetrain (optional)
    fuel_type = 'fuel_type_example' # str | To filter listing on their fuel type (optional)
    exterior_color = 'exterior_color_example' # str | Exterior color to match. Valid filter values are those that our Search facets API returns for unique exterior colors. You can pass in multiple exterior color values comma separated (optional)
    interior_color = 'interior_color_example' # str | Interior color to match. Valid filter values are those that our Search facets API returns for unique interior colors. You can pass in multiple interior color values comma separated (optional)
    engine = 'engine_example' # str | To filter listing on their engine (optional)
    engine_size = 'engine_size_example' # str | Engine Size to match. Valid filter values are those that our Search facets API returns for unique engine size. You can pass in multiple engine size values comma separated (optional)
    engine_block = 'engine_block_example' # str | Engine Block to match. Valid filter values are those that our Search facets API returns for unique Engine Block. You can pass in multiple Engine Block values comma separated (optional)
    state = 'state_example' # str | To filter listing on State in which they are listed (optional)
    city = 'city_example' # str | To filter listing on City in which they are listed (optional)
    source = 'source_example' # str | To filter listing on their source only for widget requests (optional)
    dealer_id = 'dealer_id_example' # str | Dealer id to filter the listings. (optional)
    country = US # str | To filter listing on Country in which they are listed (optional) (default to US)
    car_type = 'car_type_example' # str | Car type. Allowed values are - new / used (optional)
    include_non_vin_listings = false # str | Flag to indicate whether to include non vin listing terms in results or not. Default is false to avoid un-normalised terms from non vin listings out of results (optional) (default to false)
    ignore_case = True # bool | Boolean variable to indicate ignore case of current input (optional) (default to True)
    term_counts = False # bool | Boolean variable to indicate wheather to include term counts as well in response (optional) (default to False)
    sort_by = index # str | Sort the response, either by index or count(default) (optional) (default to index)
    seller_type = 'seller_type_example' # str | seller type for autocomplete (optional)
    radius = 56 # int | Radius around the search location (Unit - Miles) (optional)
    zip = 'zip_example' # str | To filter listing on ZIP around which they are listed (optional)
    inventory_count_range = 'inventory_count_range_example' # str | Inventory count range to filter listings with count of total listings in dealers inventory. Range to be given in the format - min-max e.g. 10-50 (optional)
    exclude_dealer_ids = 'exclude_dealer_ids_example' # str | A list of dealer ids to exclude from result (optional)
    exclude_sources = 'exclude_sources_example' # str | A list of sources to exclude from result (optional)
    in_transit = 'in_transit_example' # str | A boolean to filter in transit vehicles (optional)
    facet_min_count = 1 # float | Provide minimum count value for facets (optional) (default to 1)

    try:
        # API for auto-completion of inputs
        api_response = api_instance.auto_complete(var_field, input, api_key=api_key, year=year, make=make, model=model, trim=trim, body_type=body_type, body_subtype=body_subtype, vehicle_type=vehicle_type, transmission=transmission, drivetrain=drivetrain, fuel_type=fuel_type, exterior_color=exterior_color, interior_color=interior_color, engine=engine, engine_size=engine_size, engine_block=engine_block, state=state, city=city, source=source, dealer_id=dealer_id, country=country, car_type=car_type, include_non_vin_listings=include_non_vin_listings, ignore_case=ignore_case, term_counts=term_counts, sort_by=sort_by, seller_type=seller_type, radius=radius, zip=zip, inventory_count_range=inventory_count_range, exclude_dealer_ids=exclude_dealer_ids, exclude_sources=exclude_sources, in_transit=in_transit, facet_min_count=facet_min_count)
        print("The response of CarSearchApi->auto_complete:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling CarSearchApi->auto_complete: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **var_field** | **str**| Field name for which you want auto-completion | 
 **input** | **str**| Input entered so far | 
 **api_key** | **str**| The API Authentication Key. Mandatory with all API calls. | [optional] 
 **year** | **str**| To filter listing on their year | [optional] 
 **make** | **str**| To filter listings on their make | [optional] 
 **model** | **str**| To filter listings on their model | [optional] 
 **trim** | **str**| To filter listing on their trim | [optional] 
 **body_type** | **str**| To filter listing on their body type | [optional] 
 **body_subtype** | **str**| Body subtype to filter the listings on. Valid filter values are those that our Search facets API returns for unique body subtypes. You can pass in multiple body subtype values comma separated | [optional] 
 **vehicle_type** | **str**| To filter listing on their vehicle type | [optional] 
 **transmission** | **str**| To filter listing on their transmission | [optional] 
 **drivetrain** | **str**| To filter listing on their drivetrain | [optional] 
 **fuel_type** | **str**| To filter listing on their fuel type | [optional] 
 **exterior_color** | **str**| Exterior color to match. Valid filter values are those that our Search facets API returns for unique exterior colors. You can pass in multiple exterior color values comma separated | [optional] 
 **interior_color** | **str**| Interior color to match. Valid filter values are those that our Search facets API returns for unique interior colors. You can pass in multiple interior color values comma separated | [optional] 
 **engine** | **str**| To filter listing on their engine | [optional] 
 **engine_size** | **str**| Engine Size to match. Valid filter values are those that our Search facets API returns for unique engine size. You can pass in multiple engine size values comma separated | [optional] 
 **engine_block** | **str**| Engine Block to match. Valid filter values are those that our Search facets API returns for unique Engine Block. You can pass in multiple Engine Block values comma separated | [optional] 
 **state** | **str**| To filter listing on State in which they are listed | [optional] 
 **city** | **str**| To filter listing on City in which they are listed | [optional] 
 **source** | **str**| To filter listing on their source only for widget requests | [optional] 
 **dealer_id** | **str**| Dealer id to filter the listings. | [optional] 
 **country** | **str**| To filter listing on Country in which they are listed | [optional] [default to US]
 **car_type** | **str**| Car type. Allowed values are - new / used | [optional] 
 **include_non_vin_listings** | **str**| Flag to indicate whether to include non vin listing terms in results or not. Default is false to avoid un-normalised terms from non vin listings out of results | [optional] [default to false]
 **ignore_case** | **bool**| Boolean variable to indicate ignore case of current input | [optional] [default to True]
 **term_counts** | **bool**| Boolean variable to indicate wheather to include term counts as well in response | [optional] [default to False]
 **sort_by** | **str**| Sort the response, either by index or count(default) | [optional] [default to index]
 **seller_type** | **str**| seller type for autocomplete | [optional] 
 **radius** | **int**| Radius around the search location (Unit - Miles) | [optional] 
 **zip** | **str**| To filter listing on ZIP around which they are listed | [optional] 
 **inventory_count_range** | **str**| Inventory count range to filter listings with count of total listings in dealers inventory. Range to be given in the format - min-max e.g. 10-50 | [optional] 
 **exclude_dealer_ids** | **str**| A list of dealer ids to exclude from result | [optional] 
 **exclude_sources** | **str**| A list of sources to exclude from result | [optional] 
 **in_transit** | **str**| A boolean to filter in transit vehicles | [optional] 
 **facet_min_count** | **float**| Provide minimum count value for facets | [optional] [default to 1]

### Return type

[**SearchAutoCompleteResponse**](SearchAutoCompleteResponse.md)

### Authorization

[authorizeEndpoint](../README.md#authorizeEndpoint)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Unique terms available in given field for auto completion |  -  |
**0** | Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **car_dealer_inventory_active_get**
> SearchResponse car_dealer_inventory_active_get(api_key=api_key, append_api_key=append_api_key, latitude=latitude, longitude=longitude, radius=radius, zip=zip, include_lease=include_lease, include_finance=include_finance, lease_term=lease_term, lease_down_payment=lease_down_payment, lease_emp=lease_emp, finance_loan_term=finance_loan_term, finance_loan_apr=finance_loan_apr, finance_emp=finance_emp, finance_down_payment=finance_down_payment, finance_down_payment_per=finance_down_payment_per, car_type=car_type, carfax_1_owner=carfax_1_owner, carfax_clean_title=carfax_clean_title, year_range=year_range, year=year, make=make, model=model, trim=trim, dealer_id=dealer_id, vin=vin, source=source, body_type=body_type, body_subtype=body_subtype, vehicle_type=vehicle_type, vins=vins, taxonomy_vins=taxonomy_vins, mm=mm, ymm=ymm, ymmt=ymmt, match=match, cylinders=cylinders, transmission=transmission, doors=doors, drivetrain=drivetrain, exterior_color=exterior_color, interior_color=interior_color, base_exterior_color=base_exterior_color, base_interior_color=base_interior_color, engine=engine, engine_size=engine_size, engine_aspiration=engine_aspiration, engine_block=engine_block, highway_mpg_range=highway_mpg_range, city_mpg_range=city_mpg_range, miles_range=miles_range, price_range=price_range, msrp_range=msrp_range, dom_range=dom_range, sort_by=sort_by, sort_order=sort_order, rows=rows, start=start, include_non_vin_listings=include_non_vin_listings, msa_code=msa_code, facets=facets, range_facets=range_facets, facet_sort=facet_sort, stats=stats, country=country, plot=plot, nodedup=nodedup, dedup=dedup, owned=owned, state=state, city=city, dealer_name=dealer_name, dealership_group_name=dealership_group_name, trim_o=trim_o, trim_r=trim_r, dom_active_range=dom_active_range, dom_180_range=dom_180_range, exclude_certified=exclude_certified, fuel_type=fuel_type, dealer_type=dealer_type, photo_links=photo_links, photo_links_cached=photo_links_cached, stock_no=stock_no, last_seen_range=last_seen_range, first_seen_range=first_seen_range, first_seen_at_source_range=first_seen_at_source_range, first_seen_at_mc_range=first_seen_at_mc_range, last_seen_days=last_seen_days, first_seen_days=first_seen_days, first_seen_at_source_days=first_seen_at_source_days, first_seen_at_mc_days=first_seen_at_mc_days, include_relevant_links=include_relevant_links, inventory_count_range=inventory_count_range, in_transit=in_transit, seating_capacity=seating_capacity, engine_size_range=engine_size_range, powertrain_type=powertrain_type, min_photo_links=min_photo_links, min_photo_links_cached=min_photo_links_cached)

Get dealers active inventory

Get dealers active inventory

### Example

* Basic Authentication (authorizeEndpoint):

```python
import openapi_client
from openapi_client.models.search_response import SearchResponse
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
    api_instance = openapi_client.CarSearchApi(api_client)
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
    year_range = 'year_range_example' # str | Year range to filter listings with the year in the range given. Range to be given in the format - min-max e.g. 2019-2021 (optional)
    year = 'year_example' # str | To filter listing on their year (optional)
    make = 'make_example' # str | To filter listings on their make (optional)
    model = 'model_example' # str | To filter listings on their model (optional)
    trim = 'trim_example' # str | To filter listing on their trim (optional)
    dealer_id = 'dealer_id_example' # str | Dealer id to filter the listings. (optional)
    vin = 'vin_example' # str | To filter listing on their VIN (optional)
    source = 'source_example' # str | To filter listing on their source (optional)
    body_type = 'body_type_example' # str | To filter listing on their body type (optional)
    body_subtype = 'body_subtype_example' # str | Body subtype to filter the listings on. Valid filter values are those that our Search facets API returns for unique body subtypes. You can pass in multiple body subtype values comma separated (optional)
    vehicle_type = 'vehicle_type_example' # str | To filter listing on their vehicle type (optional)
    vins = 'vins_example' # str | Comma separated list of 17 digit vins to search the matching cars for. Only 10 VINs allowed per request. If the request contains more than 10 VINs the first 10 VINs will be considered. Could be used as a More Like This or Similar Vehicles search for the given VINs. Ths vins parameter is an alternative to taxonomy_vins or ymmt parameters available with the search API. vins and taxonomy_vins parameters could be used to filter our cars with the exact build represented by the vins or taxonomy_vins whereas ymmt is a top level filter that does not filter cars by the build attributes like doors, drivetrain, cylinders, body type, body subtype, vehicle type etc (optional)
    taxonomy_vins = 'taxonomy_vins_example' # str | Comma separated list of 10 letters excert from the 17 letter VIN. The 10 letters to be picked up from the 17 letter VIN are - first 8 letters and the 10th and 11th letter. E.g. For a VIN - 1FTFW1EF3EKE57182 the taxonomy vin would be - 1FTFW1EFEK  A taxonomy VIN identified a build of a car and could be used to filter our cars of a particular build. This is an alternative to the vin or ymmt parameters to the search API. (optional)
    mm = 'mm_example' # str | Make-Model concatenated string. To help passing the results of auto-complete API on mm field, use this parameter and pass in the selected value as is (optional)
    ymm = 'ymm_example' # str | Year-Make-Model concatenated string. To help passing the results of auto-complete API on ymm field, use this parameter and pass in the selected value as is (optional)
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
    miles_range = 'miles_range_example' # str | Miles range to filter listings with miles in the given range. Range to be given in the format - min-max e.g. 1000-5000 (optional)
    price_range = 'price_range_example' # str | Price range to filter listings with the price in the range given. Range to be given in the format - min-max e.g. 1000-5000 (optional)
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
    dealer_name = 'dealer_name_example' # str | Filter listings on dealer_name (optional)
    dealership_group_name = 'dealership_group_name_example' # str | Name of the dealership group to search for (optional)
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
    include_relevant_links = False # bool | To include_relevant_links. Default is true (optional) (default to False)
    inventory_count_range = 'inventory_count_range_example' # str | Inventory count range to filter listings with count of total listings in dealers inventory. Range to be given in the format - min-max e.g. 10-50 (optional)
    in_transit = 'in_transit_example' # str | A boolean to filter in transit vehicles (optional)
    seating_capacity = 'seating_capacity_example' # str | To filter on vehicle seating capacity (optional)
    engine_size_range = 'engine_size_range_example' # str | Engine size range to filter listings with engine size in the given range. Range to be given in the format - min-max e.g. 1.0-2 (optional)
    powertrain_type = 'powertrain_type_example' # str | To filter on powertrain_type (optional)
    min_photo_links = 'min_photo_links_example' # str | Filter listings based by number of photo links within given range (optional)
    min_photo_links_cached = 'min_photo_links_cached_example' # str | Filter listings based by number of cached photo links within given range (optional)

    try:
        # Get dealers active inventory
        api_response = api_instance.car_dealer_inventory_active_get(api_key=api_key, append_api_key=append_api_key, latitude=latitude, longitude=longitude, radius=radius, zip=zip, include_lease=include_lease, include_finance=include_finance, lease_term=lease_term, lease_down_payment=lease_down_payment, lease_emp=lease_emp, finance_loan_term=finance_loan_term, finance_loan_apr=finance_loan_apr, finance_emp=finance_emp, finance_down_payment=finance_down_payment, finance_down_payment_per=finance_down_payment_per, car_type=car_type, carfax_1_owner=carfax_1_owner, carfax_clean_title=carfax_clean_title, year_range=year_range, year=year, make=make, model=model, trim=trim, dealer_id=dealer_id, vin=vin, source=source, body_type=body_type, body_subtype=body_subtype, vehicle_type=vehicle_type, vins=vins, taxonomy_vins=taxonomy_vins, mm=mm, ymm=ymm, ymmt=ymmt, match=match, cylinders=cylinders, transmission=transmission, doors=doors, drivetrain=drivetrain, exterior_color=exterior_color, interior_color=interior_color, base_exterior_color=base_exterior_color, base_interior_color=base_interior_color, engine=engine, engine_size=engine_size, engine_aspiration=engine_aspiration, engine_block=engine_block, highway_mpg_range=highway_mpg_range, city_mpg_range=city_mpg_range, miles_range=miles_range, price_range=price_range, msrp_range=msrp_range, dom_range=dom_range, sort_by=sort_by, sort_order=sort_order, rows=rows, start=start, include_non_vin_listings=include_non_vin_listings, msa_code=msa_code, facets=facets, range_facets=range_facets, facet_sort=facet_sort, stats=stats, country=country, plot=plot, nodedup=nodedup, dedup=dedup, owned=owned, state=state, city=city, dealer_name=dealer_name, dealership_group_name=dealership_group_name, trim_o=trim_o, trim_r=trim_r, dom_active_range=dom_active_range, dom_180_range=dom_180_range, exclude_certified=exclude_certified, fuel_type=fuel_type, dealer_type=dealer_type, photo_links=photo_links, photo_links_cached=photo_links_cached, stock_no=stock_no, last_seen_range=last_seen_range, first_seen_range=first_seen_range, first_seen_at_source_range=first_seen_at_source_range, first_seen_at_mc_range=first_seen_at_mc_range, last_seen_days=last_seen_days, first_seen_days=first_seen_days, first_seen_at_source_days=first_seen_at_source_days, first_seen_at_mc_days=first_seen_at_mc_days, include_relevant_links=include_relevant_links, inventory_count_range=inventory_count_range, in_transit=in_transit, seating_capacity=seating_capacity, engine_size_range=engine_size_range, powertrain_type=powertrain_type, min_photo_links=min_photo_links, min_photo_links_cached=min_photo_links_cached)
        print("The response of CarSearchApi->car_dealer_inventory_active_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling CarSearchApi->car_dealer_inventory_active_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
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
 **year_range** | **str**| Year range to filter listings with the year in the range given. Range to be given in the format - min-max e.g. 2019-2021 | [optional] 
 **year** | **str**| To filter listing on their year | [optional] 
 **make** | **str**| To filter listings on their make | [optional] 
 **model** | **str**| To filter listings on their model | [optional] 
 **trim** | **str**| To filter listing on their trim | [optional] 
 **dealer_id** | **str**| Dealer id to filter the listings. | [optional] 
 **vin** | **str**| To filter listing on their VIN | [optional] 
 **source** | **str**| To filter listing on their source | [optional] 
 **body_type** | **str**| To filter listing on their body type | [optional] 
 **body_subtype** | **str**| Body subtype to filter the listings on. Valid filter values are those that our Search facets API returns for unique body subtypes. You can pass in multiple body subtype values comma separated | [optional] 
 **vehicle_type** | **str**| To filter listing on their vehicle type | [optional] 
 **vins** | **str**| Comma separated list of 17 digit vins to search the matching cars for. Only 10 VINs allowed per request. If the request contains more than 10 VINs the first 10 VINs will be considered. Could be used as a More Like This or Similar Vehicles search for the given VINs. Ths vins parameter is an alternative to taxonomy_vins or ymmt parameters available with the search API. vins and taxonomy_vins parameters could be used to filter our cars with the exact build represented by the vins or taxonomy_vins whereas ymmt is a top level filter that does not filter cars by the build attributes like doors, drivetrain, cylinders, body type, body subtype, vehicle type etc | [optional] 
 **taxonomy_vins** | **str**| Comma separated list of 10 letters excert from the 17 letter VIN. The 10 letters to be picked up from the 17 letter VIN are - first 8 letters and the 10th and 11th letter. E.g. For a VIN - 1FTFW1EF3EKE57182 the taxonomy vin would be - 1FTFW1EFEK  A taxonomy VIN identified a build of a car and could be used to filter our cars of a particular build. This is an alternative to the vin or ymmt parameters to the search API. | [optional] 
 **mm** | **str**| Make-Model concatenated string. To help passing the results of auto-complete API on mm field, use this parameter and pass in the selected value as is | [optional] 
 **ymm** | **str**| Year-Make-Model concatenated string. To help passing the results of auto-complete API on ymm field, use this parameter and pass in the selected value as is | [optional] 
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
 **miles_range** | **str**| Miles range to filter listings with miles in the given range. Range to be given in the format - min-max e.g. 1000-5000 | [optional] 
 **price_range** | **str**| Price range to filter listings with the price in the range given. Range to be given in the format - min-max e.g. 1000-5000 | [optional] 
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
 **dealer_name** | **str**| Filter listings on dealer_name | [optional] 
 **dealership_group_name** | **str**| Name of the dealership group to search for | [optional] 
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
 **include_relevant_links** | **bool**| To include_relevant_links. Default is true | [optional] [default to False]
 **inventory_count_range** | **str**| Inventory count range to filter listings with count of total listings in dealers inventory. Range to be given in the format - min-max e.g. 10-50 | [optional] 
 **in_transit** | **str**| A boolean to filter in transit vehicles | [optional] 
 **seating_capacity** | **str**| To filter on vehicle seating capacity | [optional] 
 **engine_size_range** | **str**| Engine size range to filter listings with engine size in the given range. Range to be given in the format - min-max e.g. 1.0-2 | [optional] 
 **powertrain_type** | **str**| To filter on powertrain_type | [optional] 
 **min_photo_links** | **str**| Filter listings based by number of photo links within given range | [optional] 
 **min_photo_links_cached** | **str**| Filter listings based by number of cached photo links within given range | [optional] 

### Return type

[**SearchResponse**](SearchResponse.md)

### Authorization

[authorizeEndpoint](../README.md#authorizeEndpoint)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | List of all cars listings matching the search &amp; filter criteria |  -  |
**0** | Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_listing**
> Listing get_listing(id, api_key=api_key, append_api_key=append_api_key, include_relevant_links=include_relevant_links)

Listing by id

Get a particular dealer listing by its id

### Example

* Basic Authentication (authorizeEndpoint):

```python
import openapi_client
from openapi_client.models.listing import Listing
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
    api_instance = openapi_client.CarSearchApi(api_client)
    id = 'id_example' # str | Listing id to get all the listing attributes
    api_key = 'api_key_example' # str | The API Authentication Key. Mandatory with all API calls. (optional)
    append_api_key = True # bool | Flag on whether to include api_key in response API urls (if any) (optional) (default to True)
    include_relevant_links = False # bool | To include_relevant_links. Default is true (optional) (default to False)

    try:
        # Listing by id
        api_response = api_instance.get_listing(id, api_key=api_key, append_api_key=append_api_key, include_relevant_links=include_relevant_links)
        print("The response of CarSearchApi->get_listing:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling CarSearchApi->get_listing: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| Listing id to get all the listing attributes | 
 **api_key** | **str**| The API Authentication Key. Mandatory with all API calls. | [optional] 
 **append_api_key** | **bool**| Flag on whether to include api_key in response API urls (if any) | [optional] [default to True]
 **include_relevant_links** | **bool**| To include_relevant_links. Default is true | [optional] [default to False]

### Return type

[**Listing**](Listing.md)

### Authorization

[authorizeEndpoint](../README.md#authorizeEndpoint)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Listing for the given id |  -  |
**0** | Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **listing_car_auction_id_extra_get**
> ListingExtraAttributes listing_car_auction_id_extra_get(id, api_key=api_key)

Long text Listings attributes for Listing with the given id

Get listing options, features, seller comments

### Example

* Basic Authentication (authorizeEndpoint):

```python
import openapi_client
from openapi_client.models.listing_extra_attributes import ListingExtraAttributes
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
    api_instance = openapi_client.CarSearchApi(api_client)
    id = 'id_example' # str | Listing id to get all the listing attributes
    api_key = 'api_key_example' # str | The API Authentication Key. Mandatory with all API calls. (optional)

    try:
        # Long text Listings attributes for Listing with the given id
        api_response = api_instance.listing_car_auction_id_extra_get(id, api_key=api_key)
        print("The response of CarSearchApi->listing_car_auction_id_extra_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling CarSearchApi->listing_car_auction_id_extra_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| Listing id to get all the listing attributes | 
 **api_key** | **str**| The API Authentication Key. Mandatory with all API calls. | [optional] 

### Return type

[**ListingExtraAttributes**](ListingExtraAttributes.md)

### Authorization

[authorizeEndpoint](../README.md#authorizeEndpoint)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | ListingAttributes for the given listing id |  -  |
**0** | Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **listing_car_auction_id_get**
> Listing listing_car_auction_id_get(id, api_key=api_key, append_api_key=append_api_key, include_relevant_links=include_relevant_links)

Listing by id

Get a particular auction listing by its id

### Example

* Basic Authentication (authorizeEndpoint):

```python
import openapi_client
from openapi_client.models.listing import Listing
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
    api_instance = openapi_client.CarSearchApi(api_client)
    id = 'id_example' # str | Listing id to get all the listing attributes
    api_key = 'api_key_example' # str | The API Authentication Key. Mandatory with all API calls. (optional)
    append_api_key = True # bool | Flag on whether to include api_key in response API urls (if any) (optional) (default to True)
    include_relevant_links = False # bool | To include_relevant_links. Default is true (optional) (default to False)

    try:
        # Listing by id
        api_response = api_instance.listing_car_auction_id_get(id, api_key=api_key, append_api_key=append_api_key, include_relevant_links=include_relevant_links)
        print("The response of CarSearchApi->listing_car_auction_id_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling CarSearchApi->listing_car_auction_id_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| Listing id to get all the listing attributes | 
 **api_key** | **str**| The API Authentication Key. Mandatory with all API calls. | [optional] 
 **append_api_key** | **bool**| Flag on whether to include api_key in response API urls (if any) | [optional] [default to True]
 **include_relevant_links** | **bool**| To include_relevant_links. Default is true | [optional] [default to False]

### Return type

[**Listing**](Listing.md)

### Authorization

[authorizeEndpoint](../README.md#authorizeEndpoint)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Listing for the given id |  -  |
**0** | Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **listing_car_auction_id_media_get**
> ListingMedia listing_car_auction_id_media_get(id, api_key=api_key, append_api_key=append_api_key)

Listing media by id

Get listing media (photo, photos) by id

### Example

* Basic Authentication (authorizeEndpoint):

```python
import openapi_client
from openapi_client.models.listing_media import ListingMedia
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
    api_instance = openapi_client.CarSearchApi(api_client)
    id = 'id_example' # str | Listing id to get all the listing attributes
    api_key = 'api_key_example' # str | The API Authentication Key. Mandatory with all API calls. (optional)
    append_api_key = True # bool | Flag on whether to include api_key in response API urls (if any) (optional) (default to True)

    try:
        # Listing media by id
        api_response = api_instance.listing_car_auction_id_media_get(id, api_key=api_key, append_api_key=append_api_key)
        print("The response of CarSearchApi->listing_car_auction_id_media_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling CarSearchApi->listing_car_auction_id_media_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| Listing id to get all the listing attributes | 
 **api_key** | **str**| The API Authentication Key. Mandatory with all API calls. | [optional] 
 **append_api_key** | **bool**| Flag on whether to include api_key in response API urls (if any) | [optional] [default to True]

### Return type

[**ListingMedia**](ListingMedia.md)

### Authorization

[authorizeEndpoint](../README.md#authorizeEndpoint)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | ListingMedia for the given listing id |  -  |
**0** | Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **listing_car_fsbo_id_extra_get**
> ListingExtraAttributes listing_car_fsbo_id_extra_get(id, api_key=api_key)

Long text Listings attributes for Listing with the given id

Get listing options, features, seller comments

### Example

* Basic Authentication (authorizeEndpoint):

```python
import openapi_client
from openapi_client.models.listing_extra_attributes import ListingExtraAttributes
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
    api_instance = openapi_client.CarSearchApi(api_client)
    id = 'id_example' # str | Listing id to get all the listing attributes
    api_key = 'api_key_example' # str | The API Authentication Key. Mandatory with all API calls. (optional)

    try:
        # Long text Listings attributes for Listing with the given id
        api_response = api_instance.listing_car_fsbo_id_extra_get(id, api_key=api_key)
        print("The response of CarSearchApi->listing_car_fsbo_id_extra_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling CarSearchApi->listing_car_fsbo_id_extra_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| Listing id to get all the listing attributes | 
 **api_key** | **str**| The API Authentication Key. Mandatory with all API calls. | [optional] 

### Return type

[**ListingExtraAttributes**](ListingExtraAttributes.md)

### Authorization

[authorizeEndpoint](../README.md#authorizeEndpoint)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | ListingAttributes for the given listing id |  -  |
**0** | Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **listing_car_fsbo_id_get**
> Listing listing_car_fsbo_id_get(id, api_key=api_key, append_api_key=append_api_key, include_relevant_links=include_relevant_links)

Listing by id

Get a particular private party listing by its id

### Example

* Basic Authentication (authorizeEndpoint):

```python
import openapi_client
from openapi_client.models.listing import Listing
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
    api_instance = openapi_client.CarSearchApi(api_client)
    id = 'id_example' # str | Listing id to get all the listing attributes
    api_key = 'api_key_example' # str | The API Authentication Key. Mandatory with all API calls. (optional)
    append_api_key = True # bool | Flag on whether to include api_key in response API urls (if any) (optional) (default to True)
    include_relevant_links = False # bool | To include_relevant_links. Default is true (optional) (default to False)

    try:
        # Listing by id
        api_response = api_instance.listing_car_fsbo_id_get(id, api_key=api_key, append_api_key=append_api_key, include_relevant_links=include_relevant_links)
        print("The response of CarSearchApi->listing_car_fsbo_id_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling CarSearchApi->listing_car_fsbo_id_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| Listing id to get all the listing attributes | 
 **api_key** | **str**| The API Authentication Key. Mandatory with all API calls. | [optional] 
 **append_api_key** | **bool**| Flag on whether to include api_key in response API urls (if any) | [optional] [default to True]
 **include_relevant_links** | **bool**| To include_relevant_links. Default is true | [optional] [default to False]

### Return type

[**Listing**](Listing.md)

### Authorization

[authorizeEndpoint](../README.md#authorizeEndpoint)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Listing for the given id |  -  |
**0** | Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **listing_car_fsbo_id_media_get**
> ListingMedia listing_car_fsbo_id_media_get(id, api_key=api_key, append_api_key=append_api_key)

Listing media by id

Get listing media (photo, photos) by id

### Example

* Basic Authentication (authorizeEndpoint):

```python
import openapi_client
from openapi_client.models.listing_media import ListingMedia
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
    api_instance = openapi_client.CarSearchApi(api_client)
    id = 'id_example' # str | Listing id to get all the listing attributes
    api_key = 'api_key_example' # str | The API Authentication Key. Mandatory with all API calls. (optional)
    append_api_key = True # bool | Flag on whether to include api_key in response API urls (if any) (optional) (default to True)

    try:
        # Listing media by id
        api_response = api_instance.listing_car_fsbo_id_media_get(id, api_key=api_key, append_api_key=append_api_key)
        print("The response of CarSearchApi->listing_car_fsbo_id_media_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling CarSearchApi->listing_car_fsbo_id_media_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| Listing id to get all the listing attributes | 
 **api_key** | **str**| The API Authentication Key. Mandatory with all API calls. | [optional] 
 **append_api_key** | **bool**| Flag on whether to include api_key in response API urls (if any) | [optional] [default to True]

### Return type

[**ListingMedia**](ListingMedia.md)

### Authorization

[authorizeEndpoint](../README.md#authorizeEndpoint)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | ListingMedia for the given listing id |  -  |
**0** | Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **listing_car_id_extra_get**
> ListingExtraAttributes listing_car_id_extra_get(id, api_key=api_key)

Long text Listings attributes for Listing with the given id

Get listing options, features, seller comments

### Example

* Basic Authentication (authorizeEndpoint):

```python
import openapi_client
from openapi_client.models.listing_extra_attributes import ListingExtraAttributes
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
    api_instance = openapi_client.CarSearchApi(api_client)
    id = 'id_example' # str | Listing id to get all the listing attributes
    api_key = 'api_key_example' # str | The API Authentication Key. Mandatory with all API calls. (optional)

    try:
        # Long text Listings attributes for Listing with the given id
        api_response = api_instance.listing_car_id_extra_get(id, api_key=api_key)
        print("The response of CarSearchApi->listing_car_id_extra_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling CarSearchApi->listing_car_id_extra_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| Listing id to get all the listing attributes | 
 **api_key** | **str**| The API Authentication Key. Mandatory with all API calls. | [optional] 

### Return type

[**ListingExtraAttributes**](ListingExtraAttributes.md)

### Authorization

[authorizeEndpoint](../README.md#authorizeEndpoint)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | ListingAttributes for the given listing id |  -  |
**0** | Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **listing_car_id_media_get**
> ListingMedia listing_car_id_media_get(id, api_key=api_key, append_api_key=append_api_key)

Listing media by id

Get listing media (photo, photos) by id

### Example

* Basic Authentication (authorizeEndpoint):

```python
import openapi_client
from openapi_client.models.listing_media import ListingMedia
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
    api_instance = openapi_client.CarSearchApi(api_client)
    id = 'id_example' # str | Listing id to get all the listing attributes
    api_key = 'api_key_example' # str | The API Authentication Key. Mandatory with all API calls. (optional)
    append_api_key = True # bool | Flag on whether to include api_key in response API urls (if any) (optional) (default to True)

    try:
        # Listing media by id
        api_response = api_instance.listing_car_id_media_get(id, api_key=api_key, append_api_key=append_api_key)
        print("The response of CarSearchApi->listing_car_id_media_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling CarSearchApi->listing_car_id_media_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| Listing id to get all the listing attributes | 
 **api_key** | **str**| The API Authentication Key. Mandatory with all API calls. | [optional] 
 **append_api_key** | **bool**| Flag on whether to include api_key in response API urls (if any) | [optional] [default to True]

### Return type

[**ListingMedia**](ListingMedia.md)

### Authorization

[authorizeEndpoint](../README.md#authorizeEndpoint)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | ListingMedia for the given listing id |  -  |
**0** | Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **listing_car_uk_id_extra_get**
> ListingExtraAttributes listing_car_uk_id_extra_get(id, api_key=api_key)

Long text Listings attributes for Listing with the given id

Get listing options, features, seller comments

### Example

* Basic Authentication (authorizeEndpoint):

```python
import openapi_client
from openapi_client.models.listing_extra_attributes import ListingExtraAttributes
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
    api_instance = openapi_client.CarSearchApi(api_client)
    id = 'id_example' # str | Listing id to get all the listing attributes
    api_key = 'api_key_example' # str | The API Authentication Key. Mandatory with all API calls. (optional)

    try:
        # Long text Listings attributes for Listing with the given id
        api_response = api_instance.listing_car_uk_id_extra_get(id, api_key=api_key)
        print("The response of CarSearchApi->listing_car_uk_id_extra_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling CarSearchApi->listing_car_uk_id_extra_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| Listing id to get all the listing attributes | 
 **api_key** | **str**| The API Authentication Key. Mandatory with all API calls. | [optional] 

### Return type

[**ListingExtraAttributes**](ListingExtraAttributes.md)

### Authorization

[authorizeEndpoint](../README.md#authorizeEndpoint)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | ListingAttributes for the given listing id |  -  |
**0** | Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **listing_car_uk_id_get**
> Listing listing_car_uk_id_get(id, api_key=api_key, append_api_key=append_api_key)

Listing by id

Get a particular dealer listing by its id

### Example

* Basic Authentication (authorizeEndpoint):

```python
import openapi_client
from openapi_client.models.listing import Listing
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
    api_instance = openapi_client.CarSearchApi(api_client)
    id = 'id_example' # str | Listing id to get all the listing attributes
    api_key = 'api_key_example' # str | The API Authentication Key. Mandatory with all API calls. (optional)
    append_api_key = True # bool | Flag on whether to include api_key in response API urls (if any) (optional) (default to True)

    try:
        # Listing by id
        api_response = api_instance.listing_car_uk_id_get(id, api_key=api_key, append_api_key=append_api_key)
        print("The response of CarSearchApi->listing_car_uk_id_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling CarSearchApi->listing_car_uk_id_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| Listing id to get all the listing attributes | 
 **api_key** | **str**| The API Authentication Key. Mandatory with all API calls. | [optional] 
 **append_api_key** | **bool**| Flag on whether to include api_key in response API urls (if any) | [optional] [default to True]

### Return type

[**Listing**](Listing.md)

### Authorization

[authorizeEndpoint](../README.md#authorizeEndpoint)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Listing for the given id |  -  |
**0** | Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **listing_car_uk_id_media_get**
> ListingMedia listing_car_uk_id_media_get(id, api_key=api_key, append_api_key=append_api_key)

Listing media by id

Get listing media (photo, photos) by id

### Example

* Basic Authentication (authorizeEndpoint):

```python
import openapi_client
from openapi_client.models.listing_media import ListingMedia
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
    api_instance = openapi_client.CarSearchApi(api_client)
    id = 'id_example' # str | Listing id to get all the listing attributes
    api_key = 'api_key_example' # str | The API Authentication Key. Mandatory with all API calls. (optional)
    append_api_key = True # bool | Flag on whether to include api_key in response API urls (if any) (optional) (default to True)

    try:
        # Listing media by id
        api_response = api_instance.listing_car_uk_id_media_get(id, api_key=api_key, append_api_key=append_api_key)
        print("The response of CarSearchApi->listing_car_uk_id_media_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling CarSearchApi->listing_car_uk_id_media_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| Listing id to get all the listing attributes | 
 **api_key** | **str**| The API Authentication Key. Mandatory with all API calls. | [optional] 
 **append_api_key** | **bool**| Flag on whether to include api_key in response API urls (if any) | [optional] [default to True]

### Return type

[**ListingMedia**](ListingMedia.md)

### Authorization

[authorizeEndpoint](../README.md#authorizeEndpoint)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | ListingMedia for the given listing id |  -  |
**0** | Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **search**
> UKSearchResponse search(api_key=api_key, append_api_key=append_api_key, latitude=latitude, longitude=longitude, radius=radius, postal_code=postal_code, zip=zip, car_type=car_type, year=year, year_range=year_range, make=make, model=model, variant=variant, trim=trim, body_type=body_type, ymmt=ymmt, transmission=transmission, doors=doors, drivetrain=drivetrain, exterior_color=exterior_color, interior_color=interior_color, engine=engine, miles_range=miles_range, price_range=price_range, msrp_range=msrp_range, sort_by=sort_by, sort_order=sort_order, rows=rows, start=start, msa_code=msa_code, facets=facets, range_facets=range_facets, facet_sort=facet_sort, stats=stats, country=country, plot=plot, nodedup=nodedup, dedup=dedup, county=county, state=state, city=city, fuel_type=fuel_type, stock_no=stock_no, dom_range=dom_range, dom_active_range=dom_active_range, dom_180_range=dom_180_range, last_seen_range=last_seen_range, first_seen_range=first_seen_range, first_seen_at_source_range=first_seen_at_source_range, first_seen_at_mc_range=first_seen_at_mc_range, last_seen_days=last_seen_days, first_seen_days=first_seen_days, first_seen_at_source_days=first_seen_at_source_days, first_seen_at_mc_days=first_seen_at_mc_days, co2_emissions=co2_emissions, insurance_group=insurance_group, vehicle_registration_mark=vehicle_registration_mark, vehicle_registration_date_range=vehicle_registration_date_range, num_owners=num_owners, inventory_count_range=inventory_count_range, source=source, dealer_id=dealer_id, exclude_sources=exclude_sources, exclude_dealer_ids=exclude_dealer_ids, in_transit=in_transit, include_non_vin_listings=include_non_vin_listings, cylinders=cylinders, photo_links=photo_links, photo_links_cached=photo_links_cached, base_exterior_color=base_exterior_color, base_interior_color=base_interior_color, write_off_category=write_off_category, exclude_write_off_category=exclude_write_off_category, fca_status=fca_status, seating_capacity=seating_capacity, vrm=vrm, powertrain_type=powertrain_type, client_filters=client_filters, boost=boost, car_location_seller_name=car_location_seller_name, car_location_street=car_location_street, car_location_city=car_location_city, car_location_county=car_location_county, car_location_zip=car_location_zip, car_location_latitude=car_location_latitude, car_location_longitude=car_location_longitude, price_change=price_change, price_change_range=price_change_range, active_inventory_date_range=active_inventory_date_range, engine_size=engine_size, engine_size_range=engine_size_range, uvc_id=uvc_id, highway_mpg_range=highway_mpg_range, city_mpg_range=city_mpg_range, combined_mpg_range=combined_mpg_range, owned=owned, min_photo_links=min_photo_links, min_photo_links_cached=min_photo_links_cached, match=match, ulez_compliant=ulez_compliant)

Gets active car listings in UK for the given search criteria

Search cars for sale in UK

### Example

* Basic Authentication (authorizeEndpoint):

```python
import openapi_client
from openapi_client.models.uk_search_response import UKSearchResponse
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
    api_instance = openapi_client.CarSearchApi(api_client)
    api_key = 'api_key_example' # str | The API Authentication Key. Mandatory with all API calls. (optional)
    append_api_key = False # bool | Flag on whether to include api_key in response API urls (if any) (optional) (default to False)
    latitude = 3.4 # float | Latitude component of location (optional)
    longitude = 3.4 # float | Longitude component of location (optional)
    radius = 56 # int | Radius around the search location (Unit - Miles) (optional)
    postal_code = 'postal_code_example' # str | To filter listing on postal code around which they are listed (optional)
    zip = 'zip_example' # str | To filter listing on ZIP around which they are listed (optional)
    car_type = 'car_type_example' # str | Car type. Allowed values are - new / used (optional)
    year = 'year_example' # str | To filter listing on their year (optional)
    year_range = 'year_range_example' # str | Year range to filter listings with the year in the range given. Range to be given in the format - min-max e.g. 2019-2021 (optional)
    make = 'make_example' # str | To filter listings on their make (optional)
    model = 'model_example' # str | To filter listings on their model (optional)
    variant = 'variant_example' # str | To filter listing on their variant (optional)
    trim = 'trim_example' # str | To filter listing on their trim (optional)
    body_type = 'body_type_example' # str | To filter listing on their body type (optional)
    ymmt = 'ymmt_example' # str | Comma separated list of Year, Make, Model, Trim combinations. Each combination needs to have the year,make,model, trim values separated by a pipe '|' character in the form year|make|model|trim. e.g. 2010|Audi|A5,2014|Nissan|Sentra|S 6MT,|Honda|City|   You could just provide strings of the form - 'year|make||' or 'year|make|model' or '|make|model|' combinations. Individual year / make / model filters provied with the API calls will take precedence over the Year, Make, Model, Trim combinations. The Make, Model, Trim values must be valid values as per the Marketcheck Vin Decoder. If you are using a separate vin decoder then look at using the 'vins' or 'taxonomy_vins' parameter to the search api instead the year|make|model|trim combinations. (optional)
    transmission = 'transmission_example' # str | To filter listing on their transmission (optional)
    doors = 'doors_example' # str | Doors to filter the cars on. Valid filter values are those that our Search facets API returns for unique doors. You can pass in multiple doors values comma separated (optional)
    drivetrain = 'drivetrain_example' # str | To filter listing on their drivetrain (optional)
    exterior_color = 'exterior_color_example' # str | Exterior color to match. Valid filter values are those that our Search facets API returns for unique exterior colors. You can pass in multiple exterior color values comma separated (optional)
    interior_color = 'interior_color_example' # str | Interior color to match. Valid filter values are those that our Search facets API returns for unique interior colors. You can pass in multiple interior color values comma separated (optional)
    engine = 'engine_example' # str | To filter listing on their engine (optional)
    miles_range = 'miles_range_example' # str | Miles range to filter listings with miles in the given range. Range to be given in the format - min-max e.g. 1000-5000 (optional)
    price_range = 'price_range_example' # str | Price range to filter listings with the price in the range given. Range to be given in the format - min-max e.g. 1000-5000 (optional)
    msrp_range = 'msrp_range_example' # str | MSRP range to filter listings with the msrp in the range given. Range to be given in the format - min-max e.g. 1000-5000 (optional)
    sort_by = 'sort_by_example' # str | Sort by field. Default sort field is distance from the given point (optional)
    sort_order = 'sort_order_example' # str | Sort order - asc or desc. Default sort order is asc (optional)
    rows = 10 # int | Number of results to return. Default is 10. Max is 50 (optional) (default to 10)
    start = 0 # int | Page number to fetch the results for the given criteria. Default is 0. Pagination is allowed only till first 10000 results for the search and sort criteria. The page value can be only between 1 to 10000/rows (optional) (default to 0)
    msa_code = 'msa_code_example' # str | To filter listing on msa code in which they are listed (optional)
    facets = 'facets_example' # str | The comma separated list of fields for which facets are requested. Facets could be requested in addition to the listings for the search. Please note - The API calls with lots of facet fields may take longer to respond. (optional)
    range_facets = 'range_facets_example' # str | The comma separated list of numeric fields for which range facets are requested. Range facets could be requested in addition to the listings for the search. Please note - The API calls with lots of range facet fields may take longer to respond. (optional)
    facet_sort = count # str | Control sort order of facets with this parameter with default sort being on count, Other available sort is alphabetical sort, which can be obtained by using index as value for this param (optional) (default to count)
    stats = 'stats_example' # str | The list of fields for which stats need to be generated based on the matching listings for the search criteria. The stats consists of mean, max, average and count of listings based on which the stats are calculated for the field. Stats could be requested in addition to the listings for the search. Please note - The API calls with the stats fields may take longer to respond. (optional)
    country = uk # str | To filter listing on Country in which they are listed (optional) (default to uk)
    plot = True # bool | If plot has value true results in around 25k coordinates with limited fields to plot respective graph (optional)
    nodedup = True # bool | If nodedup is set to true then API will give results without is_searchable i.e multiple listings for single vin (optional)
    dedup = True # bool | If dedup is set to true then will give results with is_searchable irrespecive of dealer_id or source (optional)
    county = 'county_example' # str | To filter listing on county in which they are listed (optional)
    state = 'state_example' # str | To filter listing on State in which they are listed (optional)
    city = 'city_example' # str | To filter listing on City in which they are listed (optional)
    fuel_type = 'fuel_type_example' # str | To filter listing on their fuel type (optional)
    stock_no = 'stock_no_example' # str | To filter listing on their stock number on lot (optional)
    dom_range = 'dom_range_example' # str | Days on Market range to filter cars with the DOM within the given range. Range to be given in the format - min-max e.g. 10-50 (optional)
    dom_active_range = 'dom_active_range_example' # str | Active Days on Market range to filter cars with the DOM within the given range. Range to be given in the format - min-max e.g. 10-50 (optional)
    dom_180_range = 'dom_180_range_example' # str | Last 180 Days on Market range to filter cars with the DOM within the given range. Range to be given in the format - min-max e.g. 10-50 (optional)
    last_seen_range = 'last_seen_range_example' # str | Last seen date range to filter listings with the last seen in the range given. Range to be given in the format [YYYYMMDD] - min-max e.g. 20190523-20190623 (optional)
    first_seen_range = 'first_seen_range_example' # str | First seen date range to filter listings with the first seen in the range given. Range to be given in the format [YYYYMMDD] - min-max e.g. 20190523-20190623 (optional)
    first_seen_at_source_range = 'first_seen_at_source_range_example' # str | First seen at source date range to filter listings with the first seen at source in the range given. Range to be given in the format [YYYYMMDD] - min-max e.g. 20190523-20190623 (optional)
    first_seen_at_mc_range = 'first_seen_at_mc_range_example' # str | First seen at MC date range to filter listings with the first seen at MC in the range given. Range to be given in the format [YYYYMMDD] - min-max e.g. 20190523-20190623 (optional)
    last_seen_days = 'last_seen_days_example' # str | Last seen days range to filter listings with the last seen in the range given. Range to be given in the format - min-max e.g. 25-12 (optional)
    first_seen_days = 'first_seen_days_example' # str | First seen days range to filter listings with the first seen in the range given. Range to be given in the format - min-max e.g. 25-12 (optional)
    first_seen_at_source_days = 'first_seen_at_source_days_example' # str | First seen at source days range to filter listings with the first seen at source in the range given. Range to be given in the format - min-max e.g. 25-12 (optional)
    first_seen_at_mc_days = 'first_seen_at_mc_days_example' # str | First seen at MC days range to filter listings with the first seen at MC in the range given. Range to be given in the format - min-max e.g. 25-12 (optional)
    co2_emissions = 'co2_emissions_example' # str | CO2 emissions (optional)
    insurance_group = 'insurance_group_example' # str | Insurance Group (optional)
    vehicle_registration_mark = 'vehicle_registration_mark_example' # str | Vehicle Registration Mark (optional)
    vehicle_registration_date_range = 'vehicle_registration_date_range_example' # str | Vehicle registration date range to be given in the format [YYYYMMDD] - min-max e.g. 20190523-20190623 (optional)
    num_owners = 'num_owners_example' # str | Number of owners. Range to be given in the format - min-max e.g. 1000-5000 (optional)
    inventory_count_range = 'inventory_count_range_example' # str | Inventory count range to filter listings with count of total listings in dealers inventory. Range to be given in the format - min-max e.g. 10-50 (optional)
    source = 'source_example' # str | To filter listing on their source only for widget requests (optional)
    dealer_id = 'dealer_id_example' # str | Dealer id to filter the listings. (optional)
    exclude_sources = 'exclude_sources_example' # str | A list of sources to exclude from result (optional)
    exclude_dealer_ids = 'exclude_dealer_ids_example' # str | A list of dealer ids to exclude from result (optional)
    in_transit = 'in_transit_example' # str | A boolean to filter in transit vehicles (optional)
    include_non_vin_listings = False # bool | To include non vin listings. Default is false (optional) (default to False)
    cylinders = 'cylinders_example' # str | To filter listing on their cylinders (optional)
    photo_links = True # bool | A boolean indicating whether to include only those listings that have photo_links in search results, And discard those that don't have them (optional)
    photo_links_cached = True # bool | A boolean indicating whether to include only those listings that have photo_links_cached in search results, And discard those that don't have them (optional)
    base_exterior_color = 'base_exterior_color_example' # str | Base exterior color to match. Valid filter values are those that our Search facets API returns for unique base exterior colors. You can pass in multiple base interior color values comma separated (optional)
    base_interior_color = 'base_interior_color_example' # str | Base interior color to match. Valid filter values are those that our Search facets API returns for unique base interior colors. You can pass in multiple base interior color values comma separated (optional)
    write_off_category = 'write_off_category_example' # str | write off category (optional)
    exclude_write_off_category = 'exclude_write_off_category_example' # str | To exclude write off category (optional)
    fca_status = 'fca_status_example' # str | To filter on fca status (optional)
    seating_capacity = 'seating_capacity_example' # str | To filter on vehicle seating capacity (optional)
    vrm = 'vrm_example' # str | To filter on vrm (optional)
    powertrain_type = 'powertrain_type_example' # str | To filter on powertrain_type (optional)
    client_filters = True # bool | Flag to add explicit filters set on client level in solr (optional) (default to True)
    boost = True # bool | Flag to sort listings based on client filter score in solr (optional) (default to True)
    car_location_seller_name = 'car_location_seller_name_example' # str | Filter cars on seller name (optional)
    car_location_street = 'car_location_street_example' # str | Filter cars on street name (optional)
    car_location_city = 'car_location_city_example' # str | Filter cars on city (optional)
    car_location_county = 'car_location_county_example' # str | Filter cars on county (optional)
    car_location_zip = 'car_location_zip_example' # str | To filter listing on car ZIP around which they are listed (optional)
    car_location_latitude = 3.4 # float | Latitude component of car location (optional)
    car_location_longitude = 3.4 # float | Longitude component of car location (optional)
    price_change = 'price_change_example' # str | Query to filter listings based on their positive and negative price change (optional)
    price_change_range = 'price_change_range_example' # str | Price change range to filter listings with price change within given price_change_range. Range to be given in the format - min-max e.g. 10-500 (optional)
    active_inventory_date_range = 'active_inventory_date_range_example' # str | date range to filter listings that were active within given date range. Range to be given in the format [YYYYMMDD] - min-max e.g. 20190523-20190623 (optional)
    engine_size = 'engine_size_example' # str | Engine Size to match. Valid filter values are those that our Search facets API returns for unique engine size. You can pass in multiple engine size values comma separated (optional)
    engine_size_range = 'engine_size_range_example' # str | Engine size range to filter listings with engine size in the given range. Range to be given in the format - min-max e.g. 1.0-2 (optional)
    uvc_id = 'uvc_id_example' # str | To filter on uvc id (optional)
    highway_mpg_range = 'highway_mpg_range_example' # str | Highway mileage range for UK to filter listings with the mileage in the range given. Range to be given in the format - min-max e.g. 1000-5000 (optional)
    city_mpg_range = 'city_mpg_range_example' # str | City mileage range for UK to filter listings with the mileage in the range given. Range to be given in the format - min-max e.g. 1000-5000 (optional)
    combined_mpg_range = 'combined_mpg_range_example' # str | Combined mileage range for UK to filter listings with the mileage in the range given. Range to be given in the format - min-max e.g. 1000-5000 (optional)
    owned = True # bool | Used in combination with dealer_id or source, when true returns the listings actually owned by dealer himself (optional)
    min_photo_links = 'min_photo_links_example' # str | Filter listings based by number of photo links within given range (optional)
    min_photo_links_cached = 'min_photo_links_cached_example' # str | Filter listings based by number of cached photo links within given range (optional)
    match = 'match_example' # str | Comma separated list of Year, Make, Model, Trim fields. For example - year,make,model,trim fields for which user wants to do an exact match (optional)
    ulez_compliant = True # bool | Filter listings based on drive into ultra low emmition zone (optional)

    try:
        # Gets active car listings in UK for the given search criteria
        api_response = api_instance.search(api_key=api_key, append_api_key=append_api_key, latitude=latitude, longitude=longitude, radius=radius, postal_code=postal_code, zip=zip, car_type=car_type, year=year, year_range=year_range, make=make, model=model, variant=variant, trim=trim, body_type=body_type, ymmt=ymmt, transmission=transmission, doors=doors, drivetrain=drivetrain, exterior_color=exterior_color, interior_color=interior_color, engine=engine, miles_range=miles_range, price_range=price_range, msrp_range=msrp_range, sort_by=sort_by, sort_order=sort_order, rows=rows, start=start, msa_code=msa_code, facets=facets, range_facets=range_facets, facet_sort=facet_sort, stats=stats, country=country, plot=plot, nodedup=nodedup, dedup=dedup, county=county, state=state, city=city, fuel_type=fuel_type, stock_no=stock_no, dom_range=dom_range, dom_active_range=dom_active_range, dom_180_range=dom_180_range, last_seen_range=last_seen_range, first_seen_range=first_seen_range, first_seen_at_source_range=first_seen_at_source_range, first_seen_at_mc_range=first_seen_at_mc_range, last_seen_days=last_seen_days, first_seen_days=first_seen_days, first_seen_at_source_days=first_seen_at_source_days, first_seen_at_mc_days=first_seen_at_mc_days, co2_emissions=co2_emissions, insurance_group=insurance_group, vehicle_registration_mark=vehicle_registration_mark, vehicle_registration_date_range=vehicle_registration_date_range, num_owners=num_owners, inventory_count_range=inventory_count_range, source=source, dealer_id=dealer_id, exclude_sources=exclude_sources, exclude_dealer_ids=exclude_dealer_ids, in_transit=in_transit, include_non_vin_listings=include_non_vin_listings, cylinders=cylinders, photo_links=photo_links, photo_links_cached=photo_links_cached, base_exterior_color=base_exterior_color, base_interior_color=base_interior_color, write_off_category=write_off_category, exclude_write_off_category=exclude_write_off_category, fca_status=fca_status, seating_capacity=seating_capacity, vrm=vrm, powertrain_type=powertrain_type, client_filters=client_filters, boost=boost, car_location_seller_name=car_location_seller_name, car_location_street=car_location_street, car_location_city=car_location_city, car_location_county=car_location_county, car_location_zip=car_location_zip, car_location_latitude=car_location_latitude, car_location_longitude=car_location_longitude, price_change=price_change, price_change_range=price_change_range, active_inventory_date_range=active_inventory_date_range, engine_size=engine_size, engine_size_range=engine_size_range, uvc_id=uvc_id, highway_mpg_range=highway_mpg_range, city_mpg_range=city_mpg_range, combined_mpg_range=combined_mpg_range, owned=owned, min_photo_links=min_photo_links, min_photo_links_cached=min_photo_links_cached, match=match, ulez_compliant=ulez_compliant)
        print("The response of CarSearchApi->search:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling CarSearchApi->search: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_key** | **str**| The API Authentication Key. Mandatory with all API calls. | [optional] 
 **append_api_key** | **bool**| Flag on whether to include api_key in response API urls (if any) | [optional] [default to False]
 **latitude** | **float**| Latitude component of location | [optional] 
 **longitude** | **float**| Longitude component of location | [optional] 
 **radius** | **int**| Radius around the search location (Unit - Miles) | [optional] 
 **postal_code** | **str**| To filter listing on postal code around which they are listed | [optional] 
 **zip** | **str**| To filter listing on ZIP around which they are listed | [optional] 
 **car_type** | **str**| Car type. Allowed values are - new / used | [optional] 
 **year** | **str**| To filter listing on their year | [optional] 
 **year_range** | **str**| Year range to filter listings with the year in the range given. Range to be given in the format - min-max e.g. 2019-2021 | [optional] 
 **make** | **str**| To filter listings on their make | [optional] 
 **model** | **str**| To filter listings on their model | [optional] 
 **variant** | **str**| To filter listing on their variant | [optional] 
 **trim** | **str**| To filter listing on their trim | [optional] 
 **body_type** | **str**| To filter listing on their body type | [optional] 
 **ymmt** | **str**| Comma separated list of Year, Make, Model, Trim combinations. Each combination needs to have the year,make,model, trim values separated by a pipe &#39;|&#39; character in the form year|make|model|trim. e.g. 2010|Audi|A5,2014|Nissan|Sentra|S 6MT,|Honda|City|   You could just provide strings of the form - &#39;year|make||&#39; or &#39;year|make|model&#39; or &#39;|make|model|&#39; combinations. Individual year / make / model filters provied with the API calls will take precedence over the Year, Make, Model, Trim combinations. The Make, Model, Trim values must be valid values as per the Marketcheck Vin Decoder. If you are using a separate vin decoder then look at using the &#39;vins&#39; or &#39;taxonomy_vins&#39; parameter to the search api instead the year|make|model|trim combinations. | [optional] 
 **transmission** | **str**| To filter listing on their transmission | [optional] 
 **doors** | **str**| Doors to filter the cars on. Valid filter values are those that our Search facets API returns for unique doors. You can pass in multiple doors values comma separated | [optional] 
 **drivetrain** | **str**| To filter listing on their drivetrain | [optional] 
 **exterior_color** | **str**| Exterior color to match. Valid filter values are those that our Search facets API returns for unique exterior colors. You can pass in multiple exterior color values comma separated | [optional] 
 **interior_color** | **str**| Interior color to match. Valid filter values are those that our Search facets API returns for unique interior colors. You can pass in multiple interior color values comma separated | [optional] 
 **engine** | **str**| To filter listing on their engine | [optional] 
 **miles_range** | **str**| Miles range to filter listings with miles in the given range. Range to be given in the format - min-max e.g. 1000-5000 | [optional] 
 **price_range** | **str**| Price range to filter listings with the price in the range given. Range to be given in the format - min-max e.g. 1000-5000 | [optional] 
 **msrp_range** | **str**| MSRP range to filter listings with the msrp in the range given. Range to be given in the format - min-max e.g. 1000-5000 | [optional] 
 **sort_by** | **str**| Sort by field. Default sort field is distance from the given point | [optional] 
 **sort_order** | **str**| Sort order - asc or desc. Default sort order is asc | [optional] 
 **rows** | **int**| Number of results to return. Default is 10. Max is 50 | [optional] [default to 10]
 **start** | **int**| Page number to fetch the results for the given criteria. Default is 0. Pagination is allowed only till first 10000 results for the search and sort criteria. The page value can be only between 1 to 10000/rows | [optional] [default to 0]
 **msa_code** | **str**| To filter listing on msa code in which they are listed | [optional] 
 **facets** | **str**| The comma separated list of fields for which facets are requested. Facets could be requested in addition to the listings for the search. Please note - The API calls with lots of facet fields may take longer to respond. | [optional] 
 **range_facets** | **str**| The comma separated list of numeric fields for which range facets are requested. Range facets could be requested in addition to the listings for the search. Please note - The API calls with lots of range facet fields may take longer to respond. | [optional] 
 **facet_sort** | **str**| Control sort order of facets with this parameter with default sort being on count, Other available sort is alphabetical sort, which can be obtained by using index as value for this param | [optional] [default to count]
 **stats** | **str**| The list of fields for which stats need to be generated based on the matching listings for the search criteria. The stats consists of mean, max, average and count of listings based on which the stats are calculated for the field. Stats could be requested in addition to the listings for the search. Please note - The API calls with the stats fields may take longer to respond. | [optional] 
 **country** | **str**| To filter listing on Country in which they are listed | [optional] [default to uk]
 **plot** | **bool**| If plot has value true results in around 25k coordinates with limited fields to plot respective graph | [optional] 
 **nodedup** | **bool**| If nodedup is set to true then API will give results without is_searchable i.e multiple listings for single vin | [optional] 
 **dedup** | **bool**| If dedup is set to true then will give results with is_searchable irrespecive of dealer_id or source | [optional] 
 **county** | **str**| To filter listing on county in which they are listed | [optional] 
 **state** | **str**| To filter listing on State in which they are listed | [optional] 
 **city** | **str**| To filter listing on City in which they are listed | [optional] 
 **fuel_type** | **str**| To filter listing on their fuel type | [optional] 
 **stock_no** | **str**| To filter listing on their stock number on lot | [optional] 
 **dom_range** | **str**| Days on Market range to filter cars with the DOM within the given range. Range to be given in the format - min-max e.g. 10-50 | [optional] 
 **dom_active_range** | **str**| Active Days on Market range to filter cars with the DOM within the given range. Range to be given in the format - min-max e.g. 10-50 | [optional] 
 **dom_180_range** | **str**| Last 180 Days on Market range to filter cars with the DOM within the given range. Range to be given in the format - min-max e.g. 10-50 | [optional] 
 **last_seen_range** | **str**| Last seen date range to filter listings with the last seen in the range given. Range to be given in the format [YYYYMMDD] - min-max e.g. 20190523-20190623 | [optional] 
 **first_seen_range** | **str**| First seen date range to filter listings with the first seen in the range given. Range to be given in the format [YYYYMMDD] - min-max e.g. 20190523-20190623 | [optional] 
 **first_seen_at_source_range** | **str**| First seen at source date range to filter listings with the first seen at source in the range given. Range to be given in the format [YYYYMMDD] - min-max e.g. 20190523-20190623 | [optional] 
 **first_seen_at_mc_range** | **str**| First seen at MC date range to filter listings with the first seen at MC in the range given. Range to be given in the format [YYYYMMDD] - min-max e.g. 20190523-20190623 | [optional] 
 **last_seen_days** | **str**| Last seen days range to filter listings with the last seen in the range given. Range to be given in the format - min-max e.g. 25-12 | [optional] 
 **first_seen_days** | **str**| First seen days range to filter listings with the first seen in the range given. Range to be given in the format - min-max e.g. 25-12 | [optional] 
 **first_seen_at_source_days** | **str**| First seen at source days range to filter listings with the first seen at source in the range given. Range to be given in the format - min-max e.g. 25-12 | [optional] 
 **first_seen_at_mc_days** | **str**| First seen at MC days range to filter listings with the first seen at MC in the range given. Range to be given in the format - min-max e.g. 25-12 | [optional] 
 **co2_emissions** | **str**| CO2 emissions | [optional] 
 **insurance_group** | **str**| Insurance Group | [optional] 
 **vehicle_registration_mark** | **str**| Vehicle Registration Mark | [optional] 
 **vehicle_registration_date_range** | **str**| Vehicle registration date range to be given in the format [YYYYMMDD] - min-max e.g. 20190523-20190623 | [optional] 
 **num_owners** | **str**| Number of owners. Range to be given in the format - min-max e.g. 1000-5000 | [optional] 
 **inventory_count_range** | **str**| Inventory count range to filter listings with count of total listings in dealers inventory. Range to be given in the format - min-max e.g. 10-50 | [optional] 
 **source** | **str**| To filter listing on their source only for widget requests | [optional] 
 **dealer_id** | **str**| Dealer id to filter the listings. | [optional] 
 **exclude_sources** | **str**| A list of sources to exclude from result | [optional] 
 **exclude_dealer_ids** | **str**| A list of dealer ids to exclude from result | [optional] 
 **in_transit** | **str**| A boolean to filter in transit vehicles | [optional] 
 **include_non_vin_listings** | **bool**| To include non vin listings. Default is false | [optional] [default to False]
 **cylinders** | **str**| To filter listing on their cylinders | [optional] 
 **photo_links** | **bool**| A boolean indicating whether to include only those listings that have photo_links in search results, And discard those that don&#39;t have them | [optional] 
 **photo_links_cached** | **bool**| A boolean indicating whether to include only those listings that have photo_links_cached in search results, And discard those that don&#39;t have them | [optional] 
 **base_exterior_color** | **str**| Base exterior color to match. Valid filter values are those that our Search facets API returns for unique base exterior colors. You can pass in multiple base interior color values comma separated | [optional] 
 **base_interior_color** | **str**| Base interior color to match. Valid filter values are those that our Search facets API returns for unique base interior colors. You can pass in multiple base interior color values comma separated | [optional] 
 **write_off_category** | **str**| write off category | [optional] 
 **exclude_write_off_category** | **str**| To exclude write off category | [optional] 
 **fca_status** | **str**| To filter on fca status | [optional] 
 **seating_capacity** | **str**| To filter on vehicle seating capacity | [optional] 
 **vrm** | **str**| To filter on vrm | [optional] 
 **powertrain_type** | **str**| To filter on powertrain_type | [optional] 
 **client_filters** | **bool**| Flag to add explicit filters set on client level in solr | [optional] [default to True]
 **boost** | **bool**| Flag to sort listings based on client filter score in solr | [optional] [default to True]
 **car_location_seller_name** | **str**| Filter cars on seller name | [optional] 
 **car_location_street** | **str**| Filter cars on street name | [optional] 
 **car_location_city** | **str**| Filter cars on city | [optional] 
 **car_location_county** | **str**| Filter cars on county | [optional] 
 **car_location_zip** | **str**| To filter listing on car ZIP around which they are listed | [optional] 
 **car_location_latitude** | **float**| Latitude component of car location | [optional] 
 **car_location_longitude** | **float**| Longitude component of car location | [optional] 
 **price_change** | **str**| Query to filter listings based on their positive and negative price change | [optional] 
 **price_change_range** | **str**| Price change range to filter listings with price change within given price_change_range. Range to be given in the format - min-max e.g. 10-500 | [optional] 
 **active_inventory_date_range** | **str**| date range to filter listings that were active within given date range. Range to be given in the format [YYYYMMDD] - min-max e.g. 20190523-20190623 | [optional] 
 **engine_size** | **str**| Engine Size to match. Valid filter values are those that our Search facets API returns for unique engine size. You can pass in multiple engine size values comma separated | [optional] 
 **engine_size_range** | **str**| Engine size range to filter listings with engine size in the given range. Range to be given in the format - min-max e.g. 1.0-2 | [optional] 
 **uvc_id** | **str**| To filter on uvc id | [optional] 
 **highway_mpg_range** | **str**| Highway mileage range for UK to filter listings with the mileage in the range given. Range to be given in the format - min-max e.g. 1000-5000 | [optional] 
 **city_mpg_range** | **str**| City mileage range for UK to filter listings with the mileage in the range given. Range to be given in the format - min-max e.g. 1000-5000 | [optional] 
 **combined_mpg_range** | **str**| Combined mileage range for UK to filter listings with the mileage in the range given. Range to be given in the format - min-max e.g. 1000-5000 | [optional] 
 **owned** | **bool**| Used in combination with dealer_id or source, when true returns the listings actually owned by dealer himself | [optional] 
 **min_photo_links** | **str**| Filter listings based by number of photo links within given range | [optional] 
 **min_photo_links_cached** | **str**| Filter listings based by number of cached photo links within given range | [optional] 
 **match** | **str**| Comma separated list of Year, Make, Model, Trim fields. For example - year,make,model,trim fields for which user wants to do an exact match | [optional] 
 **ulez_compliant** | **bool**| Filter listings based on drive into ultra low emmition zone | [optional] 

### Return type

[**UKSearchResponse**](UKSearchResponse.md)

### Authorization

[authorizeEndpoint](../README.md#authorizeEndpoint)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | List of all cars listings matching the search &amp; filter criteria |  -  |
**0** | Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **search_car_active_get**
> SearchResponse search_car_active_get(api_key=api_key, append_api_key=append_api_key, latitude=latitude, longitude=longitude, radius=radius, zip=zip, include_lease=include_lease, include_finance=include_finance, lease_term=lease_term, lease_down_payment=lease_down_payment, lease_emp=lease_emp, finance_loan_term=finance_loan_term, finance_loan_apr=finance_loan_apr, finance_emp=finance_emp, finance_down_payment=finance_down_payment, finance_down_payment_per=finance_down_payment_per, car_type=car_type, carfax_1_owner=carfax_1_owner, carfax_clean_title=carfax_clean_title, year_range=year_range, year=year, make=make, model=model, trim=trim, vin=vin, body_type=body_type, body_subtype=body_subtype, vehicle_type=vehicle_type, vins=vins, taxonomy_vins=taxonomy_vins, mm=mm, ymm=ymm, ymmt=ymmt, match=match, cylinders=cylinders, transmission=transmission, doors=doors, drivetrain=drivetrain, exterior_color=exterior_color, interior_color=interior_color, base_exterior_color=base_exterior_color, base_interior_color=base_interior_color, engine=engine, engine_size=engine_size, engine_aspiration=engine_aspiration, engine_block=engine_block, highway_mpg_range=highway_mpg_range, city_mpg_range=city_mpg_range, miles_range=miles_range, price_range=price_range, msrp_range=msrp_range, dom_range=dom_range, sort_by=sort_by, sort_order=sort_order, rows=rows, start=start, include_non_vin_listings=include_non_vin_listings, msa_code=msa_code, facets=facets, range_facets=range_facets, facet_sort=facet_sort, stats=stats, country=country, plot=plot, nodedup=nodedup, dedup=dedup, owned=owned, source=source, state=state, city=city, trim_o=trim_o, trim_r=trim_r, dom_active_range=dom_active_range, dom_180_range=dom_180_range, exclude_certified=exclude_certified, fuel_type=fuel_type, dealer_type=dealer_type, photo_links=photo_links, photo_links_cached=photo_links_cached, stock_no=stock_no, last_seen_range=last_seen_range, first_seen_range=first_seen_range, first_seen_at_source_range=first_seen_at_source_range, first_seen_at_mc_range=first_seen_at_mc_range, last_seen_days=last_seen_days, first_seen_days=first_seen_days, first_seen_at_source_days=first_seen_at_source_days, first_seen_at_mc_days=first_seen_at_mc_days, include_relevant_links=include_relevant_links, inventory_count_range=inventory_count_range, dealer_id=dealer_id, exclude_dealer_ids=exclude_dealer_ids, exclude_sources=exclude_sources, in_transit=in_transit, seating_capacity=seating_capacity, powertrain_type=powertrain_type, price_change=price_change, price_change_range=price_change_range, active_inventory_date_range=active_inventory_date_range, engine_size_range=engine_size_range, high_value_features=high_value_features, min_photo_links=min_photo_links, min_photo_links_cached=min_photo_links_cached, client_filters=client_filters)

Gets active car listings for the given search criteria

This endpoint is the meat of the API and serves many purposes. This API produces a list of currently active cars from the market for the given search criteria. The API results are limited to allow pagination upto 10000 rows.   The search API facilitates the following use cases -  1. Search Cars around a given geo-point within a given radius  2. Search cars for a specific year / make / model or combination of these  3. Search cars matching multiple year, make, model combinatins in the same search request 4. Filter results by most car specification attributes 5. Search for similar cars by VIN or Taxonomy VIN  6. Filter cars within a given price / miles / days on market (dom) range 7. Specify a sort order for the results on price / miles / dom / listed date  8. Search cars for a given City / State combination  9. Get Facets to build the search drill downs  10. Get Market averages for price/miles/dom for your search

### Example

* Basic Authentication (authorizeEndpoint):

```python
import openapi_client
from openapi_client.models.search_response import SearchResponse
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
    api_instance = openapi_client.CarSearchApi(api_client)
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
    year_range = 'year_range_example' # str | Year range to filter listings with the year in the range given. Range to be given in the format - min-max e.g. 2019-2021 (optional)
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
    mm = 'mm_example' # str | Make-Model concatenated string. To help passing the results of auto-complete API on mm field, use this parameter and pass in the selected value as is (optional)
    ymm = 'ymm_example' # str | Year-Make-Model concatenated string. To help passing the results of auto-complete API on ymm field, use this parameter and pass in the selected value as is (optional)
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
    miles_range = 'miles_range_example' # str | Miles range to filter listings with miles in the given range. Range to be given in the format - min-max e.g. 1000-5000 (optional)
    price_range = 'price_range_example' # str | Price range to filter listings with the price in the range given. Range to be given in the format - min-max e.g. 1000-5000 (optional)
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
    source = 'source_example' # str | To filter listing on their source only for widget requests (optional)
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
    include_relevant_links = False # bool | To include_relevant_links. Default is true (optional) (default to False)
    inventory_count_range = 'inventory_count_range_example' # str | Inventory count range to filter listings with count of total listings in dealers inventory. Range to be given in the format - min-max e.g. 10-50 (optional)
    dealer_id = 'dealer_id_example' # str | Dealer id to filter the listings. (optional)
    exclude_dealer_ids = 'exclude_dealer_ids_example' # str | A list of dealer ids to exclude from result (optional)
    exclude_sources = 'exclude_sources_example' # str | A list of sources to exclude from result (optional)
    in_transit = 'in_transit_example' # str | A boolean to filter in transit vehicles (optional)
    seating_capacity = 'seating_capacity_example' # str | To filter on vehicle seating capacity (optional)
    powertrain_type = 'powertrain_type_example' # str | To filter on powertrain_type (optional)
    price_change = 'price_change_example' # str | Query to filter listings based on their positive and negative price change (optional)
    price_change_range = 'price_change_range_example' # str | Price change range to filter listings with price change within given price_change_range. Range to be given in the format - min-max e.g. 10-500 (optional)
    active_inventory_date_range = 'active_inventory_date_range_example' # str | date range to filter listings that were active within given date range. Range to be given in the format [YYYYMMDD] - min-max e.g. 20190523-20190623 (optional)
    engine_size_range = 'engine_size_range_example' # str | Engine size range to filter listings with engine size in the given range. Range to be given in the format - min-max e.g. 1.0-2 (optional)
    high_value_features = 'high_value_features_example' # str | To filter listings on their high_value_features. Results will be intersection of provided HVFs (optional)
    min_photo_links = 'min_photo_links_example' # str | Filter listings based by number of photo links within given range (optional)
    min_photo_links_cached = 'min_photo_links_cached_example' # str | Filter listings based by number of cached photo links within given range (optional)
    client_filters = True # bool | Flag to add explicit filters set on client level in solr (optional) (default to True)

    try:
        # Gets active car listings for the given search criteria
        api_response = api_instance.search_car_active_get(api_key=api_key, append_api_key=append_api_key, latitude=latitude, longitude=longitude, radius=radius, zip=zip, include_lease=include_lease, include_finance=include_finance, lease_term=lease_term, lease_down_payment=lease_down_payment, lease_emp=lease_emp, finance_loan_term=finance_loan_term, finance_loan_apr=finance_loan_apr, finance_emp=finance_emp, finance_down_payment=finance_down_payment, finance_down_payment_per=finance_down_payment_per, car_type=car_type, carfax_1_owner=carfax_1_owner, carfax_clean_title=carfax_clean_title, year_range=year_range, year=year, make=make, model=model, trim=trim, vin=vin, body_type=body_type, body_subtype=body_subtype, vehicle_type=vehicle_type, vins=vins, taxonomy_vins=taxonomy_vins, mm=mm, ymm=ymm, ymmt=ymmt, match=match, cylinders=cylinders, transmission=transmission, doors=doors, drivetrain=drivetrain, exterior_color=exterior_color, interior_color=interior_color, base_exterior_color=base_exterior_color, base_interior_color=base_interior_color, engine=engine, engine_size=engine_size, engine_aspiration=engine_aspiration, engine_block=engine_block, highway_mpg_range=highway_mpg_range, city_mpg_range=city_mpg_range, miles_range=miles_range, price_range=price_range, msrp_range=msrp_range, dom_range=dom_range, sort_by=sort_by, sort_order=sort_order, rows=rows, start=start, include_non_vin_listings=include_non_vin_listings, msa_code=msa_code, facets=facets, range_facets=range_facets, facet_sort=facet_sort, stats=stats, country=country, plot=plot, nodedup=nodedup, dedup=dedup, owned=owned, source=source, state=state, city=city, trim_o=trim_o, trim_r=trim_r, dom_active_range=dom_active_range, dom_180_range=dom_180_range, exclude_certified=exclude_certified, fuel_type=fuel_type, dealer_type=dealer_type, photo_links=photo_links, photo_links_cached=photo_links_cached, stock_no=stock_no, last_seen_range=last_seen_range, first_seen_range=first_seen_range, first_seen_at_source_range=first_seen_at_source_range, first_seen_at_mc_range=first_seen_at_mc_range, last_seen_days=last_seen_days, first_seen_days=first_seen_days, first_seen_at_source_days=first_seen_at_source_days, first_seen_at_mc_days=first_seen_at_mc_days, include_relevant_links=include_relevant_links, inventory_count_range=inventory_count_range, dealer_id=dealer_id, exclude_dealer_ids=exclude_dealer_ids, exclude_sources=exclude_sources, in_transit=in_transit, seating_capacity=seating_capacity, powertrain_type=powertrain_type, price_change=price_change, price_change_range=price_change_range, active_inventory_date_range=active_inventory_date_range, engine_size_range=engine_size_range, high_value_features=high_value_features, min_photo_links=min_photo_links, min_photo_links_cached=min_photo_links_cached, client_filters=client_filters)
        print("The response of CarSearchApi->search_car_active_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling CarSearchApi->search_car_active_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
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
 **year_range** | **str**| Year range to filter listings with the year in the range given. Range to be given in the format - min-max e.g. 2019-2021 | [optional] 
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
 **mm** | **str**| Make-Model concatenated string. To help passing the results of auto-complete API on mm field, use this parameter and pass in the selected value as is | [optional] 
 **ymm** | **str**| Year-Make-Model concatenated string. To help passing the results of auto-complete API on ymm field, use this parameter and pass in the selected value as is | [optional] 
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
 **miles_range** | **str**| Miles range to filter listings with miles in the given range. Range to be given in the format - min-max e.g. 1000-5000 | [optional] 
 **price_range** | **str**| Price range to filter listings with the price in the range given. Range to be given in the format - min-max e.g. 1000-5000 | [optional] 
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
 **source** | **str**| To filter listing on their source only for widget requests | [optional] 
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
 **include_relevant_links** | **bool**| To include_relevant_links. Default is true | [optional] [default to False]
 **inventory_count_range** | **str**| Inventory count range to filter listings with count of total listings in dealers inventory. Range to be given in the format - min-max e.g. 10-50 | [optional] 
 **dealer_id** | **str**| Dealer id to filter the listings. | [optional] 
 **exclude_dealer_ids** | **str**| A list of dealer ids to exclude from result | [optional] 
 **exclude_sources** | **str**| A list of sources to exclude from result | [optional] 
 **in_transit** | **str**| A boolean to filter in transit vehicles | [optional] 
 **seating_capacity** | **str**| To filter on vehicle seating capacity | [optional] 
 **powertrain_type** | **str**| To filter on powertrain_type | [optional] 
 **price_change** | **str**| Query to filter listings based on their positive and negative price change | [optional] 
 **price_change_range** | **str**| Price change range to filter listings with price change within given price_change_range. Range to be given in the format - min-max e.g. 10-500 | [optional] 
 **active_inventory_date_range** | **str**| date range to filter listings that were active within given date range. Range to be given in the format [YYYYMMDD] - min-max e.g. 20190523-20190623 | [optional] 
 **engine_size_range** | **str**| Engine size range to filter listings with engine size in the given range. Range to be given in the format - min-max e.g. 1.0-2 | [optional] 
 **high_value_features** | **str**| To filter listings on their high_value_features. Results will be intersection of provided HVFs | [optional] 
 **min_photo_links** | **str**| Filter listings based by number of photo links within given range | [optional] 
 **min_photo_links_cached** | **str**| Filter listings based by number of cached photo links within given range | [optional] 
 **client_filters** | **bool**| Flag to add explicit filters set on client level in solr | [optional] [default to True]

### Return type

[**SearchResponse**](SearchResponse.md)

### Authorization

[authorizeEndpoint](../README.md#authorizeEndpoint)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | List of all cars listings matching the search &amp; filter criteria |  -  |
**0** | Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **search_car_auction_active_get**
> SearchResponse search_car_auction_active_get(api_key=api_key, append_api_key=append_api_key, latitude=latitude, longitude=longitude, radius=radius, zip=zip, include_lease=include_lease, include_finance=include_finance, lease_term=lease_term, lease_down_payment=lease_down_payment, lease_emp=lease_emp, finance_loan_term=finance_loan_term, finance_loan_apr=finance_loan_apr, finance_emp=finance_emp, finance_down_payment=finance_down_payment, finance_down_payment_per=finance_down_payment_per, car_type=car_type, carfax_1_owner=carfax_1_owner, carfax_clean_title=carfax_clean_title, year_range=year_range, year=year, make=make, model=model, trim=trim, vin=vin, body_type=body_type, body_subtype=body_subtype, vehicle_type=vehicle_type, vins=vins, taxonomy_vins=taxonomy_vins, mm=mm, ymm=ymm, ymmt=ymmt, match=match, cylinders=cylinders, transmission=transmission, doors=doors, drivetrain=drivetrain, exterior_color=exterior_color, interior_color=interior_color, base_exterior_color=base_exterior_color, base_interior_color=base_interior_color, engine=engine, engine_size=engine_size, engine_aspiration=engine_aspiration, engine_block=engine_block, highway_mpg_range=highway_mpg_range, city_mpg_range=city_mpg_range, miles_range=miles_range, price_range=price_range, msrp_range=msrp_range, dom_range=dom_range, sort_by=sort_by, sort_order=sort_order, rows=rows, start=start, include_non_vin_listings=include_non_vin_listings, msa_code=msa_code, facets=facets, range_facets=range_facets, facet_sort=facet_sort, stats=stats, country=country, plot=plot, nodedup=nodedup, dedup=dedup, owned=owned, state=state, city=city, source=source, dealer_id=dealer_id, trim_o=trim_o, trim_r=trim_r, dom_active_range=dom_active_range, dom_180_range=dom_180_range, exclude_certified=exclude_certified, fuel_type=fuel_type, dealer_type=dealer_type, photo_links=photo_links, photo_links_cached=photo_links_cached, stock_no=stock_no, last_seen_range=last_seen_range, first_seen_range=first_seen_range, first_seen_at_source_range=first_seen_at_source_range, first_seen_at_mc_range=first_seen_at_mc_range, last_seen_days=last_seen_days, first_seen_days=first_seen_days, first_seen_at_source_days=first_seen_at_source_days, first_seen_at_mc_days=first_seen_at_mc_days, include_relevant_links=include_relevant_links, inventory_count_range=inventory_count_range, exclude_dealer_ids=exclude_dealer_ids, exclude_sources=exclude_sources, in_transit=in_transit, title_type=title_type, seating_capacity=seating_capacity, engine_size_range=engine_size_range, min_photo_links=min_photo_links, min_photo_links_cached=min_photo_links_cached)

Gets active auction car listings for the given search criteria

This API produces a list of currently active auction cars from the market for the given search criteria. The API results are limited to allow pagination upto 5000 rows.   The search API facilitates the following use cases -  1. Search Cars around a given geo-point within a given radius  2. Search cars for a specific year / make / model or combination of these  3. Search cars matching multiple year, make, model combinatins in the same search request 4. Filter results by most car specification attributes 5. Search for similar cars by VIN or Taxonomy VIN  6. Filter cars within a given price / miles / days on market (dom) range 7. Specify a sort order for the results on price / miles / dom / listed date  8. Search cars for a given City / State combination  9. Get Facets to build the search drill downs  10. Get Market averages for price/miles/dom for your search

### Example

* Basic Authentication (authorizeEndpoint):

```python
import openapi_client
from openapi_client.models.search_response import SearchResponse
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
    api_instance = openapi_client.CarSearchApi(api_client)
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
    year_range = 'year_range_example' # str | Year range to filter listings with the year in the range given. Range to be given in the format - min-max e.g. 2019-2021 (optional)
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
    mm = 'mm_example' # str | Make-Model concatenated string. To help passing the results of auto-complete API on mm field, use this parameter and pass in the selected value as is (optional)
    ymm = 'ymm_example' # str | Year-Make-Model concatenated string. To help passing the results of auto-complete API on ymm field, use this parameter and pass in the selected value as is (optional)
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
    miles_range = 'miles_range_example' # str | Miles range to filter listings with miles in the given range. Range to be given in the format - min-max e.g. 1000-5000 (optional)
    price_range = 'price_range_example' # str | Price range to filter listings with the price in the range given. Range to be given in the format - min-max e.g. 1000-5000 (optional)
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
    source = 'source_example' # str | To filter listing on their source only for widget requests (optional)
    dealer_id = 'dealer_id_example' # str | Dealer id to filter the listings. (optional)
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
    include_relevant_links = False # bool | To include_relevant_links. Default is true (optional) (default to False)
    inventory_count_range = 'inventory_count_range_example' # str | Inventory count range to filter listings with count of total listings in dealers inventory. Range to be given in the format - min-max e.g. 10-50 (optional)
    exclude_dealer_ids = 'exclude_dealer_ids_example' # str | A list of dealer ids to exclude from result (optional)
    exclude_sources = 'exclude_sources_example' # str | A list of sources to exclude from result (optional)
    in_transit = 'in_transit_example' # str | A boolean to filter in transit vehicles (optional)
    title_type = 'title_type_example' # str | To filter on title type (optional)
    seating_capacity = 'seating_capacity_example' # str | To filter on vehicle seating capacity (optional)
    engine_size_range = 'engine_size_range_example' # str | Engine size range to filter listings with engine size in the given range. Range to be given in the format - min-max e.g. 1.0-2 (optional)
    min_photo_links = 'min_photo_links_example' # str | Filter listings based by number of photo links within given range (optional)
    min_photo_links_cached = 'min_photo_links_cached_example' # str | Filter listings based by number of cached photo links within given range (optional)

    try:
        # Gets active auction car listings for the given search criteria
        api_response = api_instance.search_car_auction_active_get(api_key=api_key, append_api_key=append_api_key, latitude=latitude, longitude=longitude, radius=radius, zip=zip, include_lease=include_lease, include_finance=include_finance, lease_term=lease_term, lease_down_payment=lease_down_payment, lease_emp=lease_emp, finance_loan_term=finance_loan_term, finance_loan_apr=finance_loan_apr, finance_emp=finance_emp, finance_down_payment=finance_down_payment, finance_down_payment_per=finance_down_payment_per, car_type=car_type, carfax_1_owner=carfax_1_owner, carfax_clean_title=carfax_clean_title, year_range=year_range, year=year, make=make, model=model, trim=trim, vin=vin, body_type=body_type, body_subtype=body_subtype, vehicle_type=vehicle_type, vins=vins, taxonomy_vins=taxonomy_vins, mm=mm, ymm=ymm, ymmt=ymmt, match=match, cylinders=cylinders, transmission=transmission, doors=doors, drivetrain=drivetrain, exterior_color=exterior_color, interior_color=interior_color, base_exterior_color=base_exterior_color, base_interior_color=base_interior_color, engine=engine, engine_size=engine_size, engine_aspiration=engine_aspiration, engine_block=engine_block, highway_mpg_range=highway_mpg_range, city_mpg_range=city_mpg_range, miles_range=miles_range, price_range=price_range, msrp_range=msrp_range, dom_range=dom_range, sort_by=sort_by, sort_order=sort_order, rows=rows, start=start, include_non_vin_listings=include_non_vin_listings, msa_code=msa_code, facets=facets, range_facets=range_facets, facet_sort=facet_sort, stats=stats, country=country, plot=plot, nodedup=nodedup, dedup=dedup, owned=owned, state=state, city=city, source=source, dealer_id=dealer_id, trim_o=trim_o, trim_r=trim_r, dom_active_range=dom_active_range, dom_180_range=dom_180_range, exclude_certified=exclude_certified, fuel_type=fuel_type, dealer_type=dealer_type, photo_links=photo_links, photo_links_cached=photo_links_cached, stock_no=stock_no, last_seen_range=last_seen_range, first_seen_range=first_seen_range, first_seen_at_source_range=first_seen_at_source_range, first_seen_at_mc_range=first_seen_at_mc_range, last_seen_days=last_seen_days, first_seen_days=first_seen_days, first_seen_at_source_days=first_seen_at_source_days, first_seen_at_mc_days=first_seen_at_mc_days, include_relevant_links=include_relevant_links, inventory_count_range=inventory_count_range, exclude_dealer_ids=exclude_dealer_ids, exclude_sources=exclude_sources, in_transit=in_transit, title_type=title_type, seating_capacity=seating_capacity, engine_size_range=engine_size_range, min_photo_links=min_photo_links, min_photo_links_cached=min_photo_links_cached)
        print("The response of CarSearchApi->search_car_auction_active_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling CarSearchApi->search_car_auction_active_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
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
 **year_range** | **str**| Year range to filter listings with the year in the range given. Range to be given in the format - min-max e.g. 2019-2021 | [optional] 
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
 **mm** | **str**| Make-Model concatenated string. To help passing the results of auto-complete API on mm field, use this parameter and pass in the selected value as is | [optional] 
 **ymm** | **str**| Year-Make-Model concatenated string. To help passing the results of auto-complete API on ymm field, use this parameter and pass in the selected value as is | [optional] 
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
 **miles_range** | **str**| Miles range to filter listings with miles in the given range. Range to be given in the format - min-max e.g. 1000-5000 | [optional] 
 **price_range** | **str**| Price range to filter listings with the price in the range given. Range to be given in the format - min-max e.g. 1000-5000 | [optional] 
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
 **source** | **str**| To filter listing on their source only for widget requests | [optional] 
 **dealer_id** | **str**| Dealer id to filter the listings. | [optional] 
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
 **include_relevant_links** | **bool**| To include_relevant_links. Default is true | [optional] [default to False]
 **inventory_count_range** | **str**| Inventory count range to filter listings with count of total listings in dealers inventory. Range to be given in the format - min-max e.g. 10-50 | [optional] 
 **exclude_dealer_ids** | **str**| A list of dealer ids to exclude from result | [optional] 
 **exclude_sources** | **str**| A list of sources to exclude from result | [optional] 
 **in_transit** | **str**| A boolean to filter in transit vehicles | [optional] 
 **title_type** | **str**| To filter on title type | [optional] 
 **seating_capacity** | **str**| To filter on vehicle seating capacity | [optional] 
 **engine_size_range** | **str**| Engine size range to filter listings with engine size in the given range. Range to be given in the format - min-max e.g. 1.0-2 | [optional] 
 **min_photo_links** | **str**| Filter listings based by number of photo links within given range | [optional] 
 **min_photo_links_cached** | **str**| Filter listings based by number of cached photo links within given range | [optional] 

### Return type

[**SearchResponse**](SearchResponse.md)

### Authorization

[authorizeEndpoint](../README.md#authorizeEndpoint)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | List of all auction cars listings matching the search &amp; filter criteria |  -  |
**0** | Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **search_car_fsbo_active_get**
> SearchResponse search_car_fsbo_active_get(api_key=api_key, append_api_key=append_api_key, latitude=latitude, longitude=longitude, radius=radius, zip=zip, include_lease=include_lease, include_finance=include_finance, lease_term=lease_term, lease_down_payment=lease_down_payment, lease_emp=lease_emp, finance_loan_term=finance_loan_term, finance_loan_apr=finance_loan_apr, finance_emp=finance_emp, finance_down_payment=finance_down_payment, finance_down_payment_per=finance_down_payment_per, car_type=car_type, carfax_1_owner=carfax_1_owner, carfax_clean_title=carfax_clean_title, year_range=year_range, year=year, make=make, model=model, trim=trim, vin=vin, body_type=body_type, body_subtype=body_subtype, vehicle_type=vehicle_type, vins=vins, taxonomy_vins=taxonomy_vins, mm=mm, ymm=ymm, ymmt=ymmt, match=match, cylinders=cylinders, transmission=transmission, doors=doors, drivetrain=drivetrain, exterior_color=exterior_color, interior_color=interior_color, base_exterior_color=base_exterior_color, base_interior_color=base_interior_color, engine=engine, engine_size=engine_size, engine_aspiration=engine_aspiration, engine_block=engine_block, highway_mpg_range=highway_mpg_range, city_mpg_range=city_mpg_range, miles_range=miles_range, price_range=price_range, msrp_range=msrp_range, dom_range=dom_range, sort_by=sort_by, sort_order=sort_order, rows=rows, start=start, include_non_vin_listings=include_non_vin_listings, msa_code=msa_code, facets=facets, range_facets=range_facets, facet_sort=facet_sort, stats=stats, country=country, plot=plot, nodedup=nodedup, dedup=dedup, owned=owned, state=state, city=city, source=source, dealer_id=dealer_id, trim_o=trim_o, trim_r=trim_r, dom_active_range=dom_active_range, dom_180_range=dom_180_range, exclude_certified=exclude_certified, fuel_type=fuel_type, dealer_type=dealer_type, photo_links=photo_links, photo_links_cached=photo_links_cached, stock_no=stock_no, last_seen_range=last_seen_range, first_seen_range=first_seen_range, first_seen_at_source_range=first_seen_at_source_range, first_seen_at_mc_range=first_seen_at_mc_range, last_seen_days=last_seen_days, first_seen_days=first_seen_days, first_seen_at_source_days=first_seen_at_source_days, first_seen_at_mc_days=first_seen_at_mc_days, include_relevant_links=include_relevant_links, inventory_count_range=inventory_count_range, exclude_dealer_ids=exclude_dealer_ids, exclude_sources=exclude_sources, exclude_dealer_listings=exclude_dealer_listings, in_transit=in_transit, seating_capacity=seating_capacity, engine_size_range=engine_size_range, min_photo_links=min_photo_links, min_photo_links_cached=min_photo_links_cached)

Gets active private party car listings for the given search criteria

This API produces a list of currently active FSBO cars from the market for the given search criteria. The API results are limited to allow pagination upto 5000 rows.   The search API facilitates the following use cases -  1. Search Cars around a given geo-point within a given radius  2. Search cars for a specific year / make / model or combination of these  3. Search cars matching multiple year, make, model combinatins in the same search request 4. Filter results by most car specification attributes 5. Search for similar cars by VIN or Taxonomy VIN  6. Filter cars within a given price / miles / days on market (dom) range 7. Specify a sort order for the results on price / miles / dom / listed date  8. Search cars for a given City / State combination  9. Get Facets to build the search drill downs  10. Get Market averages for price/miles/dom for your search

### Example

* Basic Authentication (authorizeEndpoint):

```python
import openapi_client
from openapi_client.models.search_response import SearchResponse
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
    api_instance = openapi_client.CarSearchApi(api_client)
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
    year_range = 'year_range_example' # str | Year range to filter listings with the year in the range given. Range to be given in the format - min-max e.g. 2019-2021 (optional)
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
    mm = 'mm_example' # str | Make-Model concatenated string. To help passing the results of auto-complete API on mm field, use this parameter and pass in the selected value as is (optional)
    ymm = 'ymm_example' # str | Year-Make-Model concatenated string. To help passing the results of auto-complete API on ymm field, use this parameter and pass in the selected value as is (optional)
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
    miles_range = 'miles_range_example' # str | Miles range to filter listings with miles in the given range. Range to be given in the format - min-max e.g. 1000-5000 (optional)
    price_range = 'price_range_example' # str | Price range to filter listings with the price in the range given. Range to be given in the format - min-max e.g. 1000-5000 (optional)
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
    source = 'source_example' # str | To filter listing on their source only for widget requests (optional)
    dealer_id = 'dealer_id_example' # str | Dealer id to filter the listings. (optional)
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
    include_relevant_links = False # bool | To include_relevant_links. Default is true (optional) (default to False)
    inventory_count_range = 'inventory_count_range_example' # str | Inventory count range to filter listings with count of total listings in dealers inventory. Range to be given in the format - min-max e.g. 10-50 (optional)
    exclude_dealer_ids = 'exclude_dealer_ids_example' # str | A list of dealer ids to exclude from result (optional)
    exclude_sources = 'exclude_sources_example' # str | A list of sources to exclude from result (optional)
    exclude_dealer_listings = True # bool | A list of fsbo listings to exclude from result (optional)
    in_transit = 'in_transit_example' # str | A boolean to filter in transit vehicles (optional)
    seating_capacity = 'seating_capacity_example' # str | To filter on vehicle seating capacity (optional)
    engine_size_range = 'engine_size_range_example' # str | Engine size range to filter listings with engine size in the given range. Range to be given in the format - min-max e.g. 1.0-2 (optional)
    min_photo_links = 'min_photo_links_example' # str | Filter listings based by number of photo links within given range (optional)
    min_photo_links_cached = 'min_photo_links_cached_example' # str | Filter listings based by number of cached photo links within given range (optional)

    try:
        # Gets active private party car listings for the given search criteria
        api_response = api_instance.search_car_fsbo_active_get(api_key=api_key, append_api_key=append_api_key, latitude=latitude, longitude=longitude, radius=radius, zip=zip, include_lease=include_lease, include_finance=include_finance, lease_term=lease_term, lease_down_payment=lease_down_payment, lease_emp=lease_emp, finance_loan_term=finance_loan_term, finance_loan_apr=finance_loan_apr, finance_emp=finance_emp, finance_down_payment=finance_down_payment, finance_down_payment_per=finance_down_payment_per, car_type=car_type, carfax_1_owner=carfax_1_owner, carfax_clean_title=carfax_clean_title, year_range=year_range, year=year, make=make, model=model, trim=trim, vin=vin, body_type=body_type, body_subtype=body_subtype, vehicle_type=vehicle_type, vins=vins, taxonomy_vins=taxonomy_vins, mm=mm, ymm=ymm, ymmt=ymmt, match=match, cylinders=cylinders, transmission=transmission, doors=doors, drivetrain=drivetrain, exterior_color=exterior_color, interior_color=interior_color, base_exterior_color=base_exterior_color, base_interior_color=base_interior_color, engine=engine, engine_size=engine_size, engine_aspiration=engine_aspiration, engine_block=engine_block, highway_mpg_range=highway_mpg_range, city_mpg_range=city_mpg_range, miles_range=miles_range, price_range=price_range, msrp_range=msrp_range, dom_range=dom_range, sort_by=sort_by, sort_order=sort_order, rows=rows, start=start, include_non_vin_listings=include_non_vin_listings, msa_code=msa_code, facets=facets, range_facets=range_facets, facet_sort=facet_sort, stats=stats, country=country, plot=plot, nodedup=nodedup, dedup=dedup, owned=owned, state=state, city=city, source=source, dealer_id=dealer_id, trim_o=trim_o, trim_r=trim_r, dom_active_range=dom_active_range, dom_180_range=dom_180_range, exclude_certified=exclude_certified, fuel_type=fuel_type, dealer_type=dealer_type, photo_links=photo_links, photo_links_cached=photo_links_cached, stock_no=stock_no, last_seen_range=last_seen_range, first_seen_range=first_seen_range, first_seen_at_source_range=first_seen_at_source_range, first_seen_at_mc_range=first_seen_at_mc_range, last_seen_days=last_seen_days, first_seen_days=first_seen_days, first_seen_at_source_days=first_seen_at_source_days, first_seen_at_mc_days=first_seen_at_mc_days, include_relevant_links=include_relevant_links, inventory_count_range=inventory_count_range, exclude_dealer_ids=exclude_dealer_ids, exclude_sources=exclude_sources, exclude_dealer_listings=exclude_dealer_listings, in_transit=in_transit, seating_capacity=seating_capacity, engine_size_range=engine_size_range, min_photo_links=min_photo_links, min_photo_links_cached=min_photo_links_cached)
        print("The response of CarSearchApi->search_car_fsbo_active_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling CarSearchApi->search_car_fsbo_active_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
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
 **year_range** | **str**| Year range to filter listings with the year in the range given. Range to be given in the format - min-max e.g. 2019-2021 | [optional] 
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
 **mm** | **str**| Make-Model concatenated string. To help passing the results of auto-complete API on mm field, use this parameter and pass in the selected value as is | [optional] 
 **ymm** | **str**| Year-Make-Model concatenated string. To help passing the results of auto-complete API on ymm field, use this parameter and pass in the selected value as is | [optional] 
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
 **miles_range** | **str**| Miles range to filter listings with miles in the given range. Range to be given in the format - min-max e.g. 1000-5000 | [optional] 
 **price_range** | **str**| Price range to filter listings with the price in the range given. Range to be given in the format - min-max e.g. 1000-5000 | [optional] 
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
 **source** | **str**| To filter listing on their source only for widget requests | [optional] 
 **dealer_id** | **str**| Dealer id to filter the listings. | [optional] 
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
 **include_relevant_links** | **bool**| To include_relevant_links. Default is true | [optional] [default to False]
 **inventory_count_range** | **str**| Inventory count range to filter listings with count of total listings in dealers inventory. Range to be given in the format - min-max e.g. 10-50 | [optional] 
 **exclude_dealer_ids** | **str**| A list of dealer ids to exclude from result | [optional] 
 **exclude_sources** | **str**| A list of sources to exclude from result | [optional] 
 **exclude_dealer_listings** | **bool**| A list of fsbo listings to exclude from result | [optional] 
 **in_transit** | **str**| A boolean to filter in transit vehicles | [optional] 
 **seating_capacity** | **str**| To filter on vehicle seating capacity | [optional] 
 **engine_size_range** | **str**| Engine size range to filter listings with engine size in the given range. Range to be given in the format - min-max e.g. 1.0-2 | [optional] 
 **min_photo_links** | **str**| Filter listings based by number of photo links within given range | [optional] 
 **min_photo_links_cached** | **str**| Filter listings based by number of cached photo links within given range | [optional] 

### Return type

[**SearchResponse**](SearchResponse.md)

### Authorization

[authorizeEndpoint](../README.md#authorizeEndpoint)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | List of all FSBO cars listings matching the search &amp; filter criteria |  -  |
**0** | Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **search_car_recents_get**
> SearchResponse search_car_recents_get(api_key=api_key, append_api_key=append_api_key, latitude=latitude, longitude=longitude, radius=radius, zip=zip, include_lease=include_lease, include_finance=include_finance, lease_term=lease_term, lease_down_payment=lease_down_payment, lease_emp=lease_emp, finance_loan_term=finance_loan_term, finance_loan_apr=finance_loan_apr, finance_emp=finance_emp, finance_down_payment=finance_down_payment, finance_down_payment_per=finance_down_payment_per, car_type=car_type, carfax_1_owner=carfax_1_owner, carfax_clean_title=carfax_clean_title, year_range=year_range, year=year, make=make, model=model, trim=trim, dealer_id=dealer_id, vin=vin, source=source, body_type=body_type, body_subtype=body_subtype, vehicle_type=vehicle_type, vins=vins, taxonomy_vins=taxonomy_vins, ymmt=ymmt, match=match, cylinders=cylinders, transmission=transmission, doors=doors, drivetrain=drivetrain, exterior_color=exterior_color, interior_color=interior_color, base_exterior_color=base_exterior_color, base_interior_color=base_interior_color, engine=engine, engine_size=engine_size, engine_aspiration=engine_aspiration, engine_block=engine_block, highway_mpg_range=highway_mpg_range, city_mpg_range=city_mpg_range, miles_range=miles_range, price_range=price_range, msrp_range=msrp_range, dom_range=dom_range, last_seen_range=last_seen_range, first_seen_range=first_seen_range, first_seen_at_source_range=first_seen_at_source_range, first_seen_at_mc_range=first_seen_at_mc_range, last_seen_days=last_seen_days, first_seen_days=first_seen_days, first_seen_at_source_days=first_seen_at_source_days, first_seen_at_mc_days=first_seen_at_mc_days, sort_by=sort_by, sort_order=sort_order, rows=rows, start=start, include_non_vin_listings=include_non_vin_listings, facets=facets, range_facets=range_facets, facet_sort=facet_sort, stats=stats, country=country, plot=plot, nodedup=nodedup, dedup=dedup, owned=owned, state=state, city=city, msa_code=msa_code, dealer_name=dealer_name, dealership_group_name=dealership_group_name, trim_o=trim_o, trim_r=trim_r, dom_active_range=dom_active_range, dom_180_range=dom_180_range, exclude_certified=exclude_certified, fuel_type=fuel_type, dealer_type=dealer_type, photo_links=photo_links, photo_links_cached=photo_links_cached, stock_no=stock_no, sold=sold, include_relevant_links=include_relevant_links, expired=expired, exclude_dealer_ids=exclude_dealer_ids, exclude_sources=exclude_sources, in_transit=in_transit, seating_capacity=seating_capacity, active_inventory_date_range=active_inventory_date_range, engine_size_range=engine_size_range, price_change_range=price_change_range)

Gets Recent car listings for the given search criteria

This API produces a list of recently active (past 90 days) cars from the market for the given search criteria

### Example

* Basic Authentication (authorizeEndpoint):

```python
import openapi_client
from openapi_client.models.search_response import SearchResponse
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
    api_instance = openapi_client.CarSearchApi(api_client)
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
    year_range = 'year_range_example' # str | Year range to filter listings with the year in the range given. Range to be given in the format - min-max e.g. 2019-2021 (optional)
    year = 'year_example' # str | To filter listing on their year (optional)
    make = 'make_example' # str | To filter listings on their make (optional)
    model = 'model_example' # str | To filter listings on their model (optional)
    trim = 'trim_example' # str | To filter listing on their trim (optional)
    dealer_id = 'dealer_id_example' # str | Dealer id to filter the listings. (optional)
    vin = 'vin_example' # str | To filter listing on their VIN (optional)
    source = 'source_example' # str | To filter listing on their source (optional)
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
    miles_range = 'miles_range_example' # str | Miles range to filter listings with miles in the given range. Range to be given in the format - min-max e.g. 1000-5000 (optional)
    price_range = 'price_range_example' # str | Price range to filter listings with the price in the range given. Range to be given in the format - min-max e.g. 1000-5000 (optional)
    msrp_range = 'msrp_range_example' # str | MSRP range to filter listings with the msrp in the range given. Range to be given in the format - min-max e.g. 1000-5000 (optional)
    dom_range = 'dom_range_example' # str | Days on Market range to filter cars with the DOM within the given range. Range to be given in the format - min-max e.g. 10-50 (optional)
    last_seen_range = 'last_seen_range_example' # str | Last seen date range to filter listings with the last seen in the range given. Range to be given in the format [YYYYMMDD] - min-max e.g. 20190523-20190623 (optional)
    first_seen_range = 'first_seen_range_example' # str | First seen date range to filter listings with the first seen in the range given. Range to be given in the format [YYYYMMDD] - min-max e.g. 20190523-20190623 (optional)
    first_seen_at_source_range = 'first_seen_at_source_range_example' # str | First seen at source date range to filter listings with the first seen at source in the range given. Range to be given in the format [YYYYMMDD] - min-max e.g. 20190523-20190623 (optional)
    first_seen_at_mc_range = 'first_seen_at_mc_range_example' # str | First seen at MC date range to filter listings with the first seen at MC in the range given. Range to be given in the format [YYYYMMDD] - min-max e.g. 20190523-20190623 (optional)
    last_seen_days = 'last_seen_days_example' # str | Last seen days range to filter listings with the last seen in the range given. Range to be given in the format - min-max e.g. 25-12 (optional)
    first_seen_days = 'first_seen_days_example' # str | First seen days range to filter listings with the first seen in the range given. Range to be given in the format - min-max e.g. 25-12 (optional)
    first_seen_at_source_days = 'first_seen_at_source_days_example' # str | First seen at source days range to filter listings with the first seen at source in the range given. Range to be given in the format - min-max e.g. 25-12 (optional)
    first_seen_at_mc_days = 'first_seen_at_mc_days_example' # str | First seen at MC days range to filter listings with the first seen at MC in the range given. Range to be given in the format - min-max e.g. 25-12 (optional)
    sort_by = 'sort_by_example' # str | Sort by field. Default sort field is distance from the given point (optional)
    sort_order = 'sort_order_example' # str | Sort order - asc or desc. Default sort order is asc (optional)
    rows = 10 # int | Number of results to return. Default is 10. Max is 50 (optional) (default to 10)
    start = 0 # int | Page number to fetch the results for the given criteria. Default is 0. Pagination is allowed only till first 10000 results for the search and sort criteria. The page value can be only between 1 to 10000/rows (optional) (default to 0)
    include_non_vin_listings = False # bool | To include non vin listings. Default is false (optional) (default to False)
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
    msa_code = 'msa_code_example' # str | To filter listing on msa code in which they are listed (optional)
    dealer_name = 'dealer_name_example' # str | Filter listings on dealer_name (optional)
    dealership_group_name = 'dealership_group_name_example' # str | Name of the dealership group to search for (optional)
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
    sold = True # bool | sold parameter to fetch only sold listings (optional)
    include_relevant_links = False # bool | To include_relevant_links. Default is true (optional) (default to False)
    expired = 'expired_example' # str | Boolean falg to either fetch only the expired listings or active ones (optional)
    exclude_dealer_ids = 'exclude_dealer_ids_example' # str | A list of dealer ids to exclude from result (optional)
    exclude_sources = 'exclude_sources_example' # str | A list of sources to exclude from result (optional)
    in_transit = 'in_transit_example' # str | A boolean to filter in transit vehicles (optional)
    seating_capacity = 'seating_capacity_example' # str | To filter on vehicle seating capacity (optional)
    active_inventory_date_range = 'active_inventory_date_range_example' # str | date range to filter listings that were active within given date range. Range to be given in the format [YYYYMMDD] - min-max e.g. 20190523-20190623 (optional)
    engine_size_range = 'engine_size_range_example' # str | Engine size range to filter listings with engine size in the given range. Range to be given in the format - min-max e.g. 1.0-2 (optional)
    price_change_range = 'price_change_range_example' # str | Price change range to filter listings with price change within given price_change_range. Range to be given in the format - min-max e.g. 10-500 (optional)

    try:
        # Gets Recent car listings for the given search criteria
        api_response = api_instance.search_car_recents_get(api_key=api_key, append_api_key=append_api_key, latitude=latitude, longitude=longitude, radius=radius, zip=zip, include_lease=include_lease, include_finance=include_finance, lease_term=lease_term, lease_down_payment=lease_down_payment, lease_emp=lease_emp, finance_loan_term=finance_loan_term, finance_loan_apr=finance_loan_apr, finance_emp=finance_emp, finance_down_payment=finance_down_payment, finance_down_payment_per=finance_down_payment_per, car_type=car_type, carfax_1_owner=carfax_1_owner, carfax_clean_title=carfax_clean_title, year_range=year_range, year=year, make=make, model=model, trim=trim, dealer_id=dealer_id, vin=vin, source=source, body_type=body_type, body_subtype=body_subtype, vehicle_type=vehicle_type, vins=vins, taxonomy_vins=taxonomy_vins, ymmt=ymmt, match=match, cylinders=cylinders, transmission=transmission, doors=doors, drivetrain=drivetrain, exterior_color=exterior_color, interior_color=interior_color, base_exterior_color=base_exterior_color, base_interior_color=base_interior_color, engine=engine, engine_size=engine_size, engine_aspiration=engine_aspiration, engine_block=engine_block, highway_mpg_range=highway_mpg_range, city_mpg_range=city_mpg_range, miles_range=miles_range, price_range=price_range, msrp_range=msrp_range, dom_range=dom_range, last_seen_range=last_seen_range, first_seen_range=first_seen_range, first_seen_at_source_range=first_seen_at_source_range, first_seen_at_mc_range=first_seen_at_mc_range, last_seen_days=last_seen_days, first_seen_days=first_seen_days, first_seen_at_source_days=first_seen_at_source_days, first_seen_at_mc_days=first_seen_at_mc_days, sort_by=sort_by, sort_order=sort_order, rows=rows, start=start, include_non_vin_listings=include_non_vin_listings, facets=facets, range_facets=range_facets, facet_sort=facet_sort, stats=stats, country=country, plot=plot, nodedup=nodedup, dedup=dedup, owned=owned, state=state, city=city, msa_code=msa_code, dealer_name=dealer_name, dealership_group_name=dealership_group_name, trim_o=trim_o, trim_r=trim_r, dom_active_range=dom_active_range, dom_180_range=dom_180_range, exclude_certified=exclude_certified, fuel_type=fuel_type, dealer_type=dealer_type, photo_links=photo_links, photo_links_cached=photo_links_cached, stock_no=stock_no, sold=sold, include_relevant_links=include_relevant_links, expired=expired, exclude_dealer_ids=exclude_dealer_ids, exclude_sources=exclude_sources, in_transit=in_transit, seating_capacity=seating_capacity, active_inventory_date_range=active_inventory_date_range, engine_size_range=engine_size_range, price_change_range=price_change_range)
        print("The response of CarSearchApi->search_car_recents_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling CarSearchApi->search_car_recents_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
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
 **year_range** | **str**| Year range to filter listings with the year in the range given. Range to be given in the format - min-max e.g. 2019-2021 | [optional] 
 **year** | **str**| To filter listing on their year | [optional] 
 **make** | **str**| To filter listings on their make | [optional] 
 **model** | **str**| To filter listings on their model | [optional] 
 **trim** | **str**| To filter listing on their trim | [optional] 
 **dealer_id** | **str**| Dealer id to filter the listings. | [optional] 
 **vin** | **str**| To filter listing on their VIN | [optional] 
 **source** | **str**| To filter listing on their source | [optional] 
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
 **miles_range** | **str**| Miles range to filter listings with miles in the given range. Range to be given in the format - min-max e.g. 1000-5000 | [optional] 
 **price_range** | **str**| Price range to filter listings with the price in the range given. Range to be given in the format - min-max e.g. 1000-5000 | [optional] 
 **msrp_range** | **str**| MSRP range to filter listings with the msrp in the range given. Range to be given in the format - min-max e.g. 1000-5000 | [optional] 
 **dom_range** | **str**| Days on Market range to filter cars with the DOM within the given range. Range to be given in the format - min-max e.g. 10-50 | [optional] 
 **last_seen_range** | **str**| Last seen date range to filter listings with the last seen in the range given. Range to be given in the format [YYYYMMDD] - min-max e.g. 20190523-20190623 | [optional] 
 **first_seen_range** | **str**| First seen date range to filter listings with the first seen in the range given. Range to be given in the format [YYYYMMDD] - min-max e.g. 20190523-20190623 | [optional] 
 **first_seen_at_source_range** | **str**| First seen at source date range to filter listings with the first seen at source in the range given. Range to be given in the format [YYYYMMDD] - min-max e.g. 20190523-20190623 | [optional] 
 **first_seen_at_mc_range** | **str**| First seen at MC date range to filter listings with the first seen at MC in the range given. Range to be given in the format [YYYYMMDD] - min-max e.g. 20190523-20190623 | [optional] 
 **last_seen_days** | **str**| Last seen days range to filter listings with the last seen in the range given. Range to be given in the format - min-max e.g. 25-12 | [optional] 
 **first_seen_days** | **str**| First seen days range to filter listings with the first seen in the range given. Range to be given in the format - min-max e.g. 25-12 | [optional] 
 **first_seen_at_source_days** | **str**| First seen at source days range to filter listings with the first seen at source in the range given. Range to be given in the format - min-max e.g. 25-12 | [optional] 
 **first_seen_at_mc_days** | **str**| First seen at MC days range to filter listings with the first seen at MC in the range given. Range to be given in the format - min-max e.g. 25-12 | [optional] 
 **sort_by** | **str**| Sort by field. Default sort field is distance from the given point | [optional] 
 **sort_order** | **str**| Sort order - asc or desc. Default sort order is asc | [optional] 
 **rows** | **int**| Number of results to return. Default is 10. Max is 50 | [optional] [default to 10]
 **start** | **int**| Page number to fetch the results for the given criteria. Default is 0. Pagination is allowed only till first 10000 results for the search and sort criteria. The page value can be only between 1 to 10000/rows | [optional] [default to 0]
 **include_non_vin_listings** | **bool**| To include non vin listings. Default is false | [optional] [default to False]
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
 **msa_code** | **str**| To filter listing on msa code in which they are listed | [optional] 
 **dealer_name** | **str**| Filter listings on dealer_name | [optional] 
 **dealership_group_name** | **str**| Name of the dealership group to search for | [optional] 
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
 **sold** | **bool**| sold parameter to fetch only sold listings | [optional] 
 **include_relevant_links** | **bool**| To include_relevant_links. Default is true | [optional] [default to False]
 **expired** | **str**| Boolean falg to either fetch only the expired listings or active ones | [optional] 
 **exclude_dealer_ids** | **str**| A list of dealer ids to exclude from result | [optional] 
 **exclude_sources** | **str**| A list of sources to exclude from result | [optional] 
 **in_transit** | **str**| A boolean to filter in transit vehicles | [optional] 
 **seating_capacity** | **str**| To filter on vehicle seating capacity | [optional] 
 **active_inventory_date_range** | **str**| date range to filter listings that were active within given date range. Range to be given in the format [YYYYMMDD] - min-max e.g. 20190523-20190623 | [optional] 
 **engine_size_range** | **str**| Engine size range to filter listings with engine size in the given range. Range to be given in the format - min-max e.g. 1.0-2 | [optional] 
 **price_change_range** | **str**| Price change range to filter listings with price change within given price_change_range. Range to be given in the format - min-max e.g. 10-500 | [optional] 

### Return type

[**SearchResponse**](SearchResponse.md)

### Authorization

[authorizeEndpoint](../README.md#authorizeEndpoint)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | List of all cars listings matching the search &amp; filter criteria |  -  |
**0** | Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **search_car_uk_recents_get**
> UKSearchResponse search_car_uk_recents_get(api_key=api_key, append_api_key=append_api_key, latitude=latitude, longitude=longitude, radius=radius, zip=zip, include_lease=include_lease, include_finance=include_finance, lease_term=lease_term, lease_down_payment=lease_down_payment, lease_emp=lease_emp, finance_loan_term=finance_loan_term, finance_loan_apr=finance_loan_apr, finance_emp=finance_emp, finance_down_payment=finance_down_payment, finance_down_payment_per=finance_down_payment_per, car_type=car_type, carfax_1_owner=carfax_1_owner, carfax_clean_title=carfax_clean_title, year_range=year_range, year=year, make=make, model=model, trim=trim, dealer_id=dealer_id, source=source, body_type=body_type, body_subtype=body_subtype, vehicle_type=vehicle_type, ymmt=ymmt, match=match, cylinders=cylinders, transmission=transmission, doors=doors, drivetrain=drivetrain, exterior_color=exterior_color, interior_color=interior_color, base_exterior_color=base_exterior_color, base_interior_color=base_interior_color, engine=engine, engine_size=engine_size, engine_aspiration=engine_aspiration, engine_block=engine_block, highway_mpg_range=highway_mpg_range, city_mpg_range=city_mpg_range, combined_mpg_range=combined_mpg_range, miles_range=miles_range, price_range=price_range, msrp_range=msrp_range, dom_range=dom_range, last_seen_range=last_seen_range, first_seen_range=first_seen_range, first_seen_at_source_range=first_seen_at_source_range, first_seen_at_mc_range=first_seen_at_mc_range, last_seen_days=last_seen_days, first_seen_days=first_seen_days, first_seen_at_source_days=first_seen_at_source_days, first_seen_at_mc_days=first_seen_at_mc_days, sort_by=sort_by, sort_order=sort_order, rows=rows, start=start, include_non_vin_listings=include_non_vin_listings, facets=facets, range_facets=range_facets, facet_sort=facet_sort, stats=stats, country=country, plot=plot, nodedup=nodedup, dedup=dedup, owned=owned, state=state, city=city, msa_code=msa_code, dealer_name=dealer_name, dealership_group_name=dealership_group_name, trim_o=trim_o, trim_r=trim_r, dom_active_range=dom_active_range, dom_180_range=dom_180_range, exclude_certified=exclude_certified, fuel_type=fuel_type, dealer_type=dealer_type, photo_links=photo_links, photo_links_cached=photo_links_cached, stock_no=stock_no, sold=sold, include_relevant_links=include_relevant_links, expired=expired, exclude_dealer_ids=exclude_dealer_ids, exclude_sources=exclude_sources, in_transit=in_transit, seating_capacity=seating_capacity, insurance_group=insurance_group, vrm=vrm, num_owners=num_owners, variant=variant, postal_code=postal_code, write_off_category=write_off_category, fca_status=fca_status, active_inventory_date_range=active_inventory_date_range, engine_size_range=engine_size_range, price_change_range=price_change_range)

Gets Recent UK car listings for the given search criteria

This API produces a list of recently active (past 90 days) cars from the market for the given search criteria

### Example

* Basic Authentication (authorizeEndpoint):

```python
import openapi_client
from openapi_client.models.uk_search_response import UKSearchResponse
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
    api_instance = openapi_client.CarSearchApi(api_client)
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
    year_range = 'year_range_example' # str | Year range to filter listings with the year in the range given. Range to be given in the format - min-max e.g. 2019-2021 (optional)
    year = 'year_example' # str | To filter listing on their year (optional)
    make = 'make_example' # str | To filter listings on their make (optional)
    model = 'model_example' # str | To filter listings on their model (optional)
    trim = 'trim_example' # str | To filter listing on their trim (optional)
    dealer_id = 'dealer_id_example' # str | Dealer id to filter the listings. (optional)
    source = 'source_example' # str | To filter listing on their source (optional)
    body_type = 'body_type_example' # str | To filter listing on their body type (optional)
    body_subtype = 'body_subtype_example' # str | Body subtype to filter the listings on. Valid filter values are those that our Search facets API returns for unique body subtypes. You can pass in multiple body subtype values comma separated (optional)
    vehicle_type = 'vehicle_type_example' # str | To filter listing on their vehicle type (optional)
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
    highway_mpg_range = 'highway_mpg_range_example' # str | Highway mileage range for UK to filter listings with the mileage in the range given. Range to be given in the format - min-max e.g. 1000-5000 (optional)
    city_mpg_range = 'city_mpg_range_example' # str | City mileage range for UK to filter listings with the mileage in the range given. Range to be given in the format - min-max e.g. 1000-5000 (optional)
    combined_mpg_range = 'combined_mpg_range_example' # str | Combined mileage range for UK to filter listings with the mileage in the range given. Range to be given in the format - min-max e.g. 1000-5000 (optional)
    miles_range = 'miles_range_example' # str | Miles range to filter listings with miles in the given range. Range to be given in the format - min-max e.g. 1000-5000 (optional)
    price_range = 'price_range_example' # str | Price range to filter listings with the price in the range given. Range to be given in the format - min-max e.g. 1000-5000 (optional)
    msrp_range = 'msrp_range_example' # str | MSRP range to filter listings with the msrp in the range given. Range to be given in the format - min-max e.g. 1000-5000 (optional)
    dom_range = 'dom_range_example' # str | Days on Market range to filter cars with the DOM within the given range. Range to be given in the format - min-max e.g. 10-50 (optional)
    last_seen_range = 'last_seen_range_example' # str | Last seen date range to filter listings with the last seen in the range given. Range to be given in the format [YYYYMMDD] - min-max e.g. 20190523-20190623 (optional)
    first_seen_range = 'first_seen_range_example' # str | First seen date range to filter listings with the first seen in the range given. Range to be given in the format [YYYYMMDD] - min-max e.g. 20190523-20190623 (optional)
    first_seen_at_source_range = 'first_seen_at_source_range_example' # str | First seen at source date range to filter listings with the first seen at source in the range given. Range to be given in the format [YYYYMMDD] - min-max e.g. 20190523-20190623 (optional)
    first_seen_at_mc_range = 'first_seen_at_mc_range_example' # str | First seen at MC date range to filter listings with the first seen at MC in the range given. Range to be given in the format [YYYYMMDD] - min-max e.g. 20190523-20190623 (optional)
    last_seen_days = 'last_seen_days_example' # str | Last seen days range to filter listings with the last seen in the range given. Range to be given in the format - min-max e.g. 25-12 (optional)
    first_seen_days = 'first_seen_days_example' # str | First seen days range to filter listings with the first seen in the range given. Range to be given in the format - min-max e.g. 25-12 (optional)
    first_seen_at_source_days = 'first_seen_at_source_days_example' # str | First seen at source days range to filter listings with the first seen at source in the range given. Range to be given in the format - min-max e.g. 25-12 (optional)
    first_seen_at_mc_days = 'first_seen_at_mc_days_example' # str | First seen at MC days range to filter listings with the first seen at MC in the range given. Range to be given in the format - min-max e.g. 25-12 (optional)
    sort_by = 'sort_by_example' # str | Sort by field. Default sort field is distance from the given point (optional)
    sort_order = 'sort_order_example' # str | Sort order - asc or desc. Default sort order is asc (optional)
    rows = 10 # int | Number of results to return. Default is 10. Max is 50 (optional) (default to 10)
    start = 0 # int | Page number to fetch the results for the given criteria. Default is 0. Pagination is allowed only till first 10000 results for the search and sort criteria. The page value can be only between 1 to 10000/rows (optional) (default to 0)
    include_non_vin_listings = False # bool | To include non vin listings. Default is false (optional) (default to False)
    facets = 'facets_example' # str | The comma separated list of fields for which facets are requested. Facets could be requested in addition to the listings for the search. Please note - The API calls with lots of facet fields may take longer to respond. (optional)
    range_facets = 'range_facets_example' # str | The comma separated list of numeric fields for which range facets are requested. Range facets could be requested in addition to the listings for the search. Please note - The API calls with lots of range facet fields may take longer to respond. (optional)
    facet_sort = count # str | Control sort order of facets with this parameter with default sort being on count, Other available sort is alphabetical sort, which can be obtained by using index as value for this param (optional) (default to count)
    stats = 'stats_example' # str | The list of fields for which stats need to be generated based on the matching listings for the search criteria. The stats consists of mean, max, average and count of listings based on which the stats are calculated for the field. Stats could be requested in addition to the listings for the search. Please note - The API calls with the stats fields may take longer to respond. (optional)
    country = uk # str | To filter listing on Country in which they are listed (optional) (default to uk)
    plot = True # bool | If plot has value true results in around 25k coordinates with limited fields to plot respective graph (optional)
    nodedup = True # bool | If nodedup is set to true then API will give results without is_searchable i.e multiple listings for single vin (optional)
    dedup = True # bool | If dedup is set to true then will give results with is_searchable irrespecive of dealer_id or source (optional)
    owned = True # bool | Used in combination with dealer_id or source, when true returns the listings actually owned by dealer himself (optional)
    state = 'state_example' # str | To filter listing on State in which they are listed (optional)
    city = 'city_example' # str | To filter listing on City in which they are listed (optional)
    msa_code = 'msa_code_example' # str | To filter listing on msa code in which they are listed (optional)
    dealer_name = 'dealer_name_example' # str | Filter listings on dealer_name (optional)
    dealership_group_name = 'dealership_group_name_example' # str | Name of the dealership group to search for (optional)
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
    sold = True # bool | sold parameter to fetch only sold listings (optional)
    include_relevant_links = False # bool | To include_relevant_links. Default is true (optional) (default to False)
    expired = 'expired_example' # str | Boolean falg to either fetch only the expired listings or active ones (optional)
    exclude_dealer_ids = 'exclude_dealer_ids_example' # str | A list of dealer ids to exclude from result (optional)
    exclude_sources = 'exclude_sources_example' # str | A list of sources to exclude from result (optional)
    in_transit = 'in_transit_example' # str | A boolean to filter in transit vehicles (optional)
    seating_capacity = 'seating_capacity_example' # str | To filter on vehicle seating capacity (optional)
    insurance_group = 'insurance_group_example' # str | Insurance Group (optional)
    vrm = 'vrm_example' # str | To filter on vrm (optional)
    num_owners = 'num_owners_example' # str | Number of owners. Range to be given in the format - min-max e.g. 1000-5000 (optional)
    variant = 'variant_example' # str | To filter listing on their variant (optional)
    postal_code = 'postal_code_example' # str | To filter listing on postal code around which they are listed (optional)
    write_off_category = 'write_off_category_example' # str | write off category (optional)
    fca_status = 'fca_status_example' # str | To filter on fca status (optional)
    active_inventory_date_range = 'active_inventory_date_range_example' # str | date range to filter listings that were active within given date range. Range to be given in the format [YYYYMMDD] - min-max e.g. 20190523-20190623 (optional)
    engine_size_range = 'engine_size_range_example' # str | Engine size range to filter listings with engine size in the given range. Range to be given in the format - min-max e.g. 1.0-2 (optional)
    price_change_range = 'price_change_range_example' # str | Price change range to filter listings with price change within given price_change_range. Range to be given in the format - min-max e.g. 10-500 (optional)

    try:
        # Gets Recent UK car listings for the given search criteria
        api_response = api_instance.search_car_uk_recents_get(api_key=api_key, append_api_key=append_api_key, latitude=latitude, longitude=longitude, radius=radius, zip=zip, include_lease=include_lease, include_finance=include_finance, lease_term=lease_term, lease_down_payment=lease_down_payment, lease_emp=lease_emp, finance_loan_term=finance_loan_term, finance_loan_apr=finance_loan_apr, finance_emp=finance_emp, finance_down_payment=finance_down_payment, finance_down_payment_per=finance_down_payment_per, car_type=car_type, carfax_1_owner=carfax_1_owner, carfax_clean_title=carfax_clean_title, year_range=year_range, year=year, make=make, model=model, trim=trim, dealer_id=dealer_id, source=source, body_type=body_type, body_subtype=body_subtype, vehicle_type=vehicle_type, ymmt=ymmt, match=match, cylinders=cylinders, transmission=transmission, doors=doors, drivetrain=drivetrain, exterior_color=exterior_color, interior_color=interior_color, base_exterior_color=base_exterior_color, base_interior_color=base_interior_color, engine=engine, engine_size=engine_size, engine_aspiration=engine_aspiration, engine_block=engine_block, highway_mpg_range=highway_mpg_range, city_mpg_range=city_mpg_range, combined_mpg_range=combined_mpg_range, miles_range=miles_range, price_range=price_range, msrp_range=msrp_range, dom_range=dom_range, last_seen_range=last_seen_range, first_seen_range=first_seen_range, first_seen_at_source_range=first_seen_at_source_range, first_seen_at_mc_range=first_seen_at_mc_range, last_seen_days=last_seen_days, first_seen_days=first_seen_days, first_seen_at_source_days=first_seen_at_source_days, first_seen_at_mc_days=first_seen_at_mc_days, sort_by=sort_by, sort_order=sort_order, rows=rows, start=start, include_non_vin_listings=include_non_vin_listings, facets=facets, range_facets=range_facets, facet_sort=facet_sort, stats=stats, country=country, plot=plot, nodedup=nodedup, dedup=dedup, owned=owned, state=state, city=city, msa_code=msa_code, dealer_name=dealer_name, dealership_group_name=dealership_group_name, trim_o=trim_o, trim_r=trim_r, dom_active_range=dom_active_range, dom_180_range=dom_180_range, exclude_certified=exclude_certified, fuel_type=fuel_type, dealer_type=dealer_type, photo_links=photo_links, photo_links_cached=photo_links_cached, stock_no=stock_no, sold=sold, include_relevant_links=include_relevant_links, expired=expired, exclude_dealer_ids=exclude_dealer_ids, exclude_sources=exclude_sources, in_transit=in_transit, seating_capacity=seating_capacity, insurance_group=insurance_group, vrm=vrm, num_owners=num_owners, variant=variant, postal_code=postal_code, write_off_category=write_off_category, fca_status=fca_status, active_inventory_date_range=active_inventory_date_range, engine_size_range=engine_size_range, price_change_range=price_change_range)
        print("The response of CarSearchApi->search_car_uk_recents_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling CarSearchApi->search_car_uk_recents_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
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
 **year_range** | **str**| Year range to filter listings with the year in the range given. Range to be given in the format - min-max e.g. 2019-2021 | [optional] 
 **year** | **str**| To filter listing on their year | [optional] 
 **make** | **str**| To filter listings on their make | [optional] 
 **model** | **str**| To filter listings on their model | [optional] 
 **trim** | **str**| To filter listing on their trim | [optional] 
 **dealer_id** | **str**| Dealer id to filter the listings. | [optional] 
 **source** | **str**| To filter listing on their source | [optional] 
 **body_type** | **str**| To filter listing on their body type | [optional] 
 **body_subtype** | **str**| Body subtype to filter the listings on. Valid filter values are those that our Search facets API returns for unique body subtypes. You can pass in multiple body subtype values comma separated | [optional] 
 **vehicle_type** | **str**| To filter listing on their vehicle type | [optional] 
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
 **highway_mpg_range** | **str**| Highway mileage range for UK to filter listings with the mileage in the range given. Range to be given in the format - min-max e.g. 1000-5000 | [optional] 
 **city_mpg_range** | **str**| City mileage range for UK to filter listings with the mileage in the range given. Range to be given in the format - min-max e.g. 1000-5000 | [optional] 
 **combined_mpg_range** | **str**| Combined mileage range for UK to filter listings with the mileage in the range given. Range to be given in the format - min-max e.g. 1000-5000 | [optional] 
 **miles_range** | **str**| Miles range to filter listings with miles in the given range. Range to be given in the format - min-max e.g. 1000-5000 | [optional] 
 **price_range** | **str**| Price range to filter listings with the price in the range given. Range to be given in the format - min-max e.g. 1000-5000 | [optional] 
 **msrp_range** | **str**| MSRP range to filter listings with the msrp in the range given. Range to be given in the format - min-max e.g. 1000-5000 | [optional] 
 **dom_range** | **str**| Days on Market range to filter cars with the DOM within the given range. Range to be given in the format - min-max e.g. 10-50 | [optional] 
 **last_seen_range** | **str**| Last seen date range to filter listings with the last seen in the range given. Range to be given in the format [YYYYMMDD] - min-max e.g. 20190523-20190623 | [optional] 
 **first_seen_range** | **str**| First seen date range to filter listings with the first seen in the range given. Range to be given in the format [YYYYMMDD] - min-max e.g. 20190523-20190623 | [optional] 
 **first_seen_at_source_range** | **str**| First seen at source date range to filter listings with the first seen at source in the range given. Range to be given in the format [YYYYMMDD] - min-max e.g. 20190523-20190623 | [optional] 
 **first_seen_at_mc_range** | **str**| First seen at MC date range to filter listings with the first seen at MC in the range given. Range to be given in the format [YYYYMMDD] - min-max e.g. 20190523-20190623 | [optional] 
 **last_seen_days** | **str**| Last seen days range to filter listings with the last seen in the range given. Range to be given in the format - min-max e.g. 25-12 | [optional] 
 **first_seen_days** | **str**| First seen days range to filter listings with the first seen in the range given. Range to be given in the format - min-max e.g. 25-12 | [optional] 
 **first_seen_at_source_days** | **str**| First seen at source days range to filter listings with the first seen at source in the range given. Range to be given in the format - min-max e.g. 25-12 | [optional] 
 **first_seen_at_mc_days** | **str**| First seen at MC days range to filter listings with the first seen at MC in the range given. Range to be given in the format - min-max e.g. 25-12 | [optional] 
 **sort_by** | **str**| Sort by field. Default sort field is distance from the given point | [optional] 
 **sort_order** | **str**| Sort order - asc or desc. Default sort order is asc | [optional] 
 **rows** | **int**| Number of results to return. Default is 10. Max is 50 | [optional] [default to 10]
 **start** | **int**| Page number to fetch the results for the given criteria. Default is 0. Pagination is allowed only till first 10000 results for the search and sort criteria. The page value can be only between 1 to 10000/rows | [optional] [default to 0]
 **include_non_vin_listings** | **bool**| To include non vin listings. Default is false | [optional] [default to False]
 **facets** | **str**| The comma separated list of fields for which facets are requested. Facets could be requested in addition to the listings for the search. Please note - The API calls with lots of facet fields may take longer to respond. | [optional] 
 **range_facets** | **str**| The comma separated list of numeric fields for which range facets are requested. Range facets could be requested in addition to the listings for the search. Please note - The API calls with lots of range facet fields may take longer to respond. | [optional] 
 **facet_sort** | **str**| Control sort order of facets with this parameter with default sort being on count, Other available sort is alphabetical sort, which can be obtained by using index as value for this param | [optional] [default to count]
 **stats** | **str**| The list of fields for which stats need to be generated based on the matching listings for the search criteria. The stats consists of mean, max, average and count of listings based on which the stats are calculated for the field. Stats could be requested in addition to the listings for the search. Please note - The API calls with the stats fields may take longer to respond. | [optional] 
 **country** | **str**| To filter listing on Country in which they are listed | [optional] [default to uk]
 **plot** | **bool**| If plot has value true results in around 25k coordinates with limited fields to plot respective graph | [optional] 
 **nodedup** | **bool**| If nodedup is set to true then API will give results without is_searchable i.e multiple listings for single vin | [optional] 
 **dedup** | **bool**| If dedup is set to true then will give results with is_searchable irrespecive of dealer_id or source | [optional] 
 **owned** | **bool**| Used in combination with dealer_id or source, when true returns the listings actually owned by dealer himself | [optional] 
 **state** | **str**| To filter listing on State in which they are listed | [optional] 
 **city** | **str**| To filter listing on City in which they are listed | [optional] 
 **msa_code** | **str**| To filter listing on msa code in which they are listed | [optional] 
 **dealer_name** | **str**| Filter listings on dealer_name | [optional] 
 **dealership_group_name** | **str**| Name of the dealership group to search for | [optional] 
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
 **sold** | **bool**| sold parameter to fetch only sold listings | [optional] 
 **include_relevant_links** | **bool**| To include_relevant_links. Default is true | [optional] [default to False]
 **expired** | **str**| Boolean falg to either fetch only the expired listings or active ones | [optional] 
 **exclude_dealer_ids** | **str**| A list of dealer ids to exclude from result | [optional] 
 **exclude_sources** | **str**| A list of sources to exclude from result | [optional] 
 **in_transit** | **str**| A boolean to filter in transit vehicles | [optional] 
 **seating_capacity** | **str**| To filter on vehicle seating capacity | [optional] 
 **insurance_group** | **str**| Insurance Group | [optional] 
 **vrm** | **str**| To filter on vrm | [optional] 
 **num_owners** | **str**| Number of owners. Range to be given in the format - min-max e.g. 1000-5000 | [optional] 
 **variant** | **str**| To filter listing on their variant | [optional] 
 **postal_code** | **str**| To filter listing on postal code around which they are listed | [optional] 
 **write_off_category** | **str**| write off category | [optional] 
 **fca_status** | **str**| To filter on fca status | [optional] 
 **active_inventory_date_range** | **str**| date range to filter listings that were active within given date range. Range to be given in the format [YYYYMMDD] - min-max e.g. 20190523-20190623 | [optional] 
 **engine_size_range** | **str**| Engine size range to filter listings with engine size in the given range. Range to be given in the format - min-max e.g. 1.0-2 | [optional] 
 **price_change_range** | **str**| Price change range to filter listings with price change within given price_change_range. Range to be given in the format - min-max e.g. 10-500 | [optional] 

### Return type

[**UKSearchResponse**](UKSearchResponse.md)

### Authorization

[authorizeEndpoint](../README.md#authorizeEndpoint)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | List of all cars listings matching the search &amp; filter criteria |  -  |
**0** | Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

