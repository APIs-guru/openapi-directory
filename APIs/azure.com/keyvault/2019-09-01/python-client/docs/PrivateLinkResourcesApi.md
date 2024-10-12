# openapi_client.PrivateLinkResourcesApi

All URIs are relative to *https://management.azure.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**private_link_resources_list_by_vault**](PrivateLinkResourcesApi.md#private_link_resources_list_by_vault) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.KeyVault/vaults/{vaultName}/privateLinkResources | 


# **private_link_resources_list_by_vault**
> PrivateLinkResourceListResult private_link_resources_list_by_vault(subscription_id, resource_group_name, vault_name, api_version)



Gets the private link resources supported for the key vault.

### Example


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


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.PrivateLinkResourcesApi(api_client)
    subscription_id = 'subscription_id_example' # str | Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
    resource_group_name = 'resource_group_name_example' # str | Name of the resource group that contains the key vault.
    vault_name = 'vault_name_example' # str | The name of the key vault.
    api_version = 'api_version_example' # str | Client Api Version.

    try:
        api_response = api_instance.private_link_resources_list_by_vault(subscription_id, resource_group_name, vault_name, api_version)
        print("The response of PrivateLinkResourcesApi->private_link_resources_list_by_vault:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling PrivateLinkResourcesApi->private_link_resources_list_by_vault: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 
 **resource_group_name** | **str**| Name of the resource group that contains the key vault. | 
 **vault_name** | **str**| The name of the key vault. | 
 **api_version** | **str**| Client Api Version. | 

### Return type

[**PrivateLinkResourceListResult**](PrivateLinkResourceListResult.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successfully retrieved private link resources. |  -  |
**0** | Error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

