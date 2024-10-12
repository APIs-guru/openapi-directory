# openapi_client.DeveloperPlanOrGreaterApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**days_supply_days_supply_get_0**](DeveloperPlanOrGreaterApi.md#days_supply_days_supply_get_0) | **GET** /daysSupply | Days worth of supply left on dealer lots
[**days_to_sell_days_to_sell_get_0**](DeveloperPlanOrGreaterApi.md#days_to_sell_days_to_sell_get_0) | **GET** /daysToSell | Days a vehicle takes to sell
[**get_dealers_get_dealers_by_id_get_1**](DeveloperPlanOrGreaterApi.md#get_dealers_get_dealers_by_id_get_1) | **GET** /getDealersByID | Premium. Dealers by ID
[**get_dealers_get_dealers_by_region_get_1**](DeveloperPlanOrGreaterApi.md#get_dealers_get_dealers_by_region_get_1) | **GET** /getDealersByRegion | Premium. Dealers in a region.
[**get_dealers_get_dealers_get_1**](DeveloperPlanOrGreaterApi.md#get_dealers_get_dealers_get_1) | **GET** /getDealers | Premium. Dealers in a zip code.
[**get_listings2_listings2_get_0**](DeveloperPlanOrGreaterApi.md#get_listings2_listings2_get_0) | **GET** /listings2 | Flexible Listing Search
[**get_market4_valuation_get_2**](DeveloperPlanOrGreaterApi.md#get_market4_valuation_get_2) | **GET** /valuation | Premium. Simple Vehicle Market Report Over Arbitrary Locations and Vehicles.


# **days_supply_days_supply_get_0**
> GenericResponse days_supply_days_supply_get_0(jwt, brand_name, region_name=region_name)

Days worth of supply left on dealer lots

Average, median, standard deviation, population variance, and whole region average of the  days of supply left on dealer lots for a given brand and region. The average, median, stdDev, and pVar fields are calculated on a dealer by dealer basis while the whole region average treats the entire region like a single dealership.  The average field may differ from the whole region average, especially when dealers are out of  a given model.   The available brand and region names can be retrieved from their respective endpoints.

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
    api_instance = openapi_client.DeveloperPlanOrGreaterApi(api_client)
    jwt = 'jwt_example' # str | 
    brand_name = 'brand_name_example' # str | 
    region_name = 'REGION_STATE_CA' # str |  (optional) (default to 'REGION_STATE_CA')

    try:
        # Days worth of supply left on dealer lots
        api_response = api_instance.days_supply_days_supply_get_0(jwt, brand_name, region_name=region_name)
        print("The response of DeveloperPlanOrGreaterApi->days_supply_days_supply_get_0:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DeveloperPlanOrGreaterApi->days_supply_days_supply_get_0: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **jwt** | **str**|  | 
 **brand_name** | **str**|  | 
 **region_name** | **str**|  | [optional] [default to &#39;REGION_STATE_CA&#39;]

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

# **days_to_sell_days_to_sell_get_0**
> GenericResponse days_to_sell_days_to_sell_get_0(jwt, brand_name, region_name=region_name)

Days a vehicle takes to sell

Average, median, standard deviation, population variance, and whole region average of the  number of days a vehicle spends on dealer lots for a given brand and region. The average, median, stdDev, and pVar fields are calculated on a dealer by dealer basis while the whole region average treats the entire region like a single dealership.  The average field may differ from the whole region average.  The available brand and region names can be retrieved from their respective endpoints.

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
    api_instance = openapi_client.DeveloperPlanOrGreaterApi(api_client)
    jwt = 'jwt_example' # str | 
    brand_name = 'brand_name_example' # str | 
    region_name = 'REGION_STATE_CA' # str |  (optional) (default to 'REGION_STATE_CA')

    try:
        # Days a vehicle takes to sell
        api_response = api_instance.days_to_sell_days_to_sell_get_0(jwt, brand_name, region_name=region_name)
        print("The response of DeveloperPlanOrGreaterApi->days_to_sell_days_to_sell_get_0:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DeveloperPlanOrGreaterApi->days_to_sell_days_to_sell_get_0: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **jwt** | **str**|  | 
 **brand_name** | **str**|  | 
 **region_name** | **str**|  | [optional] [default to &#39;REGION_STATE_CA&#39;]

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

# **get_dealers_get_dealers_by_id_get_1**
> DealershipDataResp get_dealers_get_dealers_by_id_get_1(jwt, dealer_id)

Premium. Dealers by ID

Premium. Dealership information using the internal ID. Returns name, address, state, zipCode, and ID for a single dealer in the same format as the /getDealers endpoint. Dealer IDs are generally retrieved via the /getDealers or /getDealersByRegion endpoints.

### Example


```python
import openapi_client
from openapi_client.models.dealership_data_resp import DealershipDataResp
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
    api_instance = openapi_client.DeveloperPlanOrGreaterApi(api_client)
    jwt = 'jwt_example' # str | 
    dealer_id = 56 # int | 

    try:
        # Premium. Dealers by ID
        api_response = api_instance.get_dealers_get_dealers_by_id_get_1(jwt, dealer_id)
        print("The response of DeveloperPlanOrGreaterApi->get_dealers_get_dealers_by_id_get_1:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DeveloperPlanOrGreaterApi->get_dealers_get_dealers_by_id_get_1: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **jwt** | **str**|  | 
 **dealer_id** | **int**|  | 

### Return type

[**DealershipDataResp**](DealershipDataResp.md)

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

# **get_dealers_get_dealers_by_region_get_1**
> DealershipDataPaginatedResp get_dealers_get_dealers_by_region_get_1(jwt, region_name=region_name, page=page)

Premium. Dealers in a region.

Premium. Dealership information in a given region. Returns name, address, state, zipCode, and IDs. Results are paginated with up to 30 results per page.

### Example


```python
import openapi_client
from openapi_client.models.dealership_data_paginated_resp import DealershipDataPaginatedResp
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
    api_instance = openapi_client.DeveloperPlanOrGreaterApi(api_client)
    jwt = 'jwt_example' # str | 
    region_name = 'REGION_STATE_CA' # str |  (optional) (default to 'REGION_STATE_CA')
    page = 1 # int |  (optional) (default to 1)

    try:
        # Premium. Dealers in a region.
        api_response = api_instance.get_dealers_get_dealers_by_region_get_1(jwt, region_name=region_name, page=page)
        print("The response of DeveloperPlanOrGreaterApi->get_dealers_get_dealers_by_region_get_1:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DeveloperPlanOrGreaterApi->get_dealers_get_dealers_by_region_get_1: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **jwt** | **str**|  | 
 **region_name** | **str**|  | [optional] [default to &#39;REGION_STATE_CA&#39;]
 **page** | **int**|  | [optional] [default to 1]

### Return type

[**DealershipDataPaginatedResp**](DealershipDataPaginatedResp.md)

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

# **get_dealers_get_dealers_get_1**
> DealershipDataResp get_dealers_get_dealers_get_1(jwt, zip_code)

Premium. Dealers in a zip code.

Premium. Dealership information in a given zip code using the first 4 digits. Returns name, address, state, zipCode, and IDs. For example a call with the zip code 92701 would return dealers with zip codes in the range [92700, 92709]

### Example


```python
import openapi_client
from openapi_client.models.dealership_data_resp import DealershipDataResp
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
    api_instance = openapi_client.DeveloperPlanOrGreaterApi(api_client)
    jwt = 'jwt_example' # str | 
    zip_code = 56 # int | 

    try:
        # Premium. Dealers in a zip code.
        api_response = api_instance.get_dealers_get_dealers_get_1(jwt, zip_code)
        print("The response of DeveloperPlanOrGreaterApi->get_dealers_get_dealers_get_1:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DeveloperPlanOrGreaterApi->get_dealers_get_dealers_get_1: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **jwt** | **str**|  | 
 **zip_code** | **int**|  | 

### Return type

[**DealershipDataResp**](DealershipDataResp.md)

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

# **get_listings2_listings2_get_0**
> ListingResp get_listings2_listings2_get_0(jwt, dealer_id=dealer_id, zip_code=zip_code, latitude=latitude, longitude=longitude, radius=radius, region_name=region_name, brand_name=brand_name, model_name=model_name, model_year=model_year, mileage_low=mileage_low, mileage_high=mileage_high, start_date=start_date, end_date=end_date, days_back=days_back, page=page, new_cars=new_cars, extended_search=extended_search)

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
    api_instance = openapi_client.DeveloperPlanOrGreaterApi(api_client)
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
        api_response = api_instance.get_listings2_listings2_get_0(jwt, dealer_id=dealer_id, zip_code=zip_code, latitude=latitude, longitude=longitude, radius=radius, region_name=region_name, brand_name=brand_name, model_name=model_name, model_year=model_year, mileage_low=mileage_low, mileage_high=mileage_high, start_date=start_date, end_date=end_date, days_back=days_back, page=page, new_cars=new_cars, extended_search=extended_search)
        print("The response of DeveloperPlanOrGreaterApi->get_listings2_listings2_get_0:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DeveloperPlanOrGreaterApi->get_listings2_listings2_get_0: %s\n" % e)
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

# **get_market4_valuation_get_2**
> SimilarSalePriceResp get_market4_valuation_get_2(jwt, vin, dealer_id=dealer_id, zip_code=zip_code, latitude=latitude, longitude=longitude, radius=radius, region_name=region_name, mileage_low=mileage_low, mileage_high=mileage_high, start_date=start_date, end_date=end_date, days_back=days_back, new_cars=new_cars, extended_search=extended_search, same_year=same_year)

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
    api_instance = openapi_client.DeveloperPlanOrGreaterApi(api_client)
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
        api_response = api_instance.get_market4_valuation_get_2(jwt, vin, dealer_id=dealer_id, zip_code=zip_code, latitude=latitude, longitude=longitude, radius=radius, region_name=region_name, mileage_low=mileage_low, mileage_high=mileage_high, start_date=start_date, end_date=end_date, days_back=days_back, new_cars=new_cars, extended_search=extended_search, same_year=same_year)
        print("The response of DeveloperPlanOrGreaterApi->get_market4_valuation_get_2:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DeveloperPlanOrGreaterApi->get_market4_valuation_get_2: %s\n" % e)
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

