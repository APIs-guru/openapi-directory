# CertificateConfiguration

Certificate configuration which consist of non-trusted intermediates and root certificates.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**certificate** | [**CertificateInformation**](CertificateInformation.md) |  | [optional] 
**certificate_password** | **str** | Certificate Password. | [optional] 
**encoded_certificate** | **str** | Base64 Encoded certificate. | [optional] 
**store_name** | **str** | The local certificate store location. Only Root and CertificateAuthority are valid locations. | 

## Example

```python
from openapi_client.models.certificate_configuration import CertificateConfiguration

# TODO update the JSON string below
json = "{}"
# create an instance of CertificateConfiguration from a JSON string
certificate_configuration_instance = CertificateConfiguration.from_json(json)
# print the JSON string representation of the object
print(CertificateConfiguration.to_json())

# convert the object into a dict
certificate_configuration_dict = certificate_configuration_instance.to_dict()
# create an instance of CertificateConfiguration from a dict
certificate_configuration_from_dict = CertificateConfiguration.from_dict(certificate_configuration_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


