# SubmissionHistory

The history of the submission. This currently includes state and grade histories.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**grade_history** | [**GradeHistory**](GradeHistory.md) |  | [optional] 
**state_history** | [**StateHistory**](StateHistory.md) |  | [optional] 

## Example

```python
from openapi_client.models.submission_history import SubmissionHistory

# TODO update the JSON string below
json = "{}"
# create an instance of SubmissionHistory from a JSON string
submission_history_instance = SubmissionHistory.from_json(json)
# print the JSON string representation of the object
print(SubmissionHistory.to_json())

# convert the object into a dict
submission_history_dict = submission_history_instance.to_dict()
# create an instance of SubmissionHistory from a dict
submission_history_from_dict = SubmissionHistory.from_dict(submission_history_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


