# WrappingPublicKey

The public key component of the wrapping key. For details of the type of key this public key corresponds to, see the ImportMethod.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**pem** | **str** | The public key, encoded in PEM format. For more information, see the [RFC 7468](https://tools.ietf.org/html/rfc7468) sections for [General Considerations](https://tools.ietf.org/html/rfc7468#section-2) and [Textual Encoding of Subject Public Key Info] (https://tools.ietf.org/html/rfc7468#section-13). | [optional] 

## Example

```python
from openapi_client.models.wrapping_public_key import WrappingPublicKey

# TODO update the JSON string below
json = "{}"
# create an instance of WrappingPublicKey from a JSON string
wrapping_public_key_instance = WrappingPublicKey.from_json(json)
# print the JSON string representation of the object
print(WrappingPublicKey.to_json())

# convert the object into a dict
wrapping_public_key_dict = wrapping_public_key_instance.to_dict()
# create an instance of WrappingPublicKey from a dict
wrapping_public_key_from_dict = WrappingPublicKey.from_dict(wrapping_public_key_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


