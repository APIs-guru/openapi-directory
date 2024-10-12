# TextQuestion

A text-based question.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**paragraph** | **bool** | Whether the question is a paragraph question or not. If not, the question is a short text question. | [optional] 

## Example

```python
from openapi_client.models.text_question import TextQuestion

# TODO update the JSON string below
json = "{}"
# create an instance of TextQuestion from a JSON string
text_question_instance = TextQuestion.from_json(json)
# print the JSON string representation of the object
print(TextQuestion.to_json())

# convert the object into a dict
text_question_dict = text_question_instance.to_dict()
# create an instance of TextQuestion from a dict
text_question_from_dict = TextQuestion.from_dict(text_question_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


