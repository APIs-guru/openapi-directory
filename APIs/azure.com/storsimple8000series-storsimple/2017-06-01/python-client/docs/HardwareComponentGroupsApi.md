# openapi_client.HardwareComponentGroupsApi

All URIs are relative to *https://management.azure.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**hardware_component_groups_change_controller_power_state**](HardwareComponentGroupsApi.md#hardware_component_groups_change_controller_power_state) | **POST** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.StorSimple/managers/{managerName}/devices/{deviceName}/hardwareComponentGroups/{hardwareComponentGroupName}/changeControllerPowerState | 
[**hardware_component_groups_list_by_device**](HardwareComponentGroupsApi.md#hardware_component_groups_list_by_device) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.StorSimple/managers/{managerName}/devices/{deviceName}/hardwareComponentGroups | 


# **hardware_component_groups_change_controller_power_state**
> hardware_component_groups_change_controller_power_state(device_name, hardware_component_group_name, subscription_id, resource_group_name, manager_name, api_version, parameters)



Changes the power state of the controller.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.controller_power_state_change_request import ControllerPowerStateChangeRequest
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
    api_instance = openapi_client.HardwareComponentGroupsApi(api_client)
    device_name = 'device_name_example' # str | The device name
    hardware_component_group_name = 'hardware_component_group_name_example' # str | The hardware component group name.
    subscription_id = 'subscription_id_example' # str | The subscription id
    resource_group_name = 'resource_group_name_example' # str | The resource group name
    manager_name = 'manager_name_example' # str | The manager name
    api_version = 'api_version_example' # str | The api version
    parameters = openapi_client.ControllerPowerStateChangeRequest() # ControllerPowerStateChangeRequest | The controller power state change request.

    try:
        api_instance.hardware_component_groups_change_controller_power_state(device_name, hardware_component_group_name, subscription_id, resource_group_name, manager_name, api_version, parameters)
    except Exception as e:
        print("Exception when calling HardwareComponentGroupsApi->hardware_component_groups_change_controller_power_state: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **device_name** | **str**| The device name | 
 **hardware_component_group_name** | **str**| The hardware component group name. | 
 **subscription_id** | **str**| The subscription id | 
 **resource_group_name** | **str**| The resource group name | 
 **manager_name** | **str**| The manager name | 
 **api_version** | **str**| The api version | 
 **parameters** | [**ControllerPowerStateChangeRequest**](ControllerPowerStateChangeRequest.md)| The controller power state change request. | 

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
**202** | Accepted the request to change power state of the controller. |  -  |
**204** | Successfully changed the power state of the controller. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **hardware_component_groups_list_by_device**
> HardwareComponentGroupList hardware_component_groups_list_by_device(device_name, subscription_id, resource_group_name, manager_name, api_version)



Lists the hardware component groups at device-level.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.hardware_component_group_list import HardwareComponentGroupList
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
    api_instance = openapi_client.HardwareComponentGroupsApi(api_client)
    device_name = 'device_name_example' # str | The device name
    subscription_id = 'subscription_id_example' # str | The subscription id
    resource_group_name = 'resource_group_name_example' # str | The resource group name
    manager_name = 'manager_name_example' # str | The manager name
    api_version = 'api_version_example' # str | The api version

    try:
        api_response = api_instance.hardware_component_groups_list_by_device(device_name, subscription_id, resource_group_name, manager_name, api_version)
        print("The response of HardwareComponentGroupsApi->hardware_component_groups_list_by_device:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling HardwareComponentGroupsApi->hardware_component_groups_list_by_device: %s\n" % e)
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

[**HardwareComponentGroupList**](HardwareComponentGroupList.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successfully fetched hardware component groups. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

