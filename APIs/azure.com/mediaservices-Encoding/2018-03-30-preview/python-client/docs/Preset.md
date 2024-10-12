# Preset

Base type for all Presets, which define the recipe or instructions on how the input media files should be processed.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**odata_type** | **str** | The discriminator for derived types. | 

## Example

```python
from openapi_client.models.preset import Preset

# TODO update the JSON string below
json = "{}"
# create an instance of Preset from a JSON string
preset_instance = Preset.from_json(json)
# print the JSON string representation of the object
print(Preset.to_json())

# convert the object into a dict
preset_dict = preset_instance.to_dict()
# create an instance of Preset from a dict
preset_from_dict = Preset.from_dict(preset_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


