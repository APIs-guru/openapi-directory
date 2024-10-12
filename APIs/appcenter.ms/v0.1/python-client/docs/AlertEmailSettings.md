# AlertEmailSettings

Alerting Email Settings

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**settings** | [**List[NotificationsGetAppEmailSettings200ResponseAllOfAllOfSettingsInner]**](NotificationsGetAppEmailSettings200ResponseAllOfAllOfSettingsInner.md) | The settings the user has for the app | 

## Example

```python
from openapi_client.models.alert_email_settings import AlertEmailSettings

# TODO update the JSON string below
json = "{}"
# create an instance of AlertEmailSettings from a JSON string
alert_email_settings_instance = AlertEmailSettings.from_json(json)
# print the JSON string representation of the object
print(AlertEmailSettings.to_json())

# convert the object into a dict
alert_email_settings_dict = alert_email_settings_instance.to_dict()
# create an instance of AlertEmailSettings from a dict
alert_email_settings_from_dict = AlertEmailSettings.from_dict(alert_email_settings_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


