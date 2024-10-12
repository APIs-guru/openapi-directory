# openapi_client.PrivateLinkResourcesApi

All URIs are relative to *https://management.azure.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**private_link_resources_get**](PrivateLinkResourcesApi.md#private_link_resources_get) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DocumentDB/databaseAccounts/{accountName}/privateLinkResources/{groupName} | 
[**private_link_resources_list_by_database_account**](PrivateLinkResourcesApi.md#private_link_resources_list_by_database_account) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DocumentDB/databaseAccounts/{accountName}/privateLinkResources | 


# **private_link_resources_get**
> PrivateLinkResource private_link_resources_get(subscription_id, resource_group_name, api_version, account_name, group_name)



Gets the private link resources that need to be created for a Cosmos DB account.

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
    subscription_id = 'subscription_id_example' # str | Azure subscription ID.
    resource_group_name = 'resource_group_name_example' # str | Name of an Azure resource group.
    api_version = 'api_version_example' # str | Version of the API to be used with the client request. The current version is 2019-08-01.
    account_name = 'account_name_example' # str | Cosmos DB database account name.
    group_name = 'group_name_example' # str | The name of the private link resource.

    try:
        api_response = api_instance.private_link_resources_get(subscription_id, resource_group_name, api_version, account_name, group_name)
        print("The response of PrivateLinkResourcesApi->private_link_resources_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling PrivateLinkResourcesApi->private_link_resources_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| Azure subscription ID. | 
 **resource_group_name** | **str**| Name of an Azure resource group. | 
 **api_version** | **str**| Version of the API to be used with the client request. The current version is 2019-08-01. | 
 **account_name** | **str**| Cosmos DB database account name. | 
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

# **private_link_resources_list_by_database_account**
> PrivateLinkResourceListResult private_link_resources_list_by_database_account(subscription_id, resource_group_name, api_version, account_name)



Gets the private link resources that need to be created for a Cosmos DB account.

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
    subscription_id = 'subscription_id_example' # str | Azure subscription ID.
    resource_group_name = 'resource_group_name_example' # str | Name of an Azure resource group.
    api_version = 'api_version_example' # str | Version of the API to be used with the client request. The current version is 2019-08-01.
    account_name = 'account_name_example' # str | Cosmos DB database account name.

    try:
        api_response = api_instance.private_link_resources_list_by_database_account(subscription_id, resource_group_name, api_version, account_name)
        print("The response of PrivateLinkResourcesApi->private_link_resources_list_by_database_account:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling PrivateLinkResourcesApi->private_link_resources_list_by_database_account: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| Azure subscription ID. | 
 **resource_group_name** | **str**| Name of an Azure resource group. | 
 **api_version** | **str**| Version of the API to be used with the client request. The current version is 2019-08-01. | 
 **account_name** | **str**| Cosmos DB database account name. | 

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

