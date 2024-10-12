# openapi_client.LiveEventsApi

All URIs are relative to *https://management.azure.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**live_events_create**](LiveEventsApi.md#live_events_create) | **PUT** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Media/mediaservices/{accountName}/liveEvents/{liveEventName} | Create Live Event
[**live_events_delete**](LiveEventsApi.md#live_events_delete) | **DELETE** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Media/mediaservices/{accountName}/liveEvents/{liveEventName} | Delete Live Event
[**live_events_get**](LiveEventsApi.md#live_events_get) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Media/mediaservices/{accountName}/liveEvents/{liveEventName} | Get Live Event
[**live_events_list**](LiveEventsApi.md#live_events_list) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Media/mediaservices/{accountName}/liveEvents | List Live Events
[**live_events_reset**](LiveEventsApi.md#live_events_reset) | **POST** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Media/mediaservices/{accountName}/liveEvents/{liveEventName}/reset | Reset Live Event
[**live_events_start**](LiveEventsApi.md#live_events_start) | **POST** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Media/mediaservices/{accountName}/liveEvents/{liveEventName}/start | Start Live Event
[**live_events_stop**](LiveEventsApi.md#live_events_stop) | **POST** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Media/mediaservices/{accountName}/liveEvents/{liveEventName}/stop | Stop Live Event
[**live_events_update**](LiveEventsApi.md#live_events_update) | **PATCH** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Media/mediaservices/{accountName}/liveEvents/{liveEventName} | 


# **live_events_create**
> LiveEvent live_events_create(subscription_id, resource_group_name, account_name, live_event_name, api_version, parameters, auto_start=auto_start)

Create Live Event

Creates a Live Event.

### Example


```python
import openapi_client
from openapi_client.models.live_event import LiveEvent
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
    api_instance = openapi_client.LiveEventsApi(api_client)
    subscription_id = 'subscription_id_example' # str | The unique identifier for a Microsoft Azure subscription.
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group within the Azure subscription.
    account_name = 'account_name_example' # str | The Media Services account name.
    live_event_name = 'live_event_name_example' # str | The name of the Live Event.
    api_version = 'api_version_example' # str | The Version of the API to be used with the client request.
    parameters = openapi_client.LiveEvent() # LiveEvent | Live Event properties needed for creation.
    auto_start = True # bool | The flag indicates if the resource should be automatically started on creation. (optional)

    try:
        # Create Live Event
        api_response = api_instance.live_events_create(subscription_id, resource_group_name, account_name, live_event_name, api_version, parameters, auto_start=auto_start)
        print("The response of LiveEventsApi->live_events_create:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling LiveEventsApi->live_events_create: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| The unique identifier for a Microsoft Azure subscription. | 
 **resource_group_name** | **str**| The name of the resource group within the Azure subscription. | 
 **account_name** | **str**| The Media Services account name. | 
 **live_event_name** | **str**| The name of the Live Event. | 
 **api_version** | **str**| The Version of the API to be used with the client request. | 
 **parameters** | [**LiveEvent**](LiveEvent.md)| Live Event properties needed for creation. | 
 **auto_start** | **bool**| The flag indicates if the resource should be automatically started on creation. | [optional] 

### Return type

[**LiveEvent**](LiveEvent.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK. The request has succeeded. |  -  |
**202** | Accepted. The request has been accepted for processing and the operation will complete asynchronously. See https://go.microsoft.com/fwlink/?linkid&#x3D;2087017 for details on the monitoring asynchronous Azure Operations. |  -  |
**0** | The streaming error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **live_events_delete**
> live_events_delete(subscription_id, resource_group_name, account_name, live_event_name, api_version)

Delete Live Event

Deletes a Live Event.

### Example


```python
import openapi_client
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
    api_instance = openapi_client.LiveEventsApi(api_client)
    subscription_id = 'subscription_id_example' # str | The unique identifier for a Microsoft Azure subscription.
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group within the Azure subscription.
    account_name = 'account_name_example' # str | The Media Services account name.
    live_event_name = 'live_event_name_example' # str | The name of the Live Event.
    api_version = 'api_version_example' # str | The Version of the API to be used with the client request.

    try:
        # Delete Live Event
        api_instance.live_events_delete(subscription_id, resource_group_name, account_name, live_event_name, api_version)
    except Exception as e:
        print("Exception when calling LiveEventsApi->live_events_delete: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| The unique identifier for a Microsoft Azure subscription. | 
 **resource_group_name** | **str**| The name of the resource group within the Azure subscription. | 
 **account_name** | **str**| The Media Services account name. | 
 **live_event_name** | **str**| The name of the Live Event. | 
 **api_version** | **str**| The Version of the API to be used with the client request. | 

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
**200** | OK. The request has succeeded. |  -  |
**202** | Accepted. The request has been accepted for processing and the operation will complete asynchronously. See https://go.microsoft.com/fwlink/?linkid&#x3D;2087017 for details on the monitoring asynchronous Azure Operations. |  -  |
**204** | No content. The request has been accepted but the Live Event was not found. |  -  |
**0** | The streaming error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **live_events_get**
> LiveEvent live_events_get(subscription_id, resource_group_name, account_name, live_event_name, api_version)

Get Live Event

Gets a Live Event.

### Example


```python
import openapi_client
from openapi_client.models.live_event import LiveEvent
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
    api_instance = openapi_client.LiveEventsApi(api_client)
    subscription_id = 'subscription_id_example' # str | The unique identifier for a Microsoft Azure subscription.
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group within the Azure subscription.
    account_name = 'account_name_example' # str | The Media Services account name.
    live_event_name = 'live_event_name_example' # str | The name of the Live Event.
    api_version = 'api_version_example' # str | The Version of the API to be used with the client request.

    try:
        # Get Live Event
        api_response = api_instance.live_events_get(subscription_id, resource_group_name, account_name, live_event_name, api_version)
        print("The response of LiveEventsApi->live_events_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling LiveEventsApi->live_events_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| The unique identifier for a Microsoft Azure subscription. | 
 **resource_group_name** | **str**| The name of the resource group within the Azure subscription. | 
 **account_name** | **str**| The Media Services account name. | 
 **live_event_name** | **str**| The name of the Live Event. | 
 **api_version** | **str**| The Version of the API to be used with the client request. | 

### Return type

[**LiveEvent**](LiveEvent.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK. The request has succeeded. |  -  |
**404** | NotFound |  -  |
**0** | The streaming error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **live_events_list**
> LiveEventListResult live_events_list(subscription_id, resource_group_name, account_name, api_version)

List Live Events

Lists the Live Events in the account.

### Example


```python
import openapi_client
from openapi_client.models.live_event_list_result import LiveEventListResult
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
    api_instance = openapi_client.LiveEventsApi(api_client)
    subscription_id = 'subscription_id_example' # str | The unique identifier for a Microsoft Azure subscription.
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group within the Azure subscription.
    account_name = 'account_name_example' # str | The Media Services account name.
    api_version = 'api_version_example' # str | The Version of the API to be used with the client request.

    try:
        # List Live Events
        api_response = api_instance.live_events_list(subscription_id, resource_group_name, account_name, api_version)
        print("The response of LiveEventsApi->live_events_list:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling LiveEventsApi->live_events_list: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| The unique identifier for a Microsoft Azure subscription. | 
 **resource_group_name** | **str**| The name of the resource group within the Azure subscription. | 
 **account_name** | **str**| The Media Services account name. | 
 **api_version** | **str**| The Version of the API to be used with the client request. | 

### Return type

[**LiveEventListResult**](LiveEventListResult.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK. The request has succeeded. |  -  |
**0** | The streaming error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **live_events_reset**
> live_events_reset(subscription_id, resource_group_name, account_name, live_event_name, api_version)

Reset Live Event

Resets an existing Live Event.

### Example


```python
import openapi_client
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
    api_instance = openapi_client.LiveEventsApi(api_client)
    subscription_id = 'subscription_id_example' # str | The unique identifier for a Microsoft Azure subscription.
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group within the Azure subscription.
    account_name = 'account_name_example' # str | The Media Services account name.
    live_event_name = 'live_event_name_example' # str | The name of the Live Event.
    api_version = 'api_version_example' # str | The Version of the API to be used with the client request.

    try:
        # Reset Live Event
        api_instance.live_events_reset(subscription_id, resource_group_name, account_name, live_event_name, api_version)
    except Exception as e:
        print("Exception when calling LiveEventsApi->live_events_reset: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| The unique identifier for a Microsoft Azure subscription. | 
 **resource_group_name** | **str**| The name of the resource group within the Azure subscription. | 
 **account_name** | **str**| The Media Services account name. | 
 **live_event_name** | **str**| The name of the Live Event. | 
 **api_version** | **str**| The Version of the API to be used with the client request. | 

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
**200** | OK. The request has succeeded. |  -  |
**202** | Accepted. The request has been accepted for processing and the operation will complete asynchronously. See https://go.microsoft.com/fwlink/?linkid&#x3D;2087017 for details on the monitoring asynchronous Azure Operations. |  -  |
**0** | The streaming error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **live_events_start**
> live_events_start(subscription_id, resource_group_name, account_name, live_event_name, api_version)

Start Live Event

Starts an existing Live Event.

### Example


```python
import openapi_client
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
    api_instance = openapi_client.LiveEventsApi(api_client)
    subscription_id = 'subscription_id_example' # str | The unique identifier for a Microsoft Azure subscription.
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group within the Azure subscription.
    account_name = 'account_name_example' # str | The Media Services account name.
    live_event_name = 'live_event_name_example' # str | The name of the Live Event.
    api_version = 'api_version_example' # str | The Version of the API to be used with the client request.

    try:
        # Start Live Event
        api_instance.live_events_start(subscription_id, resource_group_name, account_name, live_event_name, api_version)
    except Exception as e:
        print("Exception when calling LiveEventsApi->live_events_start: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| The unique identifier for a Microsoft Azure subscription. | 
 **resource_group_name** | **str**| The name of the resource group within the Azure subscription. | 
 **account_name** | **str**| The Media Services account name. | 
 **live_event_name** | **str**| The name of the Live Event. | 
 **api_version** | **str**| The Version of the API to be used with the client request. | 

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
**200** | OK. The request has succeeded. |  -  |
**202** | Accepted. The request has been accepted for processing and the operation will complete asynchronously. See https://go.microsoft.com/fwlink/?linkid&#x3D;2087017 for details on the monitoring asynchronous Azure Operations. |  -  |
**0** | The streaming error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **live_events_stop**
> live_events_stop(subscription_id, resource_group_name, account_name, live_event_name, api_version, parameters)

Stop Live Event

Stops an existing Live Event.

### Example


```python
import openapi_client
from openapi_client.models.live_event_action_input import LiveEventActionInput
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
    api_instance = openapi_client.LiveEventsApi(api_client)
    subscription_id = 'subscription_id_example' # str | The unique identifier for a Microsoft Azure subscription.
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group within the Azure subscription.
    account_name = 'account_name_example' # str | The Media Services account name.
    live_event_name = 'live_event_name_example' # str | The name of the Live Event.
    api_version = 'api_version_example' # str | The Version of the API to be used with the client request.
    parameters = openapi_client.LiveEventActionInput() # LiveEventActionInput | LiveEvent stop parameters

    try:
        # Stop Live Event
        api_instance.live_events_stop(subscription_id, resource_group_name, account_name, live_event_name, api_version, parameters)
    except Exception as e:
        print("Exception when calling LiveEventsApi->live_events_stop: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| The unique identifier for a Microsoft Azure subscription. | 
 **resource_group_name** | **str**| The name of the resource group within the Azure subscription. | 
 **account_name** | **str**| The Media Services account name. | 
 **live_event_name** | **str**| The name of the Live Event. | 
 **api_version** | **str**| The Version of the API to be used with the client request. | 
 **parameters** | [**LiveEventActionInput**](LiveEventActionInput.md)| LiveEvent stop parameters | 

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK. The request has succeeded. |  -  |
**202** | Accepted. The request has been accepted for processing and the operation will complete asynchronously. See https://go.microsoft.com/fwlink/?linkid&#x3D;2087017 for details on the monitoring asynchronous Azure Operations. |  -  |
**0** | The streaming error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **live_events_update**
> LiveEvent live_events_update(subscription_id, resource_group_name, account_name, live_event_name, api_version, parameters)



Updates a existing Live Event.

### Example


```python
import openapi_client
from openapi_client.models.live_event import LiveEvent
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
    api_instance = openapi_client.LiveEventsApi(api_client)
    subscription_id = 'subscription_id_example' # str | The unique identifier for a Microsoft Azure subscription.
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group within the Azure subscription.
    account_name = 'account_name_example' # str | The Media Services account name.
    live_event_name = 'live_event_name_example' # str | The name of the Live Event.
    api_version = 'api_version_example' # str | The Version of the API to be used with the client request.
    parameters = openapi_client.LiveEvent() # LiveEvent | Live Event properties needed for creation.

    try:
        api_response = api_instance.live_events_update(subscription_id, resource_group_name, account_name, live_event_name, api_version, parameters)
        print("The response of LiveEventsApi->live_events_update:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling LiveEventsApi->live_events_update: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| The unique identifier for a Microsoft Azure subscription. | 
 **resource_group_name** | **str**| The name of the resource group within the Azure subscription. | 
 **account_name** | **str**| The Media Services account name. | 
 **live_event_name** | **str**| The name of the Live Event. | 
 **api_version** | **str**| The Version of the API to be used with the client request. | 
 **parameters** | [**LiveEvent**](LiveEvent.md)| Live Event properties needed for creation. | 

### Return type

[**LiveEvent**](LiveEvent.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK. The request has succeeded. |  -  |
**202** | Accepted. The request has been accepted for processing and the operation will complete asynchronously. See https://go.microsoft.com/fwlink/?linkid&#x3D;2087017 for details on the monitoring asynchronous Azure Operations. |  -  |
**0** | The streaming error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

