# GoogleCloudKmsV1KeyOperationAttestationCertificateChains

Certificate chains needed to verify the attestation. Certificates in chains are PEM-encoded and are ordered based on https://tools.ietf.org/html/rfc5246#section-7.4.2.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**cavium_certs** | **List[str]** | Cavium certificate chain corresponding to the attestation. | [optional] 
**google_card_certs** | **List[str]** | Google card certificate chain corresponding to the attestation. | [optional] 
**google_partition_certs** | **List[str]** | Google partition certificate chain corresponding to the attestation. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_kms_v1_key_operation_attestation_certificate_chains import GoogleCloudKmsV1KeyOperationAttestationCertificateChains

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudKmsV1KeyOperationAttestationCertificateChains from a JSON string
google_cloud_kms_v1_key_operation_attestation_certificate_chains_instance = GoogleCloudKmsV1KeyOperationAttestationCertificateChains.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudKmsV1KeyOperationAttestationCertificateChains.to_json())

# convert the object into a dict
google_cloud_kms_v1_key_operation_attestation_certificate_chains_dict = google_cloud_kms_v1_key_operation_attestation_certificate_chains_instance.to_dict()
# create an instance of GoogleCloudKmsV1KeyOperationAttestationCertificateChains from a dict
google_cloud_kms_v1_key_operation_attestation_certificate_chains_from_dict = GoogleCloudKmsV1KeyOperationAttestationCertificateChains.from_dict(google_cloud_kms_v1_key_operation_attestation_certificate_chains_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


