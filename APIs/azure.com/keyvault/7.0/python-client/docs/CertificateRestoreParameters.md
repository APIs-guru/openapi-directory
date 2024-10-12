# CertificateRestoreParameters

The certificate restore parameters.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**value** | **str** | The backup blob associated with a certificate bundle. | 

## Example

```python
from openapi_client.models.certificate_restore_parameters import CertificateRestoreParameters

# TODO update the JSON string below
json = "{}"
# create an instance of CertificateRestoreParameters from a JSON string
certificate_restore_parameters_instance = CertificateRestoreParameters.from_json(json)
# print the JSON string representation of the object
print(CertificateRestoreParameters.to_json())

# convert the object into a dict
certificate_restore_parameters_dict = certificate_restore_parameters_instance.to_dict()
# create an instance of CertificateRestoreParameters from a dict
certificate_restore_parameters_from_dict = CertificateRestoreParameters.from_dict(certificate_restore_parameters_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


