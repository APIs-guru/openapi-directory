# TagSettings

Dynamic and Image Tag Settings.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**dynamic_tag_enabled** | **bool** | Whether dynamic floodlight tags are enabled. | [optional] 
**image_tag_enabled** | **bool** | Whether image tags are enabled. | [optional] 

## Example

```python
from openapi_client.models.tag_settings import TagSettings

# TODO update the JSON string below
json = "{}"
# create an instance of TagSettings from a JSON string
tag_settings_instance = TagSettings.from_json(json)
# print the JSON string representation of the object
print(TagSettings.to_json())

# convert the object into a dict
tag_settings_dict = tag_settings_instance.to_dict()
# create an instance of TagSettings from a dict
tag_settings_from_dict = TagSettings.from_dict(tag_settings_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


