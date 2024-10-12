# CertificateIssuerSetParameters

The certificate issuer set parameters.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**attributes** | [**IssuerAttributes**](IssuerAttributes.md) |  | [optional] 
**credentials** | [**IssuerCredentials**](IssuerCredentials.md) |  | [optional] 
**org_details** | [**OrganizationDetails**](OrganizationDetails.md) |  | [optional] 
**provider** | **str** | The issuer provider. | 

## Example

```python
from openapi_client.models.certificate_issuer_set_parameters import CertificateIssuerSetParameters

# TODO update the JSON string below
json = "{}"
# create an instance of CertificateIssuerSetParameters from a JSON string
certificate_issuer_set_parameters_instance = CertificateIssuerSetParameters.from_json(json)
# print the JSON string representation of the object
print(CertificateIssuerSetParameters.to_json())

# convert the object into a dict
certificate_issuer_set_parameters_dict = certificate_issuer_set_parameters_instance.to_dict()
# create an instance of CertificateIssuerSetParameters from a dict
certificate_issuer_set_parameters_from_dict = CertificateIssuerSetParameters.from_dict(certificate_issuer_set_parameters_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


