# VMInfo

Information about the VM.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | Azure resource Id of the VM. | [optional] [readonly] 
**uuid** | **str** | UUID(Universally Unique Identifier) of the VM. | [optional] [readonly] 

## Example

```python
from openapi_client.models.vm_info import VMInfo

# TODO update the JSON string below
json = "{}"
# create an instance of VMInfo from a JSON string
vm_info_instance = VMInfo.from_json(json)
# print the JSON string representation of the object
print(VMInfo.to_json())

# convert the object into a dict
vm_info_dict = vm_info_instance.to_dict()
# create an instance of VMInfo from a dict
vm_info_from_dict = VMInfo.from_dict(vm_info_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


