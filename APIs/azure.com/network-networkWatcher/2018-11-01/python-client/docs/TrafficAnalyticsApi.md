# openapi_client.TrafficAnalyticsApi

All URIs are relative to *https://management.azure.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**network_watchers_get_flow_log_status_0**](TrafficAnalyticsApi.md#network_watchers_get_flow_log_status_0) | **POST** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/networkWatchers/{networkWatcherName}/queryFlowLogStatus | 
[**network_watchers_set_flow_log_configuration_0**](TrafficAnalyticsApi.md#network_watchers_set_flow_log_configuration_0) | **POST** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/networkWatchers/{networkWatcherName}/configureFlowLog | 


# **network_watchers_get_flow_log_status_0**
> FlowLogInformation network_watchers_get_flow_log_status_0(resource_group_name, network_watcher_name, api_version, subscription_id, parameters)



Queries status of flow log and traffic analytics (optional) on a specified resource.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.flow_log_information import FlowLogInformation
from openapi_client.models.flow_log_status_parameters import FlowLogStatusParameters
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
    api_instance = openapi_client.TrafficAnalyticsApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | The name of the network watcher resource group.
    network_watcher_name = 'network_watcher_name_example' # str | The name of the network watcher resource.
    api_version = 'api_version_example' # str | Client API version.
    subscription_id = 'subscription_id_example' # str | The subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
    parameters = openapi_client.FlowLogStatusParameters() # FlowLogStatusParameters | Parameters that define a resource to query flow log and traffic analytics (optional)  status.

    try:
        api_response = api_instance.network_watchers_get_flow_log_status_0(resource_group_name, network_watcher_name, api_version, subscription_id, parameters)
        print("The response of TrafficAnalyticsApi->network_watchers_get_flow_log_status_0:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling TrafficAnalyticsApi->network_watchers_get_flow_log_status_0: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| The name of the network watcher resource group. | 
 **network_watcher_name** | **str**| The name of the network watcher resource. | 
 **api_version** | **str**| Client API version. | 
 **subscription_id** | **str**| The subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 
 **parameters** | [**FlowLogStatusParameters**](FlowLogStatusParameters.md)| Parameters that define a resource to query flow log and traffic analytics (optional)  status. | 

### Return type

[**FlowLogInformation**](FlowLogInformation.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful request for query flow log and traffic analytics (optional) status. |  -  |
**202** | Accepted and the operation will complete asynchronously. |  -  |
**0** | Error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **network_watchers_set_flow_log_configuration_0**
> FlowLogInformation network_watchers_set_flow_log_configuration_0(resource_group_name, network_watcher_name, api_version, subscription_id, parameters)



Configures flow log  and traffic analytics (optional) on a specified resource.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.flow_log_information import FlowLogInformation
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
    api_instance = openapi_client.TrafficAnalyticsApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | The name of the network watcher resource group.
    network_watcher_name = 'network_watcher_name_example' # str | The name of the network watcher resource.
    api_version = 'api_version_example' # str | Client API version.
    subscription_id = 'subscription_id_example' # str | The subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
    parameters = openapi_client.FlowLogInformation() # FlowLogInformation | Parameters that define the configuration of flow log.

    try:
        api_response = api_instance.network_watchers_set_flow_log_configuration_0(resource_group_name, network_watcher_name, api_version, subscription_id, parameters)
        print("The response of TrafficAnalyticsApi->network_watchers_set_flow_log_configuration_0:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling TrafficAnalyticsApi->network_watchers_set_flow_log_configuration_0: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| The name of the network watcher resource group. | 
 **network_watcher_name** | **str**| The name of the network watcher resource. | 
 **api_version** | **str**| Client API version. | 
 **subscription_id** | **str**| The subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 
 **parameters** | [**FlowLogInformation**](FlowLogInformation.md)| Parameters that define the configuration of flow log. | 

### Return type

[**FlowLogInformation**](FlowLogInformation.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful request for setting flow log  and traffic analytics (optional) configuration. |  -  |
**202** | Accepted and the operation will complete asynchronously. |  -  |
**0** | Error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

