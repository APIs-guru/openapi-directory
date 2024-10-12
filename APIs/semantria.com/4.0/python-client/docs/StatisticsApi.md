# openapi_client.StatisticsApi

All URIs are relative to *https://api.semantria.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**get_statistic**](StatisticsApi.md#get_statistic) | **GET** /statistics.{content_type} | Retrieve usage statistics


# **get_statistic**
> Statistic get_statistic(content_type, config_id=config_id, interval=interval)

Retrieve usage statistics

This method retrieves overall and per configuration usage statistics for specific timeframe. Statistics ordered per available configurations. Available interval values are current <b>hour</b>, <b>day</b>, <b>week</b>, <b>month</b> and <b>year</b>.

### Example


```python
import openapi_client
from openapi_client.models.statistic import Statistic
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.semantria.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.semantria.com"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.StatisticsApi(api_client)
    content_type = 'content_type_example' # str | 
    config_id = 'config_id_example' # str | Configuration identifier for usage statistics retrieving. (optional)
    interval = 'interval_example' # str | Hour, Day, Week, Month, Year values are supported. (optional)

    try:
        # Retrieve usage statistics
        api_response = api_instance.get_statistic(content_type, config_id=config_id, interval=interval)
        print("The response of StatisticsApi->get_statistic:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling StatisticsApi->get_statistic: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **content_type** | **str**|  | 
 **config_id** | **str**| Configuration identifier for usage statistics retrieving. | [optional] 
 **interval** | **str**| Hour, Day, Week, Month, Year values are supported. | [optional] 

### Return type

[**Statistic**](Statistic.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, application/xml

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Client request accepted. Server responds with statistics details. |  -  |
**401** | Authentication failed. |  -  |
**402** | Unauthorized. Limit of system calls is reached or subscription is expired. |  -  |
**500** | Server side issue. Server may respond with the details in response body. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

