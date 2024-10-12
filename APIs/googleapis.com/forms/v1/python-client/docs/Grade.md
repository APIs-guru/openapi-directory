# Grade

Grade information associated with a respondent's answer to a question.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**correct** | **bool** | Output only. Whether the question was answered correctly or not. A zero-point score is not enough to infer incorrectness, since a correctly answered question could be worth zero points. | [optional] [readonly] 
**feedback** | [**Feedback**](Feedback.md) |  | [optional] 
**score** | **float** | Output only. The numeric score awarded for the answer. | [optional] [readonly] 

## Example

```python
from openapi_client.models.grade import Grade

# TODO update the JSON string below
json = "{}"
# create an instance of Grade from a JSON string
grade_instance = Grade.from_json(json)
# print the JSON string representation of the object
print(Grade.to_json())

# convert the object into a dict
grade_dict = grade_instance.to_dict()
# create an instance of Grade from a dict
grade_from_dict = Grade.from_dict(grade_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


