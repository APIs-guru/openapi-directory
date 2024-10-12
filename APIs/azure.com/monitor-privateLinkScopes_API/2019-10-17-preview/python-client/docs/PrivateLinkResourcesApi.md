# openapi_client.PrivateLinkResourcesApi

All URIs are relative to *https://management.azure.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**private_link_resources_get**](PrivateLinkResourcesApi.md#private_link_resources_get) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Insights/privateLinkScopes/{scopeName}/privateLinkResources/{groupName} | 
[**private_link_resources_list_by_private_link_scope**](PrivateLinkResourcesApi.md#private_link_resources_list_by_private_link_scope) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Insights/privateLinkScopes/{scopeName}/privateLinkResources | 


# **private_link_resources_get**
> PrivateLinkResource private_link_resources_get(subscription_id, resource_group_name, api_version, scope_name, group_name)



Gets the private link resources that need to be created for a Azure Monitor PrivateLinkScope.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.private_link_resource import PrivateLinkResource
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
    api_instance = openapi_client.PrivateLinkResourcesApi(api_client)
    subscription_id = 'subscription_id_example' # str | The ID of the target subscription.
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group. The name is case insensitive.
    api_version = 'api_version_example' # str | The API version to use for this operation.
    scope_name = 'scope_name_example' # str | Name of the Azure Monitor PrivateLinkScope that will contain the datasource
    group_name = 'group_name_example' # str | The name of the private link resource.

    try:
        api_response = api_instance.private_link_resources_get(subscription_id, resource_group_name, api_version, scope_name, group_name)
        print("The response of PrivateLinkResourcesApi->private_link_resources_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling PrivateLinkResourcesApi->private_link_resources_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| The ID of the target subscription. | 
 **resource_group_name** | **str**| The name of the resource group. The name is case insensitive. | 
 **api_version** | **str**| The API version to use for this operation. | 
 **scope_name** | **str**| Name of the Azure Monitor PrivateLinkScope that will contain the datasource | 
 **group_name** | **str**| The name of the private link resource. | 

### Return type

[**PrivateLinkResource**](PrivateLinkResource.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successfully retrieved a specified private link resource. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **private_link_resources_list_by_private_link_scope**
> PrivateLinkResourceListResult private_link_resources_list_by_private_link_scope(subscription_id, resource_group_name, api_version, scope_name)



Gets the private link resources that need to be created for a Azure Monitor PrivateLinkScope.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.private_link_resource_list_result import PrivateLinkResourceListResult
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
    api_instance = openapi_client.PrivateLinkResourcesApi(api_client)
    subscription_id = 'subscription_id_example' # str | The ID of the target subscription.
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group. The name is case insensitive.
    api_version = 'api_version_example' # str | The API version to use for this operation.
    scope_name = 'scope_name_example' # str | Name of the Azure Monitor PrivateLinkScope that will contain the datasource

    try:
        api_response = api_instance.private_link_resources_list_by_private_link_scope(subscription_id, resource_group_name, api_version, scope_name)
        print("The response of PrivateLinkResourcesApi->private_link_resources_list_by_private_link_scope:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling PrivateLinkResourcesApi->private_link_resources_list_by_private_link_scope: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| The ID of the target subscription. | 
 **resource_group_name** | **str**| The name of the resource group. The name is case insensitive. | 
 **api_version** | **str**| The API version to use for this operation. | 
 **scope_name** | **str**| Name of the Azure Monitor PrivateLinkScope that will contain the datasource | 

### Return type

[**PrivateLinkResourceListResult**](PrivateLinkResourceListResult.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successfully retrieved private link resources. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

