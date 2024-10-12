# TagSettingsProperties

Tag filter information for the VM.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**filter_operator** | **str** | Filter VMs by Any or All specified tags. | [optional] 
**tags** | **Dict[str, List[str]]** | Dictionary of tags with its list of values. | [optional] 

## Example

```python
from openapi_client.models.tag_settings_properties import TagSettingsProperties

# TODO update the JSON string below
json = "{}"
# create an instance of TagSettingsProperties from a JSON string
tag_settings_properties_instance = TagSettingsProperties.from_json(json)
# print the JSON string representation of the object
print(TagSettingsProperties.to_json())

# convert the object into a dict
tag_settings_properties_dict = tag_settings_properties_instance.to_dict()
# create an instance of TagSettingsProperties from a dict
tag_settings_properties_from_dict = TagSettingsProperties.from_dict(tag_settings_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


