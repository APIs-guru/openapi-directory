# openapi_client.PrivateLinkScopedResourcesApi

All URIs are relative to *https://management.azure.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**private_link_scoped_resources_create_or_update**](PrivateLinkScopedResourcesApi.md#private_link_scoped_resources_create_or_update) | **PUT** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Insights/privateLinkScopes/{scopeName}/scopedResources/{name} | 
[**private_link_scoped_resources_delete**](PrivateLinkScopedResourcesApi.md#private_link_scoped_resources_delete) | **DELETE** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Insights/privateLinkScopes/{scopeName}/scopedResources/{name} | 
[**private_link_scoped_resources_get**](PrivateLinkScopedResourcesApi.md#private_link_scoped_resources_get) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Insights/privateLinkScopes/{scopeName}/scopedResources/{name} | 
[**private_link_scoped_resources_list_by_private_link_scope**](PrivateLinkScopedResourcesApi.md#private_link_scoped_resources_list_by_private_link_scope) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Insights/privateLinkScopes/{scopeName}/scopedResources | 


# **private_link_scoped_resources_create_or_update**
> ScopedResource private_link_scoped_resources_create_or_update(subscription_id, resource_group_name, api_version, scope_name, name, parameters)



Approve or reject a private endpoint connection with a given name.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.scoped_resource import ScopedResource
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
    api_instance = openapi_client.PrivateLinkScopedResourcesApi(api_client)
    subscription_id = 'subscription_id_example' # str | The ID of the target subscription.
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group. The name is case insensitive.
    api_version = 'api_version_example' # str | The API version to use for this operation.
    scope_name = 'scope_name_example' # str | Name of the Azure Monitor PrivateLinkScope that will contain the datasource
    name = 'name_example' # str | The name of the scoped resource object.
    parameters = openapi_client.ScopedResource() # ScopedResource | 

    try:
        api_response = api_instance.private_link_scoped_resources_create_or_update(subscription_id, resource_group_name, api_version, scope_name, name, parameters)
        print("The response of PrivateLinkScopedResourcesApi->private_link_scoped_resources_create_or_update:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling PrivateLinkScopedResourcesApi->private_link_scoped_resources_create_or_update: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| The ID of the target subscription. | 
 **resource_group_name** | **str**| The name of the resource group. The name is case insensitive. | 
 **api_version** | **str**| The API version to use for this operation. | 
 **scope_name** | **str**| Name of the Azure Monitor PrivateLinkScope that will contain the datasource | 
 **name** | **str**| The name of the scoped resource object. | 
 **parameters** | [**ScopedResource**](ScopedResource.md)|  | 

### Return type

[**ScopedResource**](ScopedResource.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successfully scoped azure monitor resource in a private link scope. |  -  |
**202** | Accepted |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **private_link_scoped_resources_delete**
> private_link_scoped_resources_delete(subscription_id, resource_group_name, api_version, scope_name, name)



Deletes a private endpoint connection with a given name.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
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
    api_instance = openapi_client.PrivateLinkScopedResourcesApi(api_client)
    subscription_id = 'subscription_id_example' # str | The ID of the target subscription.
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group. The name is case insensitive.
    api_version = 'api_version_example' # str | The API version to use for this operation.
    scope_name = 'scope_name_example' # str | Name of the Azure Monitor PrivateLinkScope that will contain the datasource
    name = 'name_example' # str | The name of the scoped resource object.

    try:
        api_instance.private_link_scoped_resources_delete(subscription_id, resource_group_name, api_version, scope_name, name)
    except Exception as e:
        print("Exception when calling PrivateLinkScopedResourcesApi->private_link_scoped_resources_delete: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| The ID of the target subscription. | 
 **resource_group_name** | **str**| The name of the resource group. The name is case insensitive. | 
 **api_version** | **str**| The API version to use for this operation. | 
 **scope_name** | **str**| Name of the Azure Monitor PrivateLinkScope that will contain the datasource | 
 **name** | **str**| The name of the scoped resource object. | 

### Return type

void (empty response body)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successfully deleted scoped resource. |  -  |
**202** | Accepted |  -  |
**204** | Scoped resource does not exist. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **private_link_scoped_resources_get**
> ScopedResource private_link_scoped_resources_get(subscription_id, resource_group_name, api_version, scope_name, name)



Gets a scoped resource in a private link scope.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.scoped_resource import ScopedResource
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
    api_instance = openapi_client.PrivateLinkScopedResourcesApi(api_client)
    subscription_id = 'subscription_id_example' # str | The ID of the target subscription.
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group. The name is case insensitive.
    api_version = 'api_version_example' # str | The API version to use for this operation.
    scope_name = 'scope_name_example' # str | Name of the Azure Monitor PrivateLinkScope that will contain the datasource
    name = 'name_example' # str | The name of the scoped resource object.

    try:
        api_response = api_instance.private_link_scoped_resources_get(subscription_id, resource_group_name, api_version, scope_name, name)
        print("The response of PrivateLinkScopedResourcesApi->private_link_scoped_resources_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling PrivateLinkScopedResourcesApi->private_link_scoped_resources_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| The ID of the target subscription. | 
 **resource_group_name** | **str**| The name of the resource group. The name is case insensitive. | 
 **api_version** | **str**| The API version to use for this operation. | 
 **scope_name** | **str**| Name of the Azure Monitor PrivateLinkScope that will contain the datasource | 
 **name** | **str**| The name of the scoped resource object. | 

### Return type

[**ScopedResource**](ScopedResource.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successfully retrieved a scoped resource in a private link scope. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **private_link_scoped_resources_list_by_private_link_scope**
> ScopedResourceListResult private_link_scoped_resources_list_by_private_link_scope(subscription_id, resource_group_name, api_version, scope_name)



Gets all private endpoint connections on a private link scope.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.scoped_resource_list_result import ScopedResourceListResult
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
    api_instance = openapi_client.PrivateLinkScopedResourcesApi(api_client)
    subscription_id = 'subscription_id_example' # str | The ID of the target subscription.
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group. The name is case insensitive.
    api_version = 'api_version_example' # str | The API version to use for this operation.
    scope_name = 'scope_name_example' # str | Name of the Azure Monitor PrivateLinkScope that will contain the datasource

    try:
        api_response = api_instance.private_link_scoped_resources_list_by_private_link_scope(subscription_id, resource_group_name, api_version, scope_name)
        print("The response of PrivateLinkScopedResourcesApi->private_link_scoped_resources_list_by_private_link_scope:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling PrivateLinkScopedResourcesApi->private_link_scoped_resources_list_by_private_link_scope: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| The ID of the target subscription. | 
 **resource_group_name** | **str**| The name of the resource group. The name is case insensitive. | 
 **api_version** | **str**| The API version to use for this operation. | 
 **scope_name** | **str**| Name of the Azure Monitor PrivateLinkScope that will contain the datasource | 

### Return type

[**ScopedResourceListResult**](ScopedResourceListResult.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successfully retrieved scoped resources in a private link scope. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

