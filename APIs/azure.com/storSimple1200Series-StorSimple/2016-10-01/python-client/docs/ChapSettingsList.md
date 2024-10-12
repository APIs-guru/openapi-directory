# ChapSettingsList

Collection of Chap setting entities

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**value** | [**List[ChapSettings]**](ChapSettings.md) | The chap settings entity collection | 

## Example

```python
from openapi_client.models.chap_settings_list import ChapSettingsList

# TODO update the JSON string below
json = "{}"
# create an instance of ChapSettingsList from a JSON string
chap_settings_list_instance = ChapSettingsList.from_json(json)
# print the JSON string representation of the object
print(ChapSettingsList.to_json())

# convert the object into a dict
chap_settings_list_dict = chap_settings_list_instance.to_dict()
# create an instance of ChapSettingsList from a dict
chap_settings_list_from_dict = ChapSettingsList.from_dict(chap_settings_list_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


