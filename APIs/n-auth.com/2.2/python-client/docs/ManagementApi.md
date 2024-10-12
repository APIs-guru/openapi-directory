# openapi_client.ManagementApi

All URIs are relative to *https://api.nextauth.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**create_api_key**](ManagementApi.md#create_api_key) | **POST** /apikeys/ | Create a new API key.
[**get_all_permissions**](ManagementApi.md#get_all_permissions) | **GET** /servers/{serverid}/permissions/ | Get all permissions for the specified server.
[**get_api_keys**](ManagementApi.md#get_api_keys) | **GET** /apikeys/ | Get all API keys.
[**get_or_create_user_role**](ManagementApi.md#get_or_create_user_role) | **POST** /servers/{serverid}/users/{userid}/role/ | Get or create a role for a specific user.
[**get_permissions**](ManagementApi.md#get_permissions) | **GET** /servers/{serverid}/permissions/{roleid} | Get all permissions for the specified server and role.
[**get_user_role**](ManagementApi.md#get_user_role) | **GET** /servers/{serverid}/users/{userid}/role/ | Get role for a specific user.
[**grant_permissions**](ManagementApi.md#grant_permissions) | **POST** /servers/{serverid}/permissions/{roleid} | Set new permissions for the specified role on a server
[**revoke_permissions**](ManagementApi.md#revoke_permissions) | **DELETE** /servers/{serverid}/permissions/{roleid} | Revoke all permissions for the specified server and role.


# **create_api_key**
> ApiKey create_api_key(description)

Create a new API key.

Create a new API key. Required permission: global 'servers'.

### Example

* Api Key Authentication (api_key):
* Api Key Authentication (role_id):

```python
import openapi_client
from openapi_client.models.api_key import ApiKey
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
    api_instance = openapi_client.ManagementApi(api_client)
    description = 'description_example' # str | Description for the new role

    try:
        # Create a new API key.
        api_response = api_instance.create_api_key(description)
        print("The response of ManagementApi->create_api_key:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ManagementApi->create_api_key: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **description** | **str**| Description for the new role | 

### Return type

[**ApiKey**](ApiKey.md)

### Authorization

[api_key](../README.md#api_key), [role_id](../README.md#role_id)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Newly created apikey (with role and description) |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_all_permissions**
> Permissions get_all_permissions(serverid)

Get all permissions for the specified server.

Returns all permissions. Required permission: 'servers'.

### Example

* Api Key Authentication (api_key):
* Api Key Authentication (role_id):

```python
import openapi_client
from openapi_client.models.permissions import Permissions
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
    api_instance = openapi_client.ManagementApi(api_client)
    serverid = 'serverid_example' # str | Base64 encoded server id

    try:
        # Get all permissions for the specified server.
        api_response = api_instance.get_all_permissions(serverid)
        print("The response of ManagementApi->get_all_permissions:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ManagementApi->get_all_permissions: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **serverid** | **str**| Base64 encoded server id | 

### Return type

[**Permissions**](Permissions.md)

### Authorization

[api_key](../README.md#api_key), [role_id](../README.md#role_id)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | List of roles and permissions |  -  |
**404** | Server not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_api_keys**
> ApiKeys get_api_keys()

Get all API keys.

Get all API keys generated by the current role. Required permission: global 'servers'.

### Example

* Api Key Authentication (api_key):
* Api Key Authentication (role_id):

```python
import openapi_client
from openapi_client.models.api_keys import ApiKeys
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
    api_instance = openapi_client.ManagementApi(api_client)

    try:
        # Get all API keys.
        api_response = api_instance.get_api_keys()
        print("The response of ManagementApi->get_api_keys:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ManagementApi->get_api_keys: %s\n" % e)
```



### Parameters

This endpoint does not need any parameter.

### Return type

[**ApiKeys**](ApiKeys.md)

### Authorization

[api_key](../README.md#api_key), [role_id](../README.md#role_id)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | List of apikeys (with role and description) |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_or_create_user_role**
> GetOrCreateUserRole200Response get_or_create_user_role(serverid, userid)

Get or create a role for a specific user.

Get or create a role for a specific user. Required permission: 'users'.

### Example

* Api Key Authentication (api_key):
* Api Key Authentication (role_id):

```python
import openapi_client
from openapi_client.models.get_or_create_user_role200_response import GetOrCreateUserRole200Response
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
    api_instance = openapi_client.ManagementApi(api_client)
    serverid = 'serverid_example' # str | Base64 encoded server id
    userid = 'userid_example' # str | User name

    try:
        # Get or create a role for a specific user.
        api_response = api_instance.get_or_create_user_role(serverid, userid)
        print("The response of ManagementApi->get_or_create_user_role:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ManagementApi->get_or_create_user_role: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **serverid** | **str**| Base64 encoded server id | 
 **userid** | **str**| User name | 

### Return type

[**GetOrCreateUserRole200Response**](GetOrCreateUserRole200Response.md)

### Authorization

[api_key](../README.md#api_key), [role_id](../README.md#role_id)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | User role (base 64 encoded) |  -  |
**404** | User not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_permissions**
> Permissions get_permissions(serverid, roleid)

Get all permissions for the specified server and role.

Returns all permissions. Required permission: 'servers'.

### Example

* Api Key Authentication (api_key):
* Api Key Authentication (role_id):

```python
import openapi_client
from openapi_client.models.permissions import Permissions
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
    api_instance = openapi_client.ManagementApi(api_client)
    serverid = 'serverid_example' # str | Base64 encoded server id
    roleid = 'roleid_example' # str | Base64 encoded role id

    try:
        # Get all permissions for the specified server and role.
        api_response = api_instance.get_permissions(serverid, roleid)
        print("The response of ManagementApi->get_permissions:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ManagementApi->get_permissions: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **serverid** | **str**| Base64 encoded server id | 
 **roleid** | **str**| Base64 encoded role id | 

### Return type

[**Permissions**](Permissions.md)

### Authorization

[api_key](../README.md#api_key), [role_id](../README.md#role_id)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | List of roles and permissions |  -  |
**404** | Server or role not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_user_role**
> Role get_user_role(serverid, userid)

Get role for a specific user.

Get role for a specific user. Required permission: 'users'.

### Example

* Api Key Authentication (api_key):
* Api Key Authentication (role_id):

```python
import openapi_client
from openapi_client.models.role import Role
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
    api_instance = openapi_client.ManagementApi(api_client)
    serverid = 'serverid_example' # str | Base64 encoded server id
    userid = 'userid_example' # str | User name

    try:
        # Get role for a specific user.
        api_response = api_instance.get_user_role(serverid, userid)
        print("The response of ManagementApi->get_user_role:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ManagementApi->get_user_role: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **serverid** | **str**| Base64 encoded server id | 
 **userid** | **str**| User name | 

### Return type

[**Role**](Role.md)

### Authorization

[api_key](../README.md#api_key), [role_id](../README.md#role_id)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | User role (base 64 encoded) |  -  |
**404** | User not found, no role found for user |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **grant_permissions**
> grant_permissions(serverid, roleid, permissions)

Set new permissions for the specified role on a server

Set new permissions for the specified role on a server. This overwrites any existing permissions on this server for the specified role. Required permission: 'root'.

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
    api_instance = openapi_client.ManagementApi(api_client)
    serverid = 'serverid_example' # str | Base64 encoded server id
    roleid = 'roleid_example' # str | Base64 encoded role id
    permissions = ['permissions_example'] # List[str] | Array of new permissions

    try:
        # Set new permissions for the specified role on a server
        api_instance.grant_permissions(serverid, roleid, permissions)
    except Exception as e:
        print("Exception when calling ManagementApi->grant_permissions: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **serverid** | **str**| Base64 encoded server id | 
 **roleid** | **str**| Base64 encoded role id | 
 **permissions** | [**List[str]**](str.md)| Array of new permissions | 

### Return type

void (empty response body)

### Authorization

[api_key](../README.md#api_key), [role_id](../README.md#role_id)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: Not defined

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | ok |  -  |
**404** | Server or role not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **revoke_permissions**
> revoke_permissions(serverid, roleid)

Revoke all permissions for the specified server and role.

Revoke all permissions for the specified server and role. Required permission: 'root'.

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
    api_instance = openapi_client.ManagementApi(api_client)
    serverid = 'serverid_example' # str | Base64 encoded server id
    roleid = 'roleid_example' # str | Base64 encoded role id

    try:
        # Revoke all permissions for the specified server and role.
        api_instance.revoke_permissions(serverid, roleid)
    except Exception as e:
        print("Exception when calling ManagementApi->revoke_permissions: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **serverid** | **str**| Base64 encoded server id | 
 **roleid** | **str**| Base64 encoded role id | 

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
**200** | ok |  -  |
**404** | Server or role not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

