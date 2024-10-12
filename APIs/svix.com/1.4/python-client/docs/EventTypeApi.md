# openapi_client.EventTypeApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**create_event_type_api_v1_event_type_post**](EventTypeApi.md#create_event_type_api_v1_event_type_post) | **POST** /api/v1/event-type/ | Create Event Type
[**delete_event_type_api_v1_event_type_event_type_name_delete**](EventTypeApi.md#delete_event_type_api_v1_event_type_event_type_name_delete) | **DELETE** /api/v1/event-type/{event_type_name}/ | Archive Event Type
[**get_event_type_api_v1_event_type_event_type_name_get**](EventTypeApi.md#get_event_type_api_v1_event_type_event_type_name_get) | **GET** /api/v1/event-type/{event_type_name}/ | Get Event Type
[**list_event_types_api_v1_event_type_get**](EventTypeApi.md#list_event_types_api_v1_event_type_get) | **GET** /api/v1/event-type/ | List Event Types
[**update_event_type_api_v1_event_type_event_type_name_put**](EventTypeApi.md#update_event_type_api_v1_event_type_event_type_name_put) | **PUT** /api/v1/event-type/{event_type_name}/ | Update Event Type


# **create_event_type_api_v1_event_type_post**
> EventTypeOut create_event_type_api_v1_event_type_post(event_type_in, idempotency_key=idempotency_key)

Create Event Type

Create new or unarchive existing event type.  Unarchiving an event type will allow endpoints to filter on it and messages to be sent with it. Endpoints filtering on the event type before archival will continue to filter on it. This operation does not preserve the description and schemas.

### Example

* Bearer Authentication (HTTPBearer):

```python
import openapi_client
from openapi_client.models.event_type_in import EventTypeIn
from openapi_client.models.event_type_out import EventTypeOut
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://localhost
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "http://localhost"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure Bearer authorization: HTTPBearer
configuration = openapi_client.Configuration(
    access_token = os.environ["BEARER_TOKEN"]
)

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.EventTypeApi(api_client)
    event_type_in = openapi_client.EventTypeIn() # EventTypeIn | 
    idempotency_key = 'idempotency_key_example' # str | The request's idempotency key (optional)

    try:
        # Create Event Type
        api_response = api_instance.create_event_type_api_v1_event_type_post(event_type_in, idempotency_key=idempotency_key)
        print("The response of EventTypeApi->create_event_type_api_v1_event_type_post:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling EventTypeApi->create_event_type_api_v1_event_type_post: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **event_type_in** | [**EventTypeIn**](EventTypeIn.md)|  | 
 **idempotency_key** | **str**| The request&#39;s idempotency key | [optional] 

### Return type

[**EventTypeOut**](EventTypeOut.md)

### Authorization

[HTTPBearer](../README.md#HTTPBearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | Successful Response |  -  |
**401** | Unauthorized |  -  |
**403** | Forbidden |  -  |
**404** | Not Found |  -  |
**409** | Conflict |  -  |
**422** | Validation Error |  -  |
**429** | Too Many Requests |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **delete_event_type_api_v1_event_type_event_type_name_delete**
> delete_event_type_api_v1_event_type_event_type_name_delete(event_type_name, expunge=expunge, idempotency_key=idempotency_key)

Archive Event Type

Archive an event type.  Endpoints already configured to filter on an event type will continue to do so after archival. However, new messages can not be sent with it and endpoints can not filter on it. An event type can be unarchived with the [create operation](#operation/create_event_type_api_v1_event_type__post).  If `expunge=true` is set then the event type is deleted instead of archived. This can only be used in development environments.

### Example

* Bearer Authentication (HTTPBearer):

```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://localhost
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "http://localhost"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure Bearer authorization: HTTPBearer
configuration = openapi_client.Configuration(
    access_token = os.environ["BEARER_TOKEN"]
)

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.EventTypeApi(api_client)
    event_type_name = 'user.signup' # str | 
    expunge = False # bool |  (optional) (default to False)
    idempotency_key = 'idempotency_key_example' # str | The request's idempotency key (optional)

    try:
        # Archive Event Type
        api_instance.delete_event_type_api_v1_event_type_event_type_name_delete(event_type_name, expunge=expunge, idempotency_key=idempotency_key)
    except Exception as e:
        print("Exception when calling EventTypeApi->delete_event_type_api_v1_event_type_event_type_name_delete: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **event_type_name** | **str**|  | 
 **expunge** | **bool**|  | [optional] [default to False]
 **idempotency_key** | **str**| The request&#39;s idempotency key | [optional] 

### Return type

void (empty response body)

### Authorization

[HTTPBearer](../README.md#HTTPBearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**204** | Successful Response |  -  |
**401** | Unauthorized |  -  |
**403** | Forbidden |  -  |
**404** | Not Found |  -  |
**409** | Conflict |  -  |
**422** | Validation Error |  -  |
**429** | Too Many Requests |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_event_type_api_v1_event_type_event_type_name_get**
> EventTypeOut get_event_type_api_v1_event_type_event_type_name_get(event_type_name, idempotency_key=idempotency_key)

Get Event Type

Get an event type.

### Example

* Bearer Authentication (HTTPBearer):

```python
import openapi_client
from openapi_client.models.event_type_out import EventTypeOut
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://localhost
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "http://localhost"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure Bearer authorization: HTTPBearer
configuration = openapi_client.Configuration(
    access_token = os.environ["BEARER_TOKEN"]
)

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.EventTypeApi(api_client)
    event_type_name = 'user.signup' # str | 
    idempotency_key = 'idempotency_key_example' # str | The request's idempotency key (optional)

    try:
        # Get Event Type
        api_response = api_instance.get_event_type_api_v1_event_type_event_type_name_get(event_type_name, idempotency_key=idempotency_key)
        print("The response of EventTypeApi->get_event_type_api_v1_event_type_event_type_name_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling EventTypeApi->get_event_type_api_v1_event_type_event_type_name_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **event_type_name** | **str**|  | 
 **idempotency_key** | **str**| The request&#39;s idempotency key | [optional] 

### Return type

[**EventTypeOut**](EventTypeOut.md)

### Authorization

[HTTPBearer](../README.md#HTTPBearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful Response |  -  |
**401** | Unauthorized |  -  |
**403** | Forbidden |  -  |
**404** | Not Found |  -  |
**409** | Conflict |  -  |
**422** | Validation Error |  -  |
**429** | Too Many Requests |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **list_event_types_api_v1_event_type_get**
> ListResponseEventTypeOut list_event_types_api_v1_event_type_get(iterator=iterator, limit=limit, with_content=with_content, include_archived=include_archived, idempotency_key=idempotency_key)

List Event Types

Return the list of event types.

### Example

* Bearer Authentication (HTTPBearer):

```python
import openapi_client
from openapi_client.models.list_response_event_type_out import ListResponseEventTypeOut
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://localhost
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "http://localhost"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure Bearer authorization: HTTPBearer
configuration = openapi_client.Configuration(
    access_token = os.environ["BEARER_TOKEN"]
)

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.EventTypeApi(api_client)
    iterator = 'user.signup' # str |  (optional)
    limit = 50 # int |  (optional) (default to 50)
    with_content = False # bool |  (optional) (default to False)
    include_archived = False # bool |  (optional) (default to False)
    idempotency_key = 'idempotency_key_example' # str | The request's idempotency key (optional)

    try:
        # List Event Types
        api_response = api_instance.list_event_types_api_v1_event_type_get(iterator=iterator, limit=limit, with_content=with_content, include_archived=include_archived, idempotency_key=idempotency_key)
        print("The response of EventTypeApi->list_event_types_api_v1_event_type_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling EventTypeApi->list_event_types_api_v1_event_type_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **iterator** | **str**|  | [optional] 
 **limit** | **int**|  | [optional] [default to 50]
 **with_content** | **bool**|  | [optional] [default to False]
 **include_archived** | **bool**|  | [optional] [default to False]
 **idempotency_key** | **str**| The request&#39;s idempotency key | [optional] 

### Return type

[**ListResponseEventTypeOut**](ListResponseEventTypeOut.md)

### Authorization

[HTTPBearer](../README.md#HTTPBearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful Response |  -  |
**401** | Unauthorized |  -  |
**403** | Forbidden |  -  |
**404** | Not Found |  -  |
**409** | Conflict |  -  |
**422** | Validation Error |  -  |
**429** | Too Many Requests |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **update_event_type_api_v1_event_type_event_type_name_put**
> EventTypeOut update_event_type_api_v1_event_type_event_type_name_put(event_type_name, event_type_update, idempotency_key=idempotency_key)

Update Event Type

Update an event type.

### Example

* Bearer Authentication (HTTPBearer):

```python
import openapi_client
from openapi_client.models.event_type_out import EventTypeOut
from openapi_client.models.event_type_update import EventTypeUpdate
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://localhost
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "http://localhost"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure Bearer authorization: HTTPBearer
configuration = openapi_client.Configuration(
    access_token = os.environ["BEARER_TOKEN"]
)

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.EventTypeApi(api_client)
    event_type_name = 'user.signup' # str | 
    event_type_update = openapi_client.EventTypeUpdate() # EventTypeUpdate | 
    idempotency_key = 'idempotency_key_example' # str | The request's idempotency key (optional)

    try:
        # Update Event Type
        api_response = api_instance.update_event_type_api_v1_event_type_event_type_name_put(event_type_name, event_type_update, idempotency_key=idempotency_key)
        print("The response of EventTypeApi->update_event_type_api_v1_event_type_event_type_name_put:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling EventTypeApi->update_event_type_api_v1_event_type_event_type_name_put: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **event_type_name** | **str**|  | 
 **event_type_update** | [**EventTypeUpdate**](EventTypeUpdate.md)|  | 
 **idempotency_key** | **str**| The request&#39;s idempotency key | [optional] 

### Return type

[**EventTypeOut**](EventTypeOut.md)

### Authorization

[HTTPBearer](../README.md#HTTPBearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful Response |  -  |
**201** | Created |  -  |
**401** | Unauthorized |  -  |
**403** | Forbidden |  -  |
**404** | Not Found |  -  |
**409** | Conflict |  -  |
**422** | Validation Error |  -  |
**429** | Too Many Requests |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

