# CreateSubmissionBatchResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**error** | **str** |  | [optional] 
**errors** | **List[str]** |  | [optional] 
**status** | **str** |  | 
**submission_batch** | [**SubmissionBatch**](SubmissionBatch.md) |  | 
**submissions** | [**List[CreateSubmissionBatchSubmissionsResponse]**](CreateSubmissionBatchSubmissionsResponse.md) |  | 

## Example

```python
from openapi_client.models.create_submission_batch_response import CreateSubmissionBatchResponse

# TODO update the JSON string below
json = "{}"
# create an instance of CreateSubmissionBatchResponse from a JSON string
create_submission_batch_response_instance = CreateSubmissionBatchResponse.from_json(json)
# print the JSON string representation of the object
print(CreateSubmissionBatchResponse.to_json())

# convert the object into a dict
create_submission_batch_response_dict = create_submission_batch_response_instance.to_dict()
# create an instance of CreateSubmissionBatchResponse from a dict
create_submission_batch_response_from_dict = CreateSubmissionBatchResponse.from_dict(create_submission_batch_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


