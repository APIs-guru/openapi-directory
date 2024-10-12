# openapi_client.PremiumApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**get_dealer_sales_region_sales_get_0**](PremiumApi.md#get_dealer_sales_region_sales_get_0) | **GET** /regionSales | Premium. Brand sales by region and month
[**get_dealers_get_dealers_by_id_get_0**](PremiumApi.md#get_dealers_get_dealers_by_id_get_0) | **GET** /getDealersByID | Premium. Dealers by ID
[**get_dealers_get_dealers_by_region_get_0**](PremiumApi.md#get_dealers_get_dealers_by_region_get_0) | **GET** /getDealersByRegion | Premium. Dealers in a region.
[**get_dealers_get_dealers_get_0**](PremiumApi.md#get_dealers_get_dealers_get_0) | **GET** /getDealers | Premium. Dealers in a zip code.
[**get_history2_vehicle_history_get_0**](PremiumApi.md#get_history2_vehicle_history_get_0) | **GET** /vehicleHistory | Premium. Simple Vehicle History Report
[**get_market3_similar_sale_price_get_0**](PremiumApi.md#get_market3_similar_sale_price_get_0) | **GET** /similarSalePrice | Premium. Simple Vehicle Market Report
[**get_market4_valuation_get_0**](PremiumApi.md#get_market4_valuation_get_0) | **GET** /valuation | Premium. Simple Vehicle Market Report Over Arbitrary Locations and Vehicles.
[**get_region_market_share_get_region_market_share_get_0**](PremiumApi.md#get_region_market_share_get_region_market_share_get_0) | **GET** /getRegionMarketShare | Market share of all brands in region


# **get_dealer_sales_region_sales_get_0**
> GenericResponse get_dealer_sales_region_sales_get_0(jwt, brand_name, region_name, month)

Premium. Brand sales by region and month

Premium. Get regional sales by brand and month, broken down by day. Most recent data is typically only 2 days old for this endpoint.      The month field is in YYYY-MM-DD format. For example if you wanted sales data from April of 2020 the month field would be '2020-04-01'  Data availability depends on region and goes back up to 2016.

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
    api_instance = openapi_client.PremiumApi(api_client)
    jwt = 'jwt_example' # str | 
    brand_name = 'brand_name_example' # str | 
    region_name = 'region_name_example' # str | 
    month = '2013-10-20' # date | 

    try:
        # Premium. Brand sales by region and month
        api_response = api_instance.get_dealer_sales_region_sales_get_0(jwt, brand_name, region_name, month)
        print("The response of PremiumApi->get_dealer_sales_region_sales_get_0:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling PremiumApi->get_dealer_sales_region_sales_get_0: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **jwt** | **str**|  | 
 **brand_name** | **str**|  | 
 **region_name** | **str**|  | 
 **month** | **date**|  | 

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

# **get_dealers_get_dealers_by_id_get_0**
> DealershipDataResp get_dealers_get_dealers_by_id_get_0(jwt, dealer_id)

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
    api_instance = openapi_client.PremiumApi(api_client)
    jwt = 'jwt_example' # str | 
    dealer_id = 56 # int | 

    try:
        # Premium. Dealers by ID
        api_response = api_instance.get_dealers_get_dealers_by_id_get_0(jwt, dealer_id)
        print("The response of PremiumApi->get_dealers_get_dealers_by_id_get_0:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling PremiumApi->get_dealers_get_dealers_by_id_get_0: %s\n" % e)
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

# **get_dealers_get_dealers_by_region_get_0**
> DealershipDataPaginatedResp get_dealers_get_dealers_by_region_get_0(jwt, region_name=region_name, page=page)

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
    api_instance = openapi_client.PremiumApi(api_client)
    jwt = 'jwt_example' # str | 
    region_name = 'REGION_STATE_CA' # str |  (optional) (default to 'REGION_STATE_CA')
    page = 1 # int |  (optional) (default to 1)

    try:
        # Premium. Dealers in a region.
        api_response = api_instance.get_dealers_get_dealers_by_region_get_0(jwt, region_name=region_name, page=page)
        print("The response of PremiumApi->get_dealers_get_dealers_by_region_get_0:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling PremiumApi->get_dealers_get_dealers_by_region_get_0: %s\n" % e)
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

# **get_dealers_get_dealers_get_0**
> DealershipDataResp get_dealers_get_dealers_get_0(jwt, zip_code)

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
    api_instance = openapi_client.PremiumApi(api_client)
    jwt = 'jwt_example' # str | 
    zip_code = 56 # int | 

    try:
        # Premium. Dealers in a zip code.
        api_response = api_instance.get_dealers_get_dealers_get_0(jwt, zip_code)
        print("The response of PremiumApi->get_dealers_get_dealers_get_0:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling PremiumApi->get_dealers_get_dealers_get_0: %s\n" % e)
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

# **get_history2_vehicle_history_get_0**
> HistoryResp get_history2_vehicle_history_get_0(jwt, vin)

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
    api_instance = openapi_client.PremiumApi(api_client)
    jwt = 'jwt_example' # str | 
    vin = 'vin_example' # str | 

    try:
        # Premium. Simple Vehicle History Report
        api_response = api_instance.get_history2_vehicle_history_get_0(jwt, vin)
        print("The response of PremiumApi->get_history2_vehicle_history_get_0:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling PremiumApi->get_history2_vehicle_history_get_0: %s\n" % e)
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

# **get_market3_similar_sale_price_get_0**
> SimilarSalePriceResp get_market3_similar_sale_price_get_0(jwt, vin, region_name=region_name, days_back=days_back, same_year=same_year)

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
    api_instance = openapi_client.PremiumApi(api_client)
    jwt = 'jwt_example' # str | 
    vin = 'vin_example' # str | 
    region_name = 'REGION_STATE_CA' # str |  (optional) (default to 'REGION_STATE_CA')
    days_back = 45 # int |  (optional) (default to 45)
    same_year = False # bool |  (optional) (default to False)

    try:
        # Premium. Simple Vehicle Market Report
        api_response = api_instance.get_market3_similar_sale_price_get_0(jwt, vin, region_name=region_name, days_back=days_back, same_year=same_year)
        print("The response of PremiumApi->get_market3_similar_sale_price_get_0:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling PremiumApi->get_market3_similar_sale_price_get_0: %s\n" % e)
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

# **get_market4_valuation_get_0**
> SimilarSalePriceResp get_market4_valuation_get_0(jwt, vin, dealer_id=dealer_id, zip_code=zip_code, latitude=latitude, longitude=longitude, radius=radius, region_name=region_name, mileage_low=mileage_low, mileage_high=mileage_high, start_date=start_date, end_date=end_date, days_back=days_back, new_cars=new_cars, extended_search=extended_search, same_year=same_year)

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
    api_instance = openapi_client.PremiumApi(api_client)
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
        api_response = api_instance.get_market4_valuation_get_0(jwt, vin, dealer_id=dealer_id, zip_code=zip_code, latitude=latitude, longitude=longitude, radius=radius, region_name=region_name, mileage_low=mileage_low, mileage_high=mileage_high, start_date=start_date, end_date=end_date, days_back=days_back, new_cars=new_cars, extended_search=extended_search, same_year=same_year)
        print("The response of PremiumApi->get_market4_valuation_get_0:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling PremiumApi->get_market4_valuation_get_0: %s\n" % e)
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

# **get_region_market_share_get_region_market_share_get_0**
> GenericResponse get_region_market_share_get_region_market_share_get_0(jwt, region_name=region_name)

Market share of all brands in region

Market share of a all brands in a given region by number of vehicles sold over the last 45 days.

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
    api_instance = openapi_client.PremiumApi(api_client)
    jwt = 'jwt_example' # str | 
    region_name = 'REGION_STATE_CA' # str |  (optional) (default to 'REGION_STATE_CA')

    try:
        # Market share of all brands in region
        api_response = api_instance.get_region_market_share_get_region_market_share_get_0(jwt, region_name=region_name)
        print("The response of PremiumApi->get_region_market_share_get_region_market_share_get_0:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling PremiumApi->get_region_market_share_get_region_market_share_get_0: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **jwt** | **str**|  | 
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

