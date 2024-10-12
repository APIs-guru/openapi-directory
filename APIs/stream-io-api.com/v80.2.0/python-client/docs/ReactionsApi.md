# openapi_client.ReactionsApi

All URIs are relative to *https://chat.stream-io-api.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**delete_reaction_0**](ReactionsApi.md#delete_reaction_0) | **DELETE** /messages/{id}/reaction/{type} | Delete reaction
[**get_reactions_0**](ReactionsApi.md#get_reactions_0) | **GET** /messages/{id}/reactions | Get reactions
[**send_reaction_0**](ReactionsApi.md#send_reaction_0) | **POST** /messages/{id}/reaction | Send reaction


# **delete_reaction_0**
> ReactionRemovalResponse delete_reaction_0(id, type, user_id=user_id)

Delete reaction

Removes user reaction from the message  Sends events: - reaction.deleted  Required permissions: - DeleteReaction 

### Example

* Api Key Authentication (stream-auth-type):
* Api Key Authentication (api_key):
* Api Key Authentication (JWT):

```python
import openapi_client
from openapi_client.models.reaction_removal_response import ReactionRemovalResponse
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
    api_instance = openapi_client.ReactionsApi(api_client)
    id = 'id_example' # str | 
    type = 'type_example' # str | 
    user_id = 'user_id_example' # str |  (optional)

    try:
        # Delete reaction
        api_response = api_instance.delete_reaction_0(id, type, user_id=user_id)
        print("The response of ReactionsApi->delete_reaction_0:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ReactionsApi->delete_reaction_0: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**|  | 
 **type** | **str**|  | 
 **user_id** | **str**|  | [optional] 

### Return type

[**ReactionRemovalResponse**](ReactionRemovalResponse.md)

### Authorization

[stream-auth-type](../README.md#stream-auth-type), [api_key](../README.md#api_key), [JWT](../README.md#JWT)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful response |  -  |
**400** | Bad request |  -  |
**429** | Too many requests |  * X-RateLimit-Limit - The number of allowed requests in the current period <br>  * X-RateLimit-Remaining - The number of remaining requests in the current period <br>  * X-RateLimit-Reset - Timestamp when number of requests will be reset <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_reactions_0**
> GetReactionsResponse get_reactions_0(id, limit=limit, offset=offset)

Get reactions

Returns list of reactions of specific message  Required permissions: - ReadChannel 

### Example

* Api Key Authentication (stream-auth-type):
* Api Key Authentication (api_key):
* Api Key Authentication (JWT):

```python
import openapi_client
from openapi_client.models.get_reactions_response import GetReactionsResponse
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
    api_instance = openapi_client.ReactionsApi(api_client)
    id = 'id_example' # str | 
    limit = 56 # int |  (optional)
    offset = 56 # int |  (optional)

    try:
        # Get reactions
        api_response = api_instance.get_reactions_0(id, limit=limit, offset=offset)
        print("The response of ReactionsApi->get_reactions_0:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ReactionsApi->get_reactions_0: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**|  | 
 **limit** | **int**|  | [optional] 
 **offset** | **int**|  | [optional] 

### Return type

[**GetReactionsResponse**](GetReactionsResponse.md)

### Authorization

[stream-auth-type](../README.md#stream-auth-type), [api_key](../README.md#api_key), [JWT](../README.md#JWT)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful response |  -  |
**400** | Bad request |  -  |
**429** | Too many requests |  * X-RateLimit-Limit - The number of allowed requests in the current period <br>  * X-RateLimit-Remaining - The number of remaining requests in the current period <br>  * X-RateLimit-Reset - Timestamp when number of requests will be reset <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **send_reaction_0**
> ReactionResponse send_reaction_0(id, send_reaction_request)

Send reaction

Sends reaction to specified message  Sends events: - reaction.new - reaction.updated  Required permissions: - CreateReaction - UseFrozenChannel 

### Example

* Api Key Authentication (stream-auth-type):
* Api Key Authentication (api_key):
* Api Key Authentication (JWT):

```python
import openapi_client
from openapi_client.models.reaction_response import ReactionResponse
from openapi_client.models.send_reaction_request import SendReactionRequest
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
    api_instance = openapi_client.ReactionsApi(api_client)
    id = 'id_example' # str | 
    send_reaction_request = openapi_client.SendReactionRequest() # SendReactionRequest | 

    try:
        # Send reaction
        api_response = api_instance.send_reaction_0(id, send_reaction_request)
        print("The response of ReactionsApi->send_reaction_0:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ReactionsApi->send_reaction_0: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**|  | 
 **send_reaction_request** | [**SendReactionRequest**](SendReactionRequest.md)|  | 

### Return type

[**ReactionResponse**](ReactionResponse.md)

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

