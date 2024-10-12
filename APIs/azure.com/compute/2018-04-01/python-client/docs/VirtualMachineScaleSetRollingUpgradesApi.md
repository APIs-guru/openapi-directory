# openapi_client.VirtualMachineScaleSetRollingUpgradesApi

All URIs are relative to *https://management.azure.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**virtual_machine_scale_set_rolling_upgrades_cancel**](VirtualMachineScaleSetRollingUpgradesApi.md#virtual_machine_scale_set_rolling_upgrades_cancel) | **POST** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Compute/virtualMachineScaleSets/{vmScaleSetName}/rollingUpgrades/cancel | 
[**virtual_machine_scale_set_rolling_upgrades_get_latest**](VirtualMachineScaleSetRollingUpgradesApi.md#virtual_machine_scale_set_rolling_upgrades_get_latest) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Compute/virtualMachineScaleSets/{vmScaleSetName}/rollingUpgrades/latest | 
[**virtual_machine_scale_set_rolling_upgrades_start_os_upgrade**](VirtualMachineScaleSetRollingUpgradesApi.md#virtual_machine_scale_set_rolling_upgrades_start_os_upgrade) | **POST** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Compute/virtualMachineScaleSets/{vmScaleSetName}/osRollingUpgrade | 


# **virtual_machine_scale_set_rolling_upgrades_cancel**
> virtual_machine_scale_set_rolling_upgrades_cancel(resource_group_name, vm_scale_set_name, api_version, subscription_id)



Cancels the current virtual machine scale set rolling upgrade.

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
    api_instance = openapi_client.VirtualMachineScaleSetRollingUpgradesApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group.
    vm_scale_set_name = 'vm_scale_set_name_example' # str | The name of the VM scale set.
    api_version = 'api_version_example' # str | Client Api Version.
    subscription_id = 'subscription_id_example' # str | Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

    try:
        api_instance.virtual_machine_scale_set_rolling_upgrades_cancel(resource_group_name, vm_scale_set_name, api_version, subscription_id)
    except Exception as e:
        print("Exception when calling VirtualMachineScaleSetRollingUpgradesApi->virtual_machine_scale_set_rolling_upgrades_cancel: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| The name of the resource group. | 
 **vm_scale_set_name** | **str**| The name of the VM scale set. | 
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
**200** | OK |  -  |
**202** | Accepted |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **virtual_machine_scale_set_rolling_upgrades_get_latest**
> RollingUpgradeStatusInfo virtual_machine_scale_set_rolling_upgrades_get_latest(resource_group_name, vm_scale_set_name, api_version, subscription_id)



Gets the status of the latest virtual machine scale set rolling upgrade.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.rolling_upgrade_status_info import RollingUpgradeStatusInfo
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
    api_instance = openapi_client.VirtualMachineScaleSetRollingUpgradesApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group.
    vm_scale_set_name = 'vm_scale_set_name_example' # str | The name of the VM scale set.
    api_version = 'api_version_example' # str | Client Api Version.
    subscription_id = 'subscription_id_example' # str | Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

    try:
        api_response = api_instance.virtual_machine_scale_set_rolling_upgrades_get_latest(resource_group_name, vm_scale_set_name, api_version, subscription_id)
        print("The response of VirtualMachineScaleSetRollingUpgradesApi->virtual_machine_scale_set_rolling_upgrades_get_latest:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling VirtualMachineScaleSetRollingUpgradesApi->virtual_machine_scale_set_rolling_upgrades_get_latest: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| The name of the resource group. | 
 **vm_scale_set_name** | **str**| The name of the VM scale set. | 
 **api_version** | **str**| Client Api Version. | 
 **subscription_id** | **str**| Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 

### Return type

[**RollingUpgradeStatusInfo**](RollingUpgradeStatusInfo.md)

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

# **virtual_machine_scale_set_rolling_upgrades_start_os_upgrade**
> virtual_machine_scale_set_rolling_upgrades_start_os_upgrade(resource_group_name, vm_scale_set_name, api_version, subscription_id)



Starts a rolling upgrade to move all virtual machine scale set instances to the latest available Platform Image OS version. Instances which are already running the latest available OS version are not affected.

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
    api_instance = openapi_client.VirtualMachineScaleSetRollingUpgradesApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group.
    vm_scale_set_name = 'vm_scale_set_name_example' # str | The name of the VM scale set.
    api_version = 'api_version_example' # str | Client Api Version.
    subscription_id = 'subscription_id_example' # str | Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

    try:
        api_instance.virtual_machine_scale_set_rolling_upgrades_start_os_upgrade(resource_group_name, vm_scale_set_name, api_version, subscription_id)
    except Exception as e:
        print("Exception when calling VirtualMachineScaleSetRollingUpgradesApi->virtual_machine_scale_set_rolling_upgrades_start_os_upgrade: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| The name of the resource group. | 
 **vm_scale_set_name** | **str**| The name of the VM scale set. | 
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
**200** | OK |  -  |
**202** | Accepted |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

