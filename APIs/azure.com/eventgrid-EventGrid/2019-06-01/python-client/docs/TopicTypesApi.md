# openapi_client.TopicTypesApi

All URIs are relative to *https://management.azure.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**topic_types_get**](TopicTypesApi.md#topic_types_get) | **GET** /providers/Microsoft.EventGrid/topicTypes/{topicTypeName} | Get a topic type.
[**topic_types_list**](TopicTypesApi.md#topic_types_list) | **GET** /providers/Microsoft.EventGrid/topicTypes | List topic types.
[**topic_types_list_event_types**](TopicTypesApi.md#topic_types_list_event_types) | **GET** /providers/Microsoft.EventGrid/topicTypes/{topicTypeName}/eventTypes | List event types.


# **topic_types_get**
> TopicTypeInfo topic_types_get(topic_type_name, api_version)

Get a topic type.

Get information about a topic type.

### Example


```python
import openapi_client
from openapi_client.models.topic_type_info import TopicTypeInfo
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://management.azure.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://management.azure.com"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.TopicTypesApi(api_client)
    topic_type_name = 'topic_type_name_example' # str | Name of the topic type.
    api_version = 'api_version_example' # str | Version of the API to be used with the client request.

    try:
        # Get a topic type.
        api_response = api_instance.topic_types_get(topic_type_name, api_version)
        print("The response of TopicTypesApi->topic_types_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling TopicTypesApi->topic_types_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **topic_type_name** | **str**| Name of the topic type. | 
 **api_version** | **str**| Version of the API to be used with the client request. | 

### Return type

[**TopicTypeInfo**](TopicTypeInfo.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**0** | *** Error Responses: ***   * 400 Bad Request.   * 404 Not Found.   * 500 Internal Server Error. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **topic_types_list**
> TopicTypesListResult topic_types_list(api_version)

List topic types.

List all registered topic types.

### Example


```python
import openapi_client
from openapi_client.models.topic_types_list_result import TopicTypesListResult
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://management.azure.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://management.azure.com"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.TopicTypesApi(api_client)
    api_version = 'api_version_example' # str | Version of the API to be used with the client request.

    try:
        # List topic types.
        api_response = api_instance.topic_types_list(api_version)
        print("The response of TopicTypesApi->topic_types_list:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling TopicTypesApi->topic_types_list: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_version** | **str**| Version of the API to be used with the client request. | 

### Return type

[**TopicTypesListResult**](TopicTypesListResult.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**0** | *** Error Responses: ***   * 400 Bad Request.   * 404 Not Found.   * 500 Internal Server Error. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **topic_types_list_event_types**
> EventTypesListResult topic_types_list_event_types(topic_type_name, api_version)

List event types.

List event types for a topic type.

### Example


```python
import openapi_client
from openapi_client.models.event_types_list_result import EventTypesListResult
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://management.azure.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://management.azure.com"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.TopicTypesApi(api_client)
    topic_type_name = 'topic_type_name_example' # str | Name of the topic type.
    api_version = 'api_version_example' # str | Version of the API to be used with the client request.

    try:
        # List event types.
        api_response = api_instance.topic_types_list_event_types(topic_type_name, api_version)
        print("The response of TopicTypesApi->topic_types_list_event_types:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling TopicTypesApi->topic_types_list_event_types: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **topic_type_name** | **str**| Name of the topic type. | 
 **api_version** | **str**| Version of the API to be used with the client request. | 

### Return type

[**EventTypesListResult**](EventTypesListResult.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**0** | *** Error Responses: ***   * 400 Bad Request.   * 404 Not Found.   * 500 Internal Server Error. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

