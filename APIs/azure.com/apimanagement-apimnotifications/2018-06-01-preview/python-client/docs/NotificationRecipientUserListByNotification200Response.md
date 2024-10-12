# NotificationRecipientUserListByNotification200Response

Paged Recipient User list representation.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_link** | **str** | Next page link if any. | [optional] 
**value** | [**List[NotificationRecipientUserListByNotification200ResponseValueInner]**](NotificationRecipientUserListByNotification200ResponseValueInner.md) | Page values. | [optional] 

## Example

```python
from openapi_client.models.notification_recipient_user_list_by_notification200_response import NotificationRecipientUserListByNotification200Response

# TODO update the JSON string below
json = "{}"
# create an instance of NotificationRecipientUserListByNotification200Response from a JSON string
notification_recipient_user_list_by_notification200_response_instance = NotificationRecipientUserListByNotification200Response.from_json(json)
# print the JSON string representation of the object
print(NotificationRecipientUserListByNotification200Response.to_json())

# convert the object into a dict
notification_recipient_user_list_by_notification200_response_dict = notification_recipient_user_list_by_notification200_response_instance.to_dict()
# create an instance of NotificationRecipientUserListByNotification200Response from a dict
notification_recipient_user_list_by_notification200_response_from_dict = NotificationRecipientUserListByNotification200Response.from_dict(notification_recipient_user_list_by_notification200_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


