# openapi_client.IscsiDisksApi

All URIs are relative to *https://management.azure.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**iscsi_disks_create_or_update**](IscsiDisksApi.md#iscsi_disks_create_or_update) | **PUT** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.StorSimple/managers/{managerName}/devices/{deviceName}/iscsiservers/{iscsiServerName}/disks/{diskName} | 
[**iscsi_disks_delete**](IscsiDisksApi.md#iscsi_disks_delete) | **DELETE** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.StorSimple/managers/{managerName}/devices/{deviceName}/iscsiservers/{iscsiServerName}/disks/{diskName} | 
[**iscsi_disks_get**](IscsiDisksApi.md#iscsi_disks_get) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.StorSimple/managers/{managerName}/devices/{deviceName}/iscsiservers/{iscsiServerName}/disks/{diskName} | 
[**iscsi_disks_list_by_device**](IscsiDisksApi.md#iscsi_disks_list_by_device) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.StorSimple/managers/{managerName}/devices/{deviceName}/disks | 
[**iscsi_disks_list_by_iscsi_server**](IscsiDisksApi.md#iscsi_disks_list_by_iscsi_server) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.StorSimple/managers/{managerName}/devices/{deviceName}/iscsiservers/{iscsiServerName}/disks | 
[**iscsi_disks_list_metric_definition**](IscsiDisksApi.md#iscsi_disks_list_metric_definition) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.StorSimple/managers/{managerName}/devices/{deviceName}/iscsiservers/{iscsiServerName}/disks/{diskName}/metricsDefinitions | 
[**iscsi_disks_list_metrics**](IscsiDisksApi.md#iscsi_disks_list_metrics) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.StorSimple/managers/{managerName}/devices/{deviceName}/iscsiservers/{iscsiServerName}/disks/{diskName}/metrics | 


# **iscsi_disks_create_or_update**
> ISCSIDisk iscsi_disks_create_or_update(device_name, iscsi_server_name, disk_name, subscription_id, resource_group_name, manager_name, api_version, iscsi_disk)



Creates or updates the iSCSI disk.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.iscsi_disk import ISCSIDisk
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
    api_instance = openapi_client.IscsiDisksApi(api_client)
    device_name = 'device_name_example' # str | The device name.
    iscsi_server_name = 'iscsi_server_name_example' # str | The iSCSI server name.
    disk_name = 'disk_name_example' # str | The disk name.
    subscription_id = 'subscription_id_example' # str | The subscription id
    resource_group_name = 'resource_group_name_example' # str | The resource group name
    manager_name = 'manager_name_example' # str | The manager name
    api_version = 'api_version_example' # str | The api version
    iscsi_disk = openapi_client.ISCSIDisk() # ISCSIDisk | The iSCSI disk.

    try:
        api_response = api_instance.iscsi_disks_create_or_update(device_name, iscsi_server_name, disk_name, subscription_id, resource_group_name, manager_name, api_version, iscsi_disk)
        print("The response of IscsiDisksApi->iscsi_disks_create_or_update:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling IscsiDisksApi->iscsi_disks_create_or_update: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **device_name** | **str**| The device name. | 
 **iscsi_server_name** | **str**| The iSCSI server name. | 
 **disk_name** | **str**| The disk name. | 
 **subscription_id** | **str**| The subscription id | 
 **resource_group_name** | **str**| The resource group name | 
 **manager_name** | **str**| The manager name | 
 **api_version** | **str**| The api version | 
 **iscsi_disk** | [**ISCSIDisk**](ISCSIDisk.md)| The iSCSI disk. | 

### Return type

[**ISCSIDisk**](ISCSIDisk.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successfully created or updated the iSCSI disk. |  -  |
**202** | Accepted the request to create or update the iSCSI disk. |  -  |
**0** | Default Response. It will be deserialized as per the Error definition specified in the schema. Exception will be thrown. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **iscsi_disks_delete**
> iscsi_disks_delete(device_name, iscsi_server_name, disk_name, subscription_id, resource_group_name, manager_name, api_version)



Deletes the iSCSI disk.

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
    api_instance = openapi_client.IscsiDisksApi(api_client)
    device_name = 'device_name_example' # str | The device name.
    iscsi_server_name = 'iscsi_server_name_example' # str | The iSCSI server name.
    disk_name = 'disk_name_example' # str | The disk name.
    subscription_id = 'subscription_id_example' # str | The subscription id
    resource_group_name = 'resource_group_name_example' # str | The resource group name
    manager_name = 'manager_name_example' # str | The manager name
    api_version = 'api_version_example' # str | The api version

    try:
        api_instance.iscsi_disks_delete(device_name, iscsi_server_name, disk_name, subscription_id, resource_group_name, manager_name, api_version)
    except Exception as e:
        print("Exception when calling IscsiDisksApi->iscsi_disks_delete: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **device_name** | **str**| The device name. | 
 **iscsi_server_name** | **str**| The iSCSI server name. | 
 **disk_name** | **str**| The disk name. | 
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
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**202** | Accepted the request to delete the iSCSI disk. |  -  |
**204** | Successfully deleted the iSCSI disk. |  -  |
**0** | Default Response. It will be deserialized as per the Error definition specified in the schema. Exception will be thrown. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **iscsi_disks_get**
> ISCSIDisk iscsi_disks_get(device_name, iscsi_server_name, disk_name, subscription_id, resource_group_name, manager_name, api_version)



Returns the properties of the specified iSCSI disk name.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.iscsi_disk import ISCSIDisk
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
    api_instance = openapi_client.IscsiDisksApi(api_client)
    device_name = 'device_name_example' # str | The device name.
    iscsi_server_name = 'iscsi_server_name_example' # str | The iSCSI server name.
    disk_name = 'disk_name_example' # str | The disk name.
    subscription_id = 'subscription_id_example' # str | The subscription id
    resource_group_name = 'resource_group_name_example' # str | The resource group name
    manager_name = 'manager_name_example' # str | The manager name
    api_version = 'api_version_example' # str | The api version

    try:
        api_response = api_instance.iscsi_disks_get(device_name, iscsi_server_name, disk_name, subscription_id, resource_group_name, manager_name, api_version)
        print("The response of IscsiDisksApi->iscsi_disks_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling IscsiDisksApi->iscsi_disks_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **device_name** | **str**| The device name. | 
 **iscsi_server_name** | **str**| The iSCSI server name. | 
 **disk_name** | **str**| The disk name. | 
 **subscription_id** | **str**| The subscription id | 
 **resource_group_name** | **str**| The resource group name | 
 **manager_name** | **str**| The manager name | 
 **api_version** | **str**| The api version | 

### Return type

[**ISCSIDisk**](ISCSIDisk.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The iSCSI disk. |  -  |
**0** | Default Response. It will be deserialized as per the Error definition specified in the schema. Exception will be thrown. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **iscsi_disks_list_by_device**
> ISCSIDiskList iscsi_disks_list_by_device(device_name, subscription_id, resource_group_name, manager_name, api_version)



Retrieves all the iSCSI disks in a device.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.iscsi_disk_list import ISCSIDiskList
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
    api_instance = openapi_client.IscsiDisksApi(api_client)
    device_name = 'device_name_example' # str | The device name.
    subscription_id = 'subscription_id_example' # str | The subscription id
    resource_group_name = 'resource_group_name_example' # str | The resource group name
    manager_name = 'manager_name_example' # str | The manager name
    api_version = 'api_version_example' # str | The api version

    try:
        api_response = api_instance.iscsi_disks_list_by_device(device_name, subscription_id, resource_group_name, manager_name, api_version)
        print("The response of IscsiDisksApi->iscsi_disks_list_by_device:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling IscsiDisksApi->iscsi_disks_list_by_device: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **device_name** | **str**| The device name. | 
 **subscription_id** | **str**| The subscription id | 
 **resource_group_name** | **str**| The resource group name | 
 **manager_name** | **str**| The manager name | 
 **api_version** | **str**| The api version | 

### Return type

[**ISCSIDiskList**](ISCSIDiskList.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The collection of iSCSI disks. |  -  |
**0** | Default Response. It will be deserialized as per the Error definition specified in the schema. Exception will be thrown. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **iscsi_disks_list_by_iscsi_server**
> ISCSIDiskList iscsi_disks_list_by_iscsi_server(device_name, iscsi_server_name, subscription_id, resource_group_name, manager_name, api_version)



Retrieves all the disks in a iSCSI server.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.iscsi_disk_list import ISCSIDiskList
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
    api_instance = openapi_client.IscsiDisksApi(api_client)
    device_name = 'device_name_example' # str | The device name.
    iscsi_server_name = 'iscsi_server_name_example' # str | The iSCSI server name.
    subscription_id = 'subscription_id_example' # str | The subscription id
    resource_group_name = 'resource_group_name_example' # str | The resource group name
    manager_name = 'manager_name_example' # str | The manager name
    api_version = 'api_version_example' # str | The api version

    try:
        api_response = api_instance.iscsi_disks_list_by_iscsi_server(device_name, iscsi_server_name, subscription_id, resource_group_name, manager_name, api_version)
        print("The response of IscsiDisksApi->iscsi_disks_list_by_iscsi_server:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling IscsiDisksApi->iscsi_disks_list_by_iscsi_server: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **device_name** | **str**| The device name. | 
 **iscsi_server_name** | **str**| The iSCSI server name. | 
 **subscription_id** | **str**| The subscription id | 
 **resource_group_name** | **str**| The resource group name | 
 **manager_name** | **str**| The manager name | 
 **api_version** | **str**| The api version | 

### Return type

[**ISCSIDiskList**](ISCSIDiskList.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The collection of iSCSI disks. |  -  |
**0** | Default Response. It will be deserialized as per the Error definition specified in the schema. Exception will be thrown. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **iscsi_disks_list_metric_definition**
> MetricDefinitionList iscsi_disks_list_metric_definition(device_name, iscsi_server_name, disk_name, subscription_id, resource_group_name, manager_name, api_version)



Retrieves metric definitions for all metric aggregated at the iSCSI disk.

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
    api_instance = openapi_client.IscsiDisksApi(api_client)
    device_name = 'device_name_example' # str | The device name.
    iscsi_server_name = 'iscsi_server_name_example' # str | The iSCSI server name.
    disk_name = 'disk_name_example' # str | The iSCSI disk name.
    subscription_id = 'subscription_id_example' # str | The subscription id
    resource_group_name = 'resource_group_name_example' # str | The resource group name
    manager_name = 'manager_name_example' # str | The manager name
    api_version = 'api_version_example' # str | The api version

    try:
        api_response = api_instance.iscsi_disks_list_metric_definition(device_name, iscsi_server_name, disk_name, subscription_id, resource_group_name, manager_name, api_version)
        print("The response of IscsiDisksApi->iscsi_disks_list_metric_definition:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling IscsiDisksApi->iscsi_disks_list_metric_definition: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **device_name** | **str**| The device name. | 
 **iscsi_server_name** | **str**| The iSCSI server name. | 
 **disk_name** | **str**| The iSCSI disk name. | 
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
**0** | Default Response. It will be deserialized as per the Error definition specified in the schema. Exception will be thrown. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **iscsi_disks_list_metrics**
> MetricList iscsi_disks_list_metrics(device_name, iscsi_server_name, disk_name, subscription_id, resource_group_name, manager_name, api_version, filter=filter)



Gets the iSCSI disk metrics

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
    api_instance = openapi_client.IscsiDisksApi(api_client)
    device_name = 'device_name_example' # str | The device name.
    iscsi_server_name = 'iscsi_server_name_example' # str | The iSCSI server name.
    disk_name = 'disk_name_example' # str | The iSCSI disk name.
    subscription_id = 'subscription_id_example' # str | The subscription id
    resource_group_name = 'resource_group_name_example' # str | The resource group name
    manager_name = 'manager_name_example' # str | The manager name
    api_version = 'api_version_example' # str | The api version
    filter = 'filter_example' # str | OData Filter options (optional)

    try:
        api_response = api_instance.iscsi_disks_list_metrics(device_name, iscsi_server_name, disk_name, subscription_id, resource_group_name, manager_name, api_version, filter=filter)
        print("The response of IscsiDisksApi->iscsi_disks_list_metrics:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling IscsiDisksApi->iscsi_disks_list_metrics: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **device_name** | **str**| The device name. | 
 **iscsi_server_name** | **str**| The iSCSI server name. | 
 **disk_name** | **str**| The iSCSI disk name. | 
 **subscription_id** | **str**| The subscription id | 
 **resource_group_name** | **str**| The resource group name | 
 **manager_name** | **str**| The manager name | 
 **api_version** | **str**| The api version | 
 **filter** | **str**| OData Filter options | [optional] 

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
**0** | Default Response. It will be deserialized as per the Error definition specified in the schema. Exception will be thrown. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

