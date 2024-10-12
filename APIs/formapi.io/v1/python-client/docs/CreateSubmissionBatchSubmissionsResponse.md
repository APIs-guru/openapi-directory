# CreateSubmissionBatchSubmissionsResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**errors** | **List[str]** |  | [optional] 
**status** | **str** |  | 
**submission** | [**Submission**](Submission.md) |  | [optional] 

## Example

```python
from openapi_client.models.create_submission_batch_submissions_response import CreateSubmissionBatchSubmissionsResponse

# TODO update the JSON string below
json = "{}"
# create an instance of CreateSubmissionBatchSubmissionsResponse from a JSON string
create_submission_batch_submissions_response_instance = CreateSubmissionBatchSubmissionsResponse.from_json(json)
# print the JSON string representation of the object
print(CreateSubmissionBatchSubmissionsResponse.to_json())

# convert the object into a dict
create_submission_batch_submissions_response_dict = create_submission_batch_submissions_response_instance.to_dict()
# create an instance of CreateSubmissionBatchSubmissionsResponse from a dict
create_submission_batch_submissions_response_from_dict = CreateSubmissionBatchSubmissionsResponse.from_dict(create_submission_batch_submissions_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


