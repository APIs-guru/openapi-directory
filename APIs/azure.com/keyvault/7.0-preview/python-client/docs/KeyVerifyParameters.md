# KeyVerifyParameters

The key verify parameters.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**alg** | **str** | The signing/verification algorithm. For more information on possible algorithm types, see JsonWebKeySignatureAlgorithm. | 
**digest** | **str** | The digest used for signing. | 
**value** | **str** | The signature to be verified. | 

## Example

```python
from openapi_client.models.key_verify_parameters import KeyVerifyParameters

# TODO update the JSON string below
json = "{}"
# create an instance of KeyVerifyParameters from a JSON string
key_verify_parameters_instance = KeyVerifyParameters.from_json(json)
# print the JSON string representation of the object
print(KeyVerifyParameters.to_json())

# convert the object into a dict
key_verify_parameters_dict = key_verify_parameters_instance.to_dict()
# create an instance of KeyVerifyParameters from a dict
key_verify_parameters_from_dict = KeyVerifyParameters.from_dict(key_verify_parameters_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


