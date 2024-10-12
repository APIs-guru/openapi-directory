# GetJobResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data** | [**Job**](Job.md) |  | 
**operation** | **str** | Operation performed | 
**resource** | **str** | Unified API resource name | 
**service** | **str** | Apideck ID of service provider | 
**status** | **str** | HTTP Response Status | 
**status_code** | **int** | HTTP Response Status Code | 

## Example

```python
from openapi_client.models.get_job_response import GetJobResponse

# TODO update the JSON string below
json = "{}"
# create an instance of GetJobResponse from a JSON string
get_job_response_instance = GetJobResponse.from_json(json)
# print the JSON string representation of the object
print(GetJobResponse.to_json())

# convert the object into a dict
get_job_response_dict = get_job_response_instance.to_dict()
# create an instance of GetJobResponse from a dict
get_job_response_from_dict = GetJobResponse.from_dict(get_job_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


