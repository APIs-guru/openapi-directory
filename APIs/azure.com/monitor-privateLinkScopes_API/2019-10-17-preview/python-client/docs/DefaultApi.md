# openapi_client.DefaultApi

All URIs are relative to *https://management.azure.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**private_link_scopes_create_or_update**](DefaultApi.md#private_link_scopes_create_or_update) | **PUT** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/microsoft.insights/privateLinkScopes/{scopeName} | 
[**private_link_scopes_delete**](DefaultApi.md#private_link_scopes_delete) | **DELETE** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/microsoft.insights/privateLinkScopes/{scopeName} | 
[**private_link_scopes_get**](DefaultApi.md#private_link_scopes_get) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/microsoft.insights/privateLinkScopes/{scopeName} | 
[**private_link_scopes_list**](DefaultApi.md#private_link_scopes_list) | **GET** /subscriptions/{subscriptionId}/providers/microsoft.insights/privateLinkScopes | 
[**private_link_scopes_list_by_resource_group**](DefaultApi.md#private_link_scopes_list_by_resource_group) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/microsoft.insights/privateLinkScopes | 
[**private_link_scopes_update_tags**](DefaultApi.md#private_link_scopes_update_tags) | **PATCH** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/microsoft.insights/privateLinkScopes/{scopeName} | 


# **private_link_scopes_create_or_update**
> AzureMonitorPrivateLinkScope private_link_scopes_create_or_update(resource_group_name, api_version, subscription_id, scope_name, azure_monitor_private_link_scope_payload)



Creates (or updates) a Azure Monitor PrivateLinkScope. Note: You cannot specify a different value for InstrumentationKey nor AppId in the Put operation.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.azure_monitor_private_link_scope import AzureMonitorPrivateLinkScope
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
    api_instance = openapi_client.DefaultApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group. The name is case insensitive.
    api_version = 'api_version_example' # str | The API version to use for this operation.
    subscription_id = 'subscription_id_example' # str | The ID of the target subscription.
    scope_name = 'scope_name_example' # str | The name of the Azure Monitor PrivateLinkScope resource.
    azure_monitor_private_link_scope_payload = openapi_client.AzureMonitorPrivateLinkScope() # AzureMonitorPrivateLinkScope | Properties that need to be specified to create or update a Azure Monitor PrivateLinkScope.

    try:
        api_response = api_instance.private_link_scopes_create_or_update(resource_group_name, api_version, subscription_id, scope_name, azure_monitor_private_link_scope_payload)
        print("The response of DefaultApi->private_link_scopes_create_or_update:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->private_link_scopes_create_or_update: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| The name of the resource group. The name is case insensitive. | 
 **api_version** | **str**| The API version to use for this operation. | 
 **subscription_id** | **str**| The ID of the target subscription. | 
 **scope_name** | **str**| The name of the Azure Monitor PrivateLinkScope resource. | 
 **azure_monitor_private_link_scope_payload** | [**AzureMonitorPrivateLinkScope**](AzureMonitorPrivateLinkScope.md)| Properties that need to be specified to create or update a Azure Monitor PrivateLinkScope. | 

### Return type

[**AzureMonitorPrivateLinkScope**](AzureMonitorPrivateLinkScope.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful request when creating or updating a Azure Monitor PrivateLinkScope. The updated PrivateLinkScope is returned. |  -  |
**0** | Error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **private_link_scopes_delete**
> private_link_scopes_delete(resource_group_name, api_version, subscription_id, scope_name)



Deletes a Azure Monitor PrivateLinkScope.

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
    api_instance = openapi_client.DefaultApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group. The name is case insensitive.
    api_version = 'api_version_example' # str | The API version to use for this operation.
    subscription_id = 'subscription_id_example' # str | The ID of the target subscription.
    scope_name = 'scope_name_example' # str | The name of the Azure Monitor PrivateLinkScope resource.

    try:
        api_instance.private_link_scopes_delete(resource_group_name, api_version, subscription_id, scope_name)
    except Exception as e:
        print("Exception when calling DefaultApi->private_link_scopes_delete: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| The name of the resource group. The name is case insensitive. | 
 **api_version** | **str**| The API version to use for this operation. | 
 **subscription_id** | **str**| The ID of the target subscription. | 
 **scope_name** | **str**| The name of the Azure Monitor PrivateLinkScope resource. | 

### Return type

void (empty response body)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful request when deleting a Azure Monitor PrivateLinkScope. |  -  |
**202** | Accepted. |  -  |
**204** | The specified PrivateLinkScope does not exist. |  -  |
**0** | Error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **private_link_scopes_get**
> AzureMonitorPrivateLinkScope private_link_scopes_get(resource_group_name, api_version, subscription_id, scope_name)



Returns a Azure Monitor PrivateLinkScope.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.azure_monitor_private_link_scope import AzureMonitorPrivateLinkScope
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
    api_instance = openapi_client.DefaultApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group. The name is case insensitive.
    api_version = 'api_version_example' # str | The API version to use for this operation.
    subscription_id = 'subscription_id_example' # str | The ID of the target subscription.
    scope_name = 'scope_name_example' # str | The name of the Azure Monitor PrivateLinkScope resource.

    try:
        api_response = api_instance.private_link_scopes_get(resource_group_name, api_version, subscription_id, scope_name)
        print("The response of DefaultApi->private_link_scopes_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->private_link_scopes_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| The name of the resource group. The name is case insensitive. | 
 **api_version** | **str**| The API version to use for this operation. | 
 **subscription_id** | **str**| The ID of the target subscription. | 
 **scope_name** | **str**| The name of the Azure Monitor PrivateLinkScope resource. | 

### Return type

[**AzureMonitorPrivateLinkScope**](AzureMonitorPrivateLinkScope.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | An Azure Monitor PrivateLinkScope definition. |  -  |
**0** | Error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **private_link_scopes_list**
> AzureMonitorPrivateLinkScopeListResult private_link_scopes_list(api_version, subscription_id)



Gets a list of all Azure Monitor PrivateLinkScopes within a subscription.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.azure_monitor_private_link_scope_list_result import AzureMonitorPrivateLinkScopeListResult
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
    api_instance = openapi_client.DefaultApi(api_client)
    api_version = 'api_version_example' # str | The API version to use for this operation.
    subscription_id = 'subscription_id_example' # str | The ID of the target subscription.

    try:
        api_response = api_instance.private_link_scopes_list(api_version, subscription_id)
        print("The response of DefaultApi->private_link_scopes_list:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->private_link_scopes_list: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_version** | **str**| The API version to use for this operation. | 
 **subscription_id** | **str**| The ID of the target subscription. | 

### Return type

[**AzureMonitorPrivateLinkScopeListResult**](AzureMonitorPrivateLinkScopeListResult.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | A list containing 0 or more Azure Monitor PrivateLinkScope definitions. |  -  |
**0** | Error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **private_link_scopes_list_by_resource_group**
> AzureMonitorPrivateLinkScopeListResult private_link_scopes_list_by_resource_group(resource_group_name, api_version, subscription_id)



Gets a list of Azure Monitor PrivateLinkScopes within a resource group.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.azure_monitor_private_link_scope_list_result import AzureMonitorPrivateLinkScopeListResult
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
    api_instance = openapi_client.DefaultApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group. The name is case insensitive.
    api_version = 'api_version_example' # str | The API version to use for this operation.
    subscription_id = 'subscription_id_example' # str | The ID of the target subscription.

    try:
        api_response = api_instance.private_link_scopes_list_by_resource_group(resource_group_name, api_version, subscription_id)
        print("The response of DefaultApi->private_link_scopes_list_by_resource_group:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->private_link_scopes_list_by_resource_group: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| The name of the resource group. The name is case insensitive. | 
 **api_version** | **str**| The API version to use for this operation. | 
 **subscription_id** | **str**| The ID of the target subscription. | 

### Return type

[**AzureMonitorPrivateLinkScopeListResult**](AzureMonitorPrivateLinkScopeListResult.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | A list containing 0 or more Azure Monitor PrivateLinkScope definitions. |  -  |
**0** | Error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **private_link_scopes_update_tags**
> AzureMonitorPrivateLinkScope private_link_scopes_update_tags(resource_group_name, api_version, subscription_id, scope_name, private_link_scope_tags)



Updates an existing PrivateLinkScope's tags. To update other fields use the CreateOrUpdate method.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.azure_monitor_private_link_scope import AzureMonitorPrivateLinkScope
from openapi_client.models.tags_resource import TagsResource
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
    api_instance = openapi_client.DefaultApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group. The name is case insensitive.
    api_version = 'api_version_example' # str | The API version to use for this operation.
    subscription_id = 'subscription_id_example' # str | The ID of the target subscription.
    scope_name = 'scope_name_example' # str | The name of the Azure Monitor PrivateLinkScope resource.
    private_link_scope_tags = openapi_client.TagsResource() # TagsResource | Updated tag information to set into the PrivateLinkScope instance.

    try:
        api_response = api_instance.private_link_scopes_update_tags(resource_group_name, api_version, subscription_id, scope_name, private_link_scope_tags)
        print("The response of DefaultApi->private_link_scopes_update_tags:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->private_link_scopes_update_tags: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| The name of the resource group. The name is case insensitive. | 
 **api_version** | **str**| The API version to use for this operation. | 
 **subscription_id** | **str**| The ID of the target subscription. | 
 **scope_name** | **str**| The name of the Azure Monitor PrivateLinkScope resource. | 
 **private_link_scope_tags** | [**TagsResource**](TagsResource.md)| Updated tag information to set into the PrivateLinkScope instance. | 

### Return type

[**AzureMonitorPrivateLinkScope**](AzureMonitorPrivateLinkScope.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Updating the Azure Monitor PrivateLinkScope&#39;s tags was successful. PrivateLinkScope tags are updated and returned with the rest of the PrivateLinkScope&#39;s object properties. |  -  |
**0** | Error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

