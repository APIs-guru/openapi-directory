# openapi_client.VolumesApi

All URIs are relative to *https://management.azure.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**volumes_create_or_update**](VolumesApi.md#volumes_create_or_update) | **PUT** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.StorSimple/managers/{managerName}/devices/{deviceName}/volumeContainers/{volumeContainerName}/volumes/{volumeName} | 
[**volumes_delete**](VolumesApi.md#volumes_delete) | **DELETE** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.StorSimple/managers/{managerName}/devices/{deviceName}/volumeContainers/{volumeContainerName}/volumes/{volumeName} | 
[**volumes_get**](VolumesApi.md#volumes_get) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.StorSimple/managers/{managerName}/devices/{deviceName}/volumeContainers/{volumeContainerName}/volumes/{volumeName} | 
[**volumes_list_by_device**](VolumesApi.md#volumes_list_by_device) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.StorSimple/managers/{managerName}/devices/{deviceName}/volumes | 
[**volumes_list_by_volume_container**](VolumesApi.md#volumes_list_by_volume_container) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.StorSimple/managers/{managerName}/devices/{deviceName}/volumeContainers/{volumeContainerName}/volumes | 
[**volumes_list_metric_definition**](VolumesApi.md#volumes_list_metric_definition) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.StorSimple/managers/{managerName}/devices/{deviceName}/volumeContainers/{volumeContainerName}/volumes/{volumeName}/metricsDefinitions | 
[**volumes_list_metrics**](VolumesApi.md#volumes_list_metrics) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.StorSimple/managers/{managerName}/devices/{deviceName}/volumeContainers/{volumeContainerName}/volumes/{volumeName}/metrics | 


# **volumes_create_or_update**
> Volume volumes_create_or_update(device_name, volume_container_name, volume_name, subscription_id, resource_group_name, manager_name, api_version, parameters)



Creates or updates the volume.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.volume import Volume
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
    api_instance = openapi_client.VolumesApi(api_client)
    device_name = 'device_name_example' # str | The device name
    volume_container_name = 'volume_container_name_example' # str | The volume container name.
    volume_name = 'volume_name_example' # str | The volume name.
    subscription_id = 'subscription_id_example' # str | The subscription id
    resource_group_name = 'resource_group_name_example' # str | The resource group name
    manager_name = 'manager_name_example' # str | The manager name
    api_version = 'api_version_example' # str | The api version
    parameters = openapi_client.Volume() # Volume | Volume to be created or updated.

    try:
        api_response = api_instance.volumes_create_or_update(device_name, volume_container_name, volume_name, subscription_id, resource_group_name, manager_name, api_version, parameters)
        print("The response of VolumesApi->volumes_create_or_update:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling VolumesApi->volumes_create_or_update: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **device_name** | **str**| The device name | 
 **volume_container_name** | **str**| The volume container name. | 
 **volume_name** | **str**| The volume name. | 
 **subscription_id** | **str**| The subscription id | 
 **resource_group_name** | **str**| The resource group name | 
 **manager_name** | **str**| The manager name | 
 **api_version** | **str**| The api version | 
 **parameters** | [**Volume**](Volume.md)| Volume to be created or updated. | 

### Return type

[**Volume**](Volume.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successfully created or updated the volume. |  -  |
**202** | Accepted the request to create or update the volume. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **volumes_delete**
> volumes_delete(device_name, volume_container_name, volume_name, subscription_id, resource_group_name, manager_name, api_version)



Deletes the volume.

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
    api_instance = openapi_client.VolumesApi(api_client)
    device_name = 'device_name_example' # str | The device name
    volume_container_name = 'volume_container_name_example' # str | The volume container name.
    volume_name = 'volume_name_example' # str | The volume name.
    subscription_id = 'subscription_id_example' # str | The subscription id
    resource_group_name = 'resource_group_name_example' # str | The resource group name
    manager_name = 'manager_name_example' # str | The manager name
    api_version = 'api_version_example' # str | The api version

    try:
        api_instance.volumes_delete(device_name, volume_container_name, volume_name, subscription_id, resource_group_name, manager_name, api_version)
    except Exception as e:
        print("Exception when calling VolumesApi->volumes_delete: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **device_name** | **str**| The device name | 
 **volume_container_name** | **str**| The volume container name. | 
 **volume_name** | **str**| The volume name. | 
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
**202** | Accepted the request to create or update the volume. |  -  |
**204** | Successfully deleted the volume. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **volumes_get**
> Volume volumes_get(device_name, volume_container_name, volume_name, subscription_id, resource_group_name, manager_name, api_version)



Returns the properties of the specified volume name.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.volume import Volume
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
    api_instance = openapi_client.VolumesApi(api_client)
    device_name = 'device_name_example' # str | The device name
    volume_container_name = 'volume_container_name_example' # str | The volume container name.
    volume_name = 'volume_name_example' # str | The volume name.
    subscription_id = 'subscription_id_example' # str | The subscription id
    resource_group_name = 'resource_group_name_example' # str | The resource group name
    manager_name = 'manager_name_example' # str | The manager name
    api_version = 'api_version_example' # str | The api version

    try:
        api_response = api_instance.volumes_get(device_name, volume_container_name, volume_name, subscription_id, resource_group_name, manager_name, api_version)
        print("The response of VolumesApi->volumes_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling VolumesApi->volumes_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **device_name** | **str**| The device name | 
 **volume_container_name** | **str**| The volume container name. | 
 **volume_name** | **str**| The volume name. | 
 **subscription_id** | **str**| The subscription id | 
 **resource_group_name** | **str**| The resource group name | 
 **manager_name** | **str**| The manager name | 
 **api_version** | **str**| The api version | 

### Return type

[**Volume**](Volume.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The volume. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **volumes_list_by_device**
> VolumeList volumes_list_by_device(device_name, subscription_id, resource_group_name, manager_name, api_version)



Retrieves all the volumes in a device.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.volume_list import VolumeList
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
    api_instance = openapi_client.VolumesApi(api_client)
    device_name = 'device_name_example' # str | The device name
    subscription_id = 'subscription_id_example' # str | The subscription id
    resource_group_name = 'resource_group_name_example' # str | The resource group name
    manager_name = 'manager_name_example' # str | The manager name
    api_version = 'api_version_example' # str | The api version

    try:
        api_response = api_instance.volumes_list_by_device(device_name, subscription_id, resource_group_name, manager_name, api_version)
        print("The response of VolumesApi->volumes_list_by_device:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling VolumesApi->volumes_list_by_device: %s\n" % e)
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

[**VolumeList**](VolumeList.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The collection of volumes. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **volumes_list_by_volume_container**
> VolumeList volumes_list_by_volume_container(device_name, volume_container_name, subscription_id, resource_group_name, manager_name, api_version)



Retrieves all the volumes in a volume container.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.volume_list import VolumeList
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
    api_instance = openapi_client.VolumesApi(api_client)
    device_name = 'device_name_example' # str | The device name
    volume_container_name = 'volume_container_name_example' # str | The volume container name.
    subscription_id = 'subscription_id_example' # str | The subscription id
    resource_group_name = 'resource_group_name_example' # str | The resource group name
    manager_name = 'manager_name_example' # str | The manager name
    api_version = 'api_version_example' # str | The api version

    try:
        api_response = api_instance.volumes_list_by_volume_container(device_name, volume_container_name, subscription_id, resource_group_name, manager_name, api_version)
        print("The response of VolumesApi->volumes_list_by_volume_container:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling VolumesApi->volumes_list_by_volume_container: %s\n" % e)
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

[**VolumeList**](VolumeList.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The collection of volumes. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **volumes_list_metric_definition**
> MetricDefinitionList volumes_list_metric_definition(device_name, volume_container_name, volume_name, subscription_id, resource_group_name, manager_name, api_version)



Gets the metric definitions for the specified volume.

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
    api_instance = openapi_client.VolumesApi(api_client)
    device_name = 'device_name_example' # str | The device name
    volume_container_name = 'volume_container_name_example' # str | The volume container name.
    volume_name = 'volume_name_example' # str | The volume name.
    subscription_id = 'subscription_id_example' # str | The subscription id
    resource_group_name = 'resource_group_name_example' # str | The resource group name
    manager_name = 'manager_name_example' # str | The manager name
    api_version = 'api_version_example' # str | The api version

    try:
        api_response = api_instance.volumes_list_metric_definition(device_name, volume_container_name, volume_name, subscription_id, resource_group_name, manager_name, api_version)
        print("The response of VolumesApi->volumes_list_metric_definition:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling VolumesApi->volumes_list_metric_definition: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **device_name** | **str**| The device name | 
 **volume_container_name** | **str**| The volume container name. | 
 **volume_name** | **str**| The volume name. | 
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

# **volumes_list_metrics**
> MetricList volumes_list_metrics(device_name, volume_container_name, volume_name, subscription_id, resource_group_name, manager_name, api_version, filter)



Gets the metrics for the specified volume.

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
    api_instance = openapi_client.VolumesApi(api_client)
    device_name = 'device_name_example' # str | The device name
    volume_container_name = 'volume_container_name_example' # str | The volume container name.
    volume_name = 'volume_name_example' # str | The volume name.
    subscription_id = 'subscription_id_example' # str | The subscription id
    resource_group_name = 'resource_group_name_example' # str | The resource group name
    manager_name = 'manager_name_example' # str | The manager name
    api_version = 'api_version_example' # str | The api version
    filter = 'filter_example' # str | OData Filter options

    try:
        api_response = api_instance.volumes_list_metrics(device_name, volume_container_name, volume_name, subscription_id, resource_group_name, manager_name, api_version, filter)
        print("The response of VolumesApi->volumes_list_metrics:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling VolumesApi->volumes_list_metrics: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **device_name** | **str**| The device name | 
 **volume_container_name** | **str**| The volume container name. | 
 **volume_name** | **str**| The volume name. | 
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
**200** | The collection of metrics |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

