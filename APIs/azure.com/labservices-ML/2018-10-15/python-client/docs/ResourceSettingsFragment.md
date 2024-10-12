# ResourceSettingsFragment

Represents resource specific settings

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**gallery_image_resource_id** | **str** | The resource id of the gallery image used for creating the virtual machine | [optional] 
**reference_vm** | [**ReferenceVmFragment**](ReferenceVmFragment.md) |  | [optional] 
**size** | **str** | The size of the virtual machine | [optional] 

## Example

```python
from openapi_client.models.resource_settings_fragment import ResourceSettingsFragment

# TODO update the JSON string below
json = "{}"
# create an instance of ResourceSettingsFragment from a JSON string
resource_settings_fragment_instance = ResourceSettingsFragment.from_json(json)
# print the JSON string representation of the object
print(ResourceSettingsFragment.to_json())

# convert the object into a dict
resource_settings_fragment_dict = resource_settings_fragment_instance.to_dict()
# create an instance of ResourceSettingsFragment from a dict
resource_settings_fragment_from_dict = ResourceSettingsFragment.from_dict(resource_settings_fragment_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


