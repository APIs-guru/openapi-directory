# openapi_client.PermissionsApi

All URIs are relative to *https://secure.agco-ats.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**permissions_delete_permission**](PermissionsApi.md#permissions_delete_permission) | **DELETE** /api/v2/Permissions/{id} | Deletes a Permission
[**permissions_get_permission**](PermissionsApi.md#permissions_get_permission) | **GET** /api/v2/Permissions/{id} | Gets a Permission
[**permissions_get_permissions**](PermissionsApi.md#permissions_get_permissions) | **GET** /api/v2/Permissions | List Permissions
[**permissions_post_permission**](PermissionsApi.md#permissions_post_permission) | **POST** /api/v2/Permissions | Adds a Permission
[**permissions_put_permission**](PermissionsApi.md#permissions_put_permission) | **PUT** /api/v2/Permissions/{id} | Updates a Permission


# **permissions_delete_permission**
> permissions_delete_permission(id)

Deletes a Permission

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
    api_instance = openapi_client.PermissionsApi(api_client)
    id = 56 # int | Id of Permission

    try:
        # Deletes a Permission
        api_instance.permissions_delete_permission(id)
    except Exception as e:
        print("Exception when calling PermissionsApi->permissions_delete_permission: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **int**| Id of Permission | 

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

# **permissions_get_permission**
> APIModelsPermission permissions_get_permission(id)

Gets a Permission

No Documentation Found.

### Example


```python
import openapi_client
from openapi_client.models.api_models_permission import APIModelsPermission
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
    api_instance = openapi_client.PermissionsApi(api_client)
    id = 56 # int | Id of Permission

    try:
        # Gets a Permission
        api_response = api_instance.permissions_get_permission(id)
        print("The response of PermissionsApi->permissions_get_permission:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling PermissionsApi->permissions_get_permission: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **int**| Id of Permission | 

### Return type

[**APIModelsPermission**](APIModelsPermission.md)

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

# **permissions_get_permissions**
> APIPagedResponseAPIModelsPermission permissions_get_permissions(limit=limit, offset=offset, name=name)

List Permissions

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
    api_instance = openapi_client.PermissionsApi(api_client)
    limit = 56 # int | Optional. The page limit. The default page limit is 10. (optional)
    offset = 56 # int | Optional. The page offset. The default page offset is 0. (optional)
    name = 'name_example' # str | Filter by permission name. Supports ending wildcard (*). Optional. (optional)

    try:
        # List Permissions
        api_response = api_instance.permissions_get_permissions(limit=limit, offset=offset, name=name)
        print("The response of PermissionsApi->permissions_get_permissions:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling PermissionsApi->permissions_get_permissions: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **limit** | **int**| Optional. The page limit. The default page limit is 10. | [optional] 
 **offset** | **int**| Optional. The page offset. The default page offset is 0. | [optional] 
 **name** | **str**| Filter by permission name. Supports ending wildcard (*). Optional. | [optional] 

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

# **permissions_post_permission**
> int permissions_post_permission(api_models_permission)

Adds a Permission

No Documentation Found.

### Example


```python
import openapi_client
from openapi_client.models.api_models_permission import APIModelsPermission
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
    api_instance = openapi_client.PermissionsApi(api_client)
    api_models_permission = openapi_client.APIModelsPermission() # APIModelsPermission | Permission to add

    try:
        # Adds a Permission
        api_response = api_instance.permissions_post_permission(api_models_permission)
        print("The response of PermissionsApi->permissions_post_permission:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling PermissionsApi->permissions_post_permission: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_models_permission** | [**APIModelsPermission**](APIModelsPermission.md)| Permission to add | 

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

# **permissions_put_permission**
> permissions_put_permission(id, api_models_permission)

Updates a Permission

No Documentation Found.

### Example


```python
import openapi_client
from openapi_client.models.api_models_permission import APIModelsPermission
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
    api_instance = openapi_client.PermissionsApi(api_client)
    id = 56 # int | Id of Permission
    api_models_permission = openapi_client.APIModelsPermission() # APIModelsPermission | The Updated Permission

    try:
        # Updates a Permission
        api_instance.permissions_put_permission(id, api_models_permission)
    except Exception as e:
        print("Exception when calling PermissionsApi->permissions_put_permission: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **int**| Id of Permission | 
 **api_models_permission** | [**APIModelsPermission**](APIModelsPermission.md)| The Updated Permission | 

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

