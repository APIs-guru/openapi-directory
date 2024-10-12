# VmFamily

VM family name, the list of targeted azure locations and the category of the family.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**category** | **List[str]** | Category of the VM family. | [optional] [readonly] 
**family_name** | **str** | Name of the VM family. | [optional] [readonly] 
**target_locations** | **List[str]** | List of Azure regions. | [optional] [readonly] 

## Example

```python
from openapi_client.models.vm_family import VmFamily

# TODO update the JSON string below
json = "{}"
# create an instance of VmFamily from a JSON string
vm_family_instance = VmFamily.from_json(json)
# print the JSON string representation of the object
print(VmFamily.to_json())

# convert the object into a dict
vm_family_dict = vm_family_instance.to_dict()
# create an instance of VmFamily from a dict
vm_family_from_dict = VmFamily.from_dict(vm_family_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


