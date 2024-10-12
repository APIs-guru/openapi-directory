# FeedbackLoopOut


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**feedback_credits** | **int** | Number of units recredited as per feedback loop successful classification | [optional] 

## Example

```python
from openapi_client.models.feedback_loop_out import FeedbackLoopOut

# TODO update the JSON string below
json = "{}"
# create an instance of FeedbackLoopOut from a JSON string
feedback_loop_out_instance = FeedbackLoopOut.from_json(json)
# print the JSON string representation of the object
print(FeedbackLoopOut.to_json())

# convert the object into a dict
feedback_loop_out_dict = feedback_loop_out_instance.to_dict()
# create an instance of FeedbackLoopOut from a dict
feedback_loop_out_from_dict = FeedbackLoopOut.from_dict(feedback_loop_out_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


