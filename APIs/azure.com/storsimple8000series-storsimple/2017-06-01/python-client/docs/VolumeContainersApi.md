# openapi_client.VolumeContainersApi

All URIs are relative to *https://management.azure.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**volume_containers_create_or_update**](VolumeContainersApi.md#volume_containers_create_or_update) | **PUT** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.StorSimple/managers/{managerName}/devices/{deviceName}/volumeContainers/{volumeContainerName} | 
[**volume_containers_delete**](VolumeContainersApi.md#volume_containers_delete) | **DELETE** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.StorSimple/managers/{managerName}/devices/{deviceName}/volumeContainers/{volumeContainerName} | 
[**volume_containers_get**](VolumeContainersApi.md#volume_containers_get) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.StorSimple/managers/{managerName}/devices/{deviceName}/volumeContainers/{volumeContainerName} | 
[**volume_containers_list_by_device**](VolumeContainersApi.md#volume_containers_list_by_device) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.StorSimple/managers/{managerName}/devices/{deviceName}/volumeContainers | 
[**volume_containers_list_metric_definition**](VolumeContainersApi.md#volume_containers_list_metric_definition) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.StorSimple/managers/{managerName}/devices/{deviceName}/volumeContainers/{volumeContainerName}/metricsDefinitions | 
[**volume_containers_list_metrics**](VolumeContainersApi.md#volume_containers_list_metrics) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.StorSimple/managers/{managerName}/devices/{deviceName}/volumeContainers/{volumeContainerName}/metrics | 


# **volume_containers_create_or_update**
> VolumeContainer volume_containers_create_or_update(device_name, volume_container_name, subscription_id, resource_group_name, manager_name, api_version, parameters)



Creates or updates the volume container.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.volume_container import VolumeContainer
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
    api_instance = openapi_client.VolumeContainersApi(api_client)
    device_name = 'device_name_example' # str | The device name
    volume_container_name = 'volume_container_name_example' # str | The name of the volume container.
    subscription_id = 'subscription_id_example' # str | The subscription id
    resource_group_name = 'resource_group_name_example' # str | The resource group name
    manager_name = 'manager_name_example' # str | The manager name
    api_version = 'api_version_example' # str | The api version
    parameters = openapi_client.VolumeContainer() # VolumeContainer | The volume container to be added or updated.

    try:
        api_response = api_instance.volume_containers_create_or_update(device_name, volume_container_name, subscription_id, resource_group_name, manager_name, api_version, parameters)
        print("The response of VolumeContainersApi->volume_containers_create_or_update:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling VolumeContainersApi->volume_containers_create_or_update: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **device_name** | **str**| The device name | 
 **volume_container_name** | **str**| The name of the volume container. | 
 **subscription_id** | **str**| The subscription id | 
 **resource_group_name** | **str**| The resource group name | 
 **manager_name** | **str**| The manager name | 
 **api_version** | **str**| The api version | 
 **parameters** | [**VolumeContainer**](VolumeContainer.md)| The volume container to be added or updated. | 

### Return type

[**VolumeContainer**](VolumeContainer.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successfully created or updated the Volume Container. |  -  |
**202** | Accepted the request to create or update the Volume Container |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **volume_containers_delete**
> volume_containers_delete(device_name, volume_container_name, subscription_id, resource_group_name, manager_name, api_version)



Deletes the volume container.

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
    api_instance = openapi_client.VolumeContainersApi(api_client)
    device_name = 'device_name_example' # str | The device name
    volume_container_name = 'volume_container_name_example' # str | The name of the volume container.
    subscription_id = 'subscription_id_example' # str | The subscription id
    resource_group_name = 'resource_group_name_example' # str | The resource group name
    manager_name = 'manager_name_example' # str | The manager name
    api_version = 'api_version_example' # str | The api version

    try:
        api_instance.volume_containers_delete(device_name, volume_container_name, subscription_id, resource_group_name, manager_name, api_version)
    except Exception as e:
        print("Exception when calling VolumeContainersApi->volume_containers_delete: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **device_name** | **str**| The device name | 
 **volume_container_name** | **str**| The name of the volume container. | 
 **subscription_id** | **str**| The subscription id | 
 **resource_group_name** | **str**| The resource group name | 
 **manager_name** | **str**| The manager name | 
 **api_version** | **str**| The api version | 

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
**202** | Accepted the request to delete the Volume Container. |  -  |
**204** | Successfully deleted Volume Container. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **volume_containers_get**
> VolumeContainer volume_containers_get(device_name, volume_container_name, subscription_id, resource_group_name, manager_name, api_version)



Gets the properties of the specified volume container name.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.volume_container import VolumeContainer
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
    api_instance = openapi_client.VolumeContainersApi(api_client)
    device_name = 'device_name_example' # str | The device name
    volume_container_name = 'volume_container_name_example' # str | The name of the volume container.
    subscription_id = 'subscription_id_example' # str | The subscription id
    resource_group_name = 'resource_group_name_example' # str | The resource group name
    manager_name = 'manager_name_example' # str | The manager name
    api_version = 'api_version_example' # str | The api version

    try:
        api_response = api_instance.volume_containers_get(device_name, volume_container_name, subscription_id, resource_group_name, manager_name, api_version)
        print("The response of VolumeContainersApi->volume_containers_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling VolumeContainersApi->volume_containers_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **device_name** | **str**| The device name | 
 **volume_container_name** | **str**| The name of the volume container. | 
 **subscription_id** | **str**| The subscription id | 
 **resource_group_name** | **str**| The resource group name | 
 **manager_name** | **str**| The manager name | 
 **api_version** | **str**| The api version | 

### Return type

[**VolumeContainer**](VolumeContainer.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The VolumeContainer. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **volume_containers_list_by_device**
> VolumeContainerList volume_containers_list_by_device(device_name, subscription_id, resource_group_name, manager_name, api_version)



Gets all the volume containers in a device.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.volume_container_list import VolumeContainerList
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
    api_instance = openapi_client.VolumeContainersApi(api_client)
    device_name = 'device_name_example' # str | The device name
    subscription_id = 'subscription_id_example' # str | The subscription id
    resource_group_name = 'resource_group_name_example' # str | The resource group name
    manager_name = 'manager_name_example' # str | The manager name
    api_version = 'api_version_example' # str | The api version

    try:
        api_response = api_instance.volume_containers_list_by_device(device_name, subscription_id, resource_group_name, manager_name, api_version)
        print("The response of VolumeContainersApi->volume_containers_list_by_device:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling VolumeContainersApi->volume_containers_list_by_device: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **device_name** | **str**| The device name | 
 **subscription_id** | **str**| The subscription id | 
 **resource_group_name** | **str**| The resource group name | 
 **manager_name** | **str**| The manager name | 
 **api_version** | **str**| The api version | 

### Return type

[**VolumeContainerList**](VolumeContainerList.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The VolumeContainer List |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **volume_containers_list_metric_definition**
> MetricDefinitionList volume_containers_list_metric_definition(device_name, volume_container_name, subscription_id, resource_group_name, manager_name, api_version)



Gets the metric definitions for the specified volume container.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.metric_definition_list import MetricDefinitionList
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
    api_instance = openapi_client.VolumeContainersApi(api_client)
    device_name = 'device_name_example' # str | The device name
    volume_container_name = 'volume_container_name_example' # str | The volume container name.
    subscription_id = 'subscription_id_example' # str | The subscription id
    resource_group_name = 'resource_group_name_example' # str | The resource group name
    manager_name = 'manager_name_example' # str | The manager name
    api_version = 'api_version_example' # str | The api version

    try:
        api_response = api_instance.volume_containers_list_metric_definition(device_name, volume_container_name, subscription_id, resource_group_name, manager_name, api_version)
        print("The response of VolumeContainersApi->volume_containers_list_metric_definition:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling VolumeContainersApi->volume_containers_list_metric_definition: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **device_name** | **str**| The device name | 
 **volume_container_name** | **str**| The volume container name. | 
 **subscription_id** | **str**| The subscription id | 
 **resource_group_name** | **str**| The resource group name | 
 **manager_name** | **str**| The manager name | 
 **api_version** | **str**| The api version | 

### Return type

[**MetricDefinitionList**](MetricDefinitionList.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The collection of metric definitions. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **volume_containers_list_metrics**
> MetricList volume_containers_list_metrics(device_name, volume_container_name, subscription_id, resource_group_name, manager_name, api_version, filter)



Gets the metrics for the specified volume container.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.metric_list import MetricList
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
    api_instance = openapi_client.VolumeContainersApi(api_client)
    device_name = 'device_name_example' # str | The device name
    volume_container_name = 'volume_container_name_example' # str | The volume container name.
    subscription_id = 'subscription_id_example' # str | The subscription id
    resource_group_name = 'resource_group_name_example' # str | The resource group name
    manager_name = 'manager_name_example' # str | The manager name
    api_version = 'api_version_example' # str | The api version
    filter = 'filter_example' # str | OData Filter options

    try:
        api_response = api_instance.volume_containers_list_metrics(device_name, volume_container_name, subscription_id, resource_group_name, manager_name, api_version, filter)
        print("The response of VolumeContainersApi->volume_containers_list_metrics:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling VolumeContainersApi->volume_containers_list_metrics: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **device_name** | **str**| The device name | 
 **volume_container_name** | **str**| The volume container name. | 
 **subscription_id** | **str**| The subscription id | 
 **resource_group_name** | **str**| The resource group name | 
 **manager_name** | **str**| The manager name | 
 **api_version** | **str**| The api version | 
 **filter** | **str**| OData Filter options | 

### Return type

[**MetricList**](MetricList.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The collection of metrics. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

