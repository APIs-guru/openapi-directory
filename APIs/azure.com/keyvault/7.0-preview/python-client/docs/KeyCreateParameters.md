# KeyCreateParameters

The key create parameters.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**attributes** | [**KeyAttributes**](KeyAttributes.md) |  | [optional] 
**crv** | **str** | Elliptic curve name. For valid values, see JsonWebKeyCurveName. | [optional] 
**key_ops** | **List[str]** |  | [optional] 
**key_size** | **int** | The key size in bits. For example: 2048, 3072, or 4096 for RSA. | [optional] 
**kty** | **str** | The type of key to create. For valid values, see JsonWebKeyType. | 
**tags** | **Dict[str, str]** | Application specific metadata in the form of key-value pairs. | [optional] 

## Example

```python
from openapi_client.models.key_create_parameters import KeyCreateParameters

# TODO update the JSON string below
json = "{}"
# create an instance of KeyCreateParameters from a JSON string
key_create_parameters_instance = KeyCreateParameters.from_json(json)
# print the JSON string representation of the object
print(KeyCreateParameters.to_json())

# convert the object into a dict
key_create_parameters_dict = key_create_parameters_instance.to_dict()
# create an instance of KeyCreateParameters from a dict
key_create_parameters_from_dict = KeyCreateParameters.from_dict(key_create_parameters_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


