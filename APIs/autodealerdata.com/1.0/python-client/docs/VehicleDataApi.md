# openapi_client.VehicleDataApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**get_history2_vehicle_history_get**](VehicleDataApi.md#get_history2_vehicle_history_get) | **GET** /vehicleHistory | Premium. Simple Vehicle History Report
[**get_listings2_listings2_get**](VehicleDataApi.md#get_listings2_listings2_get) | **GET** /listings2 | Flexible Listing Search
[**get_listings_by_dealer_listings_by_date_get**](VehicleDataApi.md#get_listings_by_dealer_listings_by_date_get) | **GET** /listingsByDate | Listings by Dealer ID and Date
[**get_listings_by_dealer_listings_get**](VehicleDataApi.md#get_listings_by_dealer_listings_get) | **GET** /listings | Listings by Dealer ID
[**get_listings_by_region_and_date_listings_by_region_and_date_get**](VehicleDataApi.md#get_listings_by_region_and_date_listings_by_region_and_date_get) | **GET** /listingsByRegionAndDate | Listings by Region and Date
[**get_listings_by_region_listings_by_region_get**](VehicleDataApi.md#get_listings_by_region_listings_by_region_get) | **GET** /listingsByRegion | Listings by Region
[**get_market3_similar_sale_price_get**](VehicleDataApi.md#get_market3_similar_sale_price_get) | **GET** /similarSalePrice | Premium. Simple Vehicle Market Report
[**get_market4_valuation_get**](VehicleDataApi.md#get_market4_valuation_get) | **GET** /valuation | Premium. Simple Vehicle Market Report Over Arbitrary Locations and Vehicles.
[**get_vehicle_seen_vehicle_seen_get**](VehicleDataApi.md#get_vehicle_seen_vehicle_seen_get) | **GET** /vehicleSeen | Checks if a VIN appeared on the market on or after a given date.
[**listings_by_zip_code_and_date_listings_by_zip_code_and_date_get**](VehicleDataApi.md#listings_by_zip_code_and_date_listings_by_zip_code_and_date_get) | **GET** /listingsByZipCodeAndDate | Listings by ZipCode and Date
[**listings_by_zip_code_listings_by_zip_code_get**](VehicleDataApi.md#listings_by_zip_code_listings_by_zip_code_get) | **GET** /listingsByZipCode | Listings by ZipCode
[**vin_decode_vin_decode_get**](VehicleDataApi.md#vin_decode_vin_decode_get) | **GET** /vinDecode | Vin decoder and Recall Info


# **get_history2_vehicle_history_get**
> HistoryResp get_history2_vehicle_history_get(jwt, vin)

Premium. Simple Vehicle History Report

Premium. Provides a simple report detailing a vechicle's sales history at dealerships. Data includes the name of the dealership, dates it was for sale, price, new/used condition, mileage, dealership state, and dealership zip code. Data availability goes back to early 2016.   If your use case involves checking if a vehicle has appeared on the open market on or after a given date see  the /vehicleSeen endpoint.

### Example


```python
import openapi_client
from openapi_client.models.history_resp import HistoryResp
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://localhost
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "http://localhost"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.VehicleDataApi(api_client)
    jwt = 'jwt_example' # str | 
    vin = 'vin_example' # str | 

    try:
        # Premium. Simple Vehicle History Report
        api_response = api_instance.get_history2_vehicle_history_get(jwt, vin)
        print("The response of VehicleDataApi->get_history2_vehicle_history_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling VehicleDataApi->get_history2_vehicle_history_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **jwt** | **str**|  | 
 **vin** | **str**|  | 

### Return type

[**HistoryResp**](HistoryResp.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful Response |  -  |
**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_listings2_listings2_get**
> ListingResp get_listings2_listings2_get(jwt, dealer_id=dealer_id, zip_code=zip_code, latitude=latitude, longitude=longitude, radius=radius, region_name=region_name, brand_name=brand_name, model_name=model_name, model_year=model_year, mileage_low=mileage_low, mileage_high=mileage_high, start_date=start_date, end_date=end_date, days_back=days_back, page=page, new_cars=new_cars, extended_search=extended_search)

Flexible Listing Search

Generic getter for listings supporting a wide array of selection criteria. This is the new primary listing endpoint and we will phase out the older listing endpoints over time. The other listing endpoints return the same data, but are more restrictive in the available geographic and vehicle selection criteria and can be replicated by this endpoint.  Dealer selection uses the most restrictive criteria supplied. From most restrictive to least: dealerID, gps, zipCode, region. You must provide some dealer selection criteria.  It is important to note that the units in the longitude are in degrees east, not degrees west. For example the coordinates 45.53N, 100.41W correspond to Mobridge, SC  but they will be interpreted as 45.53N, 100.41E which corresponds to a point in the Gobi Desert near Jinst, Mongolia. You can fix this by converting the longitiude yourself,  or by supplying a negative value (-100.41). For this example both (X, -100.41) and (X, 259.59) would be the same point. Units on the radius are miles and a smaller radius will result in a faster response time. Maximum search radius depends on your subscription plan.   The radius value is used for GPS searches and (optionally) zipCode searches. It is ignored for searches using other location criteria. If you provide a radius value with a zipCode search, the zipCode will be mapped to GPS coordinates behind the scenes. If no radius is provided or if the zipCode to GPS mapping fails, the API will only search for vehicles at dealerships within the provided zipCode.  Listing selection logically ANDs all options given.   Time interval selection will prefer explicit start and end dates. If only one of startDate/endDate is supplied, this endpoint will use it  as an anchor and look forward or backwards by the daysBack value. If startDate is specified and endDate is not, then endDate will be set to startDate+daysBack.  Conversely if endDate is specified, but startDate is not then startDate will be set at endDate-daysBack. If neither is supplied endpoint will set endDate to today and startDate to today-daysBack.  Maximum time interval is 45 days.  Mileage selection uses the provided mileage values and returns vehicles with mileage in the range [mileageLow, mileageHigh]. If mileageLow == mileageHigh (for example both are 0 default) this endpoint will not filter based on mileage. Not all used vehicles have a mileage record available.   ExtendedSearch modifies the slice of listings returned. If false (default) it only returns vehicles satisfying lastSeen >= startDate and lastSeen < endDate. If true it will return vehicles that were in dealer's inventory at any point between startDate and endDate including vehicles that were sold after endDate. Setting extendedSearch to true will result in a slower response time.   For example: If both a region name and dealer ID are supplied the dealer ID will be used because it is the most restrictive.  If a brandName of Ford and modelYear of 2019, modelName of F-150, and newCars of False is supplied this endpoint will return  used 2019 model year Ford F-150s. If a contradictory listing selection is supplied (for example Ford + Camry) no listings will be returned because the request matched no listings.  Results are paginated in chunks of up to 20 vehicles. Prices are in the dealer's local currency (generally USD).

### Example


```python
import openapi_client
from openapi_client.models.listing_resp import ListingResp
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://localhost
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "http://localhost"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.VehicleDataApi(api_client)
    jwt = 'jwt_example' # str | 
    dealer_id = 0 # int |  (optional) (default to 0)
    zip_code = 0 # int |  (optional) (default to 0)
    latitude = 0 # float |  (optional) (default to 0)
    longitude = 0 # float |  (optional) (default to 0)
    radius = 0 # float |  (optional) (default to 0)
    region_name = 'region_name_example' # str |  (optional)
    brand_name = 'brand_name_example' # str |  (optional)
    model_name = 'model_name_example' # str |  (optional)
    model_year = 0 # int |  (optional) (default to 0)
    mileage_low = 0 # int |  (optional) (default to 0)
    mileage_high = 0 # int |  (optional) (default to 0)
    start_date = '2013-10-20' # date |  (optional)
    end_date = '2013-10-20' # date |  (optional)
    days_back = 45 # int |  (optional) (default to 45)
    page = 1 # int |  (optional) (default to 1)
    new_cars = True # bool |  (optional) (default to True)
    extended_search = False # bool |  (optional) (default to False)

    try:
        # Flexible Listing Search
        api_response = api_instance.get_listings2_listings2_get(jwt, dealer_id=dealer_id, zip_code=zip_code, latitude=latitude, longitude=longitude, radius=radius, region_name=region_name, brand_name=brand_name, model_name=model_name, model_year=model_year, mileage_low=mileage_low, mileage_high=mileage_high, start_date=start_date, end_date=end_date, days_back=days_back, page=page, new_cars=new_cars, extended_search=extended_search)
        print("The response of VehicleDataApi->get_listings2_listings2_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling VehicleDataApi->get_listings2_listings2_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **jwt** | **str**|  | 
 **dealer_id** | **int**|  | [optional] [default to 0]
 **zip_code** | **int**|  | [optional] [default to 0]
 **latitude** | **float**|  | [optional] [default to 0]
 **longitude** | **float**|  | [optional] [default to 0]
 **radius** | **float**|  | [optional] [default to 0]
 **region_name** | **str**|  | [optional] 
 **brand_name** | **str**|  | [optional] 
 **model_name** | **str**|  | [optional] 
 **model_year** | **int**|  | [optional] [default to 0]
 **mileage_low** | **int**|  | [optional] [default to 0]
 **mileage_high** | **int**|  | [optional] [default to 0]
 **start_date** | **date**|  | [optional] 
 **end_date** | **date**|  | [optional] 
 **days_back** | **int**|  | [optional] [default to 45]
 **page** | **int**|  | [optional] [default to 1]
 **new_cars** | **bool**|  | [optional] [default to True]
 **extended_search** | **bool**|  | [optional] [default to False]

### Return type

[**ListingResp**](ListingResp.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful Response |  -  |
**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_listings_by_dealer_listings_by_date_get**
> ListingResp get_listings_by_dealer_listings_by_date_get(jwt, dealer_id, start_date, end_date, page=page, new_cars=new_cars)

Listings by Dealer ID and Date

See /listings2 endpoint for more flexible listing search. Returns a dealer's listings over the given timespan by dealer ID. The ID can be found by calling the /getDealers endpoint.  Maximum time interval between startDate and endDate is 45 days. Listing keys are: vin, askPrice, msrp, isNew, firstSeen, lastSeen, modelName, brandName. Results are paginated in chunks of up to 20 vehicles. Prices are in the dealer's local currency (generally USD).

### Example


```python
import openapi_client
from openapi_client.models.listing_resp import ListingResp
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://localhost
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "http://localhost"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.VehicleDataApi(api_client)
    jwt = 'jwt_example' # str | 
    dealer_id = 56 # int | 
    start_date = '2013-10-20' # date | 
    end_date = '2013-10-20' # date | 
    page = 1 # int |  (optional) (default to 1)
    new_cars = True # bool |  (optional) (default to True)

    try:
        # Listings by Dealer ID and Date
        api_response = api_instance.get_listings_by_dealer_listings_by_date_get(jwt, dealer_id, start_date, end_date, page=page, new_cars=new_cars)
        print("The response of VehicleDataApi->get_listings_by_dealer_listings_by_date_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling VehicleDataApi->get_listings_by_dealer_listings_by_date_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **jwt** | **str**|  | 
 **dealer_id** | **int**|  | 
 **start_date** | **date**|  | 
 **end_date** | **date**|  | 
 **page** | **int**|  | [optional] [default to 1]
 **new_cars** | **bool**|  | [optional] [default to True]

### Return type

[**ListingResp**](ListingResp.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful Response |  -  |
**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_listings_by_dealer_listings_get**
> ListingResp get_listings_by_dealer_listings_get(jwt, dealer_id, page=page, new_cars=new_cars)

Listings by Dealer ID

See /listings2 endpoint for more flexible listing search. Returns a dealer's listings over the last 45 days by dealer ID. The ID can be found by calling the /getDealers endpoint.  Listing keys are: vin, askPrice, msrp, isNew, firstSeen, lastSeen, modelName, brandName. Results are paginated in chunks of up to 20 vehicles. Prices are in the dealer's local currency (generally USD).

### Example


```python
import openapi_client
from openapi_client.models.listing_resp import ListingResp
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://localhost
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "http://localhost"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.VehicleDataApi(api_client)
    jwt = 'jwt_example' # str | 
    dealer_id = 56 # int | 
    page = 1 # int |  (optional) (default to 1)
    new_cars = True # bool |  (optional) (default to True)

    try:
        # Listings by Dealer ID
        api_response = api_instance.get_listings_by_dealer_listings_get(jwt, dealer_id, page=page, new_cars=new_cars)
        print("The response of VehicleDataApi->get_listings_by_dealer_listings_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling VehicleDataApi->get_listings_by_dealer_listings_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **jwt** | **str**|  | 
 **dealer_id** | **int**|  | 
 **page** | **int**|  | [optional] [default to 1]
 **new_cars** | **bool**|  | [optional] [default to True]

### Return type

[**ListingResp**](ListingResp.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful Response |  -  |
**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_listings_by_region_and_date_listings_by_region_and_date_get**
> ListingResp get_listings_by_region_and_date_listings_by_region_and_date_get(jwt, region_name, model_name, start_date, end_date, page=page, new_cars=new_cars)

Listings by Region and Date

See /listings2 endpoint for more flexible listing search. Returns listings active in a region in the given date range [startdate, endDate), or in other words dates that satisfy startDate <= X < endDate. Maximum range is 45 days  Listing keys are: vin, askPrice, msrp, isNew, firstSeen, lastSeen, modelName, brandName. Results are paginated in chunks of up to 20 vehicles. Prices are in the dealer's local currency (generally USD).

### Example


```python
import openapi_client
from openapi_client.models.listing_resp import ListingResp
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://localhost
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "http://localhost"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.VehicleDataApi(api_client)
    jwt = 'jwt_example' # str | 
    region_name = 'region_name_example' # str | 
    model_name = 'model_name_example' # str | 
    start_date = '2013-10-20' # date | 
    end_date = '2013-10-20' # date | 
    page = 1 # int |  (optional) (default to 1)
    new_cars = True # bool |  (optional) (default to True)

    try:
        # Listings by Region and Date
        api_response = api_instance.get_listings_by_region_and_date_listings_by_region_and_date_get(jwt, region_name, model_name, start_date, end_date, page=page, new_cars=new_cars)
        print("The response of VehicleDataApi->get_listings_by_region_and_date_listings_by_region_and_date_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling VehicleDataApi->get_listings_by_region_and_date_listings_by_region_and_date_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **jwt** | **str**|  | 
 **region_name** | **str**|  | 
 **model_name** | **str**|  | 
 **start_date** | **date**|  | 
 **end_date** | **date**|  | 
 **page** | **int**|  | [optional] [default to 1]
 **new_cars** | **bool**|  | [optional] [default to True]

### Return type

[**ListingResp**](ListingResp.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful Response |  -  |
**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_listings_by_region_listings_by_region_get**
> ListingResp get_listings_by_region_listings_by_region_get(jwt, region_name, model_name, days_back=days_back, page=page, new_cars=new_cars)

Listings by Region

See /listings2 endpoint for more flexible listing search. Returns a dealer's listings over up to the last 45 days by region.  Listing keys are: vin, askPrice, msrp, isNew, firstSeen, lastSeen, modelName, brandName. Results are paginated in chunks of up to 20 vehicles. Prices are in the dealer's local currency (generally USD).

### Example


```python
import openapi_client
from openapi_client.models.listing_resp import ListingResp
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://localhost
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "http://localhost"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.VehicleDataApi(api_client)
    jwt = 'jwt_example' # str | 
    region_name = 'region_name_example' # str | 
    model_name = 'model_name_example' # str | 
    days_back = 10 # int |  (optional) (default to 10)
    page = 1 # int |  (optional) (default to 1)
    new_cars = True # bool |  (optional) (default to True)

    try:
        # Listings by Region
        api_response = api_instance.get_listings_by_region_listings_by_region_get(jwt, region_name, model_name, days_back=days_back, page=page, new_cars=new_cars)
        print("The response of VehicleDataApi->get_listings_by_region_listings_by_region_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling VehicleDataApi->get_listings_by_region_listings_by_region_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **jwt** | **str**|  | 
 **region_name** | **str**|  | 
 **model_name** | **str**|  | 
 **days_back** | **int**|  | [optional] [default to 10]
 **page** | **int**|  | [optional] [default to 1]
 **new_cars** | **bool**|  | [optional] [default to True]

### Return type

[**ListingResp**](ListingResp.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful Response |  -  |
**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_market3_similar_sale_price_get**
> SimilarSalePriceResp get_market3_similar_sale_price_get(jwt, vin, region_name=region_name, days_back=days_back, same_year=same_year)

Premium. Simple Vehicle Market Report

Premium. Provides the average, stdDev, and count, of the sale price and mileage of similar new and used vehicles in a given region based off the provided VIN.  Optionally restricts report to vehicles of the same model year and goes back up to 120 days.

### Example


```python
import openapi_client
from openapi_client.models.similar_sale_price_resp import SimilarSalePriceResp
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://localhost
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "http://localhost"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.VehicleDataApi(api_client)
    jwt = 'jwt_example' # str | 
    vin = 'vin_example' # str | 
    region_name = 'REGION_STATE_CA' # str |  (optional) (default to 'REGION_STATE_CA')
    days_back = 45 # int |  (optional) (default to 45)
    same_year = False # bool |  (optional) (default to False)

    try:
        # Premium. Simple Vehicle Market Report
        api_response = api_instance.get_market3_similar_sale_price_get(jwt, vin, region_name=region_name, days_back=days_back, same_year=same_year)
        print("The response of VehicleDataApi->get_market3_similar_sale_price_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling VehicleDataApi->get_market3_similar_sale_price_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **jwt** | **str**|  | 
 **vin** | **str**|  | 
 **region_name** | **str**|  | [optional] [default to &#39;REGION_STATE_CA&#39;]
 **days_back** | **int**|  | [optional] [default to 45]
 **same_year** | **bool**|  | [optional] [default to False]

### Return type

[**SimilarSalePriceResp**](SimilarSalePriceResp.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful Response |  -  |
**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_market4_valuation_get**
> SimilarSalePriceResp get_market4_valuation_get(jwt, vin, dealer_id=dealer_id, zip_code=zip_code, latitude=latitude, longitude=longitude, radius=radius, region_name=region_name, mileage_low=mileage_low, mileage_high=mileage_high, start_date=start_date, end_date=end_date, days_back=days_back, new_cars=new_cars, extended_search=extended_search, same_year=same_year)

Premium. Simple Vehicle Market Report Over Arbitrary Locations and Vehicles.

Premium. Provides the average, stdDev, and count, of the sale price and mileage of similar new or used vehicles based off the provided VIN  and matching the provided other search criteria. This endpoint can be easily used to determine market values in arbitrary geographic locations (like a city) for specific vehicles. See /listings2 endpoint for documentation on location, vehicle, and time search parameters.  Date selection is restricted by your subscription tier, same as with the /listings2 endpoint. Optionally restricts report to vehicles of the same model year. 

### Example


```python
import openapi_client
from openapi_client.models.similar_sale_price_resp import SimilarSalePriceResp
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://localhost
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "http://localhost"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.VehicleDataApi(api_client)
    jwt = 'jwt_example' # str | 
    vin = 'vin_example' # str | 
    dealer_id = 0 # int |  (optional) (default to 0)
    zip_code = 0 # int |  (optional) (default to 0)
    latitude = 0 # float |  (optional) (default to 0)
    longitude = 0 # float |  (optional) (default to 0)
    radius = 0 # float |  (optional) (default to 0)
    region_name = 'region_name_example' # str |  (optional)
    mileage_low = 0 # int |  (optional) (default to 0)
    mileage_high = 0 # int |  (optional) (default to 0)
    start_date = '2013-10-20' # date |  (optional)
    end_date = '2013-10-20' # date |  (optional)
    days_back = 45 # int |  (optional) (default to 45)
    new_cars = False # bool |  (optional) (default to False)
    extended_search = False # bool |  (optional) (default to False)
    same_year = False # bool |  (optional) (default to False)

    try:
        # Premium. Simple Vehicle Market Report Over Arbitrary Locations and Vehicles.
        api_response = api_instance.get_market4_valuation_get(jwt, vin, dealer_id=dealer_id, zip_code=zip_code, latitude=latitude, longitude=longitude, radius=radius, region_name=region_name, mileage_low=mileage_low, mileage_high=mileage_high, start_date=start_date, end_date=end_date, days_back=days_back, new_cars=new_cars, extended_search=extended_search, same_year=same_year)
        print("The response of VehicleDataApi->get_market4_valuation_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling VehicleDataApi->get_market4_valuation_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **jwt** | **str**|  | 
 **vin** | **str**|  | 
 **dealer_id** | **int**|  | [optional] [default to 0]
 **zip_code** | **int**|  | [optional] [default to 0]
 **latitude** | **float**|  | [optional] [default to 0]
 **longitude** | **float**|  | [optional] [default to 0]
 **radius** | **float**|  | [optional] [default to 0]
 **region_name** | **str**|  | [optional] 
 **mileage_low** | **int**|  | [optional] [default to 0]
 **mileage_high** | **int**|  | [optional] [default to 0]
 **start_date** | **date**|  | [optional] 
 **end_date** | **date**|  | [optional] 
 **days_back** | **int**|  | [optional] [default to 45]
 **new_cars** | **bool**|  | [optional] [default to False]
 **extended_search** | **bool**|  | [optional] [default to False]
 **same_year** | **bool**|  | [optional] [default to False]

### Return type

[**SimilarSalePriceResp**](SimilarSalePriceResp.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful Response |  -  |
**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_vehicle_seen_vehicle_seen_get**
> BooleanResp get_vehicle_seen_vehicle_seen_get(jwt, vin, after_date)

Checks if a VIN appeared on the market on or after a given date.

Checks our database to see if we have data on a VIN that appeared on the open market on or after the given date with a True/False response.  This endpoint is more cost effective than the /vehicleHistory endpoint if your use case requires searching a large list of vehicles with a low individual likelyhood of appearing on the open market. (For example searching for a specific stolen vehicle).

### Example


```python
import openapi_client
from openapi_client.models.boolean_resp import BooleanResp
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://localhost
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "http://localhost"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.VehicleDataApi(api_client)
    jwt = 'jwt_example' # str | 
    vin = 'vin_example' # str | 
    after_date = '2013-10-20' # date | 

    try:
        # Checks if a VIN appeared on the market on or after a given date.
        api_response = api_instance.get_vehicle_seen_vehicle_seen_get(jwt, vin, after_date)
        print("The response of VehicleDataApi->get_vehicle_seen_vehicle_seen_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling VehicleDataApi->get_vehicle_seen_vehicle_seen_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **jwt** | **str**|  | 
 **vin** | **str**|  | 
 **after_date** | **date**|  | 

### Return type

[**BooleanResp**](BooleanResp.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful Response |  -  |
**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **listings_by_zip_code_and_date_listings_by_zip_code_and_date_get**
> ListingResp listings_by_zip_code_and_date_listings_by_zip_code_and_date_get(jwt, zip_code, start_date, end_date, page=page, new_cars=new_cars, model_name=model_name)

Listings by ZipCode and Date

See /listings2 endpoint for more flexible listing search. Returns a dealer's listings over up to the last 45 days in the provided dealership's zip code. For example 92701. Listing keys are: vin, askPrice, msrp, isNew, firstSeen, lastSeen, modelName, brandName. Results are paginated in chunks of up to 20 vehicles. Prices are in the dealer's local currency (generally USD).

### Example


```python
import openapi_client
from openapi_client.models.listing_resp import ListingResp
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://localhost
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "http://localhost"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.VehicleDataApi(api_client)
    jwt = 'jwt_example' # str | 
    zip_code = 56 # int | 
    start_date = '2013-10-20' # date | 
    end_date = '2013-10-20' # date | 
    page = 1 # int |  (optional) (default to 1)
    new_cars = True # bool |  (optional) (default to True)
    model_name = 'model_name_example' # str |  (optional)

    try:
        # Listings by ZipCode and Date
        api_response = api_instance.listings_by_zip_code_and_date_listings_by_zip_code_and_date_get(jwt, zip_code, start_date, end_date, page=page, new_cars=new_cars, model_name=model_name)
        print("The response of VehicleDataApi->listings_by_zip_code_and_date_listings_by_zip_code_and_date_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling VehicleDataApi->listings_by_zip_code_and_date_listings_by_zip_code_and_date_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **jwt** | **str**|  | 
 **zip_code** | **int**|  | 
 **start_date** | **date**|  | 
 **end_date** | **date**|  | 
 **page** | **int**|  | [optional] [default to 1]
 **new_cars** | **bool**|  | [optional] [default to True]
 **model_name** | **str**|  | [optional] 

### Return type

[**ListingResp**](ListingResp.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful Response |  -  |
**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **listings_by_zip_code_listings_by_zip_code_get**
> ListingResp listings_by_zip_code_listings_by_zip_code_get(jwt, zip_code, page=page, new_cars=new_cars, model_name=model_name)

Listings by ZipCode

See /listings2 endpoint for more flexible listing search. Returns a dealer's listings over up to the last 45 days in the provided dealerhip's zip code. For example 92701. Listing keys are: vin, askPrice, msrp, isNew, firstSeen, lastSeen, modelName, brandName. Results are paginated in chunks of up to 20 vehicles. Prices are in the dealer's local currency (generally USD).

### Example


```python
import openapi_client
from openapi_client.models.listing_resp import ListingResp
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://localhost
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "http://localhost"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.VehicleDataApi(api_client)
    jwt = 'jwt_example' # str | 
    zip_code = 56 # int | 
    page = 1 # int |  (optional) (default to 1)
    new_cars = True # bool |  (optional) (default to True)
    model_name = 'model_name_example' # str |  (optional)

    try:
        # Listings by ZipCode
        api_response = api_instance.listings_by_zip_code_listings_by_zip_code_get(jwt, zip_code, page=page, new_cars=new_cars, model_name=model_name)
        print("The response of VehicleDataApi->listings_by_zip_code_listings_by_zip_code_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling VehicleDataApi->listings_by_zip_code_listings_by_zip_code_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **jwt** | **str**|  | 
 **zip_code** | **int**|  | 
 **page** | **int**|  | [optional] [default to 1]
 **new_cars** | **bool**|  | [optional] [default to True]
 **model_name** | **str**|  | [optional] 

### Return type

[**ListingResp**](ListingResp.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful Response |  -  |
**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **vin_decode_vin_decode_get**
> GenericResponse vin_decode_vin_decode_get(jwt, vin, pass_empty=pass_empty, include_recall=include_recall)

Vin decoder and Recall Info

Decodes the provided North American vin and provides recall information if available.  We require at least the first 12 out of 17 characters in the vin to attempt a decode. The vin is not case sensitive. If passEmpty (default False) is True we will also include the empty fields in the response json.  If includeRecall (default True) is True we will include recall data reported to the NHTSA. Set False for a faster response.

### Example


```python
import openapi_client
from openapi_client.models.generic_response import GenericResponse
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://localhost
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "http://localhost"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.VehicleDataApi(api_client)
    jwt = 'jwt_example' # str | 
    vin = 'vin_example' # str | 
    pass_empty = False # bool |  (optional) (default to False)
    include_recall = True # bool |  (optional) (default to True)

    try:
        # Vin decoder and Recall Info
        api_response = api_instance.vin_decode_vin_decode_get(jwt, vin, pass_empty=pass_empty, include_recall=include_recall)
        print("The response of VehicleDataApi->vin_decode_vin_decode_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling VehicleDataApi->vin_decode_vin_decode_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **jwt** | **str**|  | 
 **vin** | **str**|  | 
 **pass_empty** | **bool**|  | [optional] [default to False]
 **include_recall** | **bool**|  | [optional] [default to True]

### Return type

[**GenericResponse**](GenericResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful Response |  -  |
**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

