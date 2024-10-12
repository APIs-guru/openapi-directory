# ContentKeyPolicyRestrictionTokenKey

Base class for Content Key Policy key for token validation. A derived class must be used to create a token key.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**odata_type** | **str** | The discriminator for derived types. | 

## Example

```python
from openapi_client.models.content_key_policy_restriction_token_key import ContentKeyPolicyRestrictionTokenKey

# TODO update the JSON string below
json = "{}"
# create an instance of ContentKeyPolicyRestrictionTokenKey from a JSON string
content_key_policy_restriction_token_key_instance = ContentKeyPolicyRestrictionTokenKey.from_json(json)
# print the JSON string representation of the object
print(ContentKeyPolicyRestrictionTokenKey.to_json())

# convert the object into a dict
content_key_policy_restriction_token_key_dict = content_key_policy_restriction_token_key_instance.to_dict()
# create an instance of ContentKeyPolicyRestrictionTokenKey from a dict
content_key_policy_restriction_token_key_from_dict = ContentKeyPolicyRestrictionTokenKey.from_dict(content_key_policy_restriction_token_key_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


