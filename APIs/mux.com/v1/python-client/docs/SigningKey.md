# SigningKey


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**created_at** | **str** | Time at which the object was created. Measured in seconds since the Unix epoch. | [optional] 
**id** | **str** | Unique identifier for the Signing Key. | [optional] 
**private_key** | **bytearray** | A Base64 encoded private key that can be used with the RS256 algorithm when creating a [JWT](https://jwt.io/). **Note that this value is only returned once when creating a URL signing key.** | [optional] 

## Example

```python
from openapi_client.models.signing_key import SigningKey

# TODO update the JSON string below
json = "{}"
# create an instance of SigningKey from a JSON string
signing_key_instance = SigningKey.from_json(json)
# print the JSON string representation of the object
print(SigningKey.to_json())

# convert the object into a dict
signing_key_dict = signing_key_instance.to_dict()
# create an instance of SigningKey from a dict
signing_key_from_dict = SigningKey.from_dict(signing_key_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


