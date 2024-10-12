# SubmissionDataRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**auth_phone_number_hash** | **str** |  | [optional] 
**auth_provider** | **str** |  | [optional] 
**auth_second_factor_type** | **str** |  | [optional] 
**auth_session_id_hash** | **str** |  | [optional] 
**auth_session_started_at** | **str** |  | [optional] 
**auth_type** | **str** |  | [optional] 
**auth_user_id_hash** | **str** |  | [optional] 
**auth_username_hash** | **str** |  | [optional] 
**completed_at** | **str** |  | [optional] 
**email** | **str** |  | 
**fields** | **List[str]** |  | 
**id** | **str** |  | 
**ip_address** | **str** |  | [optional] 
**metadata** | **object** |  | 
**name** | **str** |  | 
**order** | **int** |  | 
**sort_order** | **int** |  | 
**state** | **str** |  | 
**submission_id** | **str** |  | [optional] 
**user_agent** | **str** |  | [optional] 
**viewed_at** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.submission_data_request import SubmissionDataRequest

# TODO update the JSON string below
json = "{}"
# create an instance of SubmissionDataRequest from a JSON string
submission_data_request_instance = SubmissionDataRequest.from_json(json)
# print the JSON string representation of the object
print(SubmissionDataRequest.to_json())

# convert the object into a dict
submission_data_request_dict = submission_data_request_instance.to_dict()
# create an instance of SubmissionDataRequest from a dict
submission_data_request_from_dict = SubmissionDataRequest.from_dict(submission_data_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


