# JobSecrets

The base class for the secrets

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**dc_access_security_code** | [**DcAccessSecurityCode**](DcAccessSecurityCode.md) |  | [optional] 
**job_secrets_type** | **str** | Used to indicate what type of job secrets object. | 

## Example

```python
from openapi_client.models.job_secrets import JobSecrets

# TODO update the JSON string below
json = "{}"
# create an instance of JobSecrets from a JSON string
job_secrets_instance = JobSecrets.from_json(json)
# print the JSON string representation of the object
print(JobSecrets.to_json())

# convert the object into a dict
job_secrets_dict = job_secrets_instance.to_dict()
# create an instance of JobSecrets from a dict
job_secrets_from_dict = JobSecrets.from_dict(job_secrets_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


