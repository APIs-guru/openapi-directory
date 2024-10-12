# KeyBundle

A KeyBundle consisting of a WebKey plus its attributes.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**attributes** | [**KeyAttributes**](KeyAttributes.md) |  | [optional] 
**key** | [**JsonWebKey**](JsonWebKey.md) |  | [optional] 
**managed** | **bool** | True if the key&#39;s lifetime is managed by key vault. If this is a key backing a certificate, then managed will be true. | [optional] [readonly] 
**tags** | **Dict[str, str]** | Application specific metadata in the form of key-value pairs. | [optional] 

## Example

```python
from openapi_client.models.key_bundle import KeyBundle

# TODO update the JSON string below
json = "{}"
# create an instance of KeyBundle from a JSON string
key_bundle_instance = KeyBundle.from_json(json)
# print the JSON string representation of the object
print(KeyBundle.to_json())

# convert the object into a dict
key_bundle_dict = key_bundle_instance.to_dict()
# create an instance of KeyBundle from a dict
key_bundle_from_dict = KeyBundle.from_dict(key_bundle_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


