# TlsCertificate

TlsCertificate Resource

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**cert** | **str** | PEM representation. | [optional] 
**create_time** | **str** | Output only. The time when the certificate was created in [RFC 3339](https://tools.ietf.org/html/rfc3339) format, for example &#x60;2020-05-18T00:00:00.094Z&#x60;. | [optional] [readonly] 
**expire_time** | **str** | Output only. The time when the certificate expires in [RFC 3339](https://tools.ietf.org/html/rfc3339) format, for example &#x60;2020-05-18T00:00:00.094Z&#x60;. | [optional] [readonly] 
**serial_number** | **str** | Serial number, as extracted from the certificate. | [optional] 
**sha1_fingerprint** | **str** | Sha1 Fingerprint of the certificate. | [optional] 

## Example

```python
from openapi_client.models.tls_certificate import TlsCertificate

# TODO update the JSON string below
json = "{}"
# create an instance of TlsCertificate from a JSON string
tls_certificate_instance = TlsCertificate.from_json(json)
# print the JSON string representation of the object
print(TlsCertificate.to_json())

# convert the object into a dict
tls_certificate_dict = tls_certificate_instance.to_dict()
# create an instance of TlsCertificate from a dict
tls_certificate_from_dict = TlsCertificate.from_dict(tls_certificate_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


