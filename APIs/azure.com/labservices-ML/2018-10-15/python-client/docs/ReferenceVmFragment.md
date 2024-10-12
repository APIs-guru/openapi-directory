# ReferenceVmFragment

Details of a Reference Vm

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**password** | **str** | The password of the virtual machine. This will be set to null in GET resource API | [optional] 
**user_name** | **str** | The username of the virtual machine | [optional] 

## Example

```python
from openapi_client.models.reference_vm_fragment import ReferenceVmFragment

# TODO update the JSON string below
json = "{}"
# create an instance of ReferenceVmFragment from a JSON string
reference_vm_fragment_instance = ReferenceVmFragment.from_json(json)
# print the JSON string representation of the object
print(ReferenceVmFragment.to_json())

# convert the object into a dict
reference_vm_fragment_dict = reference_vm_fragment_instance.to_dict()
# create an instance of ReferenceVmFragment from a dict
reference_vm_fragment_from_dict = ReferenceVmFragment.from_dict(reference_vm_fragment_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


