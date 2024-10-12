# openapi_client.AnalyticsApi

All URIs are relative to *http://config2.gamesparks.net*

Method | HTTP request | Description
------------- | ------------- | -------------
[**get_analytics_data_using_get**](AnalyticsApi.md#get_analytics_data_using_get) | **GET** /restv2/game/{apiKey}/admin/analytics | Returns the results of executed query defined by the parameters passed in
[**get_data_count_using_get**](AnalyticsApi.md#get_data_count_using_get) | **GET** /restv2/game/{apiKey}/admin/analytics/count | Returns the count of executed query
[**get_retention_using_get**](AnalyticsApi.md#get_retention_using_get) | **GET** /restv2/game/{apiKey}/admin/analytics/rollingRetention | Returns the percentage of user retention over the last 30 days


# **get_analytics_data_using_get**
> List[AnalyticsDataSwaggerModel] get_analytics_data_using_get(api_key, stage, data_type, precision, start_date, end_date, keys=keys)

Returns the results of executed query defined by the parameters passed in

### Example


```python
import openapi_client
from openapi_client.models.analytics_data_swagger_model import AnalyticsDataSwaggerModel
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://config2.gamesparks.net
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "http://config2.gamesparks.net"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.AnalyticsApi(api_client)
    api_key = 'api_key_example' # str | apiKey
    stage = 'stage_example' # str | stage
    data_type = 'data_type_example' # str | dataType
    precision = 'precision_example' # str | precision
    start_date = '2013-10-20' # date | yyyy-MM-dd
    end_date = '2013-10-20' # date | yyyy-MM-dd
    keys = 'keys_example' # str | the keys to select. For example \"ReturningUsers\", \"NewUsers\", etc (optional)

    try:
        # Returns the results of executed query defined by the parameters passed in
        api_response = api_instance.get_analytics_data_using_get(api_key, stage, data_type, precision, start_date, end_date, keys=keys)
        print("The response of AnalyticsApi->get_analytics_data_using_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AnalyticsApi->get_analytics_data_using_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_key** | **str**| apiKey | 
 **stage** | **str**| stage | 
 **data_type** | **str**| dataType | 
 **precision** | **str**| precision | 
 **start_date** | **date**| yyyy-MM-dd | 
 **end_date** | **date**| yyyy-MM-dd | 
 **keys** | **str**| the keys to select. For example \&quot;ReturningUsers\&quot;, \&quot;NewUsers\&quot;, etc | [optional] 

### Return type

[**List[AnalyticsDataSwaggerModel]**](AnalyticsDataSwaggerModel.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json;charset=UTF-8

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**400** | json error |  -  |
**403** | not allowed |  -  |
**404** | not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_data_count_using_get**
> AnalyticsDataCountSwaggerModel get_data_count_using_get(api_key, stage, query_name)

Returns the count of executed query

### Example


```python
import openapi_client
from openapi_client.models.analytics_data_count_swagger_model import AnalyticsDataCountSwaggerModel
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://config2.gamesparks.net
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "http://config2.gamesparks.net"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.AnalyticsApi(api_client)
    api_key = 'api_key_example' # str | apiKey
    stage = 'stage_example' # str | stage
    query_name = 'query_name_example' # str | queryName

    try:
        # Returns the count of executed query
        api_response = api_instance.get_data_count_using_get(api_key, stage, query_name)
        print("The response of AnalyticsApi->get_data_count_using_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AnalyticsApi->get_data_count_using_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_key** | **str**| apiKey | 
 **stage** | **str**| stage | 
 **query_name** | **str**| queryName | 

### Return type

[**AnalyticsDataCountSwaggerModel**](AnalyticsDataCountSwaggerModel.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json;charset=UTF-8

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**400** | json error |  -  |
**403** | not allowed |  -  |
**404** | not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_retention_using_get**
> AnalyticsDataCountSwaggerModel get_retention_using_get(api_key, stage)

Returns the percentage of user retention over the last 30 days

### Example


```python
import openapi_client
from openapi_client.models.analytics_data_count_swagger_model import AnalyticsDataCountSwaggerModel
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://config2.gamesparks.net
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "http://config2.gamesparks.net"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.AnalyticsApi(api_client)
    api_key = 'api_key_example' # str | apiKey
    stage = 'stage_example' # str | stage

    try:
        # Returns the percentage of user retention over the last 30 days
        api_response = api_instance.get_retention_using_get(api_key, stage)
        print("The response of AnalyticsApi->get_retention_using_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AnalyticsApi->get_retention_using_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_key** | **str**| apiKey | 
 **stage** | **str**| stage | 

### Return type

[**AnalyticsDataCountSwaggerModel**](AnalyticsDataCountSwaggerModel.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json;charset=UTF-8

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**400** | json error |  -  |
**403** | not allowed |  -  |
**404** | not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

