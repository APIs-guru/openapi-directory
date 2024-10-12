# openapi_client.PrivateLinkResourcesApi

All URIs are relative to *https://management.azure.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**private_link_resources_get**](PrivateLinkResourcesApi.md#private_link_resources_get) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AppConfiguration/configurationStores/{configStoreName}/privateLinkResources/{groupName} | 
[**private_link_resources_list_by_configuration_store**](PrivateLinkResourcesApi.md#private_link_resources_list_by_configuration_store) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AppConfiguration/configurationStores/{configStoreName}/privateLinkResources | 


# **private_link_resources_get**
> PrivateLinkResource private_link_resources_get(subscription_id, resource_group_name, config_store_name, api_version, group_name)



Gets a private link resource that need to be created for a configuration store.

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
    subscription_id = 'subscription_id_example' # str | The Microsoft Azure subscription ID.
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group to which the container registry belongs.
    config_store_name = 'config_store_name_example' # str | The name of the configuration store.
    api_version = 'api_version_example' # str | The client API version.
    group_name = 'group_name_example' # str | The name of the private link resource group.

    try:
        api_response = api_instance.private_link_resources_get(subscription_id, resource_group_name, config_store_name, api_version, group_name)
        print("The response of PrivateLinkResourcesApi->private_link_resources_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling PrivateLinkResourcesApi->private_link_resources_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| The Microsoft Azure subscription ID. | 
 **resource_group_name** | **str**| The name of the resource group to which the container registry belongs. | 
 **config_store_name** | **str**| The name of the configuration store. | 
 **api_version** | **str**| The client API version. | 
 **group_name** | **str**| The name of the private link resource group. | 

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
**200** | The request was successful; the request was well-formed and received properly. |  -  |
**0** | Error response describing why the operation failed |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **private_link_resources_list_by_configuration_store**
> PrivateLinkResourceListResult private_link_resources_list_by_configuration_store(subscription_id, resource_group_name, config_store_name, api_version)



Gets the private link resources that need to be created for a configuration store.

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
    subscription_id = 'subscription_id_example' # str | The Microsoft Azure subscription ID.
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group to which the container registry belongs.
    config_store_name = 'config_store_name_example' # str | The name of the configuration store.
    api_version = 'api_version_example' # str | The client API version.

    try:
        api_response = api_instance.private_link_resources_list_by_configuration_store(subscription_id, resource_group_name, config_store_name, api_version)
        print("The response of PrivateLinkResourcesApi->private_link_resources_list_by_configuration_store:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling PrivateLinkResourcesApi->private_link_resources_list_by_configuration_store: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| The Microsoft Azure subscription ID. | 
 **resource_group_name** | **str**| The name of the resource group to which the container registry belongs. | 
 **config_store_name** | **str**| The name of the configuration store. | 
 **api_version** | **str**| The client API version. | 

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
**200** | The request was successful; the request was well-formed and received properly. |  -  |
**0** | Error response describing why the operation failed |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

