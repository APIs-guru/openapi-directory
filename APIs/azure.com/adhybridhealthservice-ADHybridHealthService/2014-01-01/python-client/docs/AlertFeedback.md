# AlertFeedback

The alert feedback details.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**comment** | **str** | Additional comments related to the alert. | [optional] 
**consented_to_share** | **bool** | Indicates if the alert feedback can be shared from product team. | [optional] 
**created_date** | **datetime** | The date and time,in UTC,when the alert was created. | [optional] 
**feedback** | **str** | The feedback for the alert which indicates if the customer likes or dislikes the alert. | [optional] 
**level** | **str** | The alert level which indicates the severity of the alert. | [optional] 
**service_member_id** | **str** | The server Id of the alert. | [optional] 
**short_name** | **str** | The alert short name. | [optional] 
**state** | **str** | The alert state which can be either active or resolved with multiple resolution types. | [optional] 

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


