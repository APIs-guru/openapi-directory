# QuizMarkResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**attempts** | **int** |  | [optional] 
**last_attempt_at** | **datetime** |  | [optional] 
**learner_email** | **str** |  | [optional] 
**learner_fullname** | **str** |  | [optional] 
**learner_person_id** | **str** |  | [optional] 
**mark** | **str** |  | [optional] 
**quiz_id** | **str** |  | [optional] 
**quiz_title** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.quiz_mark_response import QuizMarkResponse

# TODO update the JSON string below
json = "{}"
# create an instance of QuizMarkResponse from a JSON string
quiz_mark_response_instance = QuizMarkResponse.from_json(json)
# print the JSON string representation of the object
print(QuizMarkResponse.to_json())

# convert the object into a dict
quiz_mark_response_dict = quiz_mark_response_instance.to_dict()
# create an instance of QuizMarkResponse from a dict
quiz_mark_response_from_dict = QuizMarkResponse.from_dict(quiz_mark_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


