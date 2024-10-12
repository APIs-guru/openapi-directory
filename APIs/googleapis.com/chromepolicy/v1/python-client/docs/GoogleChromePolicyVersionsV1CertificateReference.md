# GoogleChromePolicyVersionsV1CertificateReference

Error information for removing of a specific certificate on a specific target. A reference to a certificate.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**network** | **str** | Output only. The name of the referencing network. | [optional] [readonly] 
**org_unit_id** | **str** | Output only. The obfuscated id of the org unit the referencing network is in. | [optional] [readonly] 

## Example

```python
from openapi_client.models.google_chrome_policy_versions_v1_certificate_reference import GoogleChromePolicyVersionsV1CertificateReference

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleChromePolicyVersionsV1CertificateReference from a JSON string
google_chrome_policy_versions_v1_certificate_reference_instance = GoogleChromePolicyVersionsV1CertificateReference.from_json(json)
# print the JSON string representation of the object
print(GoogleChromePolicyVersionsV1CertificateReference.to_json())

# convert the object into a dict
google_chrome_policy_versions_v1_certificate_reference_dict = google_chrome_policy_versions_v1_certificate_reference_instance.to_dict()
# create an instance of GoogleChromePolicyVersionsV1CertificateReference from a dict
google_chrome_policy_versions_v1_certificate_reference_from_dict = GoogleChromePolicyVersionsV1CertificateReference.from_dict(google_chrome_policy_versions_v1_certificate_reference_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


