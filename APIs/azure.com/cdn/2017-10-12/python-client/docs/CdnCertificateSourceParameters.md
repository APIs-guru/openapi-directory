# CdnCertificateSourceParameters

Defines the parameters for using CDN managed certificate for securing custom domain.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**odata_type** | **str** |  | 
**certificate_type** | **str** | Type of certificate used | 

## Example

```python
from openapi_client.models.cdn_certificate_source_parameters import CdnCertificateSourceParameters

# TODO update the JSON string below
json = "{}"
# create an instance of CdnCertificateSourceParameters from a JSON string
cdn_certificate_source_parameters_instance = CdnCertificateSourceParameters.from_json(json)
# print the JSON string representation of the object
print(CdnCertificateSourceParameters.to_json())

# convert the object into a dict
cdn_certificate_source_parameters_dict = cdn_certificate_source_parameters_instance.to_dict()
# create an instance of CdnCertificateSourceParameters from a dict
cdn_certificate_source_parameters_from_dict = CdnCertificateSourceParameters.from_dict(cdn_certificate_source_parameters_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


