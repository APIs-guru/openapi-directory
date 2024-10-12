# Grading

Grading for a single question

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**correct_answers** | [**CorrectAnswers**](CorrectAnswers.md) |  | [optional] 
**general_feedback** | [**Feedback**](Feedback.md) |  | [optional] 
**point_value** | **int** | Required. The maximum number of points a respondent can automatically get for a correct answer. This must not be negative. | [optional] 
**when_right** | [**Feedback**](Feedback.md) |  | [optional] 
**when_wrong** | [**Feedback**](Feedback.md) |  | [optional] 

## Example

```python
from openapi_client.models.grading import Grading

# TODO update the JSON string below
json = "{}"
# create an instance of Grading from a JSON string
grading_instance = Grading.from_json(json)
# print the JSON string representation of the object
print(Grading.to_json())

# convert the object into a dict
grading_dict = grading_instance.to_dict()
# create an instance of Grading from a dict
grading_from_dict = Grading.from_dict(grading_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


