# ContentKeyPolicySymmetricTokenKey

Specifies a symmetric key for token validation.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**key_value** | **bytearray** | The key value of the key | 

## Example

```python
from openapi_client.models.content_key_policy_symmetric_token_key import ContentKeyPolicySymmetricTokenKey

# TODO update the JSON string below
json = "{}"
# create an instance of ContentKeyPolicySymmetricTokenKey from a JSON string
content_key_policy_symmetric_token_key_instance = ContentKeyPolicySymmetricTokenKey.from_json(json)
# print the JSON string representation of the object
print(ContentKeyPolicySymmetricTokenKey.to_json())

# convert the object into a dict
content_key_policy_symmetric_token_key_dict = content_key_policy_symmetric_token_key_instance.to_dict()
# create an instance of ContentKeyPolicySymmetricTokenKey from a dict
content_key_policy_symmetric_token_key_from_dict = ContentKeyPolicySymmetricTokenKey.from_dict(content_key_policy_symmetric_token_key_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


