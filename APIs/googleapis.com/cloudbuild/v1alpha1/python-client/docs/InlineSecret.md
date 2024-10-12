# InlineSecret

Pairs a set of secret environment variables mapped to encrypted values with the Cloud KMS key to use to decrypt the value.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**env_map** | **Dict[str, bytearray]** | Map of environment variable name to its encrypted value. Secret environment variables must be unique across all of a build&#39;s secrets, and must be used by at least one build step. Values can be at most 64 KB in size. There can be at most 100 secret values across all of a build&#39;s secrets. | [optional] 
**kms_key_name** | **str** | Resource name of Cloud KMS crypto key to decrypt the encrypted value. In format: projects/*/locations/*/keyRings/*/cryptoKeys/* | [optional] 

## Example

```python
from openapi_client.models.inline_secret import InlineSecret

# TODO update the JSON string below
json = "{}"
# create an instance of InlineSecret from a JSON string
inline_secret_instance = InlineSecret.from_json(json)
# print the JSON string representation of the object
print(InlineSecret.to_json())

# convert the object into a dict
inline_secret_dict = inline_secret_instance.to_dict()
# create an instance of InlineSecret from a dict
inline_secret_from_dict = InlineSecret.from_dict(inline_secret_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


