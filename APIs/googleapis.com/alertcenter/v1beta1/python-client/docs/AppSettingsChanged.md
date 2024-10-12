# AppSettingsChanged

Alerts from AppSettingsChanged bucket Rules configured by Admin which contain the below rules. Calendar settings changed Drive settings changed Email settings changed Mobile settings changed

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**alert_details** | **bytearray** | Any other associated alert details, for example, AlertConfiguration. | [optional] 
**name** | **str** | Rule name | [optional] 

## Example

```python
from openapi_client.models.app_settings_changed import AppSettingsChanged

# TODO update the JSON string below
json = "{}"
# create an instance of AppSettingsChanged from a JSON string
app_settings_changed_instance = AppSettingsChanged.from_json(json)
# print the JSON string representation of the object
print(AppSettingsChanged.to_json())

# convert the object into a dict
app_settings_changed_dict = app_settings_changed_instance.to_dict()
# create an instance of AppSettingsChanged from a dict
app_settings_changed_from_dict = AppSettingsChanged.from_dict(app_settings_changed_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


