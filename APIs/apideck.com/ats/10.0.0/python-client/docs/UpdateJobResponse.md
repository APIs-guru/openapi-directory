# UpdateJobResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data** | [**UnifiedId**](UnifiedId.md) |  | 
**operation** | **str** | Operation performed | 
**resource** | **str** | Unified API resource name | 
**service** | **str** | Apideck ID of service provider | 
**status** | **str** | HTTP Response Status | 
**status_code** | **int** | HTTP Response Status Code | 

## Example

```python
from openapi_client.models.update_job_response import UpdateJobResponse

# TODO update the JSON string below
json = "{}"
# create an instance of UpdateJobResponse from a JSON string
update_job_response_instance = UpdateJobResponse.from_json(json)
# print the JSON string representation of the object
print(UpdateJobResponse.to_json())

# convert the object into a dict
update_job_response_dict = update_job_response_instance.to_dict()
# create an instance of UpdateJobResponse from a dict
update_job_response_from_dict = UpdateJobResponse.from_dict(update_job_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


