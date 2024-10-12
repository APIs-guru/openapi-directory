# OncCertificateProvider

This feature is not generally available.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**certificate_references** | **List[str]** | This feature is not generally available. | [optional] 
**content_provider_endpoint** | [**ContentProviderEndpoint**](ContentProviderEndpoint.md) |  | [optional] 

## Example

```python
from openapi_client.models.onc_certificate_provider import OncCertificateProvider

# TODO update the JSON string below
json = "{}"
# create an instance of OncCertificateProvider from a JSON string
onc_certificate_provider_instance = OncCertificateProvider.from_json(json)
# print the JSON string representation of the object
print(OncCertificateProvider.to_json())

# convert the object into a dict
onc_certificate_provider_dict = onc_certificate_provider_instance.to_dict()
# create an instance of OncCertificateProvider from a dict
onc_certificate_provider_from_dict = OncCertificateProvider.from_dict(onc_certificate_provider_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


