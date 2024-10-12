# GoogleCloudKmsV1KeyOperationAttestation

Contains an HSM-generated attestation about a key operation. For more information, see [Verifying attestations] (https://cloud.google.com/kms/docs/attest-key).

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**cert_chains** | [**GoogleCloudKmsV1KeyOperationAttestationCertificateChains**](GoogleCloudKmsV1KeyOperationAttestationCertificateChains.md) |  | [optional] 
**content** | **bytearray** | Output only. The attestation data provided by the HSM when the key operation was performed. | [optional] [readonly] 
**format** | **str** | Output only. The format of the attestation data. | [optional] [readonly] 

## Example

```python
from openapi_client.models.google_cloud_kms_v1_key_operation_attestation import GoogleCloudKmsV1KeyOperationAttestation

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudKmsV1KeyOperationAttestation from a JSON string
google_cloud_kms_v1_key_operation_attestation_instance = GoogleCloudKmsV1KeyOperationAttestation.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudKmsV1KeyOperationAttestation.to_json())

# convert the object into a dict
google_cloud_kms_v1_key_operation_attestation_dict = google_cloud_kms_v1_key_operation_attestation_instance.to_dict()
# create an instance of GoogleCloudKmsV1KeyOperationAttestation from a dict
google_cloud_kms_v1_key_operation_attestation_from_dict = GoogleCloudKmsV1KeyOperationAttestation.from_dict(google_cloud_kms_v1_key_operation_attestation_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


