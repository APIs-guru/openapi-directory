# AssignmentSubmissionComment

Feedback comment added to an assignment submission

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**comment** | **str** | The comment text | [optional] 
**var_date** | **datetime** | The date when the comment was posted | [optional] 
**id** | **str** | The comment unique identifier | [optional] 
**modification_date** | **datetime** | The date of the last comment modification | [optional] 
**submission** | **str** | The submission unique identifier | [optional] 
**unread** | **bool** | True if the comment is unread by the current user | [optional] 
**user** | **str** | The author unique identifier | [optional] 

## Example

```python
from openapi_client.models.assignment_submission_comment import AssignmentSubmissionComment

# TODO update the JSON string below
json = "{}"
# create an instance of AssignmentSubmissionComment from a JSON string
assignment_submission_comment_instance = AssignmentSubmissionComment.from_json(json)
# print the JSON string representation of the object
print(AssignmentSubmissionComment.to_json())

# convert the object into a dict
assignment_submission_comment_dict = assignment_submission_comment_instance.to_dict()
# create an instance of AssignmentSubmissionComment from a dict
assignment_submission_comment_from_dict = AssignmentSubmissionComment.from_dict(assignment_submission_comment_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


