# CertificatePolicy

Management policy for a certificate.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**attributes** | [**CertificateAttributes**](CertificateAttributes.md) |  | [optional] 
**id** | **str** | The certificate id. | [optional] [readonly] 
**issuer** | [**IssuerParameters**](IssuerParameters.md) |  | [optional] 
**key_props** | [**KeyProperties**](KeyProperties.md) |  | [optional] 
**lifetime_actions** | [**List[LifetimeAction]**](LifetimeAction.md) | Actions that will be performed by Key Vault over the lifetime of a certificate. | [optional] 
**secret_props** | [**SecretProperties**](SecretProperties.md) |  | [optional] 
**x509_props** | [**X509CertificateProperties**](X509CertificateProperties.md) |  | [optional] 

## Example

```python
from openapi_client.models.certificate_policy import CertificatePolicy

# TODO update the JSON string below
json = "{}"
# create an instance of CertificatePolicy from a JSON string
certificate_policy_instance = CertificatePolicy.from_json(json)
# print the JSON string representation of the object
print(CertificatePolicy.to_json())

# convert the object into a dict
certificate_policy_dict = certificate_policy_instance.to_dict()
# create an instance of CertificatePolicy from a dict
certificate_policy_from_dict = CertificatePolicy.from_dict(certificate_policy_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


