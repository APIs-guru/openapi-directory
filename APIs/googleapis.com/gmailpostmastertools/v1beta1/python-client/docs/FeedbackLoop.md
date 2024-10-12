# FeedbackLoop

[Feedback loop](https://support.google.com/mail/answer/6254652) identifier information.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | Feedback loop identifier that uniquely identifies individual campaigns. | [optional] 
**spam_ratio** | **float** | The ratio of user marked spam messages with the identifier vs the total number of inboxed messages with that identifier. | [optional] 

## Example

```python
from openapi_client.models.feedback_loop import FeedbackLoop

# TODO update the JSON string below
json = "{}"
# create an instance of FeedbackLoop from a JSON string
feedback_loop_instance = FeedbackLoop.from_json(json)
# print the JSON string representation of the object
print(FeedbackLoop.to_json())

# convert the object into a dict
feedback_loop_dict = feedback_loop_instance.to_dict()
# create an instance of FeedbackLoop from a dict
feedback_loop_from_dict = FeedbackLoop.from_dict(feedback_loop_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


