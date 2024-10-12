# openapi_client.UserPermissionsApi

All URIs are relative to *https://secure.agco-ats.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**api_v2_roles_id_users_put**](UserPermissionsApi.md#api_v2_roles_id_users_put) | **PUT** /api/v2/Roles/{id}/Users | Update a Role&#39;s users
[**api_v2_users_current_permissions_get**](UserPermissionsApi.md#api_v2_users_current_permissions_get) | **GET** /api/v2/Users/Current/Permissions | Get a user&#39;s permissions
[**user_permissions_get_current_user_roles**](UserPermissionsApi.md#user_permissions_get_current_user_roles) | **GET** /api/v2/Users/Current/Roles | Gets the current user&#39;s roles
[**user_permissions_get_permissions**](UserPermissionsApi.md#user_permissions_get_permissions) | **GET** /api/v2/Users/{id}/Permissions | Get a user&#39;s permissions
[**user_permissions_get_roles**](UserPermissionsApi.md#user_permissions_get_roles) | **GET** /api/v2/Users/{id}/Roles | Get a user&#39;s roles
[**user_permissions_get_users**](UserPermissionsApi.md#user_permissions_get_users) | **GET** /api/v2/Roles/{id}/Users | Get all user&#39;s in a role
[**user_permissions_put**](UserPermissionsApi.md#user_permissions_put) | **PUT** /api/v2/Users/{id}/Roles | Update a user&#39;s roles


# **api_v2_roles_id_users_put**
> api_v2_roles_id_users_put(id, api_models_role_user_change)

Update a Role's users

No Documentation Found.

### Example


```python
import openapi_client
from openapi_client.models.api_models_role_user_change import APIModelsRoleUserChange
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://secure.agco-ats.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://secure.agco-ats.com"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.UserPermissionsApi(api_client)
    id = 56 # int | The Role's ID
    api_models_role_user_change = [openapi_client.APIModelsRoleUserChange()] # List[APIModelsRoleUserChange] | A list of changes to the Role's Users

    try:
        # Update a Role's users
        api_instance.api_v2_roles_id_users_put(id, api_models_role_user_change)
    except Exception as e:
        print("Exception when calling UserPermissionsApi->api_v2_roles_id_users_put: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **int**| The Role&#39;s ID | 
 **api_models_role_user_change** | [**List[APIModelsRoleUserChange]**](APIModelsRoleUserChange.md)| A list of changes to the Role&#39;s Users | 

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json, application/x-www-form-urlencoded, application/xml, text/json, text/xml
 - **Accept**: */*

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**204** | No Content |  -  |
**0** | API Error Response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **api_v2_users_current_permissions_get**
> APIPagedResponseAPIModelsUserEffectivePermission api_v2_users_current_permissions_get(permission=permission, limit=limit, offset=offset)

Get a user's permissions

No Documentation Found.

### Example


```python
import openapi_client
from openapi_client.models.api_paged_response_api_models_user_effective_permission import APIPagedResponseAPIModelsUserEffectivePermission
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://secure.agco-ats.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://secure.agco-ats.com"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.UserPermissionsApi(api_client)
    permission = 'permission_example' # str | Filter by permission name. Supports ending wildcard (*). Optional. (optional)
    limit = 56 # int | The page limit. The default page limit is 10. (optional)
    offset = 56 # int | The page offset. The default page offset is 0. (optional)

    try:
        # Get a user's permissions
        api_response = api_instance.api_v2_users_current_permissions_get(permission=permission, limit=limit, offset=offset)
        print("The response of UserPermissionsApi->api_v2_users_current_permissions_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling UserPermissionsApi->api_v2_users_current_permissions_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **permission** | **str**| Filter by permission name. Supports ending wildcard (*). Optional. | [optional] 
 **limit** | **int**| The page limit. The default page limit is 10. | [optional] 
 **offset** | **int**| The page offset. The default page offset is 0. | [optional] 

### Return type

[**APIPagedResponseAPIModelsUserEffectivePermission**](APIPagedResponseAPIModelsUserEffectivePermission.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**0** | API Error Response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **user_permissions_get_current_user_roles**
> APIPagedResponseAPIModelsRole user_permissions_get_current_user_roles(role=role, limit=limit, offset=offset)

Gets the current user's roles

No Documentation Found.

### Example


```python
import openapi_client
from openapi_client.models.api_paged_response_api_models_role import APIPagedResponseAPIModelsRole
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://secure.agco-ats.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://secure.agco-ats.com"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.UserPermissionsApi(api_client)
    role = 'role_example' # str | Filter by role name. Supports ending wildcard (*). Optional. (optional)
    limit = 56 # int | The page limit. The default page limit is 10. (optional)
    offset = 56 # int | The page offset. The default page offset is 0. (optional)

    try:
        # Gets the current user's roles
        api_response = api_instance.user_permissions_get_current_user_roles(role=role, limit=limit, offset=offset)
        print("The response of UserPermissionsApi->user_permissions_get_current_user_roles:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling UserPermissionsApi->user_permissions_get_current_user_roles: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **role** | **str**| Filter by role name. Supports ending wildcard (*). Optional. | [optional] 
 **limit** | **int**| The page limit. The default page limit is 10. | [optional] 
 **offset** | **int**| The page offset. The default page offset is 0. | [optional] 

### Return type

[**APIPagedResponseAPIModelsRole**](APIPagedResponseAPIModelsRole.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**0** | API Error Response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **user_permissions_get_permissions**
> APIPagedResponseAPIModelsUserEffectivePermission user_permissions_get_permissions(id, permission=permission, limit=limit, offset=offset)

Get a user's permissions

No Documentation Found.

### Example


```python
import openapi_client
from openapi_client.models.api_paged_response_api_models_user_effective_permission import APIPagedResponseAPIModelsUserEffectivePermission
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://secure.agco-ats.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://secure.agco-ats.com"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.UserPermissionsApi(api_client)
    id = 56 # int | The User's ID
    permission = 'permission_example' # str | Filter by permission name. Supports ending wildcard (*). Optional. (optional)
    limit = 56 # int | The page limit. The default page limit is 10. (optional)
    offset = 56 # int | The page offset. The default page offset is 0. (optional)

    try:
        # Get a user's permissions
        api_response = api_instance.user_permissions_get_permissions(id, permission=permission, limit=limit, offset=offset)
        print("The response of UserPermissionsApi->user_permissions_get_permissions:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling UserPermissionsApi->user_permissions_get_permissions: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **int**| The User&#39;s ID | 
 **permission** | **str**| Filter by permission name. Supports ending wildcard (*). Optional. | [optional] 
 **limit** | **int**| The page limit. The default page limit is 10. | [optional] 
 **offset** | **int**| The page offset. The default page offset is 0. | [optional] 

### Return type

[**APIPagedResponseAPIModelsUserEffectivePermission**](APIPagedResponseAPIModelsUserEffectivePermission.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**0** | API Error Response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **user_permissions_get_roles**
> APIPagedResponseAPIModelsRole user_permissions_get_roles(id, role=role, limit=limit, offset=offset)

Get a user's roles

No Documentation Found.

### Example


```python
import openapi_client
from openapi_client.models.api_paged_response_api_models_role import APIPagedResponseAPIModelsRole
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://secure.agco-ats.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://secure.agco-ats.com"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.UserPermissionsApi(api_client)
    id = 56 # int | The User's ID
    role = 'role_example' # str | Filter by role name. Supports ending wildcard (*). Optional. (optional)
    limit = 56 # int | The page limit. The default page limit is 10. (optional)
    offset = 56 # int | The page offset. The default page offset is 0. (optional)

    try:
        # Get a user's roles
        api_response = api_instance.user_permissions_get_roles(id, role=role, limit=limit, offset=offset)
        print("The response of UserPermissionsApi->user_permissions_get_roles:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling UserPermissionsApi->user_permissions_get_roles: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **int**| The User&#39;s ID | 
 **role** | **str**| Filter by role name. Supports ending wildcard (*). Optional. | [optional] 
 **limit** | **int**| The page limit. The default page limit is 10. | [optional] 
 **offset** | **int**| The page offset. The default page offset is 0. | [optional] 

### Return type

[**APIPagedResponseAPIModelsRole**](APIPagedResponseAPIModelsRole.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**0** | API Error Response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **user_permissions_get_users**
> APIPagedResponseAPIModelsUser user_permissions_get_users(id, limit=limit, offset=offset)

Get all user's in a role

No Documentation Found.

### Example


```python
import openapi_client
from openapi_client.models.api_paged_response_api_models_user import APIPagedResponseAPIModelsUser
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://secure.agco-ats.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://secure.agco-ats.com"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.UserPermissionsApi(api_client)
    id = 56 # int | The Role's ID
    limit = 56 # int | The page limit. The default page limit is 10. (optional)
    offset = 56 # int | The page offset. The default page offset is 0. (optional)

    try:
        # Get all user's in a role
        api_response = api_instance.user_permissions_get_users(id, limit=limit, offset=offset)
        print("The response of UserPermissionsApi->user_permissions_get_users:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling UserPermissionsApi->user_permissions_get_users: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **int**| The Role&#39;s ID | 
 **limit** | **int**| The page limit. The default page limit is 10. | [optional] 
 **offset** | **int**| The page offset. The default page offset is 0. | [optional] 

### Return type

[**APIPagedResponseAPIModelsUser**](APIPagedResponseAPIModelsUser.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**0** | API Error Response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **user_permissions_put**
> user_permissions_put(id, api_models_user_role_change)

Update a user's roles

No Documentation Found.

### Example


```python
import openapi_client
from openapi_client.models.api_models_user_role_change import APIModelsUserRoleChange
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://secure.agco-ats.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://secure.agco-ats.com"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.UserPermissionsApi(api_client)
    id = 56 # int | The User's ID
    api_models_user_role_change = [openapi_client.APIModelsUserRoleChange()] # List[APIModelsUserRoleChange] | A list of changes to the User's Roles

    try:
        # Update a user's roles
        api_instance.user_permissions_put(id, api_models_user_role_change)
    except Exception as e:
        print("Exception when calling UserPermissionsApi->user_permissions_put: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **int**| The User&#39;s ID | 
 **api_models_user_role_change** | [**List[APIModelsUserRoleChange]**](APIModelsUserRoleChange.md)| A list of changes to the User&#39;s Roles | 

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json, application/x-www-form-urlencoded, application/xml, text/json, text/xml
 - **Accept**: */*

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**204** | No Content |  -  |
**0** | API Error Response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

