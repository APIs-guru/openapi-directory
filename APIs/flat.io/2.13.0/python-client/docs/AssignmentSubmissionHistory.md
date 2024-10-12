# AssignmentSubmissionHistory

History item of the submission

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**attachment** | [**AssignmentSubmissionHistoryAttachment**](AssignmentSubmissionHistoryAttachment.md) |  | [optional] 
**var_date** | **datetime** | The date when the submission was changed | [optional] 
**draft_grade** | **float** | The numerator of the grade at this time in the submission grade history | [optional] 
**grade** | **float** | The numerator of the grade at this time in the submission grade history | [optional] 
**max_points** | **float** | The denominator of the grade at this time in the submission grade history | [optional] 
**state** | [**AssignmentSubmissionState**](AssignmentSubmissionState.md) |  | [optional] 
**users** | **List[str]** | The user(s) unique identifier(s) who made the change | [optional] 

## Example

```python
from openapi_client.models.assignment_submission_history import AssignmentSubmissionHistory

# TODO update the JSON string below
json = "{}"
# create an instance of AssignmentSubmissionHistory from a JSON string
assignment_submission_history_instance = AssignmentSubmissionHistory.from_json(json)
# print the JSON string representation of the object
print(AssignmentSubmissionHistory.to_json())

# convert the object into a dict
assignment_submission_history_dict = assignment_submission_history_instance.to_dict()
# create an instance of AssignmentSubmissionHistory from a dict
assignment_submission_history_from_dict = AssignmentSubmissionHistory.from_dict(assignment_submission_history_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


