# openapi_client.ContainerServicesApi

All URIs are relative to *https://management.azure.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**container_services_create_or_update**](ContainerServicesApi.md#container_services_create_or_update) | **PUT** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ContainerService/containerServices/{containerServiceName} | Creates or updates a container service.
[**container_services_list**](ContainerServicesApi.md#container_services_list) | **GET** /subscriptions/{subscriptionId}/providers/Microsoft.ContainerService/containerServices | Gets a list of container services in the specified subscription.


# **container_services_create_or_update**
> ContainerService container_services_create_or_update(resource_group_name, container_service_name, api_version, subscription_id, parameters)

Creates or updates a container service.

Creates or updates a container service with the specified configuration of orchestrator, masters, and agents.

### Example


```python
import openapi_client
from openapi_client.models.container_service import ContainerService
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
    api_instance = openapi_client.ContainerServicesApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group.
    container_service_name = 'container_service_name_example' # str | The name of the container service in the specified subscription and resource group.
    api_version = 'api_version_example' # str | Client Api Version.
    subscription_id = 'subscription_id_example' # str | Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
    parameters = openapi_client.ContainerService() # ContainerService | Parameters supplied to the Create or Update a Container Service operation.

    try:
        # Creates or updates a container service.
        api_response = api_instance.container_services_create_or_update(resource_group_name, container_service_name, api_version, subscription_id, parameters)
        print("The response of ContainerServicesApi->container_services_create_or_update:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ContainerServicesApi->container_services_create_or_update: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| The name of the resource group. | 
 **container_service_name** | **str**| The name of the container service in the specified subscription and resource group. | 
 **api_version** | **str**| Client Api Version. | 
 **subscription_id** | **str**| Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 
 **parameters** | [**ContainerService**](ContainerService.md)| Parameters supplied to the Create or Update a Container Service operation. | 

### Return type

[**ContainerService**](ContainerService.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**201** | Created |  -  |
**202** | Accepted |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **container_services_list**
> ContainerServiceListResult container_services_list(api_version, subscription_id)

Gets a list of container services in the specified subscription.

Gets a list of container services in the specified subscription. The operation returns properties of each container service including state, orchestrator, number of masters and agents, and FQDNs of masters and agents.

### Example


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

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

