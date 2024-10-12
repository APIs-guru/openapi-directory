# UnencryptedCredentials

Unencrypted credentials for accessing device.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**job_name** | **str** | Name of the job. | [optional] [readonly] 
**job_secrets** | [**JobSecrets**](JobSecrets.md) |  | [optional] 

## Example

```python
from openapi_client.models.unencrypted_credentials import UnencryptedCredentials

# TODO update the JSON string below
json = "{}"
# create an instance of UnencryptedCredentials from a JSON string
unencrypted_credentials_instance = UnencryptedCredentials.from_json(json)
# print the JSON string representation of the object
print(UnencryptedCredentials.to_json())

# convert the object into a dict
unencrypted_credentials_dict = unencrypted_credentials_instance.to_dict()
# create an instance of UnencryptedCredentials from a dict
unencrypted_credentials_from_dict = UnencryptedCredentials.from_dict(unencrypted_credentials_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


