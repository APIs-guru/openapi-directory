# ComputeVmInstanceViewStatusFragment

Status information about a virtual machine.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**code** | **str** | Gets the status Code. | [optional] 
**display_status** | **str** | Gets the short localizable label for the status. | [optional] 
**message** | **str** | Gets the message associated with the status. | [optional] 

## Example

```python
from openapi_client.models.compute_vm_instance_view_status_fragment import ComputeVmInstanceViewStatusFragment

# TODO update the JSON string below
json = "{}"
# create an instance of ComputeVmInstanceViewStatusFragment from a JSON string
compute_vm_instance_view_status_fragment_instance = ComputeVmInstanceViewStatusFragment.from_json(json)
# print the JSON string representation of the object
print(ComputeVmInstanceViewStatusFragment.to_json())

# convert the object into a dict
compute_vm_instance_view_status_fragment_dict = compute_vm_instance_view_status_fragment_instance.to_dict()
# create an instance of ComputeVmInstanceViewStatusFragment from a dict
compute_vm_instance_view_status_fragment_from_dict = ComputeVmInstanceViewStatusFragment.from_dict(compute_vm_instance_view_status_fragment_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


