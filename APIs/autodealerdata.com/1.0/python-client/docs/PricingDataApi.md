# openapi_client.PricingDataApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**get_avg_list_price_list_price_get**](PricingDataApi.md#get_avg_list_price_list_price_get) | **GET** /listPrice | Stats on ask price of new vehicles
[**get_avg_sale_price_sale_price_get**](PricingDataApi.md#get_avg_sale_price_sale_price_get) | **GET** /salePrice | Stats on sale price of new vehicles
[**get_market3_similar_sale_price_get_1**](PricingDataApi.md#get_market3_similar_sale_price_get_1) | **GET** /similarSalePrice | Premium. Simple Vehicle Market Report
[**get_market4_valuation_get_1**](PricingDataApi.md#get_market4_valuation_get_1) | **GET** /valuation | Premium. Simple Vehicle Market Report Over Arbitrary Locations and Vehicles.
[**get_model_sale_buckets_sale_price_histogram_get**](PricingDataApi.md#get_model_sale_buckets_sale_price_histogram_get) | **GET** /salePriceHistogram | Histogram of sales price of new vehicles by model


# **get_avg_list_price_list_price_get**
> BasicModelStatsResp get_avg_list_price_list_price_get(jwt, brand_name, region_name=region_name)

Stats on ask price of new vehicles

Average, median, standard deviation, and population variance of the ask price of new vehicles over the last 15 days for a given brand and region.  The available brand and region names can be retrieved from their respective endpoints.

### Example


```python
import openapi_client
from openapi_client.models.basic_model_stats_resp import BasicModelStatsResp
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
    api_instance = openapi_client.PricingDataApi(api_client)
    jwt = 'jwt_example' # str | 
    brand_name = 'brand_name_example' # str | 
    region_name = 'REGION_STATE_CA' # str |  (optional) (default to 'REGION_STATE_CA')

    try:
        # Stats on ask price of new vehicles
        api_response = api_instance.get_avg_list_price_list_price_get(jwt, brand_name, region_name=region_name)
        print("The response of PricingDataApi->get_avg_list_price_list_price_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling PricingDataApi->get_avg_list_price_list_price_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **jwt** | **str**|  | 
 **brand_name** | **str**|  | 
 **region_name** | **str**|  | [optional] [default to &#39;REGION_STATE_CA&#39;]

### Return type

[**BasicModelStatsResp**](BasicModelStatsResp.md)

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

# **get_avg_sale_price_sale_price_get**
> BasicModelStatsResp get_avg_sale_price_sale_price_get(jwt, brand_name, region_name=region_name)

Stats on sale price of new vehicles

Average, median, standard deviation, and population variance of the sale price of new vehicles over the last 15 days for a given brand and region.  The available brand and region names can be retrieved from their respective endpoints.

### Example


```python
import openapi_client
from openapi_client.models.basic_model_stats_resp import BasicModelStatsResp
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
    api_instance = openapi_client.PricingDataApi(api_client)
    jwt = 'jwt_example' # str | 
    brand_name = 'brand_name_example' # str | 
    region_name = 'REGION_STATE_CA' # str |  (optional) (default to 'REGION_STATE_CA')

    try:
        # Stats on sale price of new vehicles
        api_response = api_instance.get_avg_sale_price_sale_price_get(jwt, brand_name, region_name=region_name)
        print("The response of PricingDataApi->get_avg_sale_price_sale_price_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling PricingDataApi->get_avg_sale_price_sale_price_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **jwt** | **str**|  | 
 **brand_name** | **str**|  | 
 **region_name** | **str**|  | [optional] [default to &#39;REGION_STATE_CA&#39;]

### Return type

[**BasicModelStatsResp**](BasicModelStatsResp.md)

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

# **get_market3_similar_sale_price_get_1**
> SimilarSalePriceResp get_market3_similar_sale_price_get_1(jwt, vin, region_name=region_name, days_back=days_back, same_year=same_year)

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
    api_instance = openapi_client.PricingDataApi(api_client)
    jwt = 'jwt_example' # str | 
    vin = 'vin_example' # str | 
    region_name = 'REGION_STATE_CA' # str |  (optional) (default to 'REGION_STATE_CA')
    days_back = 45 # int |  (optional) (default to 45)
    same_year = False # bool |  (optional) (default to False)

    try:
        # Premium. Simple Vehicle Market Report
        api_response = api_instance.get_market3_similar_sale_price_get_1(jwt, vin, region_name=region_name, days_back=days_back, same_year=same_year)
        print("The response of PricingDataApi->get_market3_similar_sale_price_get_1:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling PricingDataApi->get_market3_similar_sale_price_get_1: %s\n" % e)
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

# **get_market4_valuation_get_1**
> SimilarSalePriceResp get_market4_valuation_get_1(jwt, vin, dealer_id=dealer_id, zip_code=zip_code, latitude=latitude, longitude=longitude, radius=radius, region_name=region_name, mileage_low=mileage_low, mileage_high=mileage_high, start_date=start_date, end_date=end_date, days_back=days_back, new_cars=new_cars, extended_search=extended_search, same_year=same_year)

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
    api_instance = openapi_client.PricingDataApi(api_client)
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
        api_response = api_instance.get_market4_valuation_get_1(jwt, vin, dealer_id=dealer_id, zip_code=zip_code, latitude=latitude, longitude=longitude, radius=radius, region_name=region_name, mileage_low=mileage_low, mileage_high=mileage_high, start_date=start_date, end_date=end_date, days_back=days_back, new_cars=new_cars, extended_search=extended_search, same_year=same_year)
        print("The response of PricingDataApi->get_market4_valuation_get_1:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling PricingDataApi->get_market4_valuation_get_1: %s\n" % e)
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

# **get_model_sale_buckets_sale_price_histogram_get**
> BucketResp get_model_sale_buckets_sale_price_histogram_get(jwt, model_name, brand_name, region_name=region_name)

Histogram of sales price of new vehicles by model

Histogram of the sale price of vehicles over the last 45 days for a given model and region.  Price buckets are grouped in units of $1000 The available brand, model, and region names can be retrieved from their respective endpoints.

### Example


```python
import openapi_client
from openapi_client.models.bucket_resp import BucketResp
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
    api_instance = openapi_client.PricingDataApi(api_client)
    jwt = 'jwt_example' # str | 
    model_name = 'model_name_example' # str | 
    brand_name = 'brand_name_example' # str | 
    region_name = 'REGION_STATE_CA' # str |  (optional) (default to 'REGION_STATE_CA')

    try:
        # Histogram of sales price of new vehicles by model
        api_response = api_instance.get_model_sale_buckets_sale_price_histogram_get(jwt, model_name, brand_name, region_name=region_name)
        print("The response of PricingDataApi->get_model_sale_buckets_sale_price_histogram_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling PricingDataApi->get_model_sale_buckets_sale_price_histogram_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **jwt** | **str**|  | 
 **model_name** | **str**|  | 
 **brand_name** | **str**|  | 
 **region_name** | **str**|  | [optional] [default to &#39;REGION_STATE_CA&#39;]

### Return type

[**BucketResp**](BucketResp.md)

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

