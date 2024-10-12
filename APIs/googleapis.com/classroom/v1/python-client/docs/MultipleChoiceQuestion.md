# MultipleChoiceQuestion

Additional details for multiple-choice questions.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**choices** | **List[str]** | Possible choices. | [optional] 

## Example

```python
from openapi_client.models.multiple_choice_question import MultipleChoiceQuestion

# TODO update the JSON string below
json = "{}"
# create an instance of MultipleChoiceQuestion from a JSON string
multiple_choice_question_instance = MultipleChoiceQuestion.from_json(json)
# print the JSON string representation of the object
print(MultipleChoiceQuestion.to_json())

# convert the object into a dict
multiple_choice_question_dict = multiple_choice_question_instance.to_dict()
# create an instance of MultipleChoiceQuestion from a dict
multiple_choice_question_from_dict = MultipleChoiceQuestion.from_dict(multiple_choice_question_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


