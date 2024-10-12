# ModuleProperties

Definition of the module property type.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**activity_count** | **int** | Gets or sets the activity count of the module. | [optional] 
**content_link** | [**ContentLink**](ContentLink.md) |  | [optional] 
**creation_time** | **datetime** | Gets or sets the creation time. | [optional] 
**description** | **str** | Gets or sets the description. | [optional] 
**error** | [**ModuleErrorInfo**](ModuleErrorInfo.md) |  | [optional] 
**is_composite** | **bool** | Gets or sets type of module, if its composite or not. | [optional] 
**is_global** | **bool** | Gets or sets the isGlobal flag of the module. | [optional] 
**last_modified_time** | **datetime** | Gets or sets the last modified time. | [optional] 
**provisioning_state** | **str** | Gets or sets the provisioning state of the module. | [optional] 
**size_in_bytes** | **int** | Gets or sets the size in bytes of the module. | [optional] 
**version** | **str** | Gets or sets the version of the module. | [optional] 

## Example

```python
from openapi_client.models.module_properties import ModuleProperties

# TODO update the JSON string below
json = "{}"
# create an instance of ModuleProperties from a JSON string
module_properties_instance = ModuleProperties.from_json(json)
# print the JSON string representation of the object
print(ModuleProperties.to_json())

# convert the object into a dict
module_properties_dict = module_properties_instance.to_dict()
# create an instance of ModuleProperties from a dict
module_properties_from_dict = ModuleProperties.from_dict(module_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


