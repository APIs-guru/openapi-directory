# Submission


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**actions** | [**List[SubmissionAction]**](SubmissionAction.md) |  | [optional] 
**batch_id** | **str** |  | [optional] 
**data** | **object** |  | [optional] 
**data_requests** | [**List[SubmissionDataRequest]**](SubmissionDataRequest.md) |  | [optional] 
**download_url** | **str** |  | [optional] 
**editable** | **bool** |  | [optional] 
**expired** | **bool** |  | 
**expires_at** | **str** |  | [optional] 
**id** | **str** |  | 
**metadata** | **object** |  | [optional] 
**pdf_hash** | **str** |  | [optional] 
**permanent_download_url** | **str** |  | [optional] 
**processed_at** | **str** |  | [optional] 
**referrer** | **str** |  | [optional] 
**source** | **str** |  | [optional] 
**state** | **str** |  | 
**template_id** | **str** |  | [optional] 
**test** | **bool** |  | 
**truncated_text** | **object** |  | [optional] 

## Example

```python
from openapi_client.models.submission import Submission

# TODO update the JSON string below
json = "{}"
# create an instance of Submission from a JSON string
submission_instance = Submission.from_json(json)
# print the JSON string representation of the object
print(Submission.to_json())

# convert the object into a dict
submission_dict = submission_instance.to_dict()
# create an instance of Submission from a dict
submission_from_dict = Submission.from_dict(submission_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


