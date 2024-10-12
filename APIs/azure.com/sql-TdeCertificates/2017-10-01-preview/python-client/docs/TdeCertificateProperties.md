# TdeCertificateProperties

Properties of a TDE certificate.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**cert_password** | **str** | The certificate password. | [optional] 
**private_blob** | **str** | The base64 encoded certificate private blob. | 

## Example

```python
from openapi_client.models.tde_certificate_properties import TdeCertificateProperties

# TODO update the JSON string below
json = "{}"
# create an instance of TdeCertificateProperties from a JSON string
tde_certificate_properties_instance = TdeCertificateProperties.from_json(json)
# print the JSON string representation of the object
print(TdeCertificateProperties.to_json())

# convert the object into a dict
tde_certificate_properties_dict = tde_certificate_properties_instance.to_dict()
# create an instance of TdeCertificateProperties from a dict
tde_certificate_properties_from_dict = TdeCertificateProperties.from_dict(tde_certificate_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


