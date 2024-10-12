# A2ARemoveDisksInput

A2A remove disk(s) input.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**vm_disks_uris** | **List[str]** | The list of vm disk vhd URIs. | [optional] 
**vm_managed_disks_ids** | **List[str]** | The list of vm managed disk Ids. | [optional] 

## Example

```python
from openapi_client.models.a2_a_remove_disks_input import A2ARemoveDisksInput

# TODO update the JSON string below
json = "{}"
# create an instance of A2ARemoveDisksInput from a JSON string
a2_a_remove_disks_input_instance = A2ARemoveDisksInput.from_json(json)
# print the JSON string representation of the object
print(A2ARemoveDisksInput.to_json())

# convert the object into a dict
a2_a_remove_disks_input_dict = a2_a_remove_disks_input_instance.to_dict()
# create an instance of A2ARemoveDisksInput from a dict
a2_a_remove_disks_input_from_dict = A2ARemoveDisksInput.from_dict(a2_a_remove_disks_input_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


