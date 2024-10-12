# PublicKeyCertificate

A public key certificate format and data.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**certificate** | **str** | The certificate data. | [optional] 
**format** | **str** | The certificate format. | [optional] 
**x509_details** | [**X509CertificateDetails**](X509CertificateDetails.md) |  | [optional] 

## Example

```python
from openapi_client.models.public_key_certificate import PublicKeyCertificate

# TODO update the JSON string below
json = "{}"
# create an instance of PublicKeyCertificate from a JSON string
public_key_certificate_instance = PublicKeyCertificate.from_json(json)
# print the JSON string representation of the object
print(PublicKeyCertificate.to_json())

# convert the object into a dict
public_key_certificate_dict = public_key_certificate_instance.to_dict()
# create an instance of PublicKeyCertificate from a dict
public_key_certificate_from_dict = PublicKeyCertificate.from_dict(public_key_certificate_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


