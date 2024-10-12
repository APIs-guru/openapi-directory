# SecretValueReference

Reference to a KeyVault secret.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**key_vault** | [**KeyVaultReference**](KeyVaultReference.md) |  | 
**secret_name** | **str** | Name of the secret. | 
**secret_version** | **str** | Version of the secret, (if there are multiple versions) | [optional] 

## Example

```python
from openapi_client.models.secret_value_reference import SecretValueReference

# TODO update the JSON string below
json = "{}"
# create an instance of SecretValueReference from a JSON string
secret_value_reference_instance = SecretValueReference.from_json(json)
# print the JSON string representation of the object
print(SecretValueReference.to_json())

# convert the object into a dict
secret_value_reference_dict = secret_value_reference_instance.to_dict()
# create an instance of SecretValueReference from a dict
secret_value_reference_from_dict = SecretValueReference.from_dict(secret_value_reference_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


