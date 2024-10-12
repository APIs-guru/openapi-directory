# openapi_client.NotificationEndpointsApi

All URIs are relative to */api/v2*

Method | HTTP request | Description
------------- | ------------- | -------------
[**create_notification_endpoint**](NotificationEndpointsApi.md#create_notification_endpoint) | **POST** /notificationEndpoints | Add a notification endpoint
[**delete_notification_endpoints_id**](NotificationEndpointsApi.md#delete_notification_endpoints_id) | **DELETE** /notificationEndpoints/{endpointID} | Delete a notification endpoint
[**delete_notification_endpoints_id_labels_id**](NotificationEndpointsApi.md#delete_notification_endpoints_id_labels_id) | **DELETE** /notificationEndpoints/{endpointID}/labels/{labelID} | Delete a label from a notification endpoint
[**get_notification_endpoints**](NotificationEndpointsApi.md#get_notification_endpoints) | **GET** /notificationEndpoints | List all notification endpoints
[**get_notification_endpoints_id**](NotificationEndpointsApi.md#get_notification_endpoints_id) | **GET** /notificationEndpoints/{endpointID} | Retrieve a notification endpoint
[**get_notification_endpoints_id_labels**](NotificationEndpointsApi.md#get_notification_endpoints_id_labels) | **GET** /notificationEndpoints/{endpointID}/labels | List all labels for a notification endpoint
[**patch_notification_endpoints_id**](NotificationEndpointsApi.md#patch_notification_endpoints_id) | **PATCH** /notificationEndpoints/{endpointID} | Update a notification endpoint
[**post_notification_endpoint_id_labels**](NotificationEndpointsApi.md#post_notification_endpoint_id_labels) | **POST** /notificationEndpoints/{endpointID}/labels | Add a label to a notification endpoint
[**put_notification_endpoints_id**](NotificationEndpointsApi.md#put_notification_endpoints_id) | **PUT** /notificationEndpoints/{endpointID} | Update a notification endpoint


# **create_notification_endpoint**
> NotificationEndpoint create_notification_endpoint(post_notification_endpoint)

Add a notification endpoint

### Example


```python
import openapi_client
from openapi_client.models.notification_endpoint import NotificationEndpoint
from openapi_client.models.post_notification_endpoint import PostNotificationEndpoint
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to /api/v2
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "/api/v2"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.NotificationEndpointsApi(api_client)
    post_notification_endpoint = openapi_client.PostNotificationEndpoint() # PostNotificationEndpoint | Notification endpoint to create

    try:
        # Add a notification endpoint
        api_response = api_instance.create_notification_endpoint(post_notification_endpoint)
        print("The response of NotificationEndpointsApi->create_notification_endpoint:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling NotificationEndpointsApi->create_notification_endpoint: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **post_notification_endpoint** | [**PostNotificationEndpoint**](PostNotificationEndpoint.md)| Notification endpoint to create | 

### Return type

[**NotificationEndpoint**](NotificationEndpoint.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | Notification endpoint created |  -  |
**0** | Unexpected error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **delete_notification_endpoints_id**
> delete_notification_endpoints_id(endpoint_id, zap_trace_span=zap_trace_span)

Delete a notification endpoint

### Example


```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to /api/v2
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "/api/v2"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.NotificationEndpointsApi(api_client)
    endpoint_id = 'endpoint_id_example' # str | The notification endpoint ID.
    zap_trace_span = '{\"baggage\":{\"key\":\"value\"},\"span_id\":\"1\",\"trace_id\":\"1\"}' # str | OpenTracing span context (optional)

    try:
        # Delete a notification endpoint
        api_instance.delete_notification_endpoints_id(endpoint_id, zap_trace_span=zap_trace_span)
    except Exception as e:
        print("Exception when calling NotificationEndpointsApi->delete_notification_endpoints_id: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **endpoint_id** | **str**| The notification endpoint ID. | 
 **zap_trace_span** | **str**| OpenTracing span context | [optional] 

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**204** | Delete has been accepted |  -  |
**404** | The endpoint was not found |  -  |
**0** | Unexpected error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **delete_notification_endpoints_id_labels_id**
> delete_notification_endpoints_id_labels_id(endpoint_id, label_id, zap_trace_span=zap_trace_span)

Delete a label from a notification endpoint

### Example


```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to /api/v2
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "/api/v2"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.NotificationEndpointsApi(api_client)
    endpoint_id = 'endpoint_id_example' # str | The notification endpoint ID.
    label_id = 'label_id_example' # str | The ID of the label to delete.
    zap_trace_span = '{\"baggage\":{\"key\":\"value\"},\"span_id\":\"1\",\"trace_id\":\"1\"}' # str | OpenTracing span context (optional)

    try:
        # Delete a label from a notification endpoint
        api_instance.delete_notification_endpoints_id_labels_id(endpoint_id, label_id, zap_trace_span=zap_trace_span)
    except Exception as e:
        print("Exception when calling NotificationEndpointsApi->delete_notification_endpoints_id_labels_id: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **endpoint_id** | **str**| The notification endpoint ID. | 
 **label_id** | **str**| The ID of the label to delete. | 
 **zap_trace_span** | **str**| OpenTracing span context | [optional] 

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**204** | Delete has been accepted |  -  |
**404** | Endpoint or label not found |  -  |
**0** | Unexpected error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_notification_endpoints**
> NotificationEndpoints get_notification_endpoints(org_id, zap_trace_span=zap_trace_span, offset=offset, limit=limit)

List all notification endpoints

### Example


```python
import openapi_client
from openapi_client.models.notification_endpoints import NotificationEndpoints
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to /api/v2
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "/api/v2"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.NotificationEndpointsApi(api_client)
    org_id = 'org_id_example' # str | Only show notification endpoints that belong to specific organization ID.
    zap_trace_span = '{\"baggage\":{\"key\":\"value\"},\"span_id\":\"1\",\"trace_id\":\"1\"}' # str | OpenTracing span context (optional)
    offset = 56 # int |  (optional)
    limit = 20 # int |  (optional) (default to 20)

    try:
        # List all notification endpoints
        api_response = api_instance.get_notification_endpoints(org_id, zap_trace_span=zap_trace_span, offset=offset, limit=limit)
        print("The response of NotificationEndpointsApi->get_notification_endpoints:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling NotificationEndpointsApi->get_notification_endpoints: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **org_id** | **str**| Only show notification endpoints that belong to specific organization ID. | 
 **zap_trace_span** | **str**| OpenTracing span context | [optional] 
 **offset** | **int**|  | [optional] 
 **limit** | **int**|  | [optional] [default to 20]

### Return type

[**NotificationEndpoints**](NotificationEndpoints.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | A list of notification endpoints |  -  |
**0** | Unexpected error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_notification_endpoints_id**
> NotificationEndpoint get_notification_endpoints_id(endpoint_id, zap_trace_span=zap_trace_span)

Retrieve a notification endpoint

### Example


```python
import openapi_client
from openapi_client.models.notification_endpoint import NotificationEndpoint
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to /api/v2
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "/api/v2"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.NotificationEndpointsApi(api_client)
    endpoint_id = 'endpoint_id_example' # str | The notification endpoint ID.
    zap_trace_span = '{\"baggage\":{\"key\":\"value\"},\"span_id\":\"1\",\"trace_id\":\"1\"}' # str | OpenTracing span context (optional)

    try:
        # Retrieve a notification endpoint
        api_response = api_instance.get_notification_endpoints_id(endpoint_id, zap_trace_span=zap_trace_span)
        print("The response of NotificationEndpointsApi->get_notification_endpoints_id:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling NotificationEndpointsApi->get_notification_endpoints_id: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **endpoint_id** | **str**| The notification endpoint ID. | 
 **zap_trace_span** | **str**| OpenTracing span context | [optional] 

### Return type

[**NotificationEndpoint**](NotificationEndpoint.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The notification endpoint requested |  -  |
**0** | Unexpected error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_notification_endpoints_id_labels**
> LabelsResponse get_notification_endpoints_id_labels(endpoint_id, zap_trace_span=zap_trace_span)

List all labels for a notification endpoint

### Example


```python
import openapi_client
from openapi_client.models.labels_response import LabelsResponse
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to /api/v2
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "/api/v2"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.NotificationEndpointsApi(api_client)
    endpoint_id = 'endpoint_id_example' # str | The notification endpoint ID.
    zap_trace_span = '{\"baggage\":{\"key\":\"value\"},\"span_id\":\"1\",\"trace_id\":\"1\"}' # str | OpenTracing span context (optional)

    try:
        # List all labels for a notification endpoint
        api_response = api_instance.get_notification_endpoints_id_labels(endpoint_id, zap_trace_span=zap_trace_span)
        print("The response of NotificationEndpointsApi->get_notification_endpoints_id_labels:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling NotificationEndpointsApi->get_notification_endpoints_id_labels: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **endpoint_id** | **str**| The notification endpoint ID. | 
 **zap_trace_span** | **str**| OpenTracing span context | [optional] 

### Return type

[**LabelsResponse**](LabelsResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | A list of all labels for a notification endpoint |  -  |
**0** | Unexpected error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **patch_notification_endpoints_id**
> NotificationEndpoint patch_notification_endpoints_id(endpoint_id, notification_endpoint_update, zap_trace_span=zap_trace_span)

Update a notification endpoint

### Example


```python
import openapi_client
from openapi_client.models.notification_endpoint import NotificationEndpoint
from openapi_client.models.notification_endpoint_update import NotificationEndpointUpdate
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to /api/v2
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "/api/v2"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.NotificationEndpointsApi(api_client)
    endpoint_id = 'endpoint_id_example' # str | The notification endpoint ID.
    notification_endpoint_update = openapi_client.NotificationEndpointUpdate() # NotificationEndpointUpdate | Check update to apply
    zap_trace_span = '{\"baggage\":{\"key\":\"value\"},\"span_id\":\"1\",\"trace_id\":\"1\"}' # str | OpenTracing span context (optional)

    try:
        # Update a notification endpoint
        api_response = api_instance.patch_notification_endpoints_id(endpoint_id, notification_endpoint_update, zap_trace_span=zap_trace_span)
        print("The response of NotificationEndpointsApi->patch_notification_endpoints_id:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling NotificationEndpointsApi->patch_notification_endpoints_id: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **endpoint_id** | **str**| The notification endpoint ID. | 
 **notification_endpoint_update** | [**NotificationEndpointUpdate**](NotificationEndpointUpdate.md)| Check update to apply | 
 **zap_trace_span** | **str**| OpenTracing span context | [optional] 

### Return type

[**NotificationEndpoint**](NotificationEndpoint.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | An updated notification endpoint |  -  |
**404** | The notification endpoint was not found |  -  |
**0** | Unexpected error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **post_notification_endpoint_id_labels**
> LabelResponse post_notification_endpoint_id_labels(endpoint_id, label_mapping, zap_trace_span=zap_trace_span)

Add a label to a notification endpoint

### Example


```python
import openapi_client
from openapi_client.models.label_mapping import LabelMapping
from openapi_client.models.label_response import LabelResponse
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to /api/v2
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "/api/v2"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.NotificationEndpointsApi(api_client)
    endpoint_id = 'endpoint_id_example' # str | The notification endpoint ID.
    label_mapping = openapi_client.LabelMapping() # LabelMapping | Label to add
    zap_trace_span = '{\"baggage\":{\"key\":\"value\"},\"span_id\":\"1\",\"trace_id\":\"1\"}' # str | OpenTracing span context (optional)

    try:
        # Add a label to a notification endpoint
        api_response = api_instance.post_notification_endpoint_id_labels(endpoint_id, label_mapping, zap_trace_span=zap_trace_span)
        print("The response of NotificationEndpointsApi->post_notification_endpoint_id_labels:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling NotificationEndpointsApi->post_notification_endpoint_id_labels: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **endpoint_id** | **str**| The notification endpoint ID. | 
 **label_mapping** | [**LabelMapping**](LabelMapping.md)| Label to add | 
 **zap_trace_span** | **str**| OpenTracing span context | [optional] 

### Return type

[**LabelResponse**](LabelResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | The label was added to the notification endpoint |  -  |
**0** | Unexpected error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **put_notification_endpoints_id**
> NotificationEndpoint put_notification_endpoints_id(endpoint_id, notification_endpoint, zap_trace_span=zap_trace_span)

Update a notification endpoint

### Example


```python
import openapi_client
from openapi_client.models.notification_endpoint import NotificationEndpoint
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to /api/v2
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "/api/v2"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.NotificationEndpointsApi(api_client)
    endpoint_id = 'endpoint_id_example' # str | The notification endpoint ID.
    notification_endpoint = openapi_client.NotificationEndpoint() # NotificationEndpoint | A new notification endpoint to replace the existing endpoint with
    zap_trace_span = '{\"baggage\":{\"key\":\"value\"},\"span_id\":\"1\",\"trace_id\":\"1\"}' # str | OpenTracing span context (optional)

    try:
        # Update a notification endpoint
        api_response = api_instance.put_notification_endpoints_id(endpoint_id, notification_endpoint, zap_trace_span=zap_trace_span)
        print("The response of NotificationEndpointsApi->put_notification_endpoints_id:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling NotificationEndpointsApi->put_notification_endpoints_id: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **endpoint_id** | **str**| The notification endpoint ID. | 
 **notification_endpoint** | [**NotificationEndpoint**](NotificationEndpoint.md)| A new notification endpoint to replace the existing endpoint with | 
 **zap_trace_span** | **str**| OpenTracing span context | [optional] 

### Return type

[**NotificationEndpoint**](NotificationEndpoint.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | An updated notification endpoint |  -  |
**404** | The notification endpoint was not found |  -  |
**0** | Unexpected error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

