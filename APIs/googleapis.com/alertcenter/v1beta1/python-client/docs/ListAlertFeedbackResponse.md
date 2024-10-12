# ListAlertFeedbackResponse

Response message for an alert feedback listing request.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**feedback** | [**List[AlertFeedback]**](AlertFeedback.md) | The list of alert feedback. Feedback entries for each alert are ordered by creation time descending. | [optional] 

## Example

```python
from openapi_client.models.list_alert_feedback_response import ListAlertFeedbackResponse

# TODO update the JSON string below
json = "{}"
# create an instance of ListAlertFeedbackResponse from a JSON string
list_alert_feedback_response_instance = ListAlertFeedbackResponse.from_json(json)
# print the JSON string representation of the object
print(ListAlertFeedbackResponse.to_json())

# convert the object into a dict
list_alert_feedback_response_dict = list_alert_feedback_response_instance.to_dict()
# create an instance of ListAlertFeedbackResponse from a dict
list_alert_feedback_response_from_dict = ListAlertFeedbackResponse.from_dict(list_alert_feedback_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


