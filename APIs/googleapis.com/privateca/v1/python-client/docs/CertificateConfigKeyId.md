# CertificateConfigKeyId

A KeyId identifies a specific public key, usually by hashing the public key.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**key_id** | **str** | Optional. The value of this KeyId encoded in lowercase hexadecimal. This is most likely the 160 bit SHA-1 hash of the public key. | [optional] 

## Example

```python
from openapi_client.models.certificate_config_key_id import CertificateConfigKeyId

# TODO update the JSON string below
json = "{}"
# create an instance of CertificateConfigKeyId from a JSON string
certificate_config_key_id_instance = CertificateConfigKeyId.from_json(json)
# print the JSON string representation of the object
print(CertificateConfigKeyId.to_json())

# convert the object into a dict
certificate_config_key_id_dict = certificate_config_key_id_instance.to_dict()
# create an instance of CertificateConfigKeyId from a dict
certificate_config_key_id_from_dict = CertificateConfigKeyId.from_dict(certificate_config_key_id_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


