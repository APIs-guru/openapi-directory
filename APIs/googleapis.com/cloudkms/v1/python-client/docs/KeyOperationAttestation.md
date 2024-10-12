# KeyOperationAttestation

Contains an HSM-generated attestation about a key operation. For more information, see [Verifying attestations] (https://cloud.google.com/kms/docs/attest-key).

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**cert_chains** | [**CertificateChains**](CertificateChains.md) |  | [optional] 
**content** | **bytearray** | Output only. The attestation data provided by the HSM when the key operation was performed. | [optional] [readonly] 
**format** | **str** | Output only. The format of the attestation data. | [optional] [readonly] 

## Example

```python
from openapi_client.models.key_operation_attestation import KeyOperationAttestation

# TODO update the JSON string below
json = "{}"
# create an instance of KeyOperationAttestation from a JSON string
key_operation_attestation_instance = KeyOperationAttestation.from_json(json)
# print the JSON string representation of the object
print(KeyOperationAttestation.to_json())

# convert the object into a dict
key_operation_attestation_dict = key_operation_attestation_instance.to_dict()
# create an instance of KeyOperationAttestation from a dict
key_operation_attestation_from_dict = KeyOperationAttestation.from_dict(key_operation_attestation_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


