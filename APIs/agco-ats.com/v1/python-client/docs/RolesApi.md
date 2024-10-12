# openapi_client.RolesApi

All URIs are relative to *https://secure.agco-ats.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**roles_delete_role**](RolesApi.md#roles_delete_role) | **DELETE** /api/v2/Roles/{id} | Deletes a User Role
[**roles_get_role**](RolesApi.md#roles_get_role) | **GET** /api/v2/Roles/{id} | Gets a User Role
[**roles_get_role_permissions**](RolesApi.md#roles_get_role_permissions) | **GET** /api/v2/Roles/{id}/Permissions | Get the Permissions for a Role
[**roles_get_roles**](RolesApi.md#roles_get_roles) | **GET** /api/v2/Roles | List Roles
[**roles_post_role**](RolesApi.md#roles_post_role) | **POST** /api/v2/Roles | Adds a User Role
[**roles_put_role**](RolesApi.md#roles_put_role) | **PUT** /api/v2/Roles/{id} | Updates a User Role
[**roles_put_role_permissions**](RolesApi.md#roles_put_role_permissions) | **PUT** /api/v2/Roles/{id}/Permissions | Manage the Permissions for a Role


# **roles_delete_role**
> roles_delete_role(id)

Deletes a User Role

No Documentation Found.

### Example


```python
import openapi_client
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
    api_instance = openapi_client.RolesApi(api_client)
    id = 56 # int | The role's id

    try:
        # Deletes a User Role
        api_instance.roles_delete_role(id)
    except Exception as e:
        print("Exception when calling RolesApi->roles_delete_role: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **int**| The role&#39;s id | 

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**204** | No Content |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **roles_get_role**
> APIModelsRole roles_get_role(id)

Gets a User Role

No Documentation Found.

### Example


```python
import openapi_client
from openapi_client.models.api_models_role import APIModelsRole
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
    api_instance = openapi_client.RolesApi(api_client)
    id = 56 # int | The role's id

    try:
        # Gets a User Role
        api_response = api_instance.roles_get_role(id)
        print("The response of RolesApi->roles_get_role:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling RolesApi->roles_get_role: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **int**| The role&#39;s id | 

### Return type

[**APIModelsRole**](APIModelsRole.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, application/xml, text/json, text/xml

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **roles_get_role_permissions**
> APIPagedResponseAPIModelsPermission roles_get_role_permissions(id, name=name, limit=limit, offset=offset)

Get the Permissions for a Role

No Documentation Found.

### Example


```python
import openapi_client
from openapi_client.models.api_paged_response_api_models_permission import APIPagedResponseAPIModelsPermission
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
    api_instance = openapi_client.RolesApi(api_client)
    id = 56 # int | The id of the Role
    name = 'name_example' # str | Filter by permission name. Optional. (optional)
    limit = 56 # int | Optional. The page limit. The default page limit is 10. (optional)
    offset = 56 # int | Optional. The page offset. The default page offset is 0. (optional)

    try:
        # Get the Permissions for a Role
        api_response = api_instance.roles_get_role_permissions(id, name=name, limit=limit, offset=offset)
        print("The response of RolesApi->roles_get_role_permissions:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling RolesApi->roles_get_role_permissions: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **int**| The id of the Role | 
 **name** | **str**| Filter by permission name. Optional. | [optional] 
 **limit** | **int**| Optional. The page limit. The default page limit is 10. | [optional] 
 **offset** | **int**| Optional. The page offset. The default page offset is 0. | [optional] 

### Return type

[**APIPagedResponseAPIModelsPermission**](APIPagedResponseAPIModelsPermission.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **roles_get_roles**
> APIPagedResponseAPIModelsRole roles_get_roles(limit=limit, offset=offset, name=name, permission_id=permission_id, permission_name=permission_name)

List Roles

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
    api_instance = openapi_client.RolesApi(api_client)
    limit = 56 # int | Optional. The page limit. The default page limit is 10. (optional)
    offset = 56 # int | Optional. The page offset. The default page offset is 0. (optional)
    name = 'name_example' # str | Optional. Finds a role with the given name. (optional)
    permission_id = 56 # int |  (optional)
    permission_name = 'permission_name_example' # str | Optional. Filters roles by whether they contain the provided permission. (optional)

    try:
        # List Roles
        api_response = api_instance.roles_get_roles(limit=limit, offset=offset, name=name, permission_id=permission_id, permission_name=permission_name)
        print("The response of RolesApi->roles_get_roles:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling RolesApi->roles_get_roles: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **limit** | **int**| Optional. The page limit. The default page limit is 10. | [optional] 
 **offset** | **int**| Optional. The page offset. The default page offset is 0. | [optional] 
 **name** | **str**| Optional. Finds a role with the given name. | [optional] 
 **permission_id** | **int**|  | [optional] 
 **permission_name** | **str**| Optional. Filters roles by whether they contain the provided permission. | [optional] 

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

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **roles_post_role**
> int roles_post_role(api_models_role)

Adds a User Role

No Documentation Found.

### Example


```python
import openapi_client
from openapi_client.models.api_models_role import APIModelsRole
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
    api_instance = openapi_client.RolesApi(api_client)
    api_models_role = openapi_client.APIModelsRole() # APIModelsRole | Role to add

    try:
        # Adds a User Role
        api_response = api_instance.roles_post_role(api_models_role)
        print("The response of RolesApi->roles_post_role:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling RolesApi->roles_post_role: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_models_role** | [**APIModelsRole**](APIModelsRole.md)| Role to add | 

### Return type

**int**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json, application/x-www-form-urlencoded, application/xml, text/json, text/xml
 - **Accept**: application/json, application/xml, text/json, text/xml

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **roles_put_role**
> roles_put_role(id, api_models_role)

Updates a User Role

No Documentation Found.

### Example


```python
import openapi_client
from openapi_client.models.api_models_role import APIModelsRole
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
    api_instance = openapi_client.RolesApi(api_client)
    id = 56 # int | The role's id
    api_models_role = openapi_client.APIModelsRole() # APIModelsRole | The Updated Role

    try:
        # Updates a User Role
        api_instance.roles_put_role(id, api_models_role)
    except Exception as e:
        print("Exception when calling RolesApi->roles_put_role: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **int**| The role&#39;s id | 
 **api_models_role** | [**APIModelsRole**](APIModelsRole.md)| The Updated Role | 

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json, application/x-www-form-urlencoded, application/xml, text/json, text/xml
 - **Accept**: Not defined

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**204** | No Content |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **roles_put_role_permissions**
> roles_put_role_permissions(id, api_models_role_permission_change)

Manage the Permissions for a Role

No Documentation Found.

### Example


```python
import openapi_client
from openapi_client.models.api_models_role_permission_change import APIModelsRolePermissionChange
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
    api_instance = openapi_client.RolesApi(api_client)
    id = 56 # int | The id of the Role
    api_models_role_permission_change = [openapi_client.APIModelsRolePermissionChange()] # List[APIModelsRolePermissionChange] | Permissions Changes for the Role

    try:
        # Manage the Permissions for a Role
        api_instance.roles_put_role_permissions(id, api_models_role_permission_change)
    except Exception as e:
        print("Exception when calling RolesApi->roles_put_role_permissions: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **int**| The id of the Role | 
 **api_models_role_permission_change** | [**List[APIModelsRolePermissionChange]**](APIModelsRolePermissionChange.md)| Permissions Changes for the Role | 

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json, application/x-www-form-urlencoded, application/xml, text/json, text/xml
 - **Accept**: Not defined

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**204** | No Content |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

