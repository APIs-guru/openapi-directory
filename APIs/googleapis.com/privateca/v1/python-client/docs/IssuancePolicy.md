# IssuancePolicy

Defines controls over all certificate issuance within a CaPool.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**allowed_issuance_modes** | [**IssuanceModes**](IssuanceModes.md) |  | [optional] 
**allowed_key_types** | [**List[AllowedKeyType]**](AllowedKeyType.md) | Optional. If any AllowedKeyType is specified, then the certificate request&#39;s public key must match one of the key types listed here. Otherwise, any key may be used. | [optional] 
**baseline_values** | [**X509Parameters**](X509Parameters.md) |  | [optional] 
**identity_constraints** | [**CertificateIdentityConstraints**](CertificateIdentityConstraints.md) |  | [optional] 
**maximum_lifetime** | **str** | Optional. The maximum lifetime allowed for issued Certificates. Note that if the issuing CertificateAuthority expires before a Certificate&#39;s requested maximum_lifetime, the effective lifetime will be explicitly truncated to match it. | [optional] 
**passthrough_extensions** | [**CertificateExtensionConstraints**](CertificateExtensionConstraints.md) |  | [optional] 

## Example

```python
from openapi_client.models.issuance_policy import IssuancePolicy

# TODO update the JSON string below
json = "{}"
# create an instance of IssuancePolicy from a JSON string
issuance_policy_instance = IssuancePolicy.from_json(json)
# print the JSON string representation of the object
print(IssuancePolicy.to_json())

# convert the object into a dict
issuance_policy_dict = issuance_policy_instance.to_dict()
# create an instance of IssuancePolicy from a dict
issuance_policy_from_dict = IssuancePolicy.from_dict(issuance_policy_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


