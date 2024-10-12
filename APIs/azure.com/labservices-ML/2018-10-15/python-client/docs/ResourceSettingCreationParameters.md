# ResourceSettingCreationParameters

Represents resource specific settings

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**gallery_image_resource_id** | **str** | The resource id of the gallery image used for creating the virtual machine | 
**location** | **str** | The location where the virtual machine will live | [optional] 
**name** | **str** | The name of the resource setting | [optional] 
**reference_vm_creation_parameters** | [**ReferenceVmCreationParameters**](ReferenceVmCreationParameters.md) |  | 
**size** | **str** | The size of the virtual machine | [optional] 

## Example

```python
from openapi_client.models.resource_setting_creation_parameters import ResourceSettingCreationParameters

# TODO update the JSON string below
json = "{}"
# create an instance of ResourceSettingCreationParameters from a JSON string
resource_setting_creation_parameters_instance = ResourceSettingCreationParameters.from_json(json)
# print the JSON string representation of the object
print(ResourceSettingCreationParameters.to_json())

# convert the object into a dict
resource_setting_creation_parameters_dict = resource_setting_creation_parameters_instance.to_dict()
# create an instance of ResourceSettingCreationParameters from a dict
resource_setting_creation_parameters_from_dict = ResourceSettingCreationParameters.from_dict(resource_setting_creation_parameters_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


