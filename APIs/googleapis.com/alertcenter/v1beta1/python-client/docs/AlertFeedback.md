# AlertFeedback

A customer feedback about an alert.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**alert_id** | **str** | Output only. The alert identifier. | [optional] 
**create_time** | **str** | Output only. The time this feedback was created. | [optional] 
**customer_id** | **str** | Output only. The unique identifier of the Google Workspace account of the customer. | [optional] 
**email** | **str** | Output only. The email of the user that provided the feedback. | [optional] 
**feedback_id** | **str** | Output only. The unique identifier for the feedback. | [optional] 
**type** | **str** | Required. The type of the feedback. | [optional] 

## Example

```python
from openapi_client.models.alert_feedback import AlertFeedback

# TODO update the JSON string below
json = "{}"
# create an instance of AlertFeedback from a JSON string
alert_feedback_instance = AlertFeedback.from_json(json)
# print the JSON string representation of the object
print(AlertFeedback.to_json())

# convert the object into a dict
alert_feedback_dict = alert_feedback_instance.to_dict()
# create an instance of AlertFeedback from a dict
alert_feedback_from_dict = AlertFeedback.from_dict(alert_feedback_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


