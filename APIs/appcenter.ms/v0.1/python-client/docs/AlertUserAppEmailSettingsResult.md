# AlertUserAppEmailSettingsResult

Alerting Email Settings of the user for a particular app

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**request_id** | **str** | Unique request | 
**e_tag** | **str** | The ETag of the entity | [optional] 
**enabled** | **bool** | Allows to forcefully disable emails on app or user level | 
**settings** | **List[object]** | The settings the user has for the app | 
**user_id** | **str** | The unique id (UUID) of the user | [optional] 
**app_id** | **str** | Application ID | [optional] 
**user_enabled** | **bool** | A flag indicating if settings are enabled at user/global level | 

## Example

```python
from openapi_client.models.alert_user_app_email_settings_result import AlertUserAppEmailSettingsResult

# TODO update the JSON string below
json = "{}"
# create an instance of AlertUserAppEmailSettingsResult from a JSON string
alert_user_app_email_settings_result_instance = AlertUserAppEmailSettingsResult.from_json(json)
# print the JSON string representation of the object
print(AlertUserAppEmailSettingsResult.to_json())

# convert the object into a dict
alert_user_app_email_settings_result_dict = alert_user_app_email_settings_result_instance.to_dict()
# create an instance of AlertUserAppEmailSettingsResult from a dict
alert_user_app_email_settings_result_from_dict = AlertUserAppEmailSettingsResult.from_dict(alert_user_app_email_settings_result_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


