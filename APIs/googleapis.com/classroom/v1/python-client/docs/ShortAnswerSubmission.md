# ShortAnswerSubmission

Student work for a short answer question.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**answer** | **str** | Student response to a short-answer question. | [optional] 

## Example

```python
from openapi_client.models.short_answer_submission import ShortAnswerSubmission

# TODO update the JSON string below
json = "{}"
# create an instance of ShortAnswerSubmission from a JSON string
short_answer_submission_instance = ShortAnswerSubmission.from_json(json)
# print the JSON string representation of the object
print(ShortAnswerSubmission.to_json())

# convert the object into a dict
short_answer_submission_dict = short_answer_submission_instance.to_dict()
# create an instance of ShortAnswerSubmission from a dict
short_answer_submission_from_dict = ShortAnswerSubmission.from_dict(short_answer_submission_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


