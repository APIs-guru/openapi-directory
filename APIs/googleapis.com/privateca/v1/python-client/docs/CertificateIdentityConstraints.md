# CertificateIdentityConstraints

Describes constraints on a Certificate's Subject and SubjectAltNames.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**allow_subject_alt_names_passthrough** | **bool** | Required. If this is true, the SubjectAltNames extension may be copied from a certificate request into the signed certificate. Otherwise, the requested SubjectAltNames will be discarded. | [optional] 
**allow_subject_passthrough** | **bool** | Required. If this is true, the Subject field may be copied from a certificate request into the signed certificate. Otherwise, the requested Subject will be discarded. | [optional] 
**cel_expression** | [**Expr**](Expr.md) |  | [optional] 

## Example

```python
from openapi_client.models.certificate_identity_constraints import CertificateIdentityConstraints

# TODO update the JSON string below
json = "{}"
# create an instance of CertificateIdentityConstraints from a JSON string
certificate_identity_constraints_instance = CertificateIdentityConstraints.from_json(json)
# print the JSON string representation of the object
print(CertificateIdentityConstraints.to_json())

# convert the object into a dict
certificate_identity_constraints_dict = certificate_identity_constraints_instance.to_dict()
# create an instance of CertificateIdentityConstraints from a dict
certificate_identity_constraints_from_dict = CertificateIdentityConstraints.from_dict(certificate_identity_constraints_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


