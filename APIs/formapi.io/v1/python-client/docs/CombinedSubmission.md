# CombinedSubmission


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**actions** | [**List[CombinedSubmissionAction]**](CombinedSubmissionAction.md) |  | [optional] 
**download_url** | **str** |  | [optional] 
**error_message** | **str** |  | [optional] 
**expired** | **bool** |  | 
**expires_at** | **str** |  | [optional] 
**expires_in** | **int** |  | [optional] 
**id** | **str** |  | 
**metadata** | **object** |  | [optional] 
**password** | **str** |  | [optional] 
**pdf_hash** | **str** |  | [optional] 
**source_pdfs** | [**List[CombinedSubmissionSourcePdfsInner]**](CombinedSubmissionSourcePdfsInner.md) |  | 
**state** | **str** |  | 
**submission_ids** | **List[str]** |  | 

## Example

```python
from openapi_client.models.combined_submission import CombinedSubmission

# TODO update the JSON string below
json = "{}"
# create an instance of CombinedSubmission from a JSON string
combined_submission_instance = CombinedSubmission.from_json(json)
# print the JSON string representation of the object
print(CombinedSubmission.to_json())

# convert the object into a dict
combined_submission_dict = combined_submission_instance.to_dict()
# create an instance of CombinedSubmission from a dict
combined_submission_from_dict = CombinedSubmission.from_dict(combined_submission_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


