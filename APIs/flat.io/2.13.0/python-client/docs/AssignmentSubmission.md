# AssignmentSubmission

Assignment Submission

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**assignment** | **str** | Unique identifier of the assignment | [optional] 
**attachments** | [**List[MediaAttachment]**](MediaAttachment.md) |  | [optional] 
**classroom** | **str** | Unique identifier of the classroom where the assignment was posted  | [optional] 
**creation_date** | **str** | The date when the submission was created | [optional] 
**creator** | **str** | The User identifier of the student who created the submission | [optional] 
**draft_grade** | **float** | Optional grade. If unset, no grade was set. This value is only visible by the teacher, and we will be set to &#x60;grade&#x60; once the teacher returns the submission | [optional] 
**google_classroom** | [**GoogleClassroomSubmission**](GoogleClassroomSubmission.md) |  | [optional] 
**grade** | **float** | Optional grade. If unset, no grade was set. | [optional] 
**id** | **str** | Unique identifier of the submission | [optional] 
**max_points** | **float** | Optional max points for the grade. If set, a corresponding &#x60;draftGrade&#x60; or &#x60;grade&#x60; will be set. | [optional] 
**microsoft_graph** | [**MicrosoftGraphSubmission**](MicrosoftGraphSubmission.md) |  | [optional] 
**return_creator** | **str** | The User unique identifier of the teacher who returned the submission  | [optional] 
**return_date** | **str** | The date when the teacher returned the work | [optional] 
**state** | [**AssignmentSubmissionState**](AssignmentSubmissionState.md) |  | [optional] 
**submission_date** | **str** | The date when the student submitted his work | [optional] 

## Example

```python
from openapi_client.models.assignment_submission import AssignmentSubmission

# TODO update the JSON string below
json = "{}"
# create an instance of AssignmentSubmission from a JSON string
assignment_submission_instance = AssignmentSubmission.from_json(json)
# print the JSON string representation of the object
print(AssignmentSubmission.to_json())

# convert the object into a dict
assignment_submission_dict = assignment_submission_instance.to_dict()
# create an instance of AssignmentSubmission from a dict
assignment_submission_from_dict = AssignmentSubmission.from_dict(assignment_submission_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


