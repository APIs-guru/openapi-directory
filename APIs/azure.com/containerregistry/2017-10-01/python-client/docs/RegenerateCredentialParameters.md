# RegenerateCredentialParameters

The parameters used to regenerate the login credential.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** | Specifies name of the password which should be regenerated -- password or password2. | 

## Example

```python
from openapi_client.models.regenerate_credential_parameters import RegenerateCredentialParameters

# TODO update the JSON string below
json = "{}"
# create an instance of RegenerateCredentialParameters from a JSON string
regenerate_credential_parameters_instance = RegenerateCredentialParameters.from_json(json)
# print the JSON string representation of the object
print(RegenerateCredentialParameters.to_json())

# convert the object into a dict
regenerate_credential_parameters_dict = regenerate_credential_parameters_instance.to_dict()
# create an instance of RegenerateCredentialParameters from a dict
regenerate_credential_parameters_from_dict = RegenerateCredentialParameters.from_dict(regenerate_credential_parameters_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


