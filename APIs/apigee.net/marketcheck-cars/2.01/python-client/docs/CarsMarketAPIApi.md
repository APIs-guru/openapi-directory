# openapi_client.CarsMarketAPIApi

All URIs are relative to *https://marketcheck-prod.apigee.net/v2*

Method | HTTP request | Description
------------- | ------------- | -------------
[**fare_value**](CarsMarketAPIApi.md#fare_value) | **GET** /predict/car/uk/fmv | Predict fare value of car for UK based on YMMT &amp; miles
[**get_daily_stats**](CarsMarketAPIApi.md#get_daily_stats) | **GET** /stats/car | Price, Miles and Days on Market stats
[**get_mds**](CarsMarketAPIApi.md#get_mds) | **GET** /mds/car | Market Days Supply
[**get_popular_cars**](CarsMarketAPIApi.md#get_popular_cars) | **GET** /popular/cars | Get make model wise top 50 popular cars on national, state, city level
[**get_sales_count**](CarsMarketAPIApi.md#get_sales_count) | **GET** /sales/car | Get sales count by make, model, year, trim or taxonomy vin
[**predict_car_price**](CarsMarketAPIApi.md#predict_car_price) | **GET** /predict/car/price | Predict car price based on it&#39;s specifications
[**predict_uk_car_price**](CarsMarketAPIApi.md#predict_uk_car_price) | **GET** /predict/car/uk/price | Predict car price for UK based on it&#39;s specifications


# **fare_value**
> FareValue fare_value(api_key=api_key, vrm=vrm, year=year, make=make, model=model, variant=variant, miles=miles, postal_code=postal_code, radius=radius)

Predict fare value of car for UK based on YMMT & miles

Predict fare value of car for UK based on YMMT & miles

### Example

* Basic Authentication (authorizeEndpoint):

```python
import openapi_client
from openapi_client.models.fare_value import FareValue
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
    api_instance = openapi_client.CarsMarketAPIApi(api_client)
    api_key = 'api_key_example' # str | The API Authentication Key. Mandatory with all API calls. (optional)
    vrm = 'vrm_example' # str | Predict price for a VRM (optional)
    year = 56 # int | Car manufacturing year (optional)
    make = 'make_example' # str | Car's make (optional)
    model = 'model_example' # str | Car's model (optional)
    variant = 'variant_example' # str | Car's variant (optional)
    miles = 56 # int | miles vehicle has driven in total (optional)
    postal_code = 'postal_code_example' # str | Postal code of the car (optional)
    radius = 56 # int | Radius around the search location (Unit - Miles) (optional)

    try:
        # Predict fare value of car for UK based on YMMT & miles
        api_response = api_instance.fare_value(api_key=api_key, vrm=vrm, year=year, make=make, model=model, variant=variant, miles=miles, postal_code=postal_code, radius=radius)
        print("The response of CarsMarketAPIApi->fare_value:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling CarsMarketAPIApi->fare_value: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_key** | **str**| The API Authentication Key. Mandatory with all API calls. | [optional] 
 **vrm** | **str**| Predict price for a VRM | [optional] 
 **year** | **int**| Car manufacturing year | [optional] 
 **make** | **str**| Car&#39;s make | [optional] 
 **model** | **str**| Car&#39;s model | [optional] 
 **variant** | **str**| Car&#39;s variant | [optional] 
 **miles** | **int**| miles vehicle has driven in total | [optional] 
 **postal_code** | **str**| Postal code of the car | [optional] 
 **radius** | **int**| Radius around the search location (Unit - Miles) | [optional] 

### Return type

[**FareValue**](FareValue.md)

### Authorization

[authorizeEndpoint](../README.md#authorizeEndpoint)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Predict fare value of car for UK based on YMMT &amp; miles |  -  |
**0** | Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_daily_stats**
> DailyStats get_daily_stats(api_key=api_key, country=country, car_type=car_type, ymm=ymm, ymmt=ymmt, taxonomy_vin=taxonomy_vin, vin=vin, state=state, city_state=city_state)

Price, Miles and Days on Market stats

National, state and city level stats for price, miles and dom

### Example

* Basic Authentication (authorizeEndpoint):

```python
import openapi_client
from openapi_client.models.daily_stats import DailyStats
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
    api_instance = openapi_client.CarsMarketAPIApi(api_client)
    api_key = 'api_key_example' # str | The API Authentication Key. Mandatory with all API calls. (optional)
    country = us # str | Country for which the stats are to be searched (optional) (default to us)
    car_type = used # str | Inventory type for which stats are to be searched, default is used (optional) (default to used)
    ymm = 'ymm_example' # str | Year, Make, Model of the car, Separated by pipe e.g. ymm=2015|ford|f-150 (optional)
    ymmt = 'ymmt_example' # str | Year, Make, Model, Trim of the car, Separated by pipe e.g. ymmt=2015|ford|f-150|platinum (optional)
    taxonomy_vin = 'taxonomy_vin_example' # str | Taxonomy vin for referance to find stats of similar cars (optional)
    vin = 'vin_example' # str | VIN that will be transformed to taxonomy_vin (optional)
    state = 'state_example' # str | State level stats (optional)
    city_state = 'city_state_example' # str | City level stats, pipe seperated like city_state=jacksonville|FL (optional)

    try:
        # Price, Miles and Days on Market stats
        api_response = api_instance.get_daily_stats(api_key=api_key, country=country, car_type=car_type, ymm=ymm, ymmt=ymmt, taxonomy_vin=taxonomy_vin, vin=vin, state=state, city_state=city_state)
        print("The response of CarsMarketAPIApi->get_daily_stats:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling CarsMarketAPIApi->get_daily_stats: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_key** | **str**| The API Authentication Key. Mandatory with all API calls. | [optional] 
 **country** | **str**| Country for which the stats are to be searched | [optional] [default to us]
 **car_type** | **str**| Inventory type for which stats are to be searched, default is used | [optional] [default to used]
 **ymm** | **str**| Year, Make, Model of the car, Separated by pipe e.g. ymm&#x3D;2015|ford|f-150 | [optional] 
 **ymmt** | **str**| Year, Make, Model, Trim of the car, Separated by pipe e.g. ymmt&#x3D;2015|ford|f-150|platinum | [optional] 
 **taxonomy_vin** | **str**| Taxonomy vin for referance to find stats of similar cars | [optional] 
 **vin** | **str**| VIN that will be transformed to taxonomy_vin | [optional] 
 **state** | **str**| State level stats | [optional] 
 **city_state** | **str**| City level stats, pipe seperated like city_state&#x3D;jacksonville|FL | [optional] 

### Return type

[**DailyStats**](DailyStats.md)

### Authorization

[authorizeEndpoint](../README.md#authorizeEndpoint)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Data with Market averages and stats |  -  |
**0** | Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_mds**
> Mds get_mds(api_key=api_key, vin=vin, exact=exact, latitude=latitude, longitude=longitude, radius=radius, zip=zip, msa_code=msa_code, debug=debug, include_sold=include_sold, country=country, state=state, city=city, ymmt=ymmt, car_type=car_type, lease_term=lease_term, lease_down_payment=lease_down_payment, lease_emp=lease_emp, finance_loan_term=finance_loan_term, finance_loan_apr=finance_loan_apr, finance_emp=finance_emp, finance_down_payment=finance_down_payment, finance_down_payment_per=finance_down_payment_per, carfax_1_owner=carfax_1_owner, carfax_clean_title=carfax_clean_title, year=year, make=make, model=model, trim=trim, dealer_id=dealer_id, source=source, body_type=body_type, body_subtype=body_subtype, vehicle_type=vehicle_type, cylinders=cylinders, transmission=transmission, doors=doors, drivetrain=drivetrain, exterior_color=exterior_color, interior_color=interior_color, base_exterior_color=base_exterior_color, base_interior_color=base_interior_color, engine=engine, engine_size=engine_size, engine_aspiration=engine_aspiration, engine_block=engine_block, highway_mpg_range=highway_mpg_range, city_mpg_range=city_mpg_range, miles_range=miles_range, price_range=price_range, msrp_range=msrp_range, dom_range=dom_range, dealership_group_name=dealership_group_name, dom_active_range=dom_active_range, dom_180_range=dom_180_range, fuel_type=fuel_type, dealer_type=dealer_type, engine_size_range=engine_size_range)

Market Days Supply

Get the basic information on specifications for a car identified by a valid VIN

### Example

* Basic Authentication (authorizeEndpoint):

```python
import openapi_client
from openapi_client.models.mds import Mds
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
    api_instance = openapi_client.CarsMarketAPIApi(api_client)
    api_key = 'api_key_example' # str | The API Authentication Key. Mandatory with all API calls. (optional)
    vin = 'vin_example' # str | VIN to decode (optional)
    exact = False # bool | Exact parameter (optional) (default to False)
    latitude = 3.4 # float | Latitude component of location (optional)
    longitude = 3.4 # float | Longitude component of location (optional)
    radius = 56 # int | Radius around the search location (Unit - Miles) (optional)
    zip = 'zip_example' # str | To filter listing on ZIP around which they are listed (optional)
    msa_code = 'msa_code_example' # str | To filter listing on msa code in which they are listed (optional)
    debug = False # bool | Debug parameter (optional) (default to False)
    include_sold = False # bool | To fetch sold vins (optional) (default to False)
    country = US # str | To filter listing on Country in which they are listed (optional) (default to US)
    state = 'state_example' # str | To filter listing on State in which they are listed (optional)
    city = 'city_example' # str | To filter listing on City in which they are listed (optional)
    ymmt = 'ymmt_example' # str | Comma separated list of Year, Make, Model, Trim combinations. Each combination needs to have the year,make,model, trim values separated by a pipe '|' character in the form year|make|model|trim. e.g. 2010|Audi|A5,2014|Nissan|Sentra|S 6MT,|Honda|City|   You could just provide strings of the form - 'year|make||' or 'year|make|model' or '|make|model|' combinations. Individual year / make / model filters provied with the API calls will take precedence over the Year, Make, Model, Trim combinations. The Make, Model, Trim values must be valid values as per the Marketcheck Vin Decoder. If you are using a separate vin decoder then look at using the 'vins' or 'taxonomy_vins' parameter to the search api instead the year|make|model|trim combinations. (optional)
    car_type = 'car_type_example' # str | Car type. Allowed values are - new / used / certified (optional)
    lease_term = 'lease_term_example' # str | Search listings with exact lease term, or inside a range with min and max seperated by a dash like lease_term=30-60 (optional)
    lease_down_payment = 'lease_down_payment_example' # str | Search listings with exact down payment in lease offers, or inside a range with min and max seperated by a dash like lease_down_payment=30-60 (optional)
    lease_emp = 'lease_emp_example' # str | Search listings with lease offers exactly matching Estimated Monthly Payment(EMI), or inside a range with min and max seperated by a dash like lease_emp=30-60 (optional)
    finance_loan_term = 'finance_loan_term_example' # str | Search listings with exact finance loan term, or inside a range with min and max seperated by a dash like finance_loan_term=30-60 (optional)
    finance_loan_apr = 'finance_loan_apr_example' # str | Search listings with finance offers exactly matching loans Annual Percentage Rate, or inside a range with min and max seperated by a dash like finance_loan_apr=30-60 (optional)
    finance_emp = 'finance_emp_example' # str | Search listings with finance offers exactly matching Estimated Monthly Payment(EMI), or inside a range with min and max seperated by a dash like finance_emp=30-60 (optional)
    finance_down_payment = 'finance_down_payment_example' # str | Search listings with exact down payment in finance offers, or inside a range with min and max seperated by a dash like finance_down_payment=30-60 (optional)
    finance_down_payment_per = 'finance_down_payment_per_example' # str | Search listings with exact down payment percentage in finance offers, or inside a range with min and max seperated by a dash like finance_down_payment_per=30-60 (optional)
    carfax_1_owner = 'carfax_1_owner_example' # str | Indicates whether car has had only one owner or not (optional)
    carfax_clean_title = 'carfax_clean_title_example' # str | Indicates whether car has clean ownership records (optional)
    year = 'year_example' # str | To filter listing on their year (optional)
    make = 'make_example' # str | To filter listings on their make (optional)
    model = 'model_example' # str | To filter listings on their model (optional)
    trim = 'trim_example' # str | To filter listing on their trim (optional)
    dealer_id = 'dealer_id_example' # str | Dealer id to filter the listings. (optional)
    source = 'source_example' # str | To filter listing on their source (optional)
    body_type = 'body_type_example' # str | To filter listing on their body type (optional)
    body_subtype = 'body_subtype_example' # str | Body subtype to filter the listings on. Valid filter values are those that our Search facets API returns for unique body subtypes. You can pass in multiple body subtype values comma separated (optional)
    vehicle_type = 'vehicle_type_example' # str | To filter listing on their vehicle type (optional)
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
    dealership_group_name = 'dealership_group_name_example' # str | Name of the dealership group to search for (optional)
    dom_active_range = 'dom_active_range_example' # str | Active Days on Market range to filter cars with the DOM within the given range. Range to be given in the format - min-max e.g. 10-50 (optional)
    dom_180_range = 'dom_180_range_example' # str | Last 180 Days on Market range to filter cars with the DOM within the given range. Range to be given in the format - min-max e.g. 10-50 (optional)
    fuel_type = 'fuel_type_example' # str | To filter listing on their fuel type (optional)
    dealer_type = 'dealer_type_example' # str | Filter based on dealer type independant or franchise (optional)
    engine_size_range = 'engine_size_range_example' # str | Engine size range to filter listings with engine size in the given range. Range to be given in the format - min-max e.g. 1.0-2 (optional)

    try:
        # Market Days Supply
        api_response = api_instance.get_mds(api_key=api_key, vin=vin, exact=exact, latitude=latitude, longitude=longitude, radius=radius, zip=zip, msa_code=msa_code, debug=debug, include_sold=include_sold, country=country, state=state, city=city, ymmt=ymmt, car_type=car_type, lease_term=lease_term, lease_down_payment=lease_down_payment, lease_emp=lease_emp, finance_loan_term=finance_loan_term, finance_loan_apr=finance_loan_apr, finance_emp=finance_emp, finance_down_payment=finance_down_payment, finance_down_payment_per=finance_down_payment_per, carfax_1_owner=carfax_1_owner, carfax_clean_title=carfax_clean_title, year=year, make=make, model=model, trim=trim, dealer_id=dealer_id, source=source, body_type=body_type, body_subtype=body_subtype, vehicle_type=vehicle_type, cylinders=cylinders, transmission=transmission, doors=doors, drivetrain=drivetrain, exterior_color=exterior_color, interior_color=interior_color, base_exterior_color=base_exterior_color, base_interior_color=base_interior_color, engine=engine, engine_size=engine_size, engine_aspiration=engine_aspiration, engine_block=engine_block, highway_mpg_range=highway_mpg_range, city_mpg_range=city_mpg_range, miles_range=miles_range, price_range=price_range, msrp_range=msrp_range, dom_range=dom_range, dealership_group_name=dealership_group_name, dom_active_range=dom_active_range, dom_180_range=dom_180_range, fuel_type=fuel_type, dealer_type=dealer_type, engine_size_range=engine_size_range)
        print("The response of CarsMarketAPIApi->get_mds:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling CarsMarketAPIApi->get_mds: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_key** | **str**| The API Authentication Key. Mandatory with all API calls. | [optional] 
 **vin** | **str**| VIN to decode | [optional] 
 **exact** | **bool**| Exact parameter | [optional] [default to False]
 **latitude** | **float**| Latitude component of location | [optional] 
 **longitude** | **float**| Longitude component of location | [optional] 
 **radius** | **int**| Radius around the search location (Unit - Miles) | [optional] 
 **zip** | **str**| To filter listing on ZIP around which they are listed | [optional] 
 **msa_code** | **str**| To filter listing on msa code in which they are listed | [optional] 
 **debug** | **bool**| Debug parameter | [optional] [default to False]
 **include_sold** | **bool**| To fetch sold vins | [optional] [default to False]
 **country** | **str**| To filter listing on Country in which they are listed | [optional] [default to US]
 **state** | **str**| To filter listing on State in which they are listed | [optional] 
 **city** | **str**| To filter listing on City in which they are listed | [optional] 
 **ymmt** | **str**| Comma separated list of Year, Make, Model, Trim combinations. Each combination needs to have the year,make,model, trim values separated by a pipe &#39;|&#39; character in the form year|make|model|trim. e.g. 2010|Audi|A5,2014|Nissan|Sentra|S 6MT,|Honda|City|   You could just provide strings of the form - &#39;year|make||&#39; or &#39;year|make|model&#39; or &#39;|make|model|&#39; combinations. Individual year / make / model filters provied with the API calls will take precedence over the Year, Make, Model, Trim combinations. The Make, Model, Trim values must be valid values as per the Marketcheck Vin Decoder. If you are using a separate vin decoder then look at using the &#39;vins&#39; or &#39;taxonomy_vins&#39; parameter to the search api instead the year|make|model|trim combinations. | [optional] 
 **car_type** | **str**| Car type. Allowed values are - new / used / certified | [optional] 
 **lease_term** | **str**| Search listings with exact lease term, or inside a range with min and max seperated by a dash like lease_term&#x3D;30-60 | [optional] 
 **lease_down_payment** | **str**| Search listings with exact down payment in lease offers, or inside a range with min and max seperated by a dash like lease_down_payment&#x3D;30-60 | [optional] 
 **lease_emp** | **str**| Search listings with lease offers exactly matching Estimated Monthly Payment(EMI), or inside a range with min and max seperated by a dash like lease_emp&#x3D;30-60 | [optional] 
 **finance_loan_term** | **str**| Search listings with exact finance loan term, or inside a range with min and max seperated by a dash like finance_loan_term&#x3D;30-60 | [optional] 
 **finance_loan_apr** | **str**| Search listings with finance offers exactly matching loans Annual Percentage Rate, or inside a range with min and max seperated by a dash like finance_loan_apr&#x3D;30-60 | [optional] 
 **finance_emp** | **str**| Search listings with finance offers exactly matching Estimated Monthly Payment(EMI), or inside a range with min and max seperated by a dash like finance_emp&#x3D;30-60 | [optional] 
 **finance_down_payment** | **str**| Search listings with exact down payment in finance offers, or inside a range with min and max seperated by a dash like finance_down_payment&#x3D;30-60 | [optional] 
 **finance_down_payment_per** | **str**| Search listings with exact down payment percentage in finance offers, or inside a range with min and max seperated by a dash like finance_down_payment_per&#x3D;30-60 | [optional] 
 **carfax_1_owner** | **str**| Indicates whether car has had only one owner or not | [optional] 
 **carfax_clean_title** | **str**| Indicates whether car has clean ownership records | [optional] 
 **year** | **str**| To filter listing on their year | [optional] 
 **make** | **str**| To filter listings on their make | [optional] 
 **model** | **str**| To filter listings on their model | [optional] 
 **trim** | **str**| To filter listing on their trim | [optional] 
 **dealer_id** | **str**| Dealer id to filter the listings. | [optional] 
 **source** | **str**| To filter listing on their source | [optional] 
 **body_type** | **str**| To filter listing on their body type | [optional] 
 **body_subtype** | **str**| Body subtype to filter the listings on. Valid filter values are those that our Search facets API returns for unique body subtypes. You can pass in multiple body subtype values comma separated | [optional] 
 **vehicle_type** | **str**| To filter listing on their vehicle type | [optional] 
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
 **dealership_group_name** | **str**| Name of the dealership group to search for | [optional] 
 **dom_active_range** | **str**| Active Days on Market range to filter cars with the DOM within the given range. Range to be given in the format - min-max e.g. 10-50 | [optional] 
 **dom_180_range** | **str**| Last 180 Days on Market range to filter cars with the DOM within the given range. Range to be given in the format - min-max e.g. 10-50 | [optional] 
 **fuel_type** | **str**| To filter listing on their fuel type | [optional] 
 **dealer_type** | **str**| Filter based on dealer type independant or franchise | [optional] 
 **engine_size_range** | **str**| Engine size range to filter listings with engine size in the given range. Range to be given in the format - min-max e.g. 1.0-2 | [optional] 

### Return type

[**Mds**](Mds.md)

### Authorization

[authorizeEndpoint](../README.md#authorizeEndpoint)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Provides Market Days supply for year make model or trim combination |  -  |
**0** | Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_popular_cars**
> PopularCars get_popular_cars(car_type, api_key=api_key, state=state, city_state=city_state, country=country)

Get make model wise top 50 popular cars on national, state, city level

Get make model wise top 50 popular cars on national, state, city level

### Example

* Basic Authentication (authorizeEndpoint):

```python
import openapi_client
from openapi_client.models.popular_cars import PopularCars
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
    api_instance = openapi_client.CarsMarketAPIApi(api_client)
    car_type = 'car_type_example' # str | Inventory type for which popular count is to be searched
    api_key = 'api_key_example' # str | The API Authentication Key. Mandatory with all API calls. (optional)
    state = 'state_example' # str | State level sales count (optional)
    city_state = 'city_state_example' # str | City level sales count, pipe seperated like city_state=jacksonville|FL (optional)
    country = us # str | Country for which the popular cars are to be searched (optional) (default to us)

    try:
        # Get make model wise top 50 popular cars on national, state, city level
        api_response = api_instance.get_popular_cars(car_type, api_key=api_key, state=state, city_state=city_state, country=country)
        print("The response of CarsMarketAPIApi->get_popular_cars:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling CarsMarketAPIApi->get_popular_cars: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **car_type** | **str**| Inventory type for which popular count is to be searched | 
 **api_key** | **str**| The API Authentication Key. Mandatory with all API calls. | [optional] 
 **state** | **str**| State level sales count | [optional] 
 **city_state** | **str**| City level sales count, pipe seperated like city_state&#x3D;jacksonville|FL | [optional] 
 **country** | **str**| Country for which the popular cars are to be searched | [optional] [default to us]

### Return type

[**PopularCars**](PopularCars.md)

### Authorization

[authorizeEndpoint](../README.md#authorizeEndpoint)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | List of most popular top 50 cars |  -  |
**0** | Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_sales_count**
> Sales get_sales_count(api_key=api_key, car_type=car_type, make=make, mm=mm, ymm=ymm, ymmt=ymmt, taxonomy_vin=taxonomy_vin, state=state, city_state=city_state, vin=vin, country=country)

Get sales count by make, model, year, trim or taxonomy vin

Get a sales count for city, state or national level by make, model, year, trim or taxonomy vin

### Example

* Basic Authentication (authorizeEndpoint):

```python
import openapi_client
from openapi_client.models.sales import Sales
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
    api_instance = openapi_client.CarsMarketAPIApi(api_client)
    api_key = 'api_key_example' # str | The API Authentication Key. Mandatory with all API calls. (optional)
    car_type = used # str | Inventory type for which sales count is to be searched, default is used (optional) (default to used)
    make = 'make_example' # str | Make for which sales count is to be searched (optional)
    mm = 'mm_example' # str | Make-Model for which sales count is to be searched, pipe seperated like mm=ford|f-150 (optional)
    ymm = 'ymm_example' # str | Year-Make-Model for which sales count is to be searched, pipe seperated like ymm=2015|ford|f-150 (optional)
    ymmt = 'ymmt_example' # str | Year-Make-Model-Trim for which sales count is to be searched, pipe seperated like ymmt=2015|ford|f-150|platinum (optional)
    taxonomy_vin = 'taxonomy_vin_example' # str | taxonomy_vin for which sales count is to be searched (optional)
    state = 'state_example' # str | State level sales count (optional)
    city_state = 'city_state_example' # str | City level sales count, pipe seperated like city_state=jacksonville|FL (optional)
    vin = 'vin_example' # str | VIN that will be transformed to taxonomy_vin (optional)
    country = us # str | Country for which the sales records are to be searched (optional) (default to us)

    try:
        # Get sales count by make, model, year, trim or taxonomy vin
        api_response = api_instance.get_sales_count(api_key=api_key, car_type=car_type, make=make, mm=mm, ymm=ymm, ymmt=ymmt, taxonomy_vin=taxonomy_vin, state=state, city_state=city_state, vin=vin, country=country)
        print("The response of CarsMarketAPIApi->get_sales_count:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling CarsMarketAPIApi->get_sales_count: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_key** | **str**| The API Authentication Key. Mandatory with all API calls. | [optional] 
 **car_type** | **str**| Inventory type for which sales count is to be searched, default is used | [optional] [default to used]
 **make** | **str**| Make for which sales count is to be searched | [optional] 
 **mm** | **str**| Make-Model for which sales count is to be searched, pipe seperated like mm&#x3D;ford|f-150 | [optional] 
 **ymm** | **str**| Year-Make-Model for which sales count is to be searched, pipe seperated like ymm&#x3D;2015|ford|f-150 | [optional] 
 **ymmt** | **str**| Year-Make-Model-Trim for which sales count is to be searched, pipe seperated like ymmt&#x3D;2015|ford|f-150|platinum | [optional] 
 **taxonomy_vin** | **str**| taxonomy_vin for which sales count is to be searched | [optional] 
 **state** | **str**| State level sales count | [optional] 
 **city_state** | **str**| City level sales count, pipe seperated like city_state&#x3D;jacksonville|FL | [optional] 
 **vin** | **str**| VIN that will be transformed to taxonomy_vin | [optional] 
 **country** | **str**| Country for which the sales records are to be searched | [optional] [default to us]

### Return type

[**Sales**](Sales.md)

### Authorization

[authorizeEndpoint](../README.md#authorizeEndpoint)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Sales count for given parameters |  -  |
**0** | Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **predict_car_price**
> PricePrediction predict_car_price(car_type, api_key=api_key, vin=vin, year=year, make=make, model=model, trim=trim, is_certified=is_certified, carfax_1_owner=carfax_1_owner, carfax_clean_title=carfax_clean_title, base_exterior_color=base_exterior_color, base_interior_color=base_interior_color, transmission=transmission, drivetrain=drivetrain, engine_size=engine_size, engine_block=engine_block, cylinders=cylinders, doors=doors, highway_mpg=highway_mpg, city_mpg=city_mpg, latitude=latitude, longitude=longitude, miles=miles, zip=zip, country=country)

Predict car price based on it's specifications

Predict car price based on it's specifications

### Example

* Basic Authentication (authorizeEndpoint):

```python
import openapi_client
from openapi_client.models.price_prediction import PricePrediction
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
    api_instance = openapi_client.CarsMarketAPIApi(api_client)
    car_type = 'car_type_example' # str | Car condition
    api_key = 'api_key_example' # str | The API Authentication Key. Mandatory with all API calls. (optional)
    vin = 'vin_example' # str | Predict price for a VIN (optional)
    year = 56 # int | Car manufacturing year (optional)
    make = 'make_example' # str | Car's make (optional)
    model = 'model_example' # str | Car's model (optional)
    trim = 'trim_example' # str | Car's trim (optional)
    is_certified = True # bool | Boolean to indicate car is certified or not (optional)
    carfax_1_owner = True # bool | Boolean to indicate car is carfax one owner or not (optional)
    carfax_clean_title = True # bool | Boolean to indicate car has clean title or not (optional)
    base_exterior_color = 'base_exterior_color_example' # str | Base exterior color of the car (optional)
    base_interior_color = 'base_interior_color_example' # str | Base interior color of the car (optional)
    transmission = 'transmission_example' # str | Transmission on the car (optional)
    drivetrain = 'drivetrain_example' # str | Drivetrain on the car (optional)
    engine_size = 3.4 # float | Engine Size of the car (optional)
    engine_block = 'engine_block_example' # str | Engine Block of the car (optional)
    cylinders = 56 # int | Number of cylinders in the vehicle (optional)
    doors = 56 # int | Number of doors in the vehicle (optional)
    highway_mpg = 56 # int | Highway mileage (optional)
    city_mpg = 56 # int | City mileage of the car (optional)
    latitude = 3.4 # float | Latitude component of the location (optional)
    longitude = 3.4 # float | Longitude component of the location (optional)
    miles = 56 # int | miles vehicle has driven in total (optional)
    zip = 'zip_example' # str | Location zip (optional)
    country = us # str | Country for which car price will be predicted (optional) (default to us)

    try:
        # Predict car price based on it's specifications
        api_response = api_instance.predict_car_price(car_type, api_key=api_key, vin=vin, year=year, make=make, model=model, trim=trim, is_certified=is_certified, carfax_1_owner=carfax_1_owner, carfax_clean_title=carfax_clean_title, base_exterior_color=base_exterior_color, base_interior_color=base_interior_color, transmission=transmission, drivetrain=drivetrain, engine_size=engine_size, engine_block=engine_block, cylinders=cylinders, doors=doors, highway_mpg=highway_mpg, city_mpg=city_mpg, latitude=latitude, longitude=longitude, miles=miles, zip=zip, country=country)
        print("The response of CarsMarketAPIApi->predict_car_price:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling CarsMarketAPIApi->predict_car_price: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **car_type** | **str**| Car condition | 
 **api_key** | **str**| The API Authentication Key. Mandatory with all API calls. | [optional] 
 **vin** | **str**| Predict price for a VIN | [optional] 
 **year** | **int**| Car manufacturing year | [optional] 
 **make** | **str**| Car&#39;s make | [optional] 
 **model** | **str**| Car&#39;s model | [optional] 
 **trim** | **str**| Car&#39;s trim | [optional] 
 **is_certified** | **bool**| Boolean to indicate car is certified or not | [optional] 
 **carfax_1_owner** | **bool**| Boolean to indicate car is carfax one owner or not | [optional] 
 **carfax_clean_title** | **bool**| Boolean to indicate car has clean title or not | [optional] 
 **base_exterior_color** | **str**| Base exterior color of the car | [optional] 
 **base_interior_color** | **str**| Base interior color of the car | [optional] 
 **transmission** | **str**| Transmission on the car | [optional] 
 **drivetrain** | **str**| Drivetrain on the car | [optional] 
 **engine_size** | **float**| Engine Size of the car | [optional] 
 **engine_block** | **str**| Engine Block of the car | [optional] 
 **cylinders** | **int**| Number of cylinders in the vehicle | [optional] 
 **doors** | **int**| Number of doors in the vehicle | [optional] 
 **highway_mpg** | **int**| Highway mileage | [optional] 
 **city_mpg** | **int**| City mileage of the car | [optional] 
 **latitude** | **float**| Latitude component of the location | [optional] 
 **longitude** | **float**| Longitude component of the location | [optional] 
 **miles** | **int**| miles vehicle has driven in total | [optional] 
 **zip** | **str**| Location zip | [optional] 
 **country** | **str**| Country for which car price will be predicted | [optional] [default to us]

### Return type

[**PricePrediction**](PricePrediction.md)

### Authorization

[authorizeEndpoint](../README.md#authorizeEndpoint)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Predicted price of the car along with it&#39;s specifications |  -  |
**0** | Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **predict_uk_car_price**
> PricePrediction predict_uk_car_price(api_key=api_key, vrm=vrm, year=year, make=make, model=model, trim=trim, base_exterior_color=base_exterior_color, transmission=transmission, drivetrain=drivetrain, engine_size=engine_size, cylinders=cylinders, doors=doors, fuel_type=fuel_type, highway_mpg=highway_mpg, city_mpg=city_mpg, combined_mpg=combined_mpg, latitude=latitude, longitude=longitude, miles=miles, zip=zip)

Predict car price for UK based on it's specifications

Predict car price for UK based on it's specifications

### Example

* Basic Authentication (authorizeEndpoint):

```python
import openapi_client
from openapi_client.models.price_prediction import PricePrediction
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
    api_instance = openapi_client.CarsMarketAPIApi(api_client)
    api_key = 'api_key_example' # str | The API Authentication Key. Mandatory with all API calls. (optional)
    vrm = 'vrm_example' # str | Predict price for a VRM (optional)
    year = 56 # int | Car manufacturing year (optional)
    make = 'make_example' # str | Car's make (optional)
    model = 'model_example' # str | Car's model (optional)
    trim = 'trim_example' # str | Car's trim (optional)
    base_exterior_color = 'base_exterior_color_example' # str | Base exterior color of the car (optional)
    transmission = 'transmission_example' # str | Transmission on the car (optional)
    drivetrain = 'drivetrain_example' # str | Drivetrain on the car (optional)
    engine_size = 3.4 # float | Engine Size of the car (optional)
    cylinders = 56 # int | Number of cylinders in the vehicle (optional)
    doors = 56 # int | Number of doors in the vehicle (optional)
    fuel_type = 'fuel_type_example' # str | Fuel type of the car (optional)
    highway_mpg = 3.4 # float | Highway mileage (optional)
    city_mpg = 3.4 # float | City mileage of the car (optional)
    combined_mpg = 3.4 # float | Combiined mileage of the car (optional)
    latitude = 3.4 # float | Latitude component of the location (optional)
    longitude = 3.4 # float | Longitude component of the location (optional)
    miles = 56 # int | miles vehicle has driven in total (optional)
    zip = 'zip_example' # str | Location zip (optional)

    try:
        # Predict car price for UK based on it's specifications
        api_response = api_instance.predict_uk_car_price(api_key=api_key, vrm=vrm, year=year, make=make, model=model, trim=trim, base_exterior_color=base_exterior_color, transmission=transmission, drivetrain=drivetrain, engine_size=engine_size, cylinders=cylinders, doors=doors, fuel_type=fuel_type, highway_mpg=highway_mpg, city_mpg=city_mpg, combined_mpg=combined_mpg, latitude=latitude, longitude=longitude, miles=miles, zip=zip)
        print("The response of CarsMarketAPIApi->predict_uk_car_price:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling CarsMarketAPIApi->predict_uk_car_price: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_key** | **str**| The API Authentication Key. Mandatory with all API calls. | [optional] 
 **vrm** | **str**| Predict price for a VRM | [optional] 
 **year** | **int**| Car manufacturing year | [optional] 
 **make** | **str**| Car&#39;s make | [optional] 
 **model** | **str**| Car&#39;s model | [optional] 
 **trim** | **str**| Car&#39;s trim | [optional] 
 **base_exterior_color** | **str**| Base exterior color of the car | [optional] 
 **transmission** | **str**| Transmission on the car | [optional] 
 **drivetrain** | **str**| Drivetrain on the car | [optional] 
 **engine_size** | **float**| Engine Size of the car | [optional] 
 **cylinders** | **int**| Number of cylinders in the vehicle | [optional] 
 **doors** | **int**| Number of doors in the vehicle | [optional] 
 **fuel_type** | **str**| Fuel type of the car | [optional] 
 **highway_mpg** | **float**| Highway mileage | [optional] 
 **city_mpg** | **float**| City mileage of the car | [optional] 
 **combined_mpg** | **float**| Combiined mileage of the car | [optional] 
 **latitude** | **float**| Latitude component of the location | [optional] 
 **longitude** | **float**| Longitude component of the location | [optional] 
 **miles** | **int**| miles vehicle has driven in total | [optional] 
 **zip** | **str**| Location zip | [optional] 

### Return type

[**PricePrediction**](PricePrediction.md)

### Authorization

[authorizeEndpoint](../README.md#authorizeEndpoint)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Predicted price of the car along with it&#39;s specifications |  -  |
**0** | Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

