# ReportStateAndNotificationRequest

Request type for the [`ReportStateAndNotification`](#google.home.graph.v1.HomeGraphApiService.ReportStateAndNotification) call. It may include states, notifications, or both. States and notifications are defined per `device_id` (for example, \"123\" and \"456\" in the following example). Example: ```json { \"requestId\": \"ff36a3cc-ec34-11e6-b1a0-64510650abcf\", \"agentUserId\": \"1234\", \"payload\": { \"devices\": { \"states\": { \"123\": { \"on\": true }, \"456\": { \"on\": true, \"brightness\": 10 } }, } } } ```

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**agent_user_id** | **str** | Required. Third-party user ID. | [optional] 
**event_id** | **str** | Unique identifier per event (for example, a doorbell press). | [optional] 
**follow_up_token** | **str** | Deprecated. | [optional] 
**payload** | [**StateAndNotificationPayload**](StateAndNotificationPayload.md) |  | [optional] 
**request_id** | **str** | Request ID used for debugging. | [optional] 

## Example

```python
from openapi_client.models.report_state_and_notification_request import ReportStateAndNotificationRequest

# TODO update the JSON string below
json = "{}"
# create an instance of ReportStateAndNotificationRequest from a JSON string
report_state_and_notification_request_instance = ReportStateAndNotificationRequest.from_json(json)
# print the JSON string representation of the object
print(ReportStateAndNotificationRequest.to_json())

# convert the object into a dict
report_state_and_notification_request_dict = report_state_and_notification_request_instance.to_dict()
# create an instance of ReportStateAndNotificationRequest from a dict
report_state_and_notification_request_from_dict = ReportStateAndNotificationRequest.from_dict(report_state_and_notification_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


