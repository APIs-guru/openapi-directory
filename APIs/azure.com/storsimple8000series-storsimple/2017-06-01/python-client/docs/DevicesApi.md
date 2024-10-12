# openapi_client.DevicesApi

All URIs are relative to *https://management.azure.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**devices_authorize_for_service_encryption_key_rollover**](DevicesApi.md#devices_authorize_for_service_encryption_key_rollover) | **POST** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.StorSimple/managers/{managerName}/devices/{deviceName}/authorizeForServiceEncryptionKeyRollover | 
[**devices_configure**](DevicesApi.md#devices_configure) | **POST** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.StorSimple/managers/{managerName}/configureDevice | 
[**devices_deactivate**](DevicesApi.md#devices_deactivate) | **POST** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.StorSimple/managers/{managerName}/devices/{deviceName}/deactivate | 
[**devices_delete**](DevicesApi.md#devices_delete) | **DELETE** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.StorSimple/managers/{managerName}/devices/{deviceName} | 
[**devices_failover**](DevicesApi.md#devices_failover) | **POST** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.StorSimple/managers/{managerName}/devices/{sourceDeviceName}/failover | 
[**devices_get**](DevicesApi.md#devices_get) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.StorSimple/managers/{managerName}/devices/{deviceName} | 
[**devices_get_update_summary**](DevicesApi.md#devices_get_update_summary) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.StorSimple/managers/{managerName}/devices/{deviceName}/updateSummary/default | 
[**devices_install_updates**](DevicesApi.md#devices_install_updates) | **POST** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.StorSimple/managers/{managerName}/devices/{deviceName}/installUpdates | 
[**devices_list_by_manager**](DevicesApi.md#devices_list_by_manager) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.StorSimple/managers/{managerName}/devices | 
[**devices_list_failover_sets**](DevicesApi.md#devices_list_failover_sets) | **POST** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.StorSimple/managers/{managerName}/devices/{deviceName}/listFailoverSets | 
[**devices_list_failover_targets**](DevicesApi.md#devices_list_failover_targets) | **POST** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.StorSimple/managers/{managerName}/devices/{sourceDeviceName}/listFailoverTargets | 
[**devices_list_metric_definition**](DevicesApi.md#devices_list_metric_definition) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.StorSimple/managers/{managerName}/devices/{deviceName}/metricsDefinitions | 
[**devices_list_metrics**](DevicesApi.md#devices_list_metrics) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.StorSimple/managers/{managerName}/devices/{deviceName}/metrics | 
[**devices_scan_for_updates**](DevicesApi.md#devices_scan_for_updates) | **POST** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.StorSimple/managers/{managerName}/devices/{deviceName}/scanForUpdates | 
[**devices_update**](DevicesApi.md#devices_update) | **PATCH** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.StorSimple/managers/{managerName}/devices/{deviceName} | 


# **devices_authorize_for_service_encryption_key_rollover**
> devices_authorize_for_service_encryption_key_rollover(device_name, subscription_id, resource_group_name, manager_name, api_version)



Authorizes the specified device for service data encryption key rollover.

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
    api_instance = openapi_client.DevicesApi(api_client)
    device_name = 'device_name_example' # str | The device name
    subscription_id = 'subscription_id_example' # str | The subscription id
    resource_group_name = 'resource_group_name_example' # str | The resource group name
    manager_name = 'manager_name_example' # str | The manager name
    api_version = 'api_version_example' # str | The api version

    try:
        api_instance.devices_authorize_for_service_encryption_key_rollover(device_name, subscription_id, resource_group_name, manager_name, api_version)
    except Exception as e:
        print("Exception when calling DevicesApi->devices_authorize_for_service_encryption_key_rollover: %s\n" % e)
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

void (empty response body)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**204** | Successfully authorized the device for service encryption key rollover |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **devices_configure**
> devices_configure(subscription_id, resource_group_name, manager_name, api_version, parameters)



Complete minimal setup before using the device.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.configure_device_request import ConfigureDeviceRequest
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
    api_instance = openapi_client.DevicesApi(api_client)
    subscription_id = 'subscription_id_example' # str | The subscription id
    resource_group_name = 'resource_group_name_example' # str | The resource group name
    manager_name = 'manager_name_example' # str | The manager name
    api_version = 'api_version_example' # str | The api version
    parameters = openapi_client.ConfigureDeviceRequest() # ConfigureDeviceRequest | The minimal properties to configure a device.

    try:
        api_instance.devices_configure(subscription_id, resource_group_name, manager_name, api_version, parameters)
    except Exception as e:
        print("Exception when calling DevicesApi->devices_configure: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| The subscription id | 
 **resource_group_name** | **str**| The resource group name | 
 **manager_name** | **str**| The manager name | 
 **api_version** | **str**| The api version | 
 **parameters** | [**ConfigureDeviceRequest**](ConfigureDeviceRequest.md)| The minimal properties to configure a device. | 

### Return type

void (empty response body)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: Not defined

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**202** | Accepted the request to configure device. |  -  |
**204** | Successfully configured the device. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **devices_deactivate**
> devices_deactivate(device_name, subscription_id, resource_group_name, manager_name, api_version)



Deactivates the device.

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
    api_instance = openapi_client.DevicesApi(api_client)
    device_name = 'device_name_example' # str | The device name
    subscription_id = 'subscription_id_example' # str | The subscription id
    resource_group_name = 'resource_group_name_example' # str | The resource group name
    manager_name = 'manager_name_example' # str | The manager name
    api_version = 'api_version_example' # str | The api version

    try:
        api_instance.devices_deactivate(device_name, subscription_id, resource_group_name, manager_name, api_version)
    except Exception as e:
        print("Exception when calling DevicesApi->devices_deactivate: %s\n" % e)
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

void (empty response body)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**202** | Accepted the request to deactivate the device. |  -  |
**204** | Successfully deactivated the device. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **devices_delete**
> devices_delete(device_name, subscription_id, resource_group_name, manager_name, api_version)



Deletes the device.

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
    api_instance = openapi_client.DevicesApi(api_client)
    device_name = 'device_name_example' # str | The device name
    subscription_id = 'subscription_id_example' # str | The subscription id
    resource_group_name = 'resource_group_name_example' # str | The resource group name
    manager_name = 'manager_name_example' # str | The manager name
    api_version = 'api_version_example' # str | The api version

    try:
        api_instance.devices_delete(device_name, subscription_id, resource_group_name, manager_name, api_version)
    except Exception as e:
        print("Exception when calling DevicesApi->devices_delete: %s\n" % e)
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

void (empty response body)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**202** | Accepted the request to delete the device. |  -  |
**204** | Successfully deleted the device. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **devices_failover**
> devices_failover(source_device_name, subscription_id, resource_group_name, manager_name, api_version, parameters)



Failovers a set of volume containers from a specified source device to a target device.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.failover_request import FailoverRequest
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
    api_instance = openapi_client.DevicesApi(api_client)
    source_device_name = 'source_device_name_example' # str | The source device name on which failover is performed.
    subscription_id = 'subscription_id_example' # str | The subscription id
    resource_group_name = 'resource_group_name_example' # str | The resource group name
    manager_name = 'manager_name_example' # str | The manager name
    api_version = 'api_version_example' # str | The api version
    parameters = openapi_client.FailoverRequest() # FailoverRequest | FailoverRequest containing the source device and the list of volume containers to be failed over.

    try:
        api_instance.devices_failover(source_device_name, subscription_id, resource_group_name, manager_name, api_version, parameters)
    except Exception as e:
        print("Exception when calling DevicesApi->devices_failover: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **source_device_name** | **str**| The source device name on which failover is performed. | 
 **subscription_id** | **str**| The subscription id | 
 **resource_group_name** | **str**| The resource group name | 
 **manager_name** | **str**| The manager name | 
 **api_version** | **str**| The api version | 
 **parameters** | [**FailoverRequest**](FailoverRequest.md)| FailoverRequest containing the source device and the list of volume containers to be failed over. | 

### Return type

void (empty response body)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: Not defined

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**202** | Accepted the request to failover the device. |  -  |
**204** | Successfully completed failover of the device. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **devices_get**
> Device devices_get(device_name, subscription_id, resource_group_name, manager_name, api_version, expand=expand)



Returns the properties of the specified device.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.device import Device
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
    api_instance = openapi_client.DevicesApi(api_client)
    device_name = 'device_name_example' # str | The device name
    subscription_id = 'subscription_id_example' # str | The subscription id
    resource_group_name = 'resource_group_name_example' # str | The resource group name
    manager_name = 'manager_name_example' # str | The manager name
    api_version = 'api_version_example' # str | The api version
    expand = 'expand_example' # str | Specify $expand=details to populate additional fields related to the device or $expand=rolloverdetails to populate additional fields related to the service data encryption key rollover on device (optional)

    try:
        api_response = api_instance.devices_get(device_name, subscription_id, resource_group_name, manager_name, api_version, expand=expand)
        print("The response of DevicesApi->devices_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DevicesApi->devices_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **device_name** | **str**| The device name | 
 **subscription_id** | **str**| The subscription id | 
 **resource_group_name** | **str**| The resource group name | 
 **manager_name** | **str**| The manager name | 
 **api_version** | **str**| The api version | 
 **expand** | **str**| Specify $expand&#x3D;details to populate additional fields related to the device or $expand&#x3D;rolloverdetails to populate additional fields related to the service data encryption key rollover on device | [optional] 

### Return type

[**Device**](Device.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The device. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **devices_get_update_summary**
> Updates devices_get_update_summary(device_name, subscription_id, resource_group_name, manager_name, api_version)



Returns the update summary of the specified device name.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.updates import Updates
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
    api_instance = openapi_client.DevicesApi(api_client)
    device_name = 'device_name_example' # str | The device name
    subscription_id = 'subscription_id_example' # str | The subscription id
    resource_group_name = 'resource_group_name_example' # str | The resource group name
    manager_name = 'manager_name_example' # str | The manager name
    api_version = 'api_version_example' # str | The api version

    try:
        api_response = api_instance.devices_get_update_summary(device_name, subscription_id, resource_group_name, manager_name, api_version)
        print("The response of DevicesApi->devices_get_update_summary:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DevicesApi->devices_get_update_summary: %s\n" % e)
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

[**Updates**](Updates.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The update summary. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **devices_install_updates**
> devices_install_updates(device_name, subscription_id, resource_group_name, manager_name, api_version)



Downloads and installs the updates on the device.

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
    api_instance = openapi_client.DevicesApi(api_client)
    device_name = 'device_name_example' # str | The device name
    subscription_id = 'subscription_id_example' # str | The subscription id
    resource_group_name = 'resource_group_name_example' # str | The resource group name
    manager_name = 'manager_name_example' # str | The manager name
    api_version = 'api_version_example' # str | The api version

    try:
        api_instance.devices_install_updates(device_name, subscription_id, resource_group_name, manager_name, api_version)
    except Exception as e:
        print("Exception when calling DevicesApi->devices_install_updates: %s\n" % e)
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

void (empty response body)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**202** | Accepted the request to download and install updates. |  -  |
**204** | Successfully installed updates. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **devices_list_by_manager**
> DeviceList devices_list_by_manager(subscription_id, resource_group_name, manager_name, api_version, expand=expand)



Returns the list of devices for the specified manager.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.device_list import DeviceList
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
    api_instance = openapi_client.DevicesApi(api_client)
    subscription_id = 'subscription_id_example' # str | The subscription id
    resource_group_name = 'resource_group_name_example' # str | The resource group name
    manager_name = 'manager_name_example' # str | The manager name
    api_version = 'api_version_example' # str | The api version
    expand = 'expand_example' # str | Specify $expand=details to populate additional fields related to the device or $expand=rolloverdetails to populate additional fields related to the service data encryption key rollover on device (optional)

    try:
        api_response = api_instance.devices_list_by_manager(subscription_id, resource_group_name, manager_name, api_version, expand=expand)
        print("The response of DevicesApi->devices_list_by_manager:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DevicesApi->devices_list_by_manager: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| The subscription id | 
 **resource_group_name** | **str**| The resource group name | 
 **manager_name** | **str**| The manager name | 
 **api_version** | **str**| The api version | 
 **expand** | **str**| Specify $expand&#x3D;details to populate additional fields related to the device or $expand&#x3D;rolloverdetails to populate additional fields related to the service data encryption key rollover on device | [optional] 

### Return type

[**DeviceList**](DeviceList.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The collection of devices. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **devices_list_failover_sets**
> FailoverSetsList devices_list_failover_sets(device_name, subscription_id, resource_group_name, manager_name, api_version)



Returns all failover sets for a given device and their eligibility for participating in a failover. A failover set refers to a set of volume containers that need to be failed-over as a single unit to maintain data integrity.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.failover_sets_list import FailoverSetsList
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
    api_instance = openapi_client.DevicesApi(api_client)
    device_name = 'device_name_example' # str | The device name
    subscription_id = 'subscription_id_example' # str | The subscription id
    resource_group_name = 'resource_group_name_example' # str | The resource group name
    manager_name = 'manager_name_example' # str | The manager name
    api_version = 'api_version_example' # str | The api version

    try:
        api_response = api_instance.devices_list_failover_sets(device_name, subscription_id, resource_group_name, manager_name, api_version)
        print("The response of DevicesApi->devices_list_failover_sets:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DevicesApi->devices_list_failover_sets: %s\n" % e)
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

[**FailoverSetsList**](FailoverSetsList.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Returns the list of failover sets on the given device. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **devices_list_failover_targets**
> FailoverTargetsList devices_list_failover_targets(source_device_name, subscription_id, resource_group_name, manager_name, api_version, parameters)



Given a list of volume containers to be failed over from a source device, this method returns the eligibility result, as a failover target, for all devices under that resource.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.failover_targets_list import FailoverTargetsList
from openapi_client.models.list_failover_targets_request import ListFailoverTargetsRequest
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
    api_instance = openapi_client.DevicesApi(api_client)
    source_device_name = 'source_device_name_example' # str | The source device name on which failover is performed.
    subscription_id = 'subscription_id_example' # str | The subscription id
    resource_group_name = 'resource_group_name_example' # str | The resource group name
    manager_name = 'manager_name_example' # str | The manager name
    api_version = 'api_version_example' # str | The api version
    parameters = openapi_client.ListFailoverTargetsRequest() # ListFailoverTargetsRequest | ListFailoverTargetsRequest containing the list of volume containers to be failed over.

    try:
        api_response = api_instance.devices_list_failover_targets(source_device_name, subscription_id, resource_group_name, manager_name, api_version, parameters)
        print("The response of DevicesApi->devices_list_failover_targets:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DevicesApi->devices_list_failover_targets: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **source_device_name** | **str**| The source device name on which failover is performed. | 
 **subscription_id** | **str**| The subscription id | 
 **resource_group_name** | **str**| The resource group name | 
 **manager_name** | **str**| The manager name | 
 **api_version** | **str**| The api version | 
 **parameters** | [**ListFailoverTargetsRequest**](ListFailoverTargetsRequest.md)| ListFailoverTargetsRequest containing the list of volume containers to be failed over. | 

### Return type

[**FailoverTargetsList**](FailoverTargetsList.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The list of target devices and their eligibility for failover. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **devices_list_metric_definition**
> MetricDefinitionList devices_list_metric_definition(device_name, subscription_id, resource_group_name, manager_name, api_version)



Gets the metric definitions for the specified device.

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
    api_instance = openapi_client.DevicesApi(api_client)
    device_name = 'device_name_example' # str | The device name
    subscription_id = 'subscription_id_example' # str | The subscription id
    resource_group_name = 'resource_group_name_example' # str | The resource group name
    manager_name = 'manager_name_example' # str | The manager name
    api_version = 'api_version_example' # str | The api version

    try:
        api_response = api_instance.devices_list_metric_definition(device_name, subscription_id, resource_group_name, manager_name, api_version)
        print("The response of DevicesApi->devices_list_metric_definition:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DevicesApi->devices_list_metric_definition: %s\n" % e)
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

# **devices_list_metrics**
> MetricList devices_list_metrics(device_name, subscription_id, resource_group_name, manager_name, api_version, filter)



Gets the metrics for the specified device.

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
    api_instance = openapi_client.DevicesApi(api_client)
    device_name = 'device_name_example' # str | The device name
    subscription_id = 'subscription_id_example' # str | The subscription id
    resource_group_name = 'resource_group_name_example' # str | The resource group name
    manager_name = 'manager_name_example' # str | The manager name
    api_version = 'api_version_example' # str | The api version
    filter = 'filter_example' # str | OData Filter options

    try:
        api_response = api_instance.devices_list_metrics(device_name, subscription_id, resource_group_name, manager_name, api_version, filter)
        print("The response of DevicesApi->devices_list_metrics:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DevicesApi->devices_list_metrics: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **device_name** | **str**| The device name | 
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

# **devices_scan_for_updates**
> devices_scan_for_updates(device_name, subscription_id, resource_group_name, manager_name, api_version)



Scans for updates on the device.

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
    api_instance = openapi_client.DevicesApi(api_client)
    device_name = 'device_name_example' # str | The device name
    subscription_id = 'subscription_id_example' # str | The subscription id
    resource_group_name = 'resource_group_name_example' # str | The resource group name
    manager_name = 'manager_name_example' # str | The manager name
    api_version = 'api_version_example' # str | The api version

    try:
        api_instance.devices_scan_for_updates(device_name, subscription_id, resource_group_name, manager_name, api_version)
    except Exception as e:
        print("Exception when calling DevicesApi->devices_scan_for_updates: %s\n" % e)
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

void (empty response body)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**202** | Accepted the request to scan for updates. |  -  |
**204** | Successfully scanned for updates. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **devices_update**
> Device devices_update(device_name, subscription_id, resource_group_name, manager_name, api_version, parameters)



Patches the device.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.device import Device
from openapi_client.models.device_patch import DevicePatch
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
    api_instance = openapi_client.DevicesApi(api_client)
    device_name = 'device_name_example' # str | The device name
    subscription_id = 'subscription_id_example' # str | The subscription id
    resource_group_name = 'resource_group_name_example' # str | The resource group name
    manager_name = 'manager_name_example' # str | The manager name
    api_version = 'api_version_example' # str | The api version
    parameters = openapi_client.DevicePatch() # DevicePatch | Patch representation of the device.

    try:
        api_response = api_instance.devices_update(device_name, subscription_id, resource_group_name, manager_name, api_version, parameters)
        print("The response of DevicesApi->devices_update:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DevicesApi->devices_update: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **device_name** | **str**| The device name | 
 **subscription_id** | **str**| The subscription id | 
 **resource_group_name** | **str**| The resource group name | 
 **manager_name** | **str**| The manager name | 
 **api_version** | **str**| The api version | 
 **parameters** | [**DevicePatch**](DevicePatch.md)| Patch representation of the device. | 

### Return type

[**Device**](Device.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successfully patched the device. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

