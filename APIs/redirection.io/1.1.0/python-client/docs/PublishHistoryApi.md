# openapi_client.PublishHistoryApi

All URIs are relative to *https://api.redirection.io*

Method | HTTP request | Description
------------- | ------------- | -------------
[**get_publish_history_collection**](PublishHistoryApi.md#get_publish_history_collection) | **GET** /publish-histories | Retrieves the collection of PublishHistory resources.
[**get_publish_history_item**](PublishHistoryApi.md#get_publish_history_item) | **GET** /publish-histories/{id} | Retrieves a PublishHistory resource.


# **get_publish_history_collection**
> List[PublishHistoryRead] get_publish_history_collection(project_id, created_at_before=created_at_before, created_at_strictly_before=created_at_strictly_before, created_at_after=created_at_after, created_at_strictly_after=created_at_strictly_after, page=page)

Retrieves the collection of PublishHistory resources.

### Example

* Api Key Authentication (apiKey):

```python
import openapi_client
from openapi_client.models.publish_history_read import PublishHistoryRead
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.redirection.io
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.redirection.io"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: apiKey
configuration.api_key['apiKey'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['apiKey'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.PublishHistoryApi(api_client)
    project_id = 'project_id_example' # str | 
    created_at_before = 'created_at_before_example' # str |  (optional)
    created_at_strictly_before = 'created_at_strictly_before_example' # str |  (optional)
    created_at_after = 'created_at_after_example' # str |  (optional)
    created_at_strictly_after = 'created_at_strictly_after_example' # str |  (optional)
    page = 56 # int | The collection page number (optional)

    try:
        # Retrieves the collection of PublishHistory resources.
        api_response = api_instance.get_publish_history_collection(project_id, created_at_before=created_at_before, created_at_strictly_before=created_at_strictly_before, created_at_after=created_at_after, created_at_strictly_after=created_at_strictly_after, page=page)
        print("The response of PublishHistoryApi->get_publish_history_collection:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling PublishHistoryApi->get_publish_history_collection: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **project_id** | **str**|  | 
 **created_at_before** | **str**|  | [optional] 
 **created_at_strictly_before** | **str**|  | [optional] 
 **created_at_after** | **str**|  | [optional] 
 **created_at_strictly_after** | **str**|  | [optional] 
 **page** | **int**| The collection page number | [optional] 

### Return type

[**List[PublishHistoryRead]**](PublishHistoryRead.md)

### Authorization

[apiKey](../README.md#apiKey)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/ld+json, application/json, text/html, text/csv

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | PublishHistory collection response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_publish_history_item**
> PublishHistoryRead get_publish_history_item(id)

Retrieves a PublishHistory resource.

### Example

* Api Key Authentication (apiKey):

```python
import openapi_client
from openapi_client.models.publish_history_read import PublishHistoryRead
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.redirection.io
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.redirection.io"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: apiKey
configuration.api_key['apiKey'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['apiKey'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.PublishHistoryApi(api_client)
    id = 'id_example' # str | 

    try:
        # Retrieves a PublishHistory resource.
        api_response = api_instance.get_publish_history_item(id)
        print("The response of PublishHistoryApi->get_publish_history_item:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling PublishHistoryApi->get_publish_history_item: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**|  | 

### Return type

[**PublishHistoryRead**](PublishHistoryRead.md)

### Authorization

[apiKey](../README.md#apiKey)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/ld+json, application/json, text/html, text/csv

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | PublishHistory resource response |  -  |
**404** | Resource not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

