# TagSetting

Tag Settings

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**additional_key_values** | **str** | Additional key-values to be included in tags. Each key-value pair must be of the form key&#x3D;value, and pairs must be separated by a semicolon (;). Keys and values must not contain commas. For example, id&#x3D;2;color&#x3D;red is a valid value for this field. | [optional] 
**include_click_through_urls** | **bool** | Whether static landing page URLs should be included in the tags. New placements will default to the value set on their site. | [optional] 
**include_click_tracking** | **bool** | Whether click-tracking string should be included in the tags. | [optional] 
**keyword_option** | **str** | Option specifying how keywords are embedded in ad tags. This setting can be used to specify whether keyword placeholders are inserted in placement tags for this site. Publishers can then add keywords to those placeholders. | [optional] 

## Example

```python
from openapi_client.models.tag_setting import TagSetting

# TODO update the JSON string below
json = "{}"
# create an instance of TagSetting from a JSON string
tag_setting_instance = TagSetting.from_json(json)
# print the JSON string representation of the object
print(TagSetting.to_json())

# convert the object into a dict
tag_setting_dict = tag_setting_instance.to_dict()
# create an instance of TagSetting from a dict
tag_setting_from_dict = TagSetting.from_dict(tag_setting_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


