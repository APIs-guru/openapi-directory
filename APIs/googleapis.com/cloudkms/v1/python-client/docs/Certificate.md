# Certificate

A Certificate represents an X.509 certificate used to authenticate HTTPS connections to EKM replicas.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**issuer** | **str** | Output only. The issuer distinguished name in RFC 2253 format. Only present if parsed is true. | [optional] [readonly] 
**not_after_time** | **str** | Output only. The certificate is not valid after this time. Only present if parsed is true. | [optional] [readonly] 
**not_before_time** | **str** | Output only. The certificate is not valid before this time. Only present if parsed is true. | [optional] [readonly] 
**parsed** | **bool** | Output only. True if the certificate was parsed successfully. | [optional] [readonly] 
**raw_der** | **bytearray** | Required. The raw certificate bytes in DER format. | [optional] 
**serial_number** | **str** | Output only. The certificate serial number as a hex string. Only present if parsed is true. | [optional] [readonly] 
**sha256_fingerprint** | **str** | Output only. The SHA-256 certificate fingerprint as a hex string. Only present if parsed is true. | [optional] [readonly] 
**subject** | **str** | Output only. The subject distinguished name in RFC 2253 format. Only present if parsed is true. | [optional] [readonly] 
**subject_alternative_dns_names** | **List[str]** | Output only. The subject Alternative DNS names. Only present if parsed is true. | [optional] [readonly] 

## Example

```python
from openapi_client.models.certificate import Certificate

# TODO update the JSON string below
json = "{}"
# create an instance of Certificate from a JSON string
certificate_instance = Certificate.from_json(json)
# print the JSON string representation of the object
print(Certificate.to_json())

# convert the object into a dict
certificate_dict = certificate_instance.to_dict()
# create an instance of Certificate from a dict
certificate_from_dict = Certificate.from_dict(certificate_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


