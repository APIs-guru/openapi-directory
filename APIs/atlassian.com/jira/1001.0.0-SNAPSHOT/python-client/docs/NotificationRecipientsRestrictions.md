# NotificationRecipientsRestrictions

Details of the group membership or permissions needed to receive the notification.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**group_ids** | **List[str]** | List of groupId memberships required to receive the notification. | [optional] 
**groups** | [**List[GroupName]**](GroupName.md) | List of group memberships required to receive the notification. | [optional] 
**permissions** | [**List[RestrictedPermission]**](RestrictedPermission.md) | List of permissions required to receive the notification. | [optional] 

## Example

```python
from openapi_client.models.notification_recipients_restrictions import NotificationRecipientsRestrictions

# TODO update the JSON string below
json = "{}"
# create an instance of NotificationRecipientsRestrictions from a JSON string
notification_recipients_restrictions_instance = NotificationRecipientsRestrictions.from_json(json)
# print the JSON string representation of the object
print(NotificationRecipientsRestrictions.to_json())

# convert the object into a dict
notification_recipients_restrictions_dict = notification_recipients_restrictions_instance.to_dict()
# create an instance of NotificationRecipientsRestrictions from a dict
notification_recipients_restrictions_from_dict = NotificationRecipientsRestrictions.from_dict(notification_recipients_restrictions_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


