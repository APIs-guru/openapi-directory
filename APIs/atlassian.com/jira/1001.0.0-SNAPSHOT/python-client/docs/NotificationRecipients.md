# NotificationRecipients

Details of the users and groups to receive the notification.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**assignee** | **bool** | Whether the notification should be sent to the issue&#39;s assignees. | [optional] 
**group_ids** | **List[str]** | List of groupIds to receive the notification. | [optional] 
**groups** | [**List[GroupName]**](GroupName.md) | List of groups to receive the notification. | [optional] 
**reporter** | **bool** | Whether the notification should be sent to the issue&#39;s reporter. | [optional] 
**users** | [**List[UserDetails]**](UserDetails.md) | List of users to receive the notification. | [optional] 
**voters** | **bool** | Whether the notification should be sent to the issue&#39;s voters. | [optional] 
**watchers** | **bool** | Whether the notification should be sent to the issue&#39;s watchers. | [optional] 

## Example

```python
from openapi_client.models.notification_recipients import NotificationRecipients

# TODO update the JSON string below
json = "{}"
# create an instance of NotificationRecipients from a JSON string
notification_recipients_instance = NotificationRecipients.from_json(json)
# print the JSON string representation of the object
print(NotificationRecipients.to_json())

# convert the object into a dict
notification_recipients_dict = notification_recipients_instance.to_dict()
# create an instance of NotificationRecipients from a dict
notification_recipients_from_dict = NotificationRecipients.from_dict(notification_recipients_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


