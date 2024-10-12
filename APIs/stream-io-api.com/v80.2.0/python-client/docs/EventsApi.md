# openapi_client.EventsApi

All URIs are relative to *https://chat.stream-io-api.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**send_event**](EventsApi.md#send_event) | **POST** /channels/{type}/{id}/event | Send event
[**send_user_custom_event**](EventsApi.md#send_user_custom_event) | **POST** /users/{user_id}/event | Send user event
[**sync_0**](EventsApi.md#sync_0) | **POST** /sync | Sync


# **send_event**
> EventResponse send_event(type, id, send_event_request)

Send event

Sends event to the channel  Sends events: - any  Required permissions: - SendCustomEvent 

### Example

* Api Key Authentication (stream-auth-type):
* Api Key Authentication (api_key):
* Api Key Authentication (JWT):

```python
import openapi_client
from openapi_client.models.event_response import EventResponse
from openapi_client.models.send_event_request import SendEventRequest
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://chat.stream-io-api.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://chat.stream-io-api.com"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: stream-auth-type
configuration.api_key['stream-auth-type'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['stream-auth-type'] = 'Bearer'

# Configure API key authorization: api_key
configuration.api_key['api_key'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['api_key'] = 'Bearer'

# Configure API key authorization: JWT
configuration.api_key['JWT'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['JWT'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.EventsApi(api_client)
    type = 'type_example' # str | 
    id = 'id_example' # str | 
    send_event_request = openapi_client.SendEventRequest() # SendEventRequest | 

    try:
        # Send event
        api_response = api_instance.send_event(type, id, send_event_request)
        print("The response of EventsApi->send_event:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling EventsApi->send_event: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **type** | **str**|  | 
 **id** | **str**|  | 
 **send_event_request** | [**SendEventRequest**](SendEventRequest.md)|  | 

### Return type

[**EventResponse**](EventResponse.md)

### Authorization

[stream-auth-type](../README.md#stream-auth-type), [api_key](../README.md#api_key), [JWT](../README.md#JWT)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | Successful response |  -  |
**400** | Bad request |  -  |
**429** | Too many requests |  * X-RateLimit-Limit - The number of allowed requests in the current period <br>  * X-RateLimit-Remaining - The number of remaining requests in the current period <br>  * X-RateLimit-Reset - Timestamp when number of requests will be reset <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **send_user_custom_event**
> Response send_user_custom_event(user_id, send_user_custom_event_request)

Send user event

Sends a custom event to a user  Sends events: - custom 

### Example

* Api Key Authentication (stream-auth-type):
* Api Key Authentication (api_key):
* Api Key Authentication (JWT):

```python
import openapi_client
from openapi_client.models.response import Response
from openapi_client.models.send_user_custom_event_request import SendUserCustomEventRequest
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://chat.stream-io-api.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://chat.stream-io-api.com"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: stream-auth-type
configuration.api_key['stream-auth-type'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['stream-auth-type'] = 'Bearer'

# Configure API key authorization: api_key
configuration.api_key['api_key'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['api_key'] = 'Bearer'

# Configure API key authorization: JWT
configuration.api_key['JWT'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['JWT'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.EventsApi(api_client)
    user_id = 'user_id_example' # str | 
    send_user_custom_event_request = openapi_client.SendUserCustomEventRequest() # SendUserCustomEventRequest | 

    try:
        # Send user event
        api_response = api_instance.send_user_custom_event(user_id, send_user_custom_event_request)
        print("The response of EventsApi->send_user_custom_event:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling EventsApi->send_user_custom_event: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **user_id** | **str**|  | 
 **send_user_custom_event_request** | [**SendUserCustomEventRequest**](SendUserCustomEventRequest.md)|  | 

### Return type

[**Response**](Response.md)

### Authorization

[stream-auth-type](../README.md#stream-auth-type), [api_key](../README.md#api_key), [JWT](../README.md#JWT)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | Successful response |  -  |
**400** | Bad request |  -  |
**429** | Too many requests |  * X-RateLimit-Limit - The number of allowed requests in the current period <br>  * X-RateLimit-Remaining - The number of remaining requests in the current period <br>  * X-RateLimit-Reset - Timestamp when number of requests will be reset <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **sync_0**
> SyncResponse sync_0(sync_request, with_inaccessible_cids=with_inaccessible_cids, watch=watch, client_id=client_id, connection_id=connection_id)

Sync

Returns all events happened since client disconnect in specified channels  Required permissions: - ReadChannel 

### Example

* Api Key Authentication (stream-auth-type):
* Api Key Authentication (api_key):
* Api Key Authentication (JWT):

```python
import openapi_client
from openapi_client.models.sync_request import SyncRequest
from openapi_client.models.sync_response import SyncResponse
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://chat.stream-io-api.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://chat.stream-io-api.com"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: stream-auth-type
configuration.api_key['stream-auth-type'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['stream-auth-type'] = 'Bearer'

# Configure API key authorization: api_key
configuration.api_key['api_key'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['api_key'] = 'Bearer'

# Configure API key authorization: JWT
configuration.api_key['JWT'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['JWT'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.EventsApi(api_client)
    sync_request = openapi_client.SyncRequest() # SyncRequest | 
    with_inaccessible_cids = True # bool |  (optional)
    watch = True # bool |  (optional)
    client_id = 'client_id_example' # str |  (optional)
    connection_id = 'connection_id_example' # str |  (optional)

    try:
        # Sync
        api_response = api_instance.sync_0(sync_request, with_inaccessible_cids=with_inaccessible_cids, watch=watch, client_id=client_id, connection_id=connection_id)
        print("The response of EventsApi->sync_0:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling EventsApi->sync_0: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **sync_request** | [**SyncRequest**](SyncRequest.md)|  | 
 **with_inaccessible_cids** | **bool**|  | [optional] 
 **watch** | **bool**|  | [optional] 
 **client_id** | **str**|  | [optional] 
 **connection_id** | **str**|  | [optional] 

### Return type

[**SyncResponse**](SyncResponse.md)

### Authorization

[stream-auth-type](../README.md#stream-auth-type), [api_key](../README.md#api_key), [JWT](../README.md#JWT)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | Successful response |  -  |
**400** | Bad request |  -  |
**429** | Too many requests |  * X-RateLimit-Limit - The number of allowed requests in the current period <br>  * X-RateLimit-Remaining - The number of remaining requests in the current period <br>  * X-RateLimit-Reset - Timestamp when number of requests will be reset <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

