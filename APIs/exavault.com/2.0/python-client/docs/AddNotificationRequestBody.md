# AddNotificationRequestBody


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**action** | **str** | Type of action be notified about. Notifications will only be fired for the given type of action. Valid choices are **upload**, **download**, **delete** or **all** (upload/download/delete) | 
**message** | **str** | Custom message to include in notification emails. | [optional] 
**recipients** | **List[str]** | Email addresses to send notification emails to. If not specified, sends to the current user&#39;s email address. | [optional] 
**resource** | **str** | Resources for this notification. See details on [how to specify resources](#section/Identifying-Resources) above. | 
**send_email** | **bool** | Set to true if the user should be notified by email when the notification is triggered. | 
**type** | **str** | What kind of notification you&#39;re making. Valid choices are:  - **file** to monitor activity for a file resource - **folder** to monitor activity for a folder resource | 
**usernames** | **List[str]** | Determines which users&#39; actions should trigger the notification.   Rather than listing  individual users, you can also use 3 special options:  - **notice\\_user\\_all** for activity by any user or share recipient - **notice\\_user\\_all\\_users** for activity only by user accounts - **notice\\_user\\_all\\_recipient** for activity only by share recipients | 

## Example

```python
from openapi_client.models.add_notification_request_body import AddNotificationRequestBody

# TODO update the JSON string below
json = "{}"
# create an instance of AddNotificationRequestBody from a JSON string
add_notification_request_body_instance = AddNotificationRequestBody.from_json(json)
# print the JSON string representation of the object
print(AddNotificationRequestBody.to_json())

# convert the object into a dict
add_notification_request_body_dict = add_notification_request_body_instance.to_dict()
# create an instance of AddNotificationRequestBody from a dict
add_notification_request_body_from_dict = AddNotificationRequestBody.from_dict(add_notification_request_body_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


