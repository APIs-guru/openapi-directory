# AssignmentSubmissionUpdate

Assignment Submission creation

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**attachments** | [**List[ClassAttachmentCreation]**](ClassAttachmentCreation.md) |  | [optional] 
**comments** | [**AssignmentSubmissionUpdateComments**](AssignmentSubmissionUpdateComments.md) |  | [optional] 
**draft_grade** | **float** | Optional grade. If unset, no grade was set. This value is only visible by the teacher, and we will be set to &#x60;grade&#x60; once the teacher returns the submission | [optional] 
**grade** | **float** | Optional grade. If unset, no grade was set. | [optional] 
**var_return** | **bool** | If &#x60;true&#x60;, the submission will be marked as done | [optional] 
**submit** | **bool** | If &#x60;true&#x60;, the submission will be marked as done | [optional] 

## Example

```python
from openapi_client.models.assignment_submission_update import AssignmentSubmissionUpdate

# TODO update the JSON string below
json = "{}"
# create an instance of AssignmentSubmissionUpdate from a JSON string
assignment_submission_update_instance = AssignmentSubmissionUpdate.from_json(json)
# print the JSON string representation of the object
print(AssignmentSubmissionUpdate.to_json())

# convert the object into a dict
assignment_submission_update_dict = assignment_submission_update_instance.to_dict()
# create an instance of AssignmentSubmissionUpdate from a dict
assignment_submission_update_from_dict = AssignmentSubmissionUpdate.from_dict(assignment_submission_update_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


