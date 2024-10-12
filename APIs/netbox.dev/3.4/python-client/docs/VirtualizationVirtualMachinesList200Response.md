# VirtualizationVirtualMachinesList200Response


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**count** | **int** |  | 
**next** | **str** |  | [optional] 
**previous** | **str** |  | [optional] 
**results** | [**List[VirtualMachineWithConfigContext]**](VirtualMachineWithConfigContext.md) |  | 

## Example

```python
from openapi_client.models.virtualization_virtual_machines_list200_response import VirtualizationVirtualMachinesList200Response

# TODO update the JSON string below
json = "{}"
# create an instance of VirtualizationVirtualMachinesList200Response from a JSON string
virtualization_virtual_machines_list200_response_instance = VirtualizationVirtualMachinesList200Response.from_json(json)
# print the JSON string representation of the object
print(VirtualizationVirtualMachinesList200Response.to_json())

# convert the object into a dict
virtualization_virtual_machines_list200_response_dict = virtualization_virtual_machines_list200_response_instance.to_dict()
# create an instance of VirtualizationVirtualMachinesList200Response from a dict
virtualization_virtual_machines_list200_response_from_dict = VirtualizationVirtualMachinesList200Response.from_dict(virtualization_virtual_machines_list200_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


