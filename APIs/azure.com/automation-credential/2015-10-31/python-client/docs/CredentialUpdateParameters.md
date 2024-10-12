# CredentialUpdateParameters

The parameters supplied to the Update credential operation.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** | Gets or sets the name of the credential. | [optional] 
**properties** | [**CredentialUpdateProperties**](CredentialUpdateProperties.md) |  | [optional] 

## Example

```python
from openapi_client.models.credential_update_parameters import CredentialUpdateParameters

# TODO update the JSON string below
json = "{}"
# create an instance of CredentialUpdateParameters from a JSON string
credential_update_parameters_instance = CredentialUpdateParameters.from_json(json)
# print the JSON string representation of the object
print(CredentialUpdateParameters.to_json())

# convert the object into a dict
credential_update_parameters_dict = credential_update_parameters_instance.to_dict()
# create an instance of CredentialUpdateParameters from a dict
credential_update_parameters_from_dict = CredentialUpdateParameters.from_dict(credential_update_parameters_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


