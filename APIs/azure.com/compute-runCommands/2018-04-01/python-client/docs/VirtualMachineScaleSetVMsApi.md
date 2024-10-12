# openapi_client.VirtualMachineScaleSetVMsApi

All URIs are relative to *https://management.azure.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**virtual_machine_scale_set_vms_run_command**](VirtualMachineScaleSetVMsApi.md#virtual_machine_scale_set_vms_run_command) | **POST** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Compute/virtualMachineScaleSets/{vmScaleSetName}/virtualmachines/{instanceId}/runCommand | 


# **virtual_machine_scale_set_vms_run_command**
> RunCommandResult virtual_machine_scale_set_vms_run_command(resource_group_name, vm_scale_set_name, instance_id, api_version, subscription_id, parameters)



Run command on a virtual machine in a VM scale set.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.run_command_input import RunCommandInput
from openapi_client.models.run_command_result import RunCommandResult
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
    api_instance = openapi_client.VirtualMachineScaleSetVMsApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group.
    vm_scale_set_name = 'vm_scale_set_name_example' # str | The name of the VM scale set.
    instance_id = 'instance_id_example' # str | The instance ID of the virtual machine.
    api_version = 'api_version_example' # str | Client Api Version.
    subscription_id = 'subscription_id_example' # str | Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
    parameters = openapi_client.RunCommandInput() # RunCommandInput | Parameters supplied to the Run command operation.

    try:
        api_response = api_instance.virtual_machine_scale_set_vms_run_command(resource_group_name, vm_scale_set_name, instance_id, api_version, subscription_id, parameters)
        print("The response of VirtualMachineScaleSetVMsApi->virtual_machine_scale_set_vms_run_command:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling VirtualMachineScaleSetVMsApi->virtual_machine_scale_set_vms_run_command: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| The name of the resource group. | 
 **vm_scale_set_name** | **str**| The name of the VM scale set. | 
 **instance_id** | **str**| The instance ID of the virtual machine. | 
 **api_version** | **str**| Client Api Version. | 
 **subscription_id** | **str**| Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 
 **parameters** | [**RunCommandInput**](RunCommandInput.md)| Parameters supplied to the Run command operation. | 

### Return type

[**RunCommandResult**](RunCommandResult.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: application/json, text/json
 - **Accept**: application/json, text/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**202** | Accepted |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

