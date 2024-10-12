# CertificateTemplate

A CertificateTemplate refers to a managed template for certificate issuance.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**create_time** | **str** | Output only. The time at which this CertificateTemplate was created. | [optional] [readonly] 
**description** | **str** | Optional. A human-readable description of scenarios this template is intended for. | [optional] 
**identity_constraints** | [**CertificateIdentityConstraints**](CertificateIdentityConstraints.md) |  | [optional] 
**labels** | **Dict[str, str]** | Optional. Labels with user-defined metadata. | [optional] 
**maximum_lifetime** | **str** | Optional. The maximum lifetime allowed for issued Certificates that use this template. If the issuing CaPool&#39;s IssuancePolicy specifies a maximum_lifetime the minimum of the two durations will be the maximum lifetime for issued Certificates. Note that if the issuing CertificateAuthority expires before a Certificate&#39;s requested maximum_lifetime, the effective lifetime will be explicitly truncated to match it. | [optional] 
**name** | **str** | Output only. The resource name for this CertificateTemplate in the format &#x60;projects/*/locations/*/certificateTemplates/*&#x60;. | [optional] [readonly] 
**passthrough_extensions** | [**CertificateExtensionConstraints**](CertificateExtensionConstraints.md) |  | [optional] 
**predefined_values** | [**X509Parameters**](X509Parameters.md) |  | [optional] 
**update_time** | **str** | Output only. The time at which this CertificateTemplate was updated. | [optional] [readonly] 

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


