# A2AAddDisksInput

A2A add disk(s) input.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**vm_disks** | [**List[A2AVmDiskInputDetails]**](A2AVmDiskInputDetails.md) | The list of vm disk details. | [optional] 
**vm_managed_disks** | [**List[A2AVmManagedDiskInputDetails]**](A2AVmManagedDiskInputDetails.md) | The list of vm managed disk details. | [optional] 

## Example

```python
from openapi_client.models.a2_a_add_disks_input import A2AAddDisksInput

# TODO update the JSON string below
json = "{}"
# create an instance of A2AAddDisksInput from a JSON string
a2_a_add_disks_input_instance = A2AAddDisksInput.from_json(json)
# print the JSON string representation of the object
print(A2AAddDisksInput.to_json())

# convert the object into a dict
a2_a_add_disks_input_dict = a2_a_add_disks_input_instance.to_dict()
# create an instance of A2AAddDisksInput from a dict
a2_a_add_disks_input_from_dict = A2AAddDisksInput.from_dict(a2_a_add_disks_input_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


