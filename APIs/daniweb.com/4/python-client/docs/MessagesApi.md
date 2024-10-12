# openapi_client.MessagesApi

All URIs are relative to *https://www.daniweb.com/connect/api/v4*

Method | HTTP request | Description
------------- | ------------- | -------------
[**messages_id_get**](MessagesApi.md#messages_id_get) | **GET** /messages/{ID} | 
[**messages_id_metadata_collections_get**](MessagesApi.md#messages_id_metadata_collections_get) | **GET** /messages/{ID}/metadata/collections | 
[**messages_id_metadata_get**](MessagesApi.md#messages_id_metadata_get) | **GET** /messages/{ID}/metadata | 
[**messages_id_metadata_post**](MessagesApi.md#messages_id_metadata_post) | **POST** /messages/{ID}/metadata | 
[**messages_metadata_filters_post**](MessagesApi.md#messages_metadata_filters_post) | **POST** /messages/metadata/filters | 


# **messages_id_get**
> EndpointGetMessagesID messages_id_get(id)



Fetch an array of messages. You can only retrieve messages authored by you or by users who exist within the current access token's bubble.

### Example

* OAuth Authentication (implicit_flow):
* OAuth Authentication (explicit_flow):

```python
import openapi_client
from openapi_client.models.endpoint_get_messages_id import EndpointGetMessagesID
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://www.daniweb.com/connect/api/v4
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://www.daniweb.com/connect/api/v4"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.MessagesApi(api_client)
    id = [56] # List[int] | 

    try:
        api_response = api_instance.messages_id_get(id)
        print("The response of MessagesApi->messages_id_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling MessagesApi->messages_id_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**List[int]**](int.md)|  | 

### Return type

[**EndpointGetMessagesID**](EndpointGetMessagesID.md)

### Authorization

[implicit_flow](../README.md#implicit_flow), [explicit_flow](../README.md#explicit_flow)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Valid Response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **messages_id_metadata_collections_get**
> EndpointGetMessagesIDMetadataCollections messages_id_metadata_collections_get(id)



Retrieve all key/value pairs attached to the current message that you have access to, so long as the user who authored the message exists within the current access token's bubble. This includes all public metadata, bubbled metadata that was created by an access token existing within the current bubble, user metadata that was created by you, or private metadata created by you from an access token existing within the current bubble. Metadata will be grouped by key.

### Example

* OAuth Authentication (implicit_flow):
* OAuth Authentication (explicit_flow):

```python
import openapi_client
from openapi_client.models.endpoint_get_messages_id_metadata_collections import EndpointGetMessagesIDMetadataCollections
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://www.daniweb.com/connect/api/v4
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://www.daniweb.com/connect/api/v4"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.MessagesApi(api_client)
    id = 56 # int | 

    try:
        api_response = api_instance.messages_id_metadata_collections_get(id)
        print("The response of MessagesApi->messages_id_metadata_collections_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling MessagesApi->messages_id_metadata_collections_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **int**|  | 

### Return type

[**EndpointGetMessagesIDMetadataCollections**](EndpointGetMessagesIDMetadataCollections.md)

### Authorization

[implicit_flow](../README.md#implicit_flow), [explicit_flow](../README.md#explicit_flow)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Valid Response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **messages_id_metadata_get**
> EndpointGetMessagesIDMetadata messages_id_metadata_get(id, offset=offset, limit=limit)



Retrieve all key/value pairs attached to the current message that you have access to, so long as the user who authored the message exists within the current access token's bubble. This includes all public metadata, bubbled metadata that was created by an access token existing within the current bubble, user metadata that was created by you, or private metadata created by you from an access token existing within the current bubble.

### Example

* OAuth Authentication (implicit_flow):
* OAuth Authentication (explicit_flow):

```python
import openapi_client
from openapi_client.models.endpoint_get_messages_id_metadata import EndpointGetMessagesIDMetadata
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://www.daniweb.com/connect/api/v4
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://www.daniweb.com/connect/api/v4"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.MessagesApi(api_client)
    id = 56 # int | 
    offset = 0 # int |  (optional) (default to 0)
    limit = 50 # int |  (optional) (default to 50)

    try:
        api_response = api_instance.messages_id_metadata_get(id, offset=offset, limit=limit)
        print("The response of MessagesApi->messages_id_metadata_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling MessagesApi->messages_id_metadata_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **int**|  | 
 **offset** | **int**|  | [optional] [default to 0]
 **limit** | **int**|  | [optional] [default to 50]

### Return type

[**EndpointGetMessagesIDMetadata**](EndpointGetMessagesIDMetadata.md)

### Authorization

[implicit_flow](../README.md#implicit_flow), [explicit_flow](../README.md#explicit_flow)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Valid Response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **messages_id_metadata_post**
> EndpointPostMessagesIDMetadata messages_id_metadata_post(id, metadata_0_key=metadata_0_key, metadata_0_privacy=metadata_0_privacy, metadata_0_values=metadata_0_values, metadata_1_key=metadata_1_key, metadata_1_privacy=metadata_1_privacy, metadata_1_values=metadata_1_values, metadata_2_key=metadata_2_key, metadata_2_privacy=metadata_2_privacy, metadata_2_values=metadata_2_values)



Attach one-to-many key/value pairs of metadata to a message, so long as the user who authored the message exists within the current access token's bubble. A key is unique for each author/bubble combination. Attaching metadata with an existing key that was previously created by you, from within the same bubble, overwrites the key with the new value or set of values. The privacy setting allows you to specify who will have access to the metadata: Public metadata by you or the other user in the message's conversation, using an access token which grants you access to the user who authored the message, if it wasn't you; Bubbled metadata by you or the other user in the message's conversation, using an access token existing within the current bubble; User metadata by you, so long as you are using an access token which grants you access to the user who authored the message, if it wasn't you; Private metadata by you, so long as you are using an access token existing within the current bubble.

### Example

* OAuth Authentication (implicit_flow):
* OAuth Authentication (explicit_flow):

```python
import openapi_client
from openapi_client.models.endpoint_post_messages_id_metadata import EndpointPostMessagesIDMetadata
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://www.daniweb.com/connect/api/v4
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://www.daniweb.com/connect/api/v4"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.MessagesApi(api_client)
    id = 56 # int | 
    metadata_0_key = 'metadata_0_key_example' # str |  (optional)
    metadata_0_privacy = 'metadata_0_privacy_example' # str |  (optional)
    metadata_0_values = ['metadata_0_values_example'] # List[str] |  (optional)
    metadata_1_key = 'metadata_1_key_example' # str |  (optional)
    metadata_1_privacy = 'metadata_1_privacy_example' # str |  (optional)
    metadata_1_values = ['metadata_1_values_example'] # List[str] |  (optional)
    metadata_2_key = 'metadata_2_key_example' # str |  (optional)
    metadata_2_privacy = 'metadata_2_privacy_example' # str |  (optional)
    metadata_2_values = ['metadata_2_values_example'] # List[str] |  (optional)

    try:
        api_response = api_instance.messages_id_metadata_post(id, metadata_0_key=metadata_0_key, metadata_0_privacy=metadata_0_privacy, metadata_0_values=metadata_0_values, metadata_1_key=metadata_1_key, metadata_1_privacy=metadata_1_privacy, metadata_1_values=metadata_1_values, metadata_2_key=metadata_2_key, metadata_2_privacy=metadata_2_privacy, metadata_2_values=metadata_2_values)
        print("The response of MessagesApi->messages_id_metadata_post:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling MessagesApi->messages_id_metadata_post: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **int**|  | 
 **metadata_0_key** | **str**|  | [optional] 
 **metadata_0_privacy** | **str**|  | [optional] 
 **metadata_0_values** | [**List[str]**](str.md)|  | [optional] 
 **metadata_1_key** | **str**|  | [optional] 
 **metadata_1_privacy** | **str**|  | [optional] 
 **metadata_1_values** | [**List[str]**](str.md)|  | [optional] 
 **metadata_2_key** | **str**|  | [optional] 
 **metadata_2_privacy** | **str**|  | [optional] 
 **metadata_2_values** | [**List[str]**](str.md)|  | [optional] 

### Return type

[**EndpointPostMessagesIDMetadata**](EndpointPostMessagesIDMetadata.md)

### Authorization

[implicit_flow](../README.md#implicit_flow), [explicit_flow](../README.md#explicit_flow)

### HTTP request headers

 - **Content-Type**: multipart/form-data
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Valid Response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **messages_metadata_filters_post**
> EndpointPostMessagesMetadataFilters messages_metadata_filters_post(limit=limit, metadata_0_key=metadata_0_key, metadata_0_values=metadata_0_values, metadata_1_key=metadata_1_key, metadata_1_values=metadata_1_values, metadata_2_key=metadata_2_key, metadata_2_values=metadata_2_values, offset=offset)



Paginated listing of messages filtered by arbitrary metadata criteria. Messages must match on all key/value pairs passed in. Messages may only match on one value of an array passed in. However, messages are sorted based on how many distinct values they match on (most matches first).

### Example

* OAuth Authentication (implicit_flow):
* OAuth Authentication (explicit_flow):

```python
import openapi_client
from openapi_client.models.endpoint_post_messages_metadata_filters import EndpointPostMessagesMetadataFilters
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://www.daniweb.com/connect/api/v4
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://www.daniweb.com/connect/api/v4"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.MessagesApi(api_client)
    limit = 50 # int |  (optional) (default to 50)
    metadata_0_key = 'metadata_0_key_example' # str |  (optional)
    metadata_0_values = ['metadata_0_values_example'] # List[str] |  (optional)
    metadata_1_key = 'metadata_1_key_example' # str |  (optional)
    metadata_1_values = ['metadata_1_values_example'] # List[str] |  (optional)
    metadata_2_key = 'metadata_2_key_example' # str |  (optional)
    metadata_2_values = ['metadata_2_values_example'] # List[str] |  (optional)
    offset = 0 # int |  (optional) (default to 0)

    try:
        api_response = api_instance.messages_metadata_filters_post(limit=limit, metadata_0_key=metadata_0_key, metadata_0_values=metadata_0_values, metadata_1_key=metadata_1_key, metadata_1_values=metadata_1_values, metadata_2_key=metadata_2_key, metadata_2_values=metadata_2_values, offset=offset)
        print("The response of MessagesApi->messages_metadata_filters_post:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling MessagesApi->messages_metadata_filters_post: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **limit** | **int**|  | [optional] [default to 50]
 **metadata_0_key** | **str**|  | [optional] 
 **metadata_0_values** | [**List[str]**](str.md)|  | [optional] 
 **metadata_1_key** | **str**|  | [optional] 
 **metadata_1_values** | [**List[str]**](str.md)|  | [optional] 
 **metadata_2_key** | **str**|  | [optional] 
 **metadata_2_values** | [**List[str]**](str.md)|  | [optional] 
 **offset** | **int**|  | [optional] [default to 0]

### Return type

[**EndpointPostMessagesMetadataFilters**](EndpointPostMessagesMetadataFilters.md)

### Authorization

[implicit_flow](../README.md#implicit_flow), [explicit_flow](../README.md#explicit_flow)

### HTTP request headers

 - **Content-Type**: multipart/form-data
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Valid Response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

