# VmSelectionConfig

VM selection configuration message

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**vm_zone** | **str** | Required. The Google Cloud Platform zone the VM is located. | [optional] 

## Example

```python
from openapi_client.models.vm_selection_config import VmSelectionConfig

# TODO update the JSON string below
json = "{}"
# create an instance of VmSelectionConfig from a JSON string
vm_selection_config_instance = VmSelectionConfig.from_json(json)
# print the JSON string representation of the object
print(VmSelectionConfig.to_json())

# convert the object into a dict
vm_selection_config_dict = vm_selection_config_instance.to_dict()
# create an instance of VmSelectionConfig from a dict
vm_selection_config_from_dict = VmSelectionConfig.from_dict(vm_selection_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


