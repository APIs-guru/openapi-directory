# CdnManagedHttpsParameters

Defines the certificate source parameters using CDN managed certificate for enabling SSL.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**certificate_source_parameters** | [**CdnCertificateSourceParameters**](CdnCertificateSourceParameters.md) |  | 

## Example

```python
from openapi_client.models.cdn_managed_https_parameters import CdnManagedHttpsParameters

# TODO update the JSON string below
json = "{}"
# create an instance of CdnManagedHttpsParameters from a JSON string
cdn_managed_https_parameters_instance = CdnManagedHttpsParameters.from_json(json)
# print the JSON string representation of the object
print(CdnManagedHttpsParameters.to_json())

# convert the object into a dict
cdn_managed_https_parameters_dict = cdn_managed_https_parameters_instance.to_dict()
# create an instance of CdnManagedHttpsParameters from a dict
cdn_managed_https_parameters_from_dict = CdnManagedHttpsParameters.from_dict(cdn_managed_https_parameters_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


