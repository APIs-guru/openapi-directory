# Check

A single check to perform against a Pod. Checks are grouped into `CheckSet` objects, which are defined by the top-level policy.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**always_deny** | **bool** | Optional. A special-case check that always denies. Note that this still only applies when the scope of the &#x60;CheckSet&#x60; applies and the image isn&#39;t exempted by an image allowlist. This check is primarily useful for testing, or to set the default behavior for all unmatched scopes to \&quot;deny\&quot;. | [optional] 
**display_name** | **str** | Optional. A user-provided name for this check. This field has no effect on the policy evaluation behavior except to improve readability of messages in evaluation results. | [optional] 
**image_allowlist** | [**ImageAllowlist**](ImageAllowlist.md) |  | [optional] 
**image_freshness_check** | [**ImageFreshnessCheck**](ImageFreshnessCheck.md) |  | [optional] 
**sigstore_signature_check** | [**SigstoreSignatureCheck**](SigstoreSignatureCheck.md) |  | [optional] 
**simple_signing_attestation_check** | [**SimpleSigningAttestationCheck**](SimpleSigningAttestationCheck.md) |  | [optional] 
**slsa_check** | [**SlsaCheck**](SlsaCheck.md) |  | [optional] 
**trusted_directory_check** | [**TrustedDirectoryCheck**](TrustedDirectoryCheck.md) |  | [optional] 
**vulnerability_check** | [**VulnerabilityCheck**](VulnerabilityCheck.md) |  | [optional] 

## Example

```python
from openapi_client.models.check import Check

# TODO update the JSON string below
json = "{}"
# create an instance of Check from a JSON string
check_instance = Check.from_json(json)
# print the JSON string representation of the object
print(Check.to_json())

# convert the object into a dict
check_dict = check_instance.to_dict()
# create an instance of Check from a dict
check_from_dict = Check.from_dict(check_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


