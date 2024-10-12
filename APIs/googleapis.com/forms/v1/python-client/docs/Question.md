# Question

Any question. The specific type of question is known by its `kind`.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**choice_question** | [**ChoiceQuestion**](ChoiceQuestion.md) |  | [optional] 
**date_question** | [**DateQuestion**](DateQuestion.md) |  | [optional] 
**file_upload_question** | [**FileUploadQuestion**](FileUploadQuestion.md) |  | [optional] 
**grading** | [**Grading**](Grading.md) |  | [optional] 
**question_id** | **str** | Read only. The question ID. On creation, it can be provided but the ID must not be already used in the form. If not provided, a new ID is assigned. | [optional] 
**required** | **bool** | Whether the question must be answered in order for a respondent to submit their response. | [optional] 
**row_question** | [**RowQuestion**](RowQuestion.md) |  | [optional] 
**scale_question** | [**ScaleQuestion**](ScaleQuestion.md) |  | [optional] 
**text_question** | [**TextQuestion**](TextQuestion.md) |  | [optional] 
**time_question** | [**TimeQuestion**](TimeQuestion.md) |  | [optional] 

## Example

```python
from openapi_client.models.question import Question

# TODO update the JSON string below
json = "{}"
# create an instance of Question from a JSON string
question_instance = Question.from_json(json)
# print the JSON string representation of the object
print(Question.to_json())

# convert the object into a dict
question_dict = question_instance.to_dict()
# create an instance of Question from a dict
question_from_dict = Question.from_dict(question_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


