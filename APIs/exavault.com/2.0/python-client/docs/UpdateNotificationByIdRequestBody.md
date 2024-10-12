# UpdateNotificationByIdRequestBody


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**action** | **str** | Type of action be notified about. Notifications will only be sent for the given type of action. Valid choices are **upload**, **download**, **delete** or **all** (upload/download/delete) | [optional] 
**message** | **str** | Custom message to insert into the notification emails, along with the matching activity. | [optional] 
**recipients** | **List[str]** | Email addresses to send notification emails to. If empty, sends to the current user&#39;s email address. | [optional] 
**send_email** | **bool** | Whether an email should be sent to the recipients when matching activity happens. | [optional] 
**usernames** | **List[str]** | Determines which users&#39; actions should trigger the notification.   Rather than listing  individual users, you can also use 3 special options:  - **notice\\_user\\_all** for activity by any user or share recipient - **notice\\_user\\_all\\_users** for activity only by user accounts - **notice\\_user\\_all\\_recipients** for activity only by share recipients | [optional] 

## Example

```python
from openapi_client.models.update_notification_by_id_request_body import UpdateNotificationByIdRequestBody

# TODO update the JSON string below
json = "{}"
# create an instance of UpdateNotificationByIdRequestBody from a JSON string
update_notification_by_id_request_body_instance = UpdateNotificationByIdRequestBody.from_json(json)
# print the JSON string representation of the object
print(UpdateNotificationByIdRequestBody.to_json())

# convert the object into a dict
update_notification_by_id_request_body_dict = update_notification_by_id_request_body_instance.to_dict()
# create an instance of UpdateNotificationByIdRequestBody from a dict
update_notification_by_id_request_body_from_dict = UpdateNotificationByIdRequestBody.from_dict(update_notification_by_id_request_body_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


