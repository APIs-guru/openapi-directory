# CorrectAnswer

A single correct answer for a question. For multiple-valued (`CHECKBOX`) questions, several `CorrectAnswer`s may be needed to represent a single correct response option.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**value** | **str** | Required. The correct answer value. See the documentation for TextAnswer.value for details on how various value types are formatted. | [optional] 

## Example

```python
from openapi_client.models.correct_answer import CorrectAnswer

# TODO update the JSON string below
json = "{}"
# create an instance of CorrectAnswer from a JSON string
correct_answer_instance = CorrectAnswer.from_json(json)
# print the JSON string representation of the object
print(CorrectAnswer.to_json())

# convert the object into a dict
correct_answer_dict = correct_answer_instance.to_dict()
# create an instance of CorrectAnswer from a dict
correct_answer_from_dict = CorrectAnswer.from_dict(correct_answer_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


