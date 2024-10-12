# CertificateImportParameters

The certificate import parameters.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**attributes** | [**CertificateAttributes**](CertificateAttributes.md) |  | [optional] 
**policy** | [**CertificatePolicy**](CertificatePolicy.md) |  | [optional] 
**pwd** | **str** | If the private key in base64EncodedCertificate is encrypted, the password used for encryption. | [optional] 
**tags** | **Dict[str, str]** | Application specific metadata in the form of key-value pairs. | [optional] 
**value** | **str** | Base64 encoded representation of the certificate object to import. This certificate needs to contain the private key. | 

## Example

```python
from openapi_client.models.certificate_import_parameters import CertificateImportParameters

# TODO update the JSON string below
json = "{}"
# create an instance of CertificateImportParameters from a JSON string
certificate_import_parameters_instance = CertificateImportParameters.from_json(json)
# print the JSON string representation of the object
print(CertificateImportParameters.to_json())

# convert the object into a dict
certificate_import_parameters_dict = certificate_import_parameters_instance.to_dict()
# create an instance of CertificateImportParameters from a dict
certificate_import_parameters_from_dict = CertificateImportParameters.from_dict(certificate_import_parameters_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


