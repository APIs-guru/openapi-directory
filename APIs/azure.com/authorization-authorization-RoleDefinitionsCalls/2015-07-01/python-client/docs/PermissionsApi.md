# openapi_client.PermissionsApi

All URIs are relative to *https://management.azure.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**permissions_list_for_resource**](PermissionsApi.md#permissions_list_for_resource) | **GET** /subscriptions/{subscriptionId}/resourcegroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{parentResourcePath}/{resourceType}/{resourceName}/providers/Microsoft.Authorization/permissions | 
[**permissions_list_for_resource_group**](PermissionsApi.md#permissions_list_for_resource_group) | **GET** /subscriptions/{subscriptionId}/resourcegroups/{resourceGroupName}/providers/Microsoft.Authorization/permissions | 


# **permissions_list_for_resource**
> PermissionGetResult permissions_list_for_resource(resource_group_name, resource_provider_namespace, parent_resource_path, resource_type, resource_name, api_version, subscription_id)



Gets all permissions the caller has for a resource.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.permission_get_result import PermissionGetResult
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
    api_instance = openapi_client.PermissionsApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group containing the resource. The name is case insensitive.
    resource_provider_namespace = 'resource_provider_namespace_example' # str | The namespace of the resource provider.
    parent_resource_path = 'parent_resource_path_example' # str | The parent resource identity.
    resource_type = 'resource_type_example' # str | The resource type of the resource.
    resource_name = 'resource_name_example' # str | The name of the resource to get the permissions for.
    api_version = 'api_version_example' # str | The API version to use for this operation.
    subscription_id = 'subscription_id_example' # str | The ID of the target subscription.

    try:
        api_response = api_instance.permissions_list_for_resource(resource_group_name, resource_provider_namespace, parent_resource_path, resource_type, resource_name, api_version, subscription_id)
        print("The response of PermissionsApi->permissions_list_for_resource:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling PermissionsApi->permissions_list_for_resource: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| The name of the resource group containing the resource. The name is case insensitive. | 
 **resource_provider_namespace** | **str**| The namespace of the resource provider. | 
 **parent_resource_path** | **str**| The parent resource identity. | 
 **resource_type** | **str**| The resource type of the resource. | 
 **resource_name** | **str**| The name of the resource to get the permissions for. | 
 **api_version** | **str**| The API version to use for this operation. | 
 **subscription_id** | **str**| The ID of the target subscription. | 

### Return type

[**PermissionGetResult**](PermissionGetResult.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK - Returns an array of permissions. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **permissions_list_for_resource_group**
> PermissionGetResult permissions_list_for_resource_group(resource_group_name, api_version, subscription_id)



Gets all permissions the caller has for a resource group.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.permission_get_result import PermissionGetResult
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
    api_instance = openapi_client.PermissionsApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group to get the permissions for. The name is case insensitive.
    api_version = 'api_version_example' # str | The API version to use for this operation.
    subscription_id = 'subscription_id_example' # str | The ID of the target subscription.

    try:
        api_response = api_instance.permissions_list_for_resource_group(resource_group_name, api_version, subscription_id)
        print("The response of PermissionsApi->permissions_list_for_resource_group:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling PermissionsApi->permissions_list_for_resource_group: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| The name of the resource group to get the permissions for. The name is case insensitive. | 
 **api_version** | **str**| The API version to use for this operation. | 
 **subscription_id** | **str**| The ID of the target subscription. | 

### Return type

[**PermissionGetResult**](PermissionGetResult.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK - Returns an array of permissions. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

