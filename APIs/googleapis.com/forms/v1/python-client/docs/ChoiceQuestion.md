# ChoiceQuestion

A radio/checkbox/dropdown question.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**options** | [**List[Option]**](Option.md) | Required. List of options that a respondent must choose from. | [optional] 
**shuffle** | **bool** | Whether the options should be displayed in random order for different instances of the quiz. This is often used to prevent cheating by respondents who might be looking at another respondent&#39;s screen, or to address bias in a survey that might be introduced by always putting the same options first or last. | [optional] 
**type** | **str** | Required. The type of choice question. | [optional] 

## Example

```python
from openapi_client.models.choice_question import ChoiceQuestion

# TODO update the JSON string below
json = "{}"
# create an instance of ChoiceQuestion from a JSON string
choice_question_instance = ChoiceQuestion.from_json(json)
# print the JSON string representation of the object
print(ChoiceQuestion.to_json())

# convert the object into a dict
choice_question_dict = choice_question_instance.to_dict()
# create an instance of ChoiceQuestion from a dict
choice_question_from_dict = ChoiceQuestion.from_dict(choice_question_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


