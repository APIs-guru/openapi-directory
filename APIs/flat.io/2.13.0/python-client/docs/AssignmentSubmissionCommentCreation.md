# AssignmentSubmissionCommentCreation

Creation of a assignment submission comment

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**comment** | **str** | The comment text | 

## Example

```python
from openapi_client.models.assignment_submission_comment_creation import AssignmentSubmissionCommentCreation

# TODO update the JSON string below
json = "{}"
# create an instance of AssignmentSubmissionCommentCreation from a JSON string
assignment_submission_comment_creation_instance = AssignmentSubmissionCommentCreation.from_json(json)
# print the JSON string representation of the object
print(AssignmentSubmissionCommentCreation.to_json())

# convert the object into a dict
assignment_submission_comment_creation_dict = assignment_submission_comment_creation_instance.to_dict()
# create an instance of AssignmentSubmissionCommentCreation from a dict
assignment_submission_comment_creation_from_dict = AssignmentSubmissionCommentCreation.from_dict(assignment_submission_comment_creation_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


