# JobCredentialProperties

Properties of a job credential.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**password** | **str** | The credential password. | 
**username** | **str** | The credential user name. | 

## Example

```python
from openapi_client.models.job_credential_properties import JobCredentialProperties

# TODO update the JSON string below
json = "{}"
# create an instance of JobCredentialProperties from a JSON string
job_credential_properties_instance = JobCredentialProperties.from_json(json)
# print the JSON string representation of the object
print(JobCredentialProperties.to_json())

# convert the object into a dict
job_credential_properties_dict = job_credential_properties_instance.to_dict()
# create an instance of JobCredentialProperties from a dict
job_credential_properties_from_dict = JobCredentialProperties.from_dict(job_credential_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


