# openapi_client.KeysApi

All URIs are relative to *https://api.mailscript.com/v2*

Method | HTTP request | Description
------------- | ------------- | -------------
[**add_key**](KeysApi.md#add_key) | **POST** /addresses/{address}/keys | Add address key
[**delete_key**](KeysApi.md#delete_key) | **DELETE** /addresses/{address}/keys/{key} | Delete address key
[**get_all_keys**](KeysApi.md#get_all_keys) | **GET** /addresses/{address}/keys | List address keys
[**get_key**](KeysApi.md#get_key) | **GET** /addresses/{address}/keys/{key} | Get address key
[**update_key**](KeysApi.md#update_key) | **PUT** /addresses/{address}/keys/{key} | Update an address key


# **add_key**
> AddKeyResponse add_key(address, add_key_request)

Add address key

### Example

* Bearer (JWT) Authentication (bearerAuth):

```python
import openapi_client
from openapi_client.models.add_key_request import AddKeyRequest
from openapi_client.models.add_key_response import AddKeyResponse
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.mailscript.com/v2
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.mailscript.com/v2"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure Bearer authorization (JWT): bearerAuth
configuration = openapi_client.Configuration(
    access_token = os.environ["BEARER_TOKEN"]
)

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.KeysApi(api_client)
    address = 'address_example' # str | ID of address
    add_key_request = openapi_client.AddKeyRequest() # AddKeyRequest | Key body

    try:
        # Add address key
        api_response = api_instance.add_key(address, add_key_request)
        print("The response of KeysApi->add_key:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling KeysApi->add_key: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **address** | **str**| ID of address | 
 **add_key_request** | [**AddKeyRequest**](AddKeyRequest.md)| Key body | 

### Return type

[**AddKeyResponse**](AddKeyResponse.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | successful operation |  -  |
**403** | Bad credentials |  -  |
**404** | Address not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **delete_key**
> delete_key(address, key)

Delete address key

### Example

* Bearer (JWT) Authentication (bearerAuth):

```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.mailscript.com/v2
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.mailscript.com/v2"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure Bearer authorization (JWT): bearerAuth
configuration = openapi_client.Configuration(
    access_token = os.environ["BEARER_TOKEN"]
)

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.KeysApi(api_client)
    address = 'address_example' # str | ID of address
    key = 'key_example' # str | ID of key

    try:
        # Delete address key
        api_instance.delete_key(address, key)
    except Exception as e:
        print("Exception when calling KeysApi->delete_key: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **address** | **str**| ID of address | 
 **key** | **str**| ID of key | 

### Return type

void (empty response body)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**204** | Successful delete operation |  -  |
**400** | Failure |  -  |
**403** | Bad credentials |  -  |
**404** | Key not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_all_keys**
> GetAllKeysResponse get_all_keys(address)

List address keys

### Example

* Bearer (JWT) Authentication (bearerAuth):

```python
import openapi_client
from openapi_client.models.get_all_keys_response import GetAllKeysResponse
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.mailscript.com/v2
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.mailscript.com/v2"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure Bearer authorization (JWT): bearerAuth
configuration = openapi_client.Configuration(
    access_token = os.environ["BEARER_TOKEN"]
)

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.KeysApi(api_client)
    address = 'address_example' # str | ID of address

    try:
        # List address keys
        api_response = api_instance.get_all_keys(address)
        print("The response of KeysApi->get_all_keys:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling KeysApi->get_all_keys: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **address** | **str**| ID of address | 

### Return type

[**GetAllKeysResponse**](GetAllKeysResponse.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | successful operation |  -  |
**403** | Bad credentials |  -  |
**404** | Address not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_key**
> Key get_key(address, key)

Get address key

### Example

* Bearer (JWT) Authentication (bearerAuth):

```python
import openapi_client
from openapi_client.models.key import Key
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.mailscript.com/v2
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.mailscript.com/v2"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure Bearer authorization (JWT): bearerAuth
configuration = openapi_client.Configuration(
    access_token = os.environ["BEARER_TOKEN"]
)

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.KeysApi(api_client)
    address = 'address_example' # str | ID of address
    key = 'key_example' # str | ID of key

    try:
        # Get address key
        api_response = api_instance.get_key(address, key)
        print("The response of KeysApi->get_key:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling KeysApi->get_key: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **address** | **str**| ID of address | 
 **key** | **str**| ID of key | 

### Return type

[**Key**](Key.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | successful operation |  -  |
**403** | Bad credentials |  -  |
**404** | Key not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **update_key**
> Key update_key(address, key, update_key_request)

Update an address key

### Example

* Bearer (JWT) Authentication (bearerAuth):

```python
import openapi_client
from openapi_client.models.key import Key
from openapi_client.models.update_key_request import UpdateKeyRequest
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.mailscript.com/v2
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.mailscript.com/v2"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure Bearer authorization (JWT): bearerAuth
configuration = openapi_client.Configuration(
    access_token = os.environ["BEARER_TOKEN"]
)

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.KeysApi(api_client)
    address = 'address_example' # str | ID of address
    key = 'key_example' # str | ID of key
    update_key_request = openapi_client.UpdateKeyRequest() # UpdateKeyRequest | Key body

    try:
        # Update an address key
        api_response = api_instance.update_key(address, key, update_key_request)
        print("The response of KeysApi->update_key:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling KeysApi->update_key: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **address** | **str**| ID of address | 
 **key** | **str**| ID of key | 
 **update_key_request** | [**UpdateKeyRequest**](UpdateKeyRequest.md)| Key body | 

### Return type

[**Key**](Key.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful operation |  -  |
**400** | Failure |  -  |
**403** | Bad credentials |  -  |
**404** | Key not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

