# SettingsChange

Information about settings changes.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**restriction_changes** | [**List[RestrictionChange]**](RestrictionChange.md) | The set of changes made to restrictions. | [optional] 

## Example

```python
from openapi_client.models.settings_change import SettingsChange

# TODO update the JSON string below
json = "{}"
# create an instance of SettingsChange from a JSON string
settings_change_instance = SettingsChange.from_json(json)
# print the JSON string representation of the object
print(SettingsChange.to_json())

# convert the object into a dict
settings_change_dict = settings_change_instance.to_dict()
# create an instance of SettingsChange from a dict
settings_change_from_dict = SettingsChange.from_dict(settings_change_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


