# AssignmentSubmission

Student work for an assignment.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**attachments** | [**List[Attachment]**](Attachment.md) | Attachments added by the student. Drive files that correspond to materials with a share mode of STUDENT_COPY may not exist yet if the student has not accessed the assignment in Classroom. Some attachment metadata is only populated if the requesting user has permission to access it. Identifier and alternate_link fields are always available, but others (for example, title) may not be. | [optional] 

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


