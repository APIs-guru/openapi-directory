# ContentKeyPolicyPlayReadyContentEncryptionKeyFromKeyIdentifier

Specifies that the content key ID is specified in the PlayReady configuration.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**key_id** | **str** | The content key ID. | 

## Example

```python
from openapi_client.models.content_key_policy_play_ready_content_encryption_key_from_key_identifier import ContentKeyPolicyPlayReadyContentEncryptionKeyFromKeyIdentifier

# TODO update the JSON string below
json = "{}"
# create an instance of ContentKeyPolicyPlayReadyContentEncryptionKeyFromKeyIdentifier from a JSON string
content_key_policy_play_ready_content_encryption_key_from_key_identifier_instance = ContentKeyPolicyPlayReadyContentEncryptionKeyFromKeyIdentifier.from_json(json)
# print the JSON string representation of the object
print(ContentKeyPolicyPlayReadyContentEncryptionKeyFromKeyIdentifier.to_json())

# convert the object into a dict
content_key_policy_play_ready_content_encryption_key_from_key_identifier_dict = content_key_policy_play_ready_content_encryption_key_from_key_identifier_instance.to_dict()
# create an instance of ContentKeyPolicyPlayReadyContentEncryptionKeyFromKeyIdentifier from a dict
content_key_policy_play_ready_content_encryption_key_from_key_identifier_from_dict = ContentKeyPolicyPlayReadyContentEncryptionKeyFromKeyIdentifier.from_dict(content_key_policy_play_ready_content_encryption_key_from_key_identifier_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


