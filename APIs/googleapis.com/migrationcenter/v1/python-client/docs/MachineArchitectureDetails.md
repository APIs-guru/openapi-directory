# MachineArchitectureDetails

Details of the machine architecture.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**bios** | [**BiosDetails**](BiosDetails.md) |  | [optional] 
**cpu_architecture** | **str** | CPU architecture, e.g., \&quot;x64-based PC\&quot;, \&quot;x86_64\&quot;, \&quot;i686\&quot; etc. | [optional] 
**cpu_name** | **str** | CPU name, e.g., \&quot;Intel Xeon E5-2690\&quot;, \&quot;AMD EPYC 7571\&quot; etc. | [optional] 
**cpu_socket_count** | **int** | Number of processor sockets allocated to the machine. | [optional] 
**cpu_thread_count** | **int** | Number of CPU threads allocated to the machine. | [optional] 
**firmware_type** | **str** | Firmware type. | [optional] 
**hyperthreading** | **str** | CPU hyper-threading support. | [optional] 
**vendor** | **str** | Hardware vendor. | [optional] 

## Example

```python
from openapi_client.models.machine_architecture_details import MachineArchitectureDetails

# TODO update the JSON string below
json = "{}"
# create an instance of MachineArchitectureDetails from a JSON string
machine_architecture_details_instance = MachineArchitectureDetails.from_json(json)
# print the JSON string representation of the object
print(MachineArchitectureDetails.to_json())

# convert the object into a dict
machine_architecture_details_dict = machine_architecture_details_instance.to_dict()
# create an instance of MachineArchitectureDetails from a dict
machine_architecture_details_from_dict = MachineArchitectureDetails.from_dict(machine_architecture_details_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


