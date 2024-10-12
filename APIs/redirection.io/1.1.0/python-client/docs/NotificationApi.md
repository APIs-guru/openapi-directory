# openapi_client.NotificationApi

All URIs are relative to *https://api.redirection.io*

Method | HTTP request | Description
------------- | ------------- | -------------
[**get_notification_collection**](NotificationApi.md#get_notification_collection) | **GET** /notifications | Retrieves the collection of Notification resources.
[**get_notification_item**](NotificationApi.md#get_notification_item) | **GET** /notifications/{id} | Retrieves a Notification resource.


# **get_notification_collection**
> List[NotificationRead] get_notification_collection(page=page)

Retrieves the collection of Notification resources.

### Example

* Api Key Authentication (apiKey):

```python
import openapi_client
from openapi_client.models.notification_read import NotificationRead
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
    api_instance = openapi_client.NotificationApi(api_client)
    page = 56 # int | The collection page number (optional)

    try:
        # Retrieves the collection of Notification resources.
        api_response = api_instance.get_notification_collection(page=page)
        print("The response of NotificationApi->get_notification_collection:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling NotificationApi->get_notification_collection: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **page** | **int**| The collection page number | [optional] 

### Return type

[**List[NotificationRead]**](NotificationRead.md)

### Authorization

[apiKey](../README.md#apiKey)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/ld+json, application/json, text/html, text/csv

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Notification collection response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_notification_item**
> NotificationRead get_notification_item(id)

Retrieves a Notification resource.

### Example

* Api Key Authentication (apiKey):

```python
import openapi_client
from openapi_client.models.notification_read import NotificationRead
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
    api_instance = openapi_client.NotificationApi(api_client)
    id = 'id_example' # str | 

    try:
        # Retrieves a Notification resource.
        api_response = api_instance.get_notification_item(id)
        print("The response of NotificationApi->get_notification_item:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling NotificationApi->get_notification_item: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**|  | 

### Return type

[**NotificationRead**](NotificationRead.md)

### Authorization

[apiKey](../README.md#apiKey)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/ld+json, application/json, text/html, text/csv

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Notification resource response |  -  |
**404** | Resource not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

