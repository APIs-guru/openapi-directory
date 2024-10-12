# VirtualMachineArchitectureDetails

Details of the VM architecture.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**bios** | [**BiosDetails**](BiosDetails.md) |  | [optional] 
**cpu_architecture** | **str** | CPU architecture, e.g., \&quot;x64-based PC\&quot;, \&quot;x86_64\&quot;, \&quot;i686\&quot; etc. | [optional] 
**cpu_manufacturer** | **str** | CPU manufacturer, e.g., \&quot;Intel\&quot;, \&quot;AMD\&quot;. | [optional] 
**cpu_name** | **str** | CPU name, e.g., \&quot;Intel Xeon E5-2690\&quot;, \&quot;AMD EPYC 7571\&quot; etc. | [optional] 
**cpu_socket_count** | **int** | Number of processor sockets allocated to the machine. | [optional] 
**cpu_thread_count** | **int** | Number of CPU threads allocated to the machine. | [optional] 
**firmware** | **str** | Firmware (BIOS/efi). | [optional] 
**hyperthreading** | **str** | CPU hyperthreading support. | [optional] 
**vendor** | **str** | Hardware vendor. | [optional] 

## Example

```python
from openapi_client.models.virtual_machine_architecture_details import VirtualMachineArchitectureDetails

# TODO update the JSON string below
json = "{}"
# create an instance of VirtualMachineArchitectureDetails from a JSON string
virtual_machine_architecture_details_instance = VirtualMachineArchitectureDetails.from_json(json)
# print the JSON string representation of the object
print(VirtualMachineArchitectureDetails.to_json())

# convert the object into a dict
virtual_machine_architecture_details_dict = virtual_machine_architecture_details_instance.to_dict()
# create an instance of VirtualMachineArchitectureDetails from a dict
virtual_machine_architecture_details_from_dict = VirtualMachineArchitectureDetails.from_dict(virtual_machine_architecture_details_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


