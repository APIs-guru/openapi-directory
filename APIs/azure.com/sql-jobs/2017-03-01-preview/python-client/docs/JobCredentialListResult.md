# JobCredentialListResult

A list of job credentials.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_link** | **str** | Link to retrieve next page of results. | [optional] [readonly] 
**value** | [**List[JobCredential]**](JobCredential.md) | Array of results. | [optional] [readonly] 

## Example

```python
from openapi_client.models.job_credential_list_result import JobCredentialListResult

# TODO update the JSON string below
json = "{}"
# create an instance of JobCredentialListResult from a JSON string
job_credential_list_result_instance = JobCredentialListResult.from_json(json)
# print the JSON string representation of the object
print(JobCredentialListResult.to_json())

# convert the object into a dict
job_credential_list_result_dict = job_credential_list_result_instance.to_dict()
# create an instance of JobCredentialListResult from a dict
job_credential_list_result_from_dict = JobCredentialListResult.from_dict(job_credential_list_result_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


