# Credential

The credential used by Deployment Manager and TypeProvider. Only one of the options is permitted.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**basic_auth** | [**BasicAuth**](BasicAuth.md) |  | [optional] 
**service_account** | [**ServiceAccount**](ServiceAccount.md) |  | [optional] 
**use_project_default** | **bool** | Specify to use the project default credential, only supported by Deployment. | [optional] 

## Example

```python
from openapi_client.models.credential import Credential

# TODO update the JSON string below
json = "{}"
# create an instance of Credential from a JSON string
credential_instance = Credential.from_json(json)
# print the JSON string representation of the object
print(Credential.to_json())

# convert the object into a dict
credential_dict = credential_instance.to_dict()
# create an instance of Credential from a dict
credential_from_dict = Credential.from_dict(credential_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


