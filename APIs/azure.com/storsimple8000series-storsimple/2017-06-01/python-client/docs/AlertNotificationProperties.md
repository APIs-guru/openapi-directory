# AlertNotificationProperties

The properties of the alert notification settings.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**additional_recipient_email_list** | **List[str]** | The alert notification email list. | [optional] 
**alert_notification_culture** | **str** | The alert notification culture. | [optional] 
**email_notification** | **str** | Indicates whether email notification enabled or not. | 
**notification_to_service_owners** | **str** | The value indicating whether alert notification enabled for admin or not. | [optional] 

## Example

```python
from openapi_client.models.alert_notification_properties import AlertNotificationProperties

# TODO update the JSON string below
json = "{}"
# create an instance of AlertNotificationProperties from a JSON string
alert_notification_properties_instance = AlertNotificationProperties.from_json(json)
# print the JSON string representation of the object
print(AlertNotificationProperties.to_json())

# convert the object into a dict
alert_notification_properties_dict = alert_notification_properties_instance.to_dict()
# create an instance of AlertNotificationProperties from a dict
alert_notification_properties_from_dict = AlertNotificationProperties.from_dict(alert_notification_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


