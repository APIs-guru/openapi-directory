# openapi_client.MountTargetsApi

All URIs are relative to *https://management.azure.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**mount_targets_list**](MountTargetsApi.md#mount_targets_list) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.NetApp/netAppAccounts/{accountName}/capacityPools/{poolName}/volumes/{volumeName}/mountTargets | Describe all mount targets


# **mount_targets_list**
> MountTargetList mount_targets_list(subscription_id, resource_group_name, account_name, pool_name, volume_name, api_version)

Describe all mount targets

List all mount targets associated with the volume

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.mount_target_list import MountTargetList
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
    api_instance = openapi_client.MountTargetsApi(api_client)
    subscription_id = 'subscription_id_example' # str | Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group.
    account_name = 'account_name_example' # str | The name of the NetApp account
    pool_name = 'pool_name_example' # str | The name of the capacity pool
    volume_name = 'volume_name_example' # str | The name of the volume
    api_version = '2019-06-01' # str | Version of the API to be used with the client request. (default to '2019-06-01')

    try:
        # Describe all mount targets
        api_response = api_instance.mount_targets_list(subscription_id, resource_group_name, account_name, pool_name, volume_name, api_version)
        print("The response of MountTargetsApi->mount_targets_list:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling MountTargetsApi->mount_targets_list: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 
 **resource_group_name** | **str**| The name of the resource group. | 
 **account_name** | **str**| The name of the NetApp account | 
 **pool_name** | **str**| The name of the capacity pool | 
 **volume_name** | **str**| The name of the volume | 
 **api_version** | **str**| Version of the API to be used with the client request. | [default to &#39;2019-06-01&#39;]

### Return type

[**MountTargetList**](MountTargetList.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**0** | Error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

