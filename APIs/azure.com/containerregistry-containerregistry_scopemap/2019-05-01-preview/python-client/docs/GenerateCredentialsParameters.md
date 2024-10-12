# GenerateCredentialsParameters

The parameters used to generate credentials for a specified token or user of a container registry.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**expiry** | **datetime** | The expiry date of the generated credentials after which the credentials become invalid. | [optional] 
**name** | **str** | Specifies name of the password which should be regenerated if any -- password1 or password2. | [optional] 
**token_id** | **str** | The resource ID of the token for which credentials have to be generated. | [optional] 

## Example

```python
from openapi_client.models.generate_credentials_parameters import GenerateCredentialsParameters

# TODO update the JSON string below
json = "{}"
# create an instance of GenerateCredentialsParameters from a JSON string
generate_credentials_parameters_instance = GenerateCredentialsParameters.from_json(json)
# print the JSON string representation of the object
print(GenerateCredentialsParameters.to_json())

# convert the object into a dict
generate_credentials_parameters_dict = generate_credentials_parameters_instance.to_dict()
# create an instance of GenerateCredentialsParameters from a dict
generate_credentials_parameters_from_dict = GenerateCredentialsParameters.from_dict(generate_credentials_parameters_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


