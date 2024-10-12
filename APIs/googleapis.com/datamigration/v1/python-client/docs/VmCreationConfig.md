# VmCreationConfig

VM creation configuration message

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**subnet** | **str** | The subnet name the vm needs to be created in. | [optional] 
**vm_machine_type** | **str** | Required. VM instance machine type to create. | [optional] 
**vm_zone** | **str** | The Google Cloud Platform zone to create the VM in. | [optional] 

## Example

```python
from openapi_client.models.vm_creation_config import VmCreationConfig

# TODO update the JSON string below
json = "{}"
# create an instance of VmCreationConfig from a JSON string
vm_creation_config_instance = VmCreationConfig.from_json(json)
# print the JSON string representation of the object
print(VmCreationConfig.to_json())

# convert the object into a dict
vm_creation_config_dict = vm_creation_config_instance.to_dict()
# create an instance of VmCreationConfig from a dict
vm_creation_config_from_dict = VmCreationConfig.from_dict(vm_creation_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


