# Certificate

A SSL/TLS X509 certificate

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**auto_renew** | **str** | Allow Otoroshi to renew the certificate (if self signed) | 
**ca** | **str** | Certificate is a CA (read only) | 
**ca_ref** | **str** | Reference for a CA certificate in otoroshi | 
**chain** | **str** | Certificate chain of trust in PEM format | 
**domain** | **str** | Domain of the certificate (read only) | 
**var_from** | **str** | Start date of validity | 
**id** | **str** | Id of the certificate | 
**private_key** | **str** | PKCS8 private key in PEM format | 
**self_signed** | **str** | Certificate is self signed  read only) | 
**subject** | **str** | Subject of the certificate (read only) | 
**to** | **str** | End date of validity | 
**valid** | **str** | Certificate is valid (read only) | 

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


