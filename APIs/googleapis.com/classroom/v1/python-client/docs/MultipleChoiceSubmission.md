# MultipleChoiceSubmission

Student work for a multiple-choice question.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**answer** | **str** | Student&#39;s select choice. | [optional] 

## Example

```python
from openapi_client.models.multiple_choice_submission import MultipleChoiceSubmission

# TODO update the JSON string below
json = "{}"
# create an instance of MultipleChoiceSubmission from a JSON string
multiple_choice_submission_instance = MultipleChoiceSubmission.from_json(json)
# print the JSON string representation of the object
print(MultipleChoiceSubmission.to_json())

# convert the object into a dict
multiple_choice_submission_dict = multiple_choice_submission_instance.to_dict()
# create an instance of MultipleChoiceSubmission from a dict
multiple_choice_submission_from_dict = MultipleChoiceSubmission.from_dict(multiple_choice_submission_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


