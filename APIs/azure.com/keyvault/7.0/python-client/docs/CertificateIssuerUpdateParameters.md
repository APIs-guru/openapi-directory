# CertificateIssuerUpdateParameters

The certificate issuer update parameters.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**attributes** | [**IssuerAttributes**](IssuerAttributes.md) |  | [optional] 
**credentials** | [**IssuerCredentials**](IssuerCredentials.md) |  | [optional] 
**org_details** | [**OrganizationDetails**](OrganizationDetails.md) |  | [optional] 
**provider** | **str** | The issuer provider. | [optional] 

## Example

```python
from openapi_client.models.certificate_issuer_update_parameters import CertificateIssuerUpdateParameters

# TODO update the JSON string below
json = "{}"
# create an instance of CertificateIssuerUpdateParameters from a JSON string
certificate_issuer_update_parameters_instance = CertificateIssuerUpdateParameters.from_json(json)
# print the JSON string representation of the object
print(CertificateIssuerUpdateParameters.to_json())

# convert the object into a dict
certificate_issuer_update_parameters_dict = certificate_issuer_update_parameters_instance.to_dict()
# create an instance of CertificateIssuerUpdateParameters from a dict
certificate_issuer_update_parameters_from_dict = CertificateIssuerUpdateParameters.from_dict(certificate_issuer_update_parameters_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


