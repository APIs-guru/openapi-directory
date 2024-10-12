# openapi_client.ChannelsApi

All URIs are relative to *https://api.ritc.io*

Method | HTTP request | Description
------------- | ------------- | -------------
[**add_channel**](ChannelsApi.md#add_channel) | **POST** /channels | 
[**add_channel_function**](ChannelsApi.md#add_channel_function) | **POST** /channels/{channel_id}/functions | 
[**get_channel**](ChannelsApi.md#get_channel) | **GET** /channels/{channel_id} | 
[**get_channel_function**](ChannelsApi.md#get_channel_function) | **GET** /channels/{channel_id}/functions/{function_id} | 
[**list_anonymous_channels**](ChannelsApi.md#list_anonymous_channels) | **GET** /channels/anonymous | 
[**list_channel_functions**](ChannelsApi.md#list_channel_functions) | **GET** /channels/{channel_id}/functions | 
[**list_channels**](ChannelsApi.md#list_channels) | **GET** /channels | 
[**remove_channel**](ChannelsApi.md#remove_channel) | **DELETE** /channels/{channel_id} | 
[**update_channel**](ChannelsApi.md#update_channel) | **PATCH** /channels/{channel_id} | 


# **add_channel**
> ChannelResponse add_channel(channel_object)



Create a channel

### Example

* Api Key Authentication (Authorization):

```python
import openapi_client
from openapi_client.models.channel import Channel
from openapi_client.models.channel_response import ChannelResponse
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.ritc.io
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.ritc.io"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: Authorization
configuration.api_key['Authorization'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['Authorization'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.ChannelsApi(api_client)
    channel_object = openapi_client.Channel() # Channel | Channel information

    try:
        api_response = api_instance.add_channel(channel_object)
        print("The response of ChannelsApi->add_channel:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ChannelsApi->add_channel: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **channel_object** | [**Channel**](Channel.md)| Channel information | 

### Return type

[**ChannelResponse**](ChannelResponse.md)

### Authorization

[Authorization](../README.md#Authorization)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | A private channel was created |  -  |
**400** | Invalid Input |  -  |
**0** | Unexpected error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **add_channel_function**
> FunctionResponse add_channel_function(channel_id, channel_function_object)



Create a channel function

### Example

* Api Key Authentication (Authorization):

```python
import openapi_client
from openapi_client.models.function7 import Function7
from openapi_client.models.function_response import FunctionResponse
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.ritc.io
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.ritc.io"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: Authorization
configuration.api_key['Authorization'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['Authorization'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.ChannelsApi(api_client)
    channel_id = 'channel_id_example' # str | Id of Channel
    channel_function_object = openapi_client.Function7() # Function7 | Channel Function information

    try:
        api_response = api_instance.add_channel_function(channel_id, channel_function_object)
        print("The response of ChannelsApi->add_channel_function:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ChannelsApi->add_channel_function: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **channel_id** | **str**| Id of Channel | 
 **channel_function_object** | [**Function7**](Function7.md)| Channel Function information | 

### Return type

[**FunctionResponse**](FunctionResponse.md)

### Authorization

[Authorization](../README.md#Authorization)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | A private channel function  was created |  -  |
**400** | Invalid Input |  -  |
**0** | Unexpected error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_channel**
> List[ChannelResponse] get_channel(channel_id)



Get channel information

### Example

* Api Key Authentication (Authorization):

```python
import openapi_client
from openapi_client.models.channel_response import ChannelResponse
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.ritc.io
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.ritc.io"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: Authorization
configuration.api_key['Authorization'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['Authorization'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.ChannelsApi(api_client)
    channel_id = 'channel_id_example' # str | Id of Channel

    try:
        api_response = api_instance.get_channel(channel_id)
        print("The response of ChannelsApi->get_channel:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ChannelsApi->get_channel: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **channel_id** | **str**| Id of Channel | 

### Return type

[**List[ChannelResponse]**](ChannelResponse.md)

### Authorization

[Authorization](../README.md#Authorization)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Detailed information about a channel |  -  |
**400** | Invalid input |  -  |
**0** | Unexpected error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_channel_function**
> List[FunctionResponse] get_channel_function(channel_id, function_id)



Get channel function information

### Example

* Api Key Authentication (Authorization):

```python
import openapi_client
from openapi_client.models.function_response import FunctionResponse
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.ritc.io
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.ritc.io"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: Authorization
configuration.api_key['Authorization'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['Authorization'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.ChannelsApi(api_client)
    channel_id = 'channel_id_example' # str | Id of Channel
    function_id = 'function_id_example' # str | Id of Channel Function

    try:
        api_response = api_instance.get_channel_function(channel_id, function_id)
        print("The response of ChannelsApi->get_channel_function:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ChannelsApi->get_channel_function: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **channel_id** | **str**| Id of Channel | 
 **function_id** | **str**| Id of Channel Function | 

### Return type

[**List[FunctionResponse]**](FunctionResponse.md)

### Authorization

[Authorization](../README.md#Authorization)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Detailed information about a channel function |  -  |
**400** | Invalid input |  -  |
**0** | Unexpected error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **list_anonymous_channels**
> List[ChannelResponse] list_anonymous_channels()



Retrieve Channels anonymously

### Example

* Api Key Authentication (Authorization):

```python
import openapi_client
from openapi_client.models.channel_response import ChannelResponse
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.ritc.io
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.ritc.io"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: Authorization
configuration.api_key['Authorization'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['Authorization'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.ChannelsApi(api_client)

    try:
        api_response = api_instance.list_anonymous_channels()
        print("The response of ChannelsApi->list_anonymous_channels:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ChannelsApi->list_anonymous_channels: %s\n" % e)
```



### Parameters

This endpoint does not need any parameter.

### Return type

[**List[ChannelResponse]**](ChannelResponse.md)

### Authorization

[Authorization](../README.md#Authorization)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | A list of channels available to an anonymous user |  -  |
**400** | Invalid input |  -  |
**0** | Unexpected error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **list_channel_functions**
> List[FunctionResponse] list_channel_functions(channel_id)



Retrieve Channel Functions

### Example

* Api Key Authentication (Authorization):

```python
import openapi_client
from openapi_client.models.function_response import FunctionResponse
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.ritc.io
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.ritc.io"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: Authorization
configuration.api_key['Authorization'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['Authorization'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.ChannelsApi(api_client)
    channel_id = 'channel_id_example' # str | Id of Channel

    try:
        api_response = api_instance.list_channel_functions(channel_id)
        print("The response of ChannelsApi->list_channel_functions:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ChannelsApi->list_channel_functions: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **channel_id** | **str**| Id of Channel | 

### Return type

[**List[FunctionResponse]**](FunctionResponse.md)

### Authorization

[Authorization](../README.md#Authorization)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | A list of functions available in a channel |  -  |
**400** | Invalid input |  -  |
**0** | Unexpected error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **list_channels**
> List[ChannelResponse] list_channels()



Retrieve Channels

### Example

* Api Key Authentication (Authorization):

```python
import openapi_client
from openapi_client.models.channel_response import ChannelResponse
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.ritc.io
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.ritc.io"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: Authorization
configuration.api_key['Authorization'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['Authorization'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.ChannelsApi(api_client)

    try:
        api_response = api_instance.list_channels()
        print("The response of ChannelsApi->list_channels:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ChannelsApi->list_channels: %s\n" % e)
```



### Parameters

This endpoint does not need any parameter.

### Return type

[**List[ChannelResponse]**](ChannelResponse.md)

### Authorization

[Authorization](../README.md#Authorization)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | A list of channels available to a logged-in user |  -  |
**400** | Invalid input |  -  |
**0** | Unexpected error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **remove_channel**
> remove_channel(channel_id)



Delete a channel

### Example

* Api Key Authentication (Authorization):

```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.ritc.io
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.ritc.io"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: Authorization
configuration.api_key['Authorization'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['Authorization'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.ChannelsApi(api_client)
    channel_id = 'channel_id_example' # str | Id of Channel

    try:
        api_instance.remove_channel(channel_id)
    except Exception as e:
        print("Exception when calling ChannelsApi->remove_channel: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **channel_id** | **str**| Id of Channel | 

### Return type

void (empty response body)

### Authorization

[Authorization](../README.md#Authorization)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The channel was successfully removed |  -  |
**400** | Invalid input |  -  |
**0** | Unexpected error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **update_channel**
> ChannelResponse update_channel(channel_id, channel_object)



Update a channel

### Example

* Api Key Authentication (Authorization):

```python
import openapi_client
from openapi_client.models.channel_response import ChannelResponse
from openapi_client.models.rule import Rule
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.ritc.io
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.ritc.io"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: Authorization
configuration.api_key['Authorization'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['Authorization'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.ChannelsApi(api_client)
    channel_id = 'channel_id_example' # str | Id of Channel
    channel_object = openapi_client.Rule() # Rule | Channel information

    try:
        api_response = api_instance.update_channel(channel_id, channel_object)
        print("The response of ChannelsApi->update_channel:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ChannelsApi->update_channel: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **channel_id** | **str**| Id of Channel | 
 **channel_object** | [**Rule**](Rule.md)| Channel information | 

### Return type

[**ChannelResponse**](ChannelResponse.md)

### Authorization

[Authorization](../README.md#Authorization)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Information about the channel was updated successfully |  -  |
**400** | Invalid input |  -  |
**0** | Unexpected error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

