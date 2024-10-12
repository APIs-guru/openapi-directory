# CertificateTemplate

CertificateTemplate (v3 Extension in X.509).

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | The template id of the template. Example: \&quot;1.3.6.1.4.1.311.21.8.15608621.11768144.5720724.16068415.6889630.81.2472537.7784047\&quot;. | [optional] 
**major_version** | **int** | The Major version of the template. Example: 100. | [optional] 
**minor_version** | **int** | The minor version of the template. Example: 12. | [optional] 

## Example

```python
from openapi_client.models.certificate_template import CertificateTemplate

# TODO update the JSON string below
json = "{}"
# create an instance of CertificateTemplate from a JSON string
certificate_template_instance = CertificateTemplate.from_json(json)
# print the JSON string representation of the object
print(CertificateTemplate.to_json())

# convert the object into a dict
certificate_template_dict = certificate_template_instance.to_dict()
# create an instance of CertificateTemplate from a dict
certificate_template_from_dict = CertificateTemplate.from_dict(certificate_template_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


