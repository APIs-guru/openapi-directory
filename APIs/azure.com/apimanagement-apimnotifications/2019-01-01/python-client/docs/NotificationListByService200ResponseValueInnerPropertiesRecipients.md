# NotificationListByService200ResponseValueInnerPropertiesRecipients

Notification Parameter contract.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**emails** | **List[str]** | List of Emails subscribed for the notification. | [optional] 
**users** | **List[str]** | List of Users subscribed for the notification. | [optional] 

## Example

```python
from openapi_client.models.notification_list_by_service200_response_value_inner_properties_recipients import NotificationListByService200ResponseValueInnerPropertiesRecipients

# TODO update the JSON string below
json = "{}"
# create an instance of NotificationListByService200ResponseValueInnerPropertiesRecipients from a JSON string
notification_list_by_service200_response_value_inner_properties_recipients_instance = NotificationListByService200ResponseValueInnerPropertiesRecipients.from_json(json)
# print the JSON string representation of the object
print(NotificationListByService200ResponseValueInnerPropertiesRecipients.to_json())

# convert the object into a dict
notification_list_by_service200_response_value_inner_properties_recipients_dict = notification_list_by_service200_response_value_inner_properties_recipients_instance.to_dict()
# create an instance of NotificationListByService200ResponseValueInnerPropertiesRecipients from a dict
notification_list_by_service200_response_value_inner_properties_recipients_from_dict = NotificationListByService200ResponseValueInnerPropertiesRecipients.from_dict(notification_list_by_service200_response_value_inner_properties_recipients_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


