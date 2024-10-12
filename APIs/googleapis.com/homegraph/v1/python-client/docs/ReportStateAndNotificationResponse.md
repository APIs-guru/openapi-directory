# ReportStateAndNotificationResponse

Response type for the [`ReportStateAndNotification`](#google.home.graph.v1.HomeGraphApiService.ReportStateAndNotification) call.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**request_id** | **str** | Request ID copied from ReportStateAndNotificationRequest. | [optional] 

## Example

```python
from openapi_client.models.report_state_and_notification_response import ReportStateAndNotificationResponse

# TODO update the JSON string below
json = "{}"
# create an instance of ReportStateAndNotificationResponse from a JSON string
report_state_and_notification_response_instance = ReportStateAndNotificationResponse.from_json(json)
# print the JSON string representation of the object
print(ReportStateAndNotificationResponse.to_json())

# convert the object into a dict
report_state_and_notification_response_dict = report_state_and_notification_response_instance.to_dict()
# create an instance of ReportStateAndNotificationResponse from a dict
report_state_and_notification_response_from_dict = ReportStateAndNotificationResponse.from_dict(report_state_and_notification_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


