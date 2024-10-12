# KeySignParameters

The key operations parameters.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**alg** | **str** | The signing/verification algorithm identifier. For more information on possible algorithm types, see JsonWebKeySignatureAlgorithm. | 
**value** | **str** |  | 

## Example

```python
from openapi_client.models.key_sign_parameters import KeySignParameters

# TODO update the JSON string below
json = "{}"
# create an instance of KeySignParameters from a JSON string
key_sign_parameters_instance = KeySignParameters.from_json(json)
# print the JSON string representation of the object
print(KeySignParameters.to_json())

# convert the object into a dict
key_sign_parameters_dict = key_sign_parameters_instance.to_dict()
# create an instance of KeySignParameters from a dict
key_sign_parameters_from_dict = KeySignParameters.from_dict(key_sign_parameters_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


