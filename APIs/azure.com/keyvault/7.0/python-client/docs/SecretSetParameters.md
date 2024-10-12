# SecretSetParameters

The secret set parameters.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**attributes** | [**SecretAttributes**](SecretAttributes.md) |  | [optional] 
**content_type** | **str** | Type of the secret value such as a password. | [optional] 
**tags** | **Dict[str, str]** | Application specific metadata in the form of key-value pairs. | [optional] 
**value** | **str** | The value of the secret. | 

## Example

```python
from openapi_client.models.secret_set_parameters import SecretSetParameters

# TODO update the JSON string below
json = "{}"
# create an instance of SecretSetParameters from a JSON string
secret_set_parameters_instance = SecretSetParameters.from_json(json)
# print the JSON string representation of the object
print(SecretSetParameters.to_json())

# convert the object into a dict
secret_set_parameters_dict = secret_set_parameters_instance.to_dict()
# create an instance of SecretSetParameters from a dict
secret_set_parameters_from_dict = SecretSetParameters.from_dict(secret_set_parameters_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


