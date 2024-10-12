# SendNotificationRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**user_ids** | **List[str]** | user list to send email notification | 

## Example

```python
from openapi_client.models.send_notification_request import SendNotificationRequest

# TODO update the JSON string below
json = "{}"
# create an instance of SendNotificationRequest from a JSON string
send_notification_request_instance = SendNotificationRequest.from_json(json)
# print the JSON string representation of the object
print(SendNotificationRequest.to_json())

# convert the object into a dict
send_notification_request_dict = send_notification_request_instance.to_dict()
# create an instance of SendNotificationRequest from a dict
send_notification_request_from_dict = SendNotificationRequest.from_dict(send_notification_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


