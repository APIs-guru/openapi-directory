# KeysWithPrivateKey


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**public_key** | **str** | The public key used to validate the [JWT](https://en.wikipedia.org/wiki/JSON_Web_Token). | [optional] 
**private_key** | **str** | The private key you use to generate the JSON Web Token (JWT) that authenticates your requests to Messages API. | [optional] 

## Example

```python
from openapi_client.models.keys_with_private_key import KeysWithPrivateKey

# TODO update the JSON string below
json = "{}"
# create an instance of KeysWithPrivateKey from a JSON string
keys_with_private_key_instance = KeysWithPrivateKey.from_json(json)
# print the JSON string representation of the object
print(KeysWithPrivateKey.to_json())

# convert the object into a dict
keys_with_private_key_dict = keys_with_private_key_instance.to_dict()
# create an instance of KeysWithPrivateKey from a dict
keys_with_private_key_from_dict = KeysWithPrivateKey.from_dict(keys_with_private_key_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


