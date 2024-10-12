# AlertSettingsProperties

Class containing the properties of AlertSettings

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**additional_recipient_email_list** | **List[str]** | List of email addresses (apart from admin/co-admin of subscription) to whom the alert emails need to be sent | [optional] 
**alert_notification_culture** | **str** | Culture setting to be used while building alert emails. For eg: \&quot;en-US\&quot; | 
**email_notification** | **str** | Value indicating whether user/admins will receive emails when an alert condition occurs on the system | 
**notification_to_service_owners** | **str** | Value indicating whether service owners will receive emails when an alert condition occurs on the system. Applicable only if emailNotification flag is Enabled. | 

## Example

```python
from openapi_client.models.alert_settings_properties import AlertSettingsProperties

# TODO update the JSON string below
json = "{}"
# create an instance of AlertSettingsProperties from a JSON string
alert_settings_properties_instance = AlertSettingsProperties.from_json(json)
# print the JSON string representation of the object
print(AlertSettingsProperties.to_json())

# convert the object into a dict
alert_settings_properties_dict = alert_settings_properties_instance.to_dict()
# create an instance of AlertSettingsProperties from a dict
alert_settings_properties_from_dict = AlertSettingsProperties.from_dict(alert_settings_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


