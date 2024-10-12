# SimpleSigningAttestationCheck

Require a signed [DSSE](https://github.com/secure-systems-lab/dsse) attestation with type SimpleSigning.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**attestation_authenticators** | [**List[AttestationAuthenticator]**](AttestationAuthenticator.md) | Required. The authenticators required by this check to verify an attestation. Typically this is one or more PKIX public keys for signature verification. Only one authenticator needs to consider an attestation verified in order for an attestation to be considered fully authenticated. In otherwords, this list of authenticators is an \&quot;OR\&quot; of the authenticator results. At least one authenticator is required. | [optional] 
**container_analysis_attestation_projects** | **List[str]** | Optional. The projects where attestations are stored as Container Analysis Occurrences, in the format &#x60;projects/[PROJECT_ID]&#x60;. Only one attestation needs to successfully verify an image for this check to pass, so a single verified attestation found in any of &#x60;container_analysis_attestation_projects&#x60; is sufficient for the check to pass. When fetching Occurrences from Container Analysis, only &#x60;AttestationOccurrence&#x60; kinds are considered. In the future, additional Occurrence kinds may be added to the query. Maximum number of &#x60;container_analysis_attestation_projects&#x60; allowed in each &#x60;SimpleSigningAttestationCheck&#x60; is 10. | [optional] 

## Example

```python
from openapi_client.models.simple_signing_attestation_check import SimpleSigningAttestationCheck

# TODO update the JSON string below
json = "{}"
# create an instance of SimpleSigningAttestationCheck from a JSON string
simple_signing_attestation_check_instance = SimpleSigningAttestationCheck.from_json(json)
# print the JSON string representation of the object
print(SimpleSigningAttestationCheck.to_json())

# convert the object into a dict
simple_signing_attestation_check_dict = simple_signing_attestation_check_instance.to_dict()
# create an instance of SimpleSigningAttestationCheck from a dict
simple_signing_attestation_check_from_dict = SimpleSigningAttestationCheck.from_dict(simple_signing_attestation_check_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


