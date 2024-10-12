# openapi_client.RoleDefinitionsApi

All URIs are relative to *https://management.azure.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**role_definitions_create_or_update**](RoleDefinitionsApi.md#role_definitions_create_or_update) | **PUT** /{scope}/providers/Microsoft.Authorization/roleDefinitions/{roleDefinitionId} | 
[**role_definitions_delete**](RoleDefinitionsApi.md#role_definitions_delete) | **DELETE** /{scope}/providers/Microsoft.Authorization/roleDefinitions/{roleDefinitionId} | 
[**role_definitions_get**](RoleDefinitionsApi.md#role_definitions_get) | **GET** /{scope}/providers/Microsoft.Authorization/roleDefinitions/{roleDefinitionId} | 
[**role_definitions_list**](RoleDefinitionsApi.md#role_definitions_list) | **GET** /{scope}/providers/Microsoft.Authorization/roleDefinitions | 


# **role_definitions_create_or_update**
> RoleDefinition role_definitions_create_or_update(scope, role_definition_id, api_version, role_definition)



Creates or updates a role definition.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.role_definition import RoleDefinition
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://management.azure.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://management.azure.com"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.RoleDefinitionsApi(api_client)
    scope = 'scope_example' # str | The scope of the role definition.
    role_definition_id = 'role_definition_id_example' # str | The ID of the role definition.
    api_version = 'api_version_example' # str | The API version to use for this operation.
    role_definition = openapi_client.RoleDefinition() # RoleDefinition | The values for the role definition.

    try:
        api_response = api_instance.role_definitions_create_or_update(scope, role_definition_id, api_version, role_definition)
        print("The response of RoleDefinitionsApi->role_definitions_create_or_update:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling RoleDefinitionsApi->role_definitions_create_or_update: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **scope** | **str**| The scope of the role definition. | 
 **role_definition_id** | **str**| The ID of the role definition. | 
 **api_version** | **str**| The API version to use for this operation. | 
 **role_definition** | [**RoleDefinition**](RoleDefinition.md)| The values for the role definition. | 

### Return type

[**RoleDefinition**](RoleDefinition.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | OK - Returns information about the role definition. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **role_definitions_delete**
> RoleDefinition role_definitions_delete(scope, role_definition_id, api_version)



Deletes a role definition.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.role_definition import RoleDefinition
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://management.azure.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://management.azure.com"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.RoleDefinitionsApi(api_client)
    scope = 'scope_example' # str | The scope of the role definition.
    role_definition_id = 'role_definition_id_example' # str | The ID of the role definition to delete.
    api_version = 'api_version_example' # str | The API version to use for this operation.

    try:
        api_response = api_instance.role_definitions_delete(scope, role_definition_id, api_version)
        print("The response of RoleDefinitionsApi->role_definitions_delete:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling RoleDefinitionsApi->role_definitions_delete: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **scope** | **str**| The scope of the role definition. | 
 **role_definition_id** | **str**| The ID of the role definition to delete. | 
 **api_version** | **str**| The API version to use for this operation. | 

### Return type

[**RoleDefinition**](RoleDefinition.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK - Returns information about the role definition. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **role_definitions_get**
> RoleDefinition role_definitions_get(scope, role_definition_id, api_version)



Get role definition by name (GUID).

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.role_definition import RoleDefinition
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://management.azure.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://management.azure.com"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.RoleDefinitionsApi(api_client)
    scope = 'scope_example' # str | The scope of the role definition.
    role_definition_id = 'role_definition_id_example' # str | The ID of the role definition.
    api_version = 'api_version_example' # str | The API version to use for this operation.

    try:
        api_response = api_instance.role_definitions_get(scope, role_definition_id, api_version)
        print("The response of RoleDefinitionsApi->role_definitions_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling RoleDefinitionsApi->role_definitions_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **scope** | **str**| The scope of the role definition. | 
 **role_definition_id** | **str**| The ID of the role definition. | 
 **api_version** | **str**| The API version to use for this operation. | 

### Return type

[**RoleDefinition**](RoleDefinition.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK - Returns information about the role definition. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **role_definitions_list**
> RoleDefinitionListResult role_definitions_list(scope, api_version, filter=filter)



Get all role definitions that are applicable at scope and above.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.role_definition_list_result import RoleDefinitionListResult
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://management.azure.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://management.azure.com"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.RoleDefinitionsApi(api_client)
    scope = 'scope_example' # str | The scope of the role definition.
    api_version = 'api_version_example' # str | The API version to use for this operation.
    filter = 'filter_example' # str | The filter to apply on the operation. Use atScopeAndBelow filter to search below the given scope as well. (optional)

    try:
        api_response = api_instance.role_definitions_list(scope, api_version, filter=filter)
        print("The response of RoleDefinitionsApi->role_definitions_list:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling RoleDefinitionsApi->role_definitions_list: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **scope** | **str**| The scope of the role definition. | 
 **api_version** | **str**| The API version to use for this operation. | 
 **filter** | **str**| The filter to apply on the operation. Use atScopeAndBelow filter to search below the given scope as well. | [optional] 

### Return type

[**RoleDefinitionListResult**](RoleDefinitionListResult.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK - Returns an array of role definitions. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

