# CredentialCreateOrUpdateParameters

The parameters supplied to the create or update credential operation.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** | Gets or sets the name of the credential. | 
**properties** | [**CredentialCreateOrUpdateProperties**](CredentialCreateOrUpdateProperties.md) |  | 

## Example

```python
from openapi_client.models.credential_create_or_update_parameters import CredentialCreateOrUpdateParameters

# TODO update the JSON string below
json = "{}"
# create an instance of CredentialCreateOrUpdateParameters from a JSON string
credential_create_or_update_parameters_instance = CredentialCreateOrUpdateParameters.from_json(json)
# print the JSON string representation of the object
print(CredentialCreateOrUpdateParameters.to_json())

# convert the object into a dict
credential_create_or_update_parameters_dict = credential_create_or_update_parameters_instance.to_dict()
# create an instance of CredentialCreateOrUpdateParameters from a dict
credential_create_or_update_parameters_from_dict = CredentialCreateOrUpdateParameters.from_dict(credential_create_or_update_parameters_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


