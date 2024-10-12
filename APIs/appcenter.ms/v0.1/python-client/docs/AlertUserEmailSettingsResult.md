# AlertUserEmailSettingsResult

Alerting Default Email Settings of the user

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**request_id** | **str** | Unique request identifier for tracking | 
**e_tag** | **str** | The ETag of the entity | [optional] 
**enabled** | **bool** | Allows to forcefully disable emails on app or user level | 
**settings** | [**List[NotificationsGetAppEmailSettings200ResponseAllOfAllOfSettingsInner]**](NotificationsGetAppEmailSettings200ResponseAllOfAllOfSettingsInner.md) | The settings the user has for the app | 
**user_id** | **str** | The unique id (UUID) of the user | [optional] 

## Example

```python
from openapi_client.models.alert_user_email_settings_result import AlertUserEmailSettingsResult

# TODO update the JSON string below
json = "{}"
# create an instance of AlertUserEmailSettingsResult from a JSON string
alert_user_email_settings_result_instance = AlertUserEmailSettingsResult.from_json(json)
# print the JSON string representation of the object
print(AlertUserEmailSettingsResult.to_json())

# convert the object into a dict
alert_user_email_settings_result_dict = alert_user_email_settings_result_instance.to_dict()
# create an instance of AlertUserEmailSettingsResult from a dict
alert_user_email_settings_result_from_dict = AlertUserEmailSettingsResult.from_dict(alert_user_email_settings_result_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


