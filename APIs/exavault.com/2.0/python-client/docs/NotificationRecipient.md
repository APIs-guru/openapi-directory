# NotificationRecipient


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**created** | **datetime** | Timestamp of adding notification recipient. | [optional] 
**email** | **str** | Recipient email. | [optional] 
**id** | **int** | ID of the recipient. | [optional] 
**modified** | **datetime** | Timestamp of notification recipient modification. | [optional] 
**notification_id** | **int** | ID of the notification that the recipient belongs to. | [optional] 

## Example

```python
from openapi_client.models.notification_recipient import NotificationRecipient

# TODO update the JSON string below
json = "{}"
# create an instance of NotificationRecipient from a JSON string
notification_recipient_instance = NotificationRecipient.from_json(json)
# print the JSON string representation of the object
print(NotificationRecipient.to_json())

# convert the object into a dict
notification_recipient_dict = notification_recipient_instance.to_dict()
# create an instance of NotificationRecipient from a dict
notification_recipient_from_dict = NotificationRecipient.from_dict(notification_recipient_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


