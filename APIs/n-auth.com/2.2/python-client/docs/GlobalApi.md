# openapi_client.GlobalApi

All URIs are relative to *https://api.nextauth.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**delete_global_attribute**](GlobalApi.md#delete_global_attribute) | **DELETE** /attributes/{attributekey} | Delete specific global attribute
[**delete_global_attributes**](GlobalApi.md#delete_global_attributes) | **DELETE** /attributes/ | Delete all global attributes
[**delete_server_privileged_attribute**](GlobalApi.md#delete_server_privileged_attribute) | **DELETE** /servers/{serverid}/privilegedattributes/{attributekey} | Delete specific privileged attribute of a specific server
[**delete_server_privileged_attributes**](GlobalApi.md#delete_server_privileged_attributes) | **DELETE** /servers/{serverid}/privilegedattributes/ | Delete all privileged attributes of a specific server
[**get_global_attributes**](GlobalApi.md#get_global_attributes) | **GET** /attributes/ | Get all global attributes
[**get_server_privileged_attributes**](GlobalApi.md#get_server_privileged_attributes) | **GET** /servers/{serverid}/privilegedattributes/ | Get all privileged attributes of a specific server
[**set_global_attributes**](GlobalApi.md#set_global_attributes) | **POST** /attributes/ | Set all global attributes
[**set_server_privileged_attributes**](GlobalApi.md#set_server_privileged_attributes) | **POST** /servers/{serverid}/privilegedattributes/ | Set all privileged attributes of a specific server
[**update_global_attributes**](GlobalApi.md#update_global_attributes) | **PUT** /attributes/ | Update specified global attributes
[**update_server_privileged_attributes**](GlobalApi.md#update_server_privileged_attributes) | **PUT** /servers/{serverid}/privilegedattributes/ | Update privileged specified attributes of a specific server


# **delete_global_attribute**
> delete_global_attribute(attributekey)

Delete specific global attribute

Delete global attribute with the specified key. Required: global 'servers'.

### Example

* Api Key Authentication (api_key):
* Api Key Authentication (role_id):

```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.nextauth.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.nextauth.com"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: api_key
configuration.api_key['api_key'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['api_key'] = 'Bearer'

# Configure API key authorization: role_id
configuration.api_key['role_id'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['role_id'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.GlobalApi(api_client)
    attributekey = 'attributekey_example' # str | Key of the attribute

    try:
        # Delete specific global attribute
        api_instance.delete_global_attribute(attributekey)
    except Exception as e:
        print("Exception when calling GlobalApi->delete_global_attribute: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **attributekey** | **str**| Key of the attribute | 

### Return type

void (empty response body)

### Authorization

[api_key](../README.md#api_key), [role_id](../README.md#role_id)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | On successful delete |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **delete_global_attributes**
> delete_global_attributes()

Delete all global attributes

Delete all global attributes. Required permission: global 'servers'.

### Example

* Api Key Authentication (api_key):
* Api Key Authentication (role_id):

```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.nextauth.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.nextauth.com"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: api_key
configuration.api_key['api_key'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['api_key'] = 'Bearer'

# Configure API key authorization: role_id
configuration.api_key['role_id'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['role_id'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.GlobalApi(api_client)

    try:
        # Delete all global attributes
        api_instance.delete_global_attributes()
    except Exception as e:
        print("Exception when calling GlobalApi->delete_global_attributes: %s\n" % e)
```



### Parameters

This endpoint does not need any parameter.

### Return type

void (empty response body)

### Authorization

[api_key](../README.md#api_key), [role_id](../README.md#role_id)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | On successful delete |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **delete_server_privileged_attribute**
> delete_server_privileged_attribute(serverid, attributekey)

Delete specific privileged attribute of a specific server

Delete privileged attribute with the specified key of a specific server. Required permission: global 'servers'.

### Example

* Api Key Authentication (api_key):
* Api Key Authentication (role_id):

```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.nextauth.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.nextauth.com"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: api_key
configuration.api_key['api_key'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['api_key'] = 'Bearer'

# Configure API key authorization: role_id
configuration.api_key['role_id'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['role_id'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.GlobalApi(api_client)
    serverid = 'serverid_example' # str | Base64 encoded server id
    attributekey = 'attributekey_example' # str | Key of the attribute

    try:
        # Delete specific privileged attribute of a specific server
        api_instance.delete_server_privileged_attribute(serverid, attributekey)
    except Exception as e:
        print("Exception when calling GlobalApi->delete_server_privileged_attribute: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **serverid** | **str**| Base64 encoded server id | 
 **attributekey** | **str**| Key of the attribute | 

### Return type

void (empty response body)

### Authorization

[api_key](../README.md#api_key), [role_id](../README.md#role_id)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | On successful delete |  -  |
**404** | Server not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **delete_server_privileged_attributes**
> delete_server_privileged_attributes(serverid)

Delete all privileged attributes of a specific server

Delete all privileged attributes of a specific server. Required permission: global 'servers'.

### Example

* Api Key Authentication (api_key):
* Api Key Authentication (role_id):

```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.nextauth.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.nextauth.com"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: api_key
configuration.api_key['api_key'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['api_key'] = 'Bearer'

# Configure API key authorization: role_id
configuration.api_key['role_id'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['role_id'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.GlobalApi(api_client)
    serverid = 'serverid_example' # str | Base64 encoded server id

    try:
        # Delete all privileged attributes of a specific server
        api_instance.delete_server_privileged_attributes(serverid)
    except Exception as e:
        print("Exception when calling GlobalApi->delete_server_privileged_attributes: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **serverid** | **str**| Base64 encoded server id | 

### Return type

void (empty response body)

### Authorization

[api_key](../README.md#api_key), [role_id](../README.md#role_id)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | On successful delete |  -  |
**404** | User not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_global_attributes**
> str get_global_attributes()

Get all global attributes

Returns an array containing all global attributes. Required permission: global 'servers'.

### Example

* Api Key Authentication (api_key):
* Api Key Authentication (role_id):

```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.nextauth.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.nextauth.com"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: api_key
configuration.api_key['api_key'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['api_key'] = 'Bearer'

# Configure API key authorization: role_id
configuration.api_key['role_id'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['role_id'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.GlobalApi(api_client)

    try:
        # Get all global attributes
        api_response = api_instance.get_global_attributes()
        print("The response of GlobalApi->get_global_attributes:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling GlobalApi->get_global_attributes: %s\n" % e)
```



### Parameters

This endpoint does not need any parameter.

### Return type

**str**

### Authorization

[api_key](../README.md#api_key), [role_id](../README.md#role_id)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: text/plain

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Array of attributes |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_server_privileged_attributes**
> str get_server_privileged_attributes(serverid)

Get all privileged attributes of a specific server

Returns an array containing all privileged attributes corresponding to this server. Required permission: global 'servers'.

### Example

* Api Key Authentication (api_key):
* Api Key Authentication (role_id):

```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.nextauth.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.nextauth.com"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: api_key
configuration.api_key['api_key'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['api_key'] = 'Bearer'

# Configure API key authorization: role_id
configuration.api_key['role_id'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['role_id'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.GlobalApi(api_client)
    serverid = 'serverid_example' # str | Base64 encoded server id

    try:
        # Get all privileged attributes of a specific server
        api_response = api_instance.get_server_privileged_attributes(serverid)
        print("The response of GlobalApi->get_server_privileged_attributes:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling GlobalApi->get_server_privileged_attributes: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **serverid** | **str**| Base64 encoded server id | 

### Return type

**str**

### Authorization

[api_key](../README.md#api_key), [role_id](../README.md#role_id)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: text/plain

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Array of attributes |  -  |
**404** | Server not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **set_global_attributes**
> set_global_attributes(attributes)

Set all global attributes

Set the global attributes. Prior attributes with keys that are not provided in the body of the request will be deleted. Required permission: global 'servers'.

### Example

* Api Key Authentication (api_key):
* Api Key Authentication (role_id):

```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.nextauth.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.nextauth.com"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: api_key
configuration.api_key['api_key'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['api_key'] = 'Bearer'

# Configure API key authorization: role_id
configuration.api_key['role_id'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['role_id'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.GlobalApi(api_client)
    attributes = None # object | Array of attributes

    try:
        # Set all global attributes
        api_instance.set_global_attributes(attributes)
    except Exception as e:
        print("Exception when calling GlobalApi->set_global_attributes: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **attributes** | **object**| Array of attributes | 

### Return type

void (empty response body)

### Authorization

[api_key](../README.md#api_key), [role_id](../README.md#role_id)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **set_server_privileged_attributes**
> set_server_privileged_attributes(serverid, attributes)

Set all privileged attributes of a specific server

Set the privileged attributes of a specific server. Prior attributes with keys that are not provided in the body of the request will be deleted. Required permission: global 'servers'.

### Example

* Api Key Authentication (api_key):
* Api Key Authentication (role_id):

```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.nextauth.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.nextauth.com"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: api_key
configuration.api_key['api_key'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['api_key'] = 'Bearer'

# Configure API key authorization: role_id
configuration.api_key['role_id'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['role_id'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.GlobalApi(api_client)
    serverid = 'serverid_example' # str | Base64 encoded server id
    attributes = None # object | Array of attributes

    try:
        # Set all privileged attributes of a specific server
        api_instance.set_server_privileged_attributes(serverid, attributes)
    except Exception as e:
        print("Exception when calling GlobalApi->set_server_privileged_attributes: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **serverid** | **str**| Base64 encoded server id | 
 **attributes** | **object**| Array of attributes | 

### Return type

void (empty response body)

### Authorization

[api_key](../README.md#api_key), [role_id](../README.md#role_id)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**404** | Server not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **update_global_attributes**
> update_global_attributes(attributes)

Update specified global attributes

Update the specified global attributes. Prior attributes with keys that are not provided in the body of the request will not be deleted. Required permission: 'servers'.

### Example

* Api Key Authentication (api_key):
* Api Key Authentication (role_id):

```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.nextauth.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.nextauth.com"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: api_key
configuration.api_key['api_key'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['api_key'] = 'Bearer'

# Configure API key authorization: role_id
configuration.api_key['role_id'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['role_id'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.GlobalApi(api_client)
    attributes = None # object | Array of attributes

    try:
        # Update specified global attributes
        api_instance.update_global_attributes(attributes)
    except Exception as e:
        print("Exception when calling GlobalApi->update_global_attributes: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **attributes** | **object**| Array of attributes | 

### Return type

void (empty response body)

### Authorization

[api_key](../README.md#api_key), [role_id](../README.md#role_id)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | On successful update |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **update_server_privileged_attributes**
> update_server_privileged_attributes(serverid, attributes)

Update privileged specified attributes of a specific server

Update the specified privileged attributes of a specific server. Prior privileged attributes with keys that are not provided in the body of the request will not be deleted. Required permission: global 'servers'.

### Example

* Api Key Authentication (api_key):
* Api Key Authentication (role_id):

```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.nextauth.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.nextauth.com"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: api_key
configuration.api_key['api_key'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['api_key'] = 'Bearer'

# Configure API key authorization: role_id
configuration.api_key['role_id'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['role_id'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.GlobalApi(api_client)
    serverid = 'serverid_example' # str | Base64 encoded server id
    attributes = None # object | Array of attributes

    try:
        # Update privileged specified attributes of a specific server
        api_instance.update_server_privileged_attributes(serverid, attributes)
    except Exception as e:
        print("Exception when calling GlobalApi->update_server_privileged_attributes: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **serverid** | **str**| Base64 encoded server id | 
 **attributes** | **object**| Array of attributes | 

### Return type

void (empty response body)

### Authorization

[api_key](../README.md#api_key), [role_id](../README.md#role_id)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | On successful update |  -  |
**404** | Server not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

