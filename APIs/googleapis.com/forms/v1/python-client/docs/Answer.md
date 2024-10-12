# Answer

The submitted answer for a question.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**file_upload_answers** | [**FileUploadAnswers**](FileUploadAnswers.md) |  | [optional] 
**grade** | [**Grade**](Grade.md) |  | [optional] 
**question_id** | **str** | Output only. The question&#39;s ID. See also Question.question_id. | [optional] [readonly] 
**text_answers** | [**TextAnswers**](TextAnswers.md) |  | [optional] 

## Example

```python
from openapi_client.models.answer import Answer

# TODO update the JSON string below
json = "{}"
# create an instance of Answer from a JSON string
answer_instance = Answer.from_json(json)
# print the JSON string representation of the object
print(Answer.to_json())

# convert the object into a dict
answer_dict = answer_instance.to_dict()
# create an instance of Answer from a dict
answer_from_dict = Answer.from_dict(answer_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


