# Setting

A setting for Glass.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | The setting&#39;s ID. The following IDs are valid:   - locale - The key to the user’s language/locale (BCP 47 identifier) that Glassware should use to render localized content.   - timezone - The key to the user’s current time zone region as defined in the tz database. Example: America/Los_Angeles. | [optional] 
**kind** | **str** | The type of resource. This is always mirror#setting. | [optional] [default to 'mirror#setting']
**value** | **str** | The setting value, as a string. | [optional] 

## Example

```python
from openapi_client.models.setting import Setting

# TODO update the JSON string below
json = "{}"
# create an instance of Setting from a JSON string
setting_instance = Setting.from_json(json)
# print the JSON string representation of the object
print(Setting.to_json())

# convert the object into a dict
setting_dict = setting_instance.to_dict()
# create an instance of Setting from a dict
setting_from_dict = Setting.from_dict(setting_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


