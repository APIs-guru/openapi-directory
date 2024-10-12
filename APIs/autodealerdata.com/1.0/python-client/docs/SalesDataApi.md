# openapi_client.SalesDataApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**get_dealer_sales_region_daily_sales_get**](SalesDataApi.md#get_dealer_sales_region_daily_sales_get) | **GET** /regionDailySales | Brand sales by region and Day
[**get_dealer_sales_region_sales_get**](SalesDataApi.md#get_dealer_sales_region_sales_get) | **GET** /regionSales | Premium. Brand sales by region and month
[**get_model_used_dist_model_year_dist_get**](SalesDataApi.md#get_model_used_dist_model_year_dist_get) | **GET** /modelYearDist | Used market share of model year by model
[**get_region_brand_market_share_get_region_brand_market_share_get**](SalesDataApi.md#get_region_brand_market_share_get_region_brand_market_share_get) | **GET** /getRegionBrandMarketShare | Market share of a brand in region
[**get_region_market_share_get_region_market_share_get**](SalesDataApi.md#get_region_market_share_get_region_market_share_get) | **GET** /getRegionMarketShare | Market share of all brands in region
[**get_top_models_top_models_get**](SalesDataApi.md#get_top_models_top_models_get) | **GET** /topModels | Top models in a given region


# **get_dealer_sales_region_daily_sales_get**
> GenericResponse get_dealer_sales_region_daily_sales_get(jwt, brand_name, region_name, day)

Brand sales by region and Day

Get regional sales by brand and day. Most recent data is typically only 2 days old for this endpoint.      The Day field is in YYYY-MM-DD format. For example if you wanted sales data from April 5th of 2020 the day field would be '2020-04-05'  Data availability depends on region and goes back up to 2016.

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
    api_instance = openapi_client.SalesDataApi(api_client)
    jwt = 'jwt_example' # str | 
    brand_name = 'brand_name_example' # str | 
    region_name = 'region_name_example' # str | 
    day = '2013-10-20' # date | 

    try:
        # Brand sales by region and Day
        api_response = api_instance.get_dealer_sales_region_daily_sales_get(jwt, brand_name, region_name, day)
        print("The response of SalesDataApi->get_dealer_sales_region_daily_sales_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling SalesDataApi->get_dealer_sales_region_daily_sales_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **jwt** | **str**|  | 
 **brand_name** | **str**|  | 
 **region_name** | **str**|  | 
 **day** | **date**|  | 

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

# **get_dealer_sales_region_sales_get**
> GenericResponse get_dealer_sales_region_sales_get(jwt, brand_name, region_name, month)

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
    api_instance = openapi_client.SalesDataApi(api_client)
    jwt = 'jwt_example' # str | 
    brand_name = 'brand_name_example' # str | 
    region_name = 'region_name_example' # str | 
    month = '2013-10-20' # date | 

    try:
        # Premium. Brand sales by region and month
        api_response = api_instance.get_dealer_sales_region_sales_get(jwt, brand_name, region_name, month)
        print("The response of SalesDataApi->get_dealer_sales_region_sales_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling SalesDataApi->get_dealer_sales_region_sales_get: %s\n" % e)
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

# **get_model_used_dist_model_year_dist_get**
> ModelYearDistResp get_model_used_dist_model_year_dist_get(jwt, model_name, brand_name, region_name=region_name)

Used market share of model year by model

Market share of used vehicles over the last 45 days by model and year. All values are relative to vehicles of the same model. For example: a percentOfMarket value of 25, year of 2017, and modelName of Camry means that 25% of used Camrys on the market  in the given region over the last 45 days were from the 2017 model year.

### Example


```python
import openapi_client
from openapi_client.models.model_year_dist_resp import ModelYearDistResp
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
    api_instance = openapi_client.SalesDataApi(api_client)
    jwt = 'jwt_example' # str | 
    model_name = 'model_name_example' # str | 
    brand_name = 'brand_name_example' # str | 
    region_name = 'REGION_STATE_CA' # str |  (optional) (default to 'REGION_STATE_CA')

    try:
        # Used market share of model year by model
        api_response = api_instance.get_model_used_dist_model_year_dist_get(jwt, model_name, brand_name, region_name=region_name)
        print("The response of SalesDataApi->get_model_used_dist_model_year_dist_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling SalesDataApi->get_model_used_dist_model_year_dist_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **jwt** | **str**|  | 
 **model_name** | **str**|  | 
 **brand_name** | **str**|  | 
 **region_name** | **str**|  | [optional] [default to &#39;REGION_STATE_CA&#39;]

### Return type

[**ModelYearDistResp**](ModelYearDistResp.md)

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

# **get_region_brand_market_share_get_region_brand_market_share_get**
> GenericResponse get_region_brand_market_share_get_region_brand_market_share_get(jwt, brand_name, region_name=region_name)

Market share of a brand in region

Market share of a given brand in a given region by number of vehicles sold over the last 45 days.

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
    api_instance = openapi_client.SalesDataApi(api_client)
    jwt = 'jwt_example' # str | 
    brand_name = 'brand_name_example' # str | 
    region_name = 'REGION_STATE_CA' # str |  (optional) (default to 'REGION_STATE_CA')

    try:
        # Market share of a brand in region
        api_response = api_instance.get_region_brand_market_share_get_region_brand_market_share_get(jwt, brand_name, region_name=region_name)
        print("The response of SalesDataApi->get_region_brand_market_share_get_region_brand_market_share_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling SalesDataApi->get_region_brand_market_share_get_region_brand_market_share_get: %s\n" % e)
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

# **get_region_market_share_get_region_market_share_get**
> GenericResponse get_region_market_share_get_region_market_share_get(jwt, region_name=region_name)

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
    api_instance = openapi_client.SalesDataApi(api_client)
    jwt = 'jwt_example' # str | 
    region_name = 'REGION_STATE_CA' # str |  (optional) (default to 'REGION_STATE_CA')

    try:
        # Market share of all brands in region
        api_response = api_instance.get_region_market_share_get_region_market_share_get(jwt, region_name=region_name)
        print("The response of SalesDataApi->get_region_market_share_get_region_market_share_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling SalesDataApi->get_region_market_share_get_region_market_share_get: %s\n" % e)
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

# **get_top_models_top_models_get**
> TopModelResp get_top_models_top_models_get(jwt, region_name=region_name)

Top models in a given region

Sales ranking of different models by region over the last 45 days.  The <strong>percentOfTopSales</strong> value is the percent of the top seller the model represents.   For example: a value of 80% means that model sold 8 vehicles for every 10 of the top model sold.  The other fields represent the model percent of X. The <strong>brandMarketShare</strong> field is that brand's market share of the region over the report's time interval.

### Example


```python
import openapi_client
from openapi_client.models.top_model_resp import TopModelResp
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
    api_instance = openapi_client.SalesDataApi(api_client)
    jwt = 'jwt_example' # str | 
    region_name = 'REGION_STATE_CA' # str |  (optional) (default to 'REGION_STATE_CA')

    try:
        # Top models in a given region
        api_response = api_instance.get_top_models_top_models_get(jwt, region_name=region_name)
        print("The response of SalesDataApi->get_top_models_top_models_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling SalesDataApi->get_top_models_top_models_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **jwt** | **str**|  | 
 **region_name** | **str**|  | [optional] [default to &#39;REGION_STATE_CA&#39;]

### Return type

[**TopModelResp**](TopModelResp.md)

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

