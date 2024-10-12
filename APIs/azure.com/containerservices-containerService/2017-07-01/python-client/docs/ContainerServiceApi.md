# openapi_client.ContainerServiceApi

All URIs are relative to *https://management.azure.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**container_services_create_or_update**](ContainerServiceApi.md#container_services_create_or_update) | **PUT** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ContainerService/containerServices/{containerServiceName} | Creates or updates a container service.
[**container_services_delete**](ContainerServiceApi.md#container_services_delete) | **DELETE** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ContainerService/containerServices/{containerServiceName} | Deletes the specified container service.
[**container_services_get**](ContainerServiceApi.md#container_services_get) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ContainerService/containerServices/{containerServiceName} | Gets the properties of the specified container service.


# **container_services_create_or_update**
> ContainerService container_services_create_or_update(resource_group_name, container_service_name, api_version, subscription_id, parameters)

Creates or updates a container service.

Creates or updates a container service with the specified configuration of orchestrator, masters, and agents.

### Example

* OAuth Authentication (azure_auth):

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

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.ContainerServiceApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group.
    container_service_name = 'container_service_name_example' # str | The name of the container service in the specified subscription and resource group.
    api_version = 'api_version_example' # str | Client Api Version.
    subscription_id = 'subscription_id_example' # str | Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
    parameters = openapi_client.ContainerService() # ContainerService | Parameters supplied to the Create or Update a Container Service operation.

    try:
        # Creates or updates a container service.
        api_response = api_instance.container_services_create_or_update(resource_group_name, container_service_name, api_version, subscription_id, parameters)
        print("The response of ContainerServiceApi->container_services_create_or_update:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ContainerServiceApi->container_services_create_or_update: %s\n" % e)
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

[azure_auth](../README.md#azure_auth)

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

# **container_services_delete**
> container_services_delete(resource_group_name, container_service_name, api_version, subscription_id)

Deletes the specified container service.

Deletes the specified container service in the specified subscription and resource group. The operation does not delete other resources created as part of creating a container service, including storage accounts, VMs, and availability sets. All the other resources created with the container service are part of the same resource group and can be deleted individually.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
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
    api_instance = openapi_client.ContainerServiceApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group.
    container_service_name = 'container_service_name_example' # str | The name of the container service in the specified subscription and resource group.
    api_version = 'api_version_example' # str | Client Api Version.
    subscription_id = 'subscription_id_example' # str | Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

    try:
        # Deletes the specified container service.
        api_instance.container_services_delete(resource_group_name, container_service_name, api_version, subscription_id)
    except Exception as e:
        print("Exception when calling ContainerServiceApi->container_services_delete: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| The name of the resource group. | 
 **container_service_name** | **str**| The name of the container service in the specified subscription and resource group. | 
 **api_version** | **str**| Client Api Version. | 
 **subscription_id** | **str**| Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 

### Return type

void (empty response body)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**202** | Accepted |  -  |
**204** | Not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **container_services_get**
> ContainerService container_services_get(resource_group_name, container_service_name, api_version, subscription_id)

Gets the properties of the specified container service.

Gets the properties of the specified container service in the specified subscription and resource group. The operation returns the properties including state, orchestrator, number of masters and agents, and FQDNs of masters and agents. 

### Example

* OAuth Authentication (azure_auth):

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

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.ContainerServiceApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group.
    container_service_name = 'container_service_name_example' # str | The name of the container service in the specified subscription and resource group.
    api_version = 'api_version_example' # str | Client Api Version.
    subscription_id = 'subscription_id_example' # str | Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

    try:
        # Gets the properties of the specified container service.
        api_response = api_instance.container_services_get(resource_group_name, container_service_name, api_version, subscription_id)
        print("The response of ContainerServiceApi->container_services_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ContainerServiceApi->container_services_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| The name of the resource group. | 
 **container_service_name** | **str**| The name of the container service in the specified subscription and resource group. | 
 **api_version** | **str**| Client Api Version. | 
 **subscription_id** | **str**| Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 

### Return type

[**ContainerService**](ContainerService.md)

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

