# SecretCreateOrUpdateParameters

Parameters for creating or updating a secret

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**properties** | [**SecretProperties**](SecretProperties.md) |  | 
**tags** | **Dict[str, str]** | The tags that will be assigned to the secret.  | [optional] 

## Example

```python
from openapi_client.models.secret_create_or_update_parameters import SecretCreateOrUpdateParameters

# TODO update the JSON string below
json = "{}"
# create an instance of SecretCreateOrUpdateParameters from a JSON string
secret_create_or_update_parameters_instance = SecretCreateOrUpdateParameters.from_json(json)
# print the JSON string representation of the object
print(SecretCreateOrUpdateParameters.to_json())

# convert the object into a dict
secret_create_or_update_parameters_dict = secret_create_or_update_parameters_instance.to_dict()
# create an instance of SecretCreateOrUpdateParameters from a dict
secret_create_or_update_parameters_from_dict = SecretCreateOrUpdateParameters.from_dict(secret_create_or_update_parameters_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


