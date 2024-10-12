# TextAnswers

A question's answers as text.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**answers** | [**List[TextAnswer]**](TextAnswer.md) | Output only. Answers to a question. For multiple-value ChoiceQuestions, each answer is a separate value. | [optional] [readonly] 

## Example

```python
from openapi_client.models.text_answers import TextAnswers

# TODO update the JSON string below
json = "{}"
# create an instance of TextAnswers from a JSON string
text_answers_instance = TextAnswers.from_json(json)
# print the JSON string representation of the object
print(TextAnswers.to_json())

# convert the object into a dict
text_answers_dict = text_answers_instance.to_dict()
# create an instance of TextAnswers from a dict
text_answers_from_dict = TextAnswers.from_dict(text_answers_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


