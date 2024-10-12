# AssignmentSubmissionUpdateComments


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**total** | **float** | The total number of comments added to the submission | [optional] 
**unread** | **float** | The number of unread comments for the current user | [optional] 

## Example

```python
from openapi_client.models.assignment_submission_update_comments import AssignmentSubmissionUpdateComments

# TODO update the JSON string below
json = "{}"
# create an instance of AssignmentSubmissionUpdateComments from a JSON string
assignment_submission_update_comments_instance = AssignmentSubmissionUpdateComments.from_json(json)
# print the JSON string representation of the object
print(AssignmentSubmissionUpdateComments.to_json())

# convert the object into a dict
assignment_submission_update_comments_dict = assignment_submission_update_comments_instance.to_dict()
# create an instance of AssignmentSubmissionUpdateComments from a dict
assignment_submission_update_comments_from_dict = AssignmentSubmissionUpdateComments.from_dict(assignment_submission_update_comments_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


