# ReferenceVm

Details of a Reference Vm

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**password** | **str** | The password of the virtual machine. This will be set to null in GET resource API | [optional] 
**user_name** | **str** | The username of the virtual machine | 
**vm_resource_id** | **str** | VM resource Id for the environment | [optional] [readonly] 
**vm_state_details** | [**VmStateDetails**](VmStateDetails.md) |  | [optional] 

## Example

```python
from openapi_client.models.reference_vm import ReferenceVm

# TODO update the JSON string below
json = "{}"
# create an instance of ReferenceVm from a JSON string
reference_vm_instance = ReferenceVm.from_json(json)
# print the JSON string representation of the object
print(ReferenceVm.to_json())

# convert the object into a dict
reference_vm_dict = reference_vm_instance.to_dict()
# create an instance of ReferenceVm from a dict
reference_vm_from_dict = ReferenceVm.from_dict(reference_vm_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


