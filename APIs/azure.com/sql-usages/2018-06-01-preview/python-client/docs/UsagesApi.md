# openapi_client.UsagesApi

All URIs are relative to *https://management.azure.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**usages_list_by_instance_pool**](UsagesApi.md#usages_list_by_instance_pool) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Sql/instancePools/{instancePoolName}/usages | 


# **usages_list_by_instance_pool**
> UsageListResult usages_list_by_instance_pool(resource_group_name, instance_pool_name, subscription_id, api_version, expand_children=expand_children)



Gets all instance pool usage metrics

### Example


```python
import openapi_client
from openapi_client.models.usage_list_result import UsageListResult
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
    api_instance = openapi_client.UsagesApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
    instance_pool_name = 'instance_pool_name_example' # str | The name of the instance pool to be retrieved.
    subscription_id = 'subscription_id_example' # str | The subscription ID that identifies an Azure subscription.
    api_version = 'api_version_example' # str | The API version to use for the request.
    expand_children = True # bool | Optional request parameter to include managed instance usages within the instance pool. (optional)

    try:
        api_response = api_instance.usages_list_by_instance_pool(resource_group_name, instance_pool_name, subscription_id, api_version, expand_children=expand_children)
        print("The response of UsagesApi->usages_list_by_instance_pool:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling UsagesApi->usages_list_by_instance_pool: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal. | 
 **instance_pool_name** | **str**| The name of the instance pool to be retrieved. | 
 **subscription_id** | **str**| The subscription ID that identifies an Azure subscription. | 
 **api_version** | **str**| The API version to use for the request. | 
 **expand_children** | **bool**| Optional request parameter to include managed instance usages within the instance pool. | [optional] 

### Return type

[**UsageListResult**](UsageListResult.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successfully retrieved the instance pool usages. |  -  |
**0** | *** Error Responses: ***   * 400 InstancePoolWrongUsageName - Request for an instance pool&#39;s usage has an unsupported usage name   * 400 InstancePoolManagedInstanceInfoUnavailable - Information for managed instances inside this instance pool is not available   * 404 InstancePoolNotFound - An instance pool cannot be found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

