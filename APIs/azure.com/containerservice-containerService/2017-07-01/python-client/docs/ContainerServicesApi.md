# openapi_client.ContainerServicesApi

All URIs are relative to *https://management.azure.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**container_services_list**](ContainerServicesApi.md#container_services_list) | **GET** /subscriptions/{subscriptionId}/providers/Microsoft.ContainerService/containerServices | Gets a list of container services in the specified subscription.
[**container_services_list_by_resource_group**](ContainerServicesApi.md#container_services_list_by_resource_group) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ContainerService/containerServices | Gets a list of container services in the specified resource group.


# **container_services_list**
> ContainerServiceListResult container_services_list(api_version, subscription_id)

Gets a list of container services in the specified subscription.

Gets a list of container services in the specified subscription. The operation returns properties of each container service including state, orchestrator, number of masters and agents, and FQDNs of masters and agents.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.container_service_list_result import ContainerServiceListResult
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
    api_instance = openapi_client.ContainerServicesApi(api_client)
    api_version = 'api_version_example' # str | Client Api Version.
    subscription_id = 'subscription_id_example' # str | Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

    try:
        # Gets a list of container services in the specified subscription.
        api_response = api_instance.container_services_list(api_version, subscription_id)
        print("The response of ContainerServicesApi->container_services_list:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ContainerServicesApi->container_services_list: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_version** | **str**| Client Api Version. | 
 **subscription_id** | **str**| Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 

### Return type

[**ContainerServiceListResult**](ContainerServiceListResult.md)

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

# **container_services_list_by_resource_group**
> ContainerServiceListResult container_services_list_by_resource_group(resource_group_name, api_version, subscription_id)

Gets a list of container services in the specified resource group.

Gets a list of container services in the specified subscription and resource group. The operation returns properties of each container service including state, orchestrator, number of masters and agents, and FQDNs of masters and agents.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.container_service_list_result import ContainerServiceListResult
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
    api_instance = openapi_client.ContainerServicesApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group.
    api_version = 'api_version_example' # str | Client Api Version.
    subscription_id = 'subscription_id_example' # str | Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

    try:
        # Gets a list of container services in the specified resource group.
        api_response = api_instance.container_services_list_by_resource_group(resource_group_name, api_version, subscription_id)
        print("The response of ContainerServicesApi->container_services_list_by_resource_group:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ContainerServicesApi->container_services_list_by_resource_group: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| The name of the resource group. | 
 **api_version** | **str**| Client Api Version. | 
 **subscription_id** | **str**| Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 

### Return type

[**ContainerServiceListResult**](ContainerServiceListResult.md)

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

