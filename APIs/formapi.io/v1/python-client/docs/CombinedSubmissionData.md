# CombinedSubmissionData


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**expires_in** | **int** |  | [optional] 
**metadata** | **object** |  | [optional] 
**password** | **str** |  | [optional] 
**submission_ids** | **List[str]** |  | 
**test** | **bool** |  | [optional] 

## Example

```python
from openapi_client.models.combined_submission_data import CombinedSubmissionData

# TODO update the JSON string below
json = "{}"
# create an instance of CombinedSubmissionData from a JSON string
combined_submission_data_instance = CombinedSubmissionData.from_json(json)
# print the JSON string representation of the object
print(CombinedSubmissionData.to_json())

# convert the object into a dict
combined_submission_data_dict = combined_submission_data_instance.to_dict()
# create an instance of CombinedSubmissionData from a dict
combined_submission_data_from_dict = CombinedSubmissionData.from_dict(combined_submission_data_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


