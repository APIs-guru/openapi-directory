# openapi_client.DedicatedHostApi

All URIs are relative to *https://management.azure.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**dedicated_hosts_list_by_host_group**](DedicatedHostApi.md#dedicated_hosts_list_by_host_group) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Compute/hostGroups/{hostGroupName}/hosts | 


# **dedicated_hosts_list_by_host_group**
> DedicatedHostListResult dedicated_hosts_list_by_host_group(resource_group_name, host_group_name, api_version, subscription_id)



Lists all of the dedicated hosts in the specified dedicated host group. Use the nextLink property in the response to get the next page of dedicated hosts.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.dedicated_host_list_result import DedicatedHostListResult
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
    api_instance = openapi_client.DedicatedHostApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group.
    host_group_name = 'host_group_name_example' # str | The name of the dedicated host group.
    api_version = 'api_version_example' # str | Client Api Version.
    subscription_id = 'subscription_id_example' # str | Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

    try:
        api_response = api_instance.dedicated_hosts_list_by_host_group(resource_group_name, host_group_name, api_version, subscription_id)
        print("The response of DedicatedHostApi->dedicated_hosts_list_by_host_group:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DedicatedHostApi->dedicated_hosts_list_by_host_group: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| The name of the resource group. | 
 **host_group_name** | **str**| The name of the dedicated host group. | 
 **api_version** | **str**| Client Api Version. | 
 **subscription_id** | **str**| Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 

### Return type

[**DedicatedHostListResult**](DedicatedHostListResult.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

