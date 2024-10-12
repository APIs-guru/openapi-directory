# SubmissionDataBatchRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**css** | **str** |  | [optional] 
**data** | **object** |  | 
**html** | **str** |  | [optional] 
**metadata** | **object** |  | [optional] 
**template_id** | **str** |  | 
**test** | **bool** |  | [optional] 

## Example

```python
from openapi_client.models.submission_data_batch_request import SubmissionDataBatchRequest

# TODO update the JSON string below
json = "{}"
# create an instance of SubmissionDataBatchRequest from a JSON string
submission_data_batch_request_instance = SubmissionDataBatchRequest.from_json(json)
# print the JSON string representation of the object
print(SubmissionDataBatchRequest.to_json())

# convert the object into a dict
submission_data_batch_request_dict = submission_data_batch_request_instance.to_dict()
# create an instance of SubmissionDataBatchRequest from a dict
submission_data_batch_request_from_dict = SubmissionDataBatchRequest.from_dict(submission_data_batch_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


