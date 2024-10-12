# Feedback


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**content** | **str** | A comment written by the reviewer about the user (may be null). | [optional] 
**var_date** | **datetime** | Date when the feedback was submitted. | [optional] 
**feedback_id** | **str** |  | [optional] 
**positive** | **bool** | Set to true for positive feedback and false for negative feedback. | [optional] 
**reviewer_user_id** | **str** | The user ID of the user that submitted the feedback. | [optional] 
**user_id** | **str** | The user ID of the user that the feedback is about. | [optional] 

## Example

```python
from openapi_client.models.feedback import Feedback

# TODO update the JSON string below
json = "{}"
# create an instance of Feedback from a JSON string
feedback_instance = Feedback.from_json(json)
# print the JSON string representation of the object
print(Feedback.to_json())

# convert the object into a dict
feedback_dict = feedback_instance.to_dict()
# create an instance of Feedback from a dict
feedback_from_dict = Feedback.from_dict(feedback_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


