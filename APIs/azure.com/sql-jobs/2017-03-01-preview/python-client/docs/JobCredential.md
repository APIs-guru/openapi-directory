# JobCredential

A stored credential that can be used by a job to connect to target databases.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**properties** | [**JobCredentialProperties**](JobCredentialProperties.md) |  | [optional] 
**id** | **str** | Resource ID. | [optional] [readonly] 
**name** | **str** | Resource name. | [optional] [readonly] 
**type** | **str** | Resource type. | [optional] [readonly] 

## Example

```python
from openapi_client.models.job_credential import JobCredential

# TODO update the JSON string below
json = "{}"
# create an instance of JobCredential from a JSON string
job_credential_instance = JobCredential.from_json(json)
# print the JSON string representation of the object
print(JobCredential.to_json())

# convert the object into a dict
job_credential_dict = job_credential_instance.to_dict()
# create an instance of JobCredential from a dict
job_credential_from_dict = JobCredential.from_dict(job_credential_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


