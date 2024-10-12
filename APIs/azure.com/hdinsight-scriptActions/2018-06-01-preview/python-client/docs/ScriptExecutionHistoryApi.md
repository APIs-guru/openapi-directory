# openapi_client.ScriptExecutionHistoryApi

All URIs are relative to *https://management.azure.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**script_actions_get_execution_detail**](ScriptExecutionHistoryApi.md#script_actions_get_execution_detail) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.HDInsight/clusters/{clusterName}/scriptExecutionHistory/{scriptExecutionId} | 
[**script_execution_history_list_by_cluster**](ScriptExecutionHistoryApi.md#script_execution_history_list_by_cluster) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.HDInsight/clusters/{clusterName}/scriptExecutionHistory | 


# **script_actions_get_execution_detail**
> ScriptActionsGetExecutionDetail200Response script_actions_get_execution_detail(subscription_id, resource_group_name, cluster_name, script_execution_id, api_version)



Gets the script execution detail for the given script execution ID.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.script_actions_get_execution_detail200_response import ScriptActionsGetExecutionDetail200Response
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
    api_instance = openapi_client.ScriptExecutionHistoryApi(api_client)
    subscription_id = 'subscription_id_example' # str | The subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group.
    cluster_name = 'cluster_name_example' # str | The name of the cluster.
    script_execution_id = 'script_execution_id_example' # str | The script execution Id
    api_version = 'api_version_example' # str | The HDInsight client API Version.

    try:
        api_response = api_instance.script_actions_get_execution_detail(subscription_id, resource_group_name, cluster_name, script_execution_id, api_version)
        print("The response of ScriptExecutionHistoryApi->script_actions_get_execution_detail:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ScriptExecutionHistoryApi->script_actions_get_execution_detail: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| The subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 
 **resource_group_name** | **str**| The name of the resource group. | 
 **cluster_name** | **str**| The name of the cluster. | 
 **script_execution_id** | **str**| The script execution Id | 
 **api_version** | **str**| The HDInsight client API Version. | 

### Return type

[**ScriptActionsGetExecutionDetail200Response**](ScriptActionsGetExecutionDetail200Response.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK response definition. |  -  |
**0** | Error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **script_execution_history_list_by_cluster**
> ScriptActionExecutionHistoryList script_execution_history_list_by_cluster(subscription_id, resource_group_name, cluster_name, api_version)



Lists all scripts' execution history for the specified cluster.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.script_action_execution_history_list import ScriptActionExecutionHistoryList
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
    api_instance = openapi_client.ScriptExecutionHistoryApi(api_client)
    subscription_id = 'subscription_id_example' # str | The subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group.
    cluster_name = 'cluster_name_example' # str | The name of the cluster.
    api_version = 'api_version_example' # str | The HDInsight client API Version.

    try:
        api_response = api_instance.script_execution_history_list_by_cluster(subscription_id, resource_group_name, cluster_name, api_version)
        print("The response of ScriptExecutionHistoryApi->script_execution_history_list_by_cluster:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ScriptExecutionHistoryApi->script_execution_history_list_by_cluster: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| The subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 
 **resource_group_name** | **str**| The name of the resource group. | 
 **cluster_name** | **str**| The name of the cluster. | 
 **api_version** | **str**| The HDInsight client API Version. | 

### Return type

[**ScriptActionExecutionHistoryList**](ScriptActionExecutionHistoryList.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK response definition. |  -  |
**0** | Error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

