# SubmissionBatchData


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**metadata** | **object** |  | [optional] 
**submissions** | [**List[SubmissionDataBatchRequest]**](SubmissionDataBatchRequest.md) |  | 
**template_id** | **str** |  | [optional] 
**test** | **bool** |  | [optional] 

## Example

```python
from openapi_client.models.submission_batch_data import SubmissionBatchData

# TODO update the JSON string below
json = "{}"
# create an instance of SubmissionBatchData from a JSON string
submission_batch_data_instance = SubmissionBatchData.from_json(json)
# print the JSON string representation of the object
print(SubmissionBatchData.to_json())

# convert the object into a dict
submission_batch_data_dict = submission_batch_data_instance.to_dict()
# create an instance of SubmissionBatchData from a dict
submission_batch_data_from_dict = SubmissionBatchData.from_dict(submission_batch_data_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


