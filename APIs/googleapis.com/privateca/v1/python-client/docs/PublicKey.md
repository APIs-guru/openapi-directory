# PublicKey

A PublicKey describes a public key.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**format** | **str** | Required. The format of the public key. | [optional] 
**key** | **bytearray** | Required. A public key. The padding and encoding must match with the &#x60;KeyFormat&#x60; value specified for the &#x60;format&#x60; field. | [optional] 

## Example

```python
from openapi_client.models.public_key import PublicKey

# TODO update the JSON string below
json = "{}"
# create an instance of PublicKey from a JSON string
public_key_instance = PublicKey.from_json(json)
# print the JSON string representation of the object
print(PublicKey.to_json())

# convert the object into a dict
public_key_dict = public_key_instance.to_dict()
# create an instance of PublicKey from a dict
public_key_from_dict = PublicKey.from_dict(public_key_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


