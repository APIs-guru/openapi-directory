# ContentKeyPolicyTokenClaim

Represents a token claim.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**claim_type** | **str** | Token claim type. | [optional] 
**claim_value** | **str** | Token claim value. | [optional] 

## Example

```python
from openapi_client.models.content_key_policy_token_claim import ContentKeyPolicyTokenClaim

# TODO update the JSON string below
json = "{}"
# create an instance of ContentKeyPolicyTokenClaim from a JSON string
content_key_policy_token_claim_instance = ContentKeyPolicyTokenClaim.from_json(json)
# print the JSON string representation of the object
print(ContentKeyPolicyTokenClaim.to_json())

# convert the object into a dict
content_key_policy_token_claim_dict = content_key_policy_token_claim_instance.to_dict()
# create an instance of ContentKeyPolicyTokenClaim from a dict
content_key_policy_token_claim_from_dict = ContentKeyPolicyTokenClaim.from_dict(content_key_policy_token_claim_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


