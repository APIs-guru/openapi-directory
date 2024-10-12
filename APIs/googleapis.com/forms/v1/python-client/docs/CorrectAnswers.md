# CorrectAnswers

The answer key for a question.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**answers** | [**List[CorrectAnswer]**](CorrectAnswer.md) | A list of correct answers. A quiz response can be automatically graded based on these answers. For single-valued questions, a response is marked correct if it matches any value in this list (in other words, multiple correct answers are possible). For multiple-valued (&#x60;CHECKBOX&#x60;) questions, a response is marked correct if it contains exactly the values in this list. | [optional] 

## Example

```python
from openapi_client.models.correct_answers import CorrectAnswers

# TODO update the JSON string below
json = "{}"
# create an instance of CorrectAnswers from a JSON string
correct_answers_instance = CorrectAnswers.from_json(json)
# print the JSON string representation of the object
print(CorrectAnswers.to_json())

# convert the object into a dict
correct_answers_dict = correct_answers_instance.to_dict()
# create an instance of CorrectAnswers from a dict
correct_answers_from_dict = CorrectAnswers.from_dict(correct_answers_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


