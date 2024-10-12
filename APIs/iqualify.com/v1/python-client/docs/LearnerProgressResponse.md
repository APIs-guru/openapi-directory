# LearnerProgressResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**completion** | **str** |  | [optional] 
**course_id** | **str** |  | [optional] 
**email** | **str** |  | [optional] 
**first_name** | **str** |  | [optional] 
**last_logged_in_at** | **datetime** |  | [optional] 
**last_name** | **str** |  | [optional] 
**person_id** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.learner_progress_response import LearnerProgressResponse

# TODO update the JSON string below
json = "{}"
# create an instance of LearnerProgressResponse from a JSON string
learner_progress_response_instance = LearnerProgressResponse.from_json(json)
# print the JSON string representation of the object
print(LearnerProgressResponse.to_json())

# convert the object into a dict
learner_progress_response_dict = learner_progress_response_instance.to_dict()
# create an instance of LearnerProgressResponse from a dict
learner_progress_response_from_dict = LearnerProgressResponse.from_dict(learner_progress_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


