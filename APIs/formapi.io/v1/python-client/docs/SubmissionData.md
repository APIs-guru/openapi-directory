# SubmissionData


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**css** | **str** |  | [optional] 
**data** | **object** |  | 
**data_requests** | [**List[CreateSubmissionDataRequestData]**](CreateSubmissionDataRequestData.md) |  | [optional] 
**expires_in** | **int** |  | [optional] 
**field_overrides** | **object** |  | [optional] 
**html** | **str** |  | [optional] 
**metadata** | **object** |  | [optional] 
**password** | **str** |  | [optional] 
**test** | **bool** |  | [optional] 

## Example

```python
from openapi_client.models.submission_data import SubmissionData

# TODO update the JSON string below
json = "{}"
# create an instance of SubmissionData from a JSON string
submission_data_instance = SubmissionData.from_json(json)
# print the JSON string representation of the object
print(SubmissionData.to_json())

# convert the object into a dict
submission_data_dict = submission_data_instance.to_dict()
# create an instance of SubmissionData from a dict
submission_data_from_dict = SubmissionData.from_dict(submission_data_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


