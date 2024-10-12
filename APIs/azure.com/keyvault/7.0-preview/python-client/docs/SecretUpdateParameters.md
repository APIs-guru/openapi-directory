# SecretUpdateParameters

The secret update parameters.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**attributes** | [**SecretAttributes**](SecretAttributes.md) |  | [optional] 
**content_type** | **str** | Type of the secret value such as a password. | [optional] 
**tags** | **Dict[str, str]** | Application specific metadata in the form of key-value pairs. | [optional] 

## Example

```python
from openapi_client.models.secret_update_parameters import SecretUpdateParameters

# TODO update the JSON string below
json = "{}"
# create an instance of SecretUpdateParameters from a JSON string
secret_update_parameters_instance = SecretUpdateParameters.from_json(json)
# print the JSON string representation of the object
print(SecretUpdateParameters.to_json())

# convert the object into a dict
secret_update_parameters_dict = secret_update_parameters_instance.to_dict()
# create an instance of SecretUpdateParameters from a dict
secret_update_parameters_from_dict = SecretUpdateParameters.from_dict(secret_update_parameters_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


