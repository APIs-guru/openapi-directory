# ContentKeyPolicyTokenRestriction

Represents a token restriction. Provided token must match these requirements for successful license or key delivery.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**alternate_verification_keys** | [**List[ContentKeyPolicyRestrictionTokenKey]**](ContentKeyPolicyRestrictionTokenKey.md) | A list of alternative verification keys. | [optional] 
**audience** | **str** | The audience for the token. | 
**issuer** | **str** | The token issuer. | 
**open_id_connect_discovery_document** | **str** | The OpenID connect discovery document. | [optional] 
**primary_verification_key** | [**ContentKeyPolicyRestrictionTokenKey**](ContentKeyPolicyRestrictionTokenKey.md) |  | 
**required_claims** | [**List[ContentKeyPolicyTokenClaim]**](ContentKeyPolicyTokenClaim.md) | A list of required token claims. | [optional] 
**restriction_token_type** | **str** | The type of token. | 

## Example

```python
from openapi_client.models.content_key_policy_token_restriction import ContentKeyPolicyTokenRestriction

# TODO update the JSON string below
json = "{}"
# create an instance of ContentKeyPolicyTokenRestriction from a JSON string
content_key_policy_token_restriction_instance = ContentKeyPolicyTokenRestriction.from_json(json)
# print the JSON string representation of the object
print(ContentKeyPolicyTokenRestriction.to_json())

# convert the object into a dict
content_key_policy_token_restriction_dict = content_key_policy_token_restriction_instance.to_dict()
# create an instance of ContentKeyPolicyTokenRestriction from a dict
content_key_policy_token_restriction_from_dict = ContentKeyPolicyTokenRestriction.from_dict(content_key_policy_token_restriction_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


