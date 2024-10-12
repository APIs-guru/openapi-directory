# VirtualMachineStatusCodeCount

The status code and count of the virtual machine scale set instance view status summary.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**code** | **str** | The instance view status code. | [optional] [readonly] 
**count** | **int** | The number of instances having a particular status code. | [optional] [readonly] 

## Example

```python
from openapi_client.models.virtual_machine_status_code_count import VirtualMachineStatusCodeCount

# TODO update the JSON string below
json = "{}"
# create an instance of VirtualMachineStatusCodeCount from a JSON string
virtual_machine_status_code_count_instance = VirtualMachineStatusCodeCount.from_json(json)
# print the JSON string representation of the object
print(VirtualMachineStatusCodeCount.to_json())

# convert the object into a dict
virtual_machine_status_code_count_dict = virtual_machine_status_code_count_instance.to_dict()
# create an instance of VirtualMachineStatusCodeCount from a dict
virtual_machine_status_code_count_from_dict = VirtualMachineStatusCodeCount.from_dict(virtual_machine_status_code_count_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


