# SettingsList

Subscription settings list.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_link** | **str** | The URI to fetch the next page. | [optional] [readonly] 
**value** | [**List[Setting]**](Setting.md) | The settings list. | [optional] 

## Example

```python
from openapi_client.models.settings_list import SettingsList

# TODO update the JSON string below
json = "{}"
# create an instance of SettingsList from a JSON string
settings_list_instance = SettingsList.from_json(json)
# print the JSON string representation of the object
print(SettingsList.to_json())

# convert the object into a dict
settings_list_dict = settings_list_instance.to_dict()
# create an instance of SettingsList from a dict
settings_list_from_dict = SettingsList.from_dict(settings_list_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


