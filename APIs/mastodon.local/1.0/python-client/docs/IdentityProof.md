# IdentityProof

Represents a proof from an external identity provider.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**profile_url** | **str** | The account owner&#39;s profile URL on the identity provider. | [optional] 
**proof_url** | **str** | A link to a statement of identity proof, hosted by the identity provider. | [optional] 
**provider** | **str** | The name of the identity provider. | [optional] 
**provider_username** | **str** | The account owner&#39;s username on the identity provider&#39;s service. | [optional] 
**updated_at** | **str** | When the identity proof was last updated. ISO 8601 Datetime. | [optional] 

## Example

```python
from openapi_client.models.identity_proof import IdentityProof

# TODO update the JSON string below
json = "{}"
# create an instance of IdentityProof from a JSON string
identity_proof_instance = IdentityProof.from_json(json)
# print the JSON string representation of the object
print(IdentityProof.to_json())

# convert the object into a dict
identity_proof_dict = identity_proof_instance.to_dict()
# create an instance of IdentityProof from a dict
identity_proof_from_dict = IdentityProof.from_dict(identity_proof_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


