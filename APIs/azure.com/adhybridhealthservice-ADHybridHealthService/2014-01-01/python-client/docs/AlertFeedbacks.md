# AlertFeedbacks

The list of alert feedback.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**value** | [**List[AlertFeedback]**](AlertFeedback.md) | The value returned by the operation. | [optional] 

## Example

```python
from openapi_client.models.alert_feedbacks import AlertFeedbacks

# TODO update the JSON string below
json = "{}"
# create an instance of AlertFeedbacks from a JSON string
alert_feedbacks_instance = AlertFeedbacks.from_json(json)
# print the JSON string representation of the object
print(AlertFeedbacks.to_json())

# convert the object into a dict
alert_feedbacks_dict = alert_feedbacks_instance.to_dict()
# create an instance of AlertFeedbacks from a dict
alert_feedbacks_from_dict = AlertFeedbacks.from_dict(alert_feedbacks_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


