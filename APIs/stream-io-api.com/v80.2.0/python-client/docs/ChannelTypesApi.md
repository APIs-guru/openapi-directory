# openapi_client.ChannelTypesApi

All URIs are relative to *https://chat.stream-io-api.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**create_channel_type_0**](ChannelTypesApi.md#create_channel_type_0) | **POST** /channeltypes | Create channel type
[**delete_channel_type_0**](ChannelTypesApi.md#delete_channel_type_0) | **DELETE** /channeltypes/{name} | Delete channel type
[**get_channel_type_0**](ChannelTypesApi.md#get_channel_type_0) | **GET** /channeltypes/{name} | Get channel type
[**list_channel_types_0**](ChannelTypesApi.md#list_channel_types_0) | **GET** /channeltypes | List channel types
[**update_channel_type_0**](ChannelTypesApi.md#update_channel_type_0) | **PUT** /channeltypes/{name} | Update channel type


# **create_channel_type_0**
> CreateChannelTypeResponse create_channel_type_0(create_channel_type_request)

Create channel type

Creates new channel type 

### Example

* Api Key Authentication (stream-auth-type):
* Api Key Authentication (api_key):
* Api Key Authentication (JWT):

```python
import openapi_client
from openapi_client.models.create_channel_type_request import CreateChannelTypeRequest
from openapi_client.models.create_channel_type_response import CreateChannelTypeResponse
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
    api_instance = openapi_client.ChannelTypesApi(api_client)
    create_channel_type_request = openapi_client.CreateChannelTypeRequest() # CreateChannelTypeRequest | 

    try:
        # Create channel type
        api_response = api_instance.create_channel_type_0(create_channel_type_request)
        print("The response of ChannelTypesApi->create_channel_type_0:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ChannelTypesApi->create_channel_type_0: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **create_channel_type_request** | [**CreateChannelTypeRequest**](CreateChannelTypeRequest.md)|  | 

### Return type

[**CreateChannelTypeResponse**](CreateChannelTypeResponse.md)

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

# **delete_channel_type_0**
> Response delete_channel_type_0(name)

Delete channel type

Deletes channel type 

### Example

* Api Key Authentication (stream-auth-type):
* Api Key Authentication (api_key):
* Api Key Authentication (JWT):

```python
import openapi_client
from openapi_client.models.response import Response
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
    api_instance = openapi_client.ChannelTypesApi(api_client)
    name = 'name_example' # str | 

    try:
        # Delete channel type
        api_response = api_instance.delete_channel_type_0(name)
        print("The response of ChannelTypesApi->delete_channel_type_0:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ChannelTypesApi->delete_channel_type_0: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **name** | **str**|  | 

### Return type

[**Response**](Response.md)

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

# **get_channel_type_0**
> Response get_channel_type_0(name)

Get channel type

Gets channel type 

### Example

* Api Key Authentication (stream-auth-type):
* Api Key Authentication (api_key):
* Api Key Authentication (JWT):

```python
import openapi_client
from openapi_client.models.response import Response
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
    api_instance = openapi_client.ChannelTypesApi(api_client)
    name = 'name_example' # str | 

    try:
        # Get channel type
        api_response = api_instance.get_channel_type_0(name)
        print("The response of ChannelTypesApi->get_channel_type_0:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ChannelTypesApi->get_channel_type_0: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **name** | **str**|  | 

### Return type

[**Response**](Response.md)

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

# **list_channel_types_0**
> ListChannelTypesResponse list_channel_types_0()

List channel types

Lists all available channel types 

### Example

* Api Key Authentication (stream-auth-type):
* Api Key Authentication (api_key):
* Api Key Authentication (JWT):

```python
import openapi_client
from openapi_client.models.list_channel_types_response import ListChannelTypesResponse
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
    api_instance = openapi_client.ChannelTypesApi(api_client)

    try:
        # List channel types
        api_response = api_instance.list_channel_types_0()
        print("The response of ChannelTypesApi->list_channel_types_0:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ChannelTypesApi->list_channel_types_0: %s\n" % e)
```



### Parameters

This endpoint does not need any parameter.

### Return type

[**ListChannelTypesResponse**](ListChannelTypesResponse.md)

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

# **update_channel_type_0**
> UpdateChannelTypeResponse update_channel_type_0(name, update_channel_type_request)

Update channel type

Updates channel type 

### Example

* Api Key Authentication (stream-auth-type):
* Api Key Authentication (api_key):
* Api Key Authentication (JWT):

```python
import openapi_client
from openapi_client.models.update_channel_type_request import UpdateChannelTypeRequest
from openapi_client.models.update_channel_type_response import UpdateChannelTypeResponse
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
    api_instance = openapi_client.ChannelTypesApi(api_client)
    name = 'name_example' # str | 
    update_channel_type_request = openapi_client.UpdateChannelTypeRequest() # UpdateChannelTypeRequest | 

    try:
        # Update channel type
        api_response = api_instance.update_channel_type_0(name, update_channel_type_request)
        print("The response of ChannelTypesApi->update_channel_type_0:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ChannelTypesApi->update_channel_type_0: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **name** | **str**|  | 
 **update_channel_type_request** | [**UpdateChannelTypeRequest**](UpdateChannelTypeRequest.md)|  | 

### Return type

[**UpdateChannelTypeResponse**](UpdateChannelTypeResponse.md)

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

