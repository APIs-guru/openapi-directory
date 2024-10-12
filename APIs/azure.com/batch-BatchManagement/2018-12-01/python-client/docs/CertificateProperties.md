# CertificateProperties

Certificate properties.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**delete_certificate_error** | [**DeleteCertificateError**](DeleteCertificateError.md) |  | [optional] 
**previous_provisioning_state** | **str** | The previous provisioned state of the resource | [optional] [readonly] 
**previous_provisioning_state_transition_time** | **datetime** |  | [optional] [readonly] 
**provisioning_state** | **str** |  | [optional] [readonly] 
**provisioning_state_transition_time** | **datetime** |  | [optional] [readonly] 
**public_data** | **str** | The public key of the certificate. | [optional] [readonly] 
**format** | **str** | The format of the certificate - either Pfx or Cer. If omitted, the default is Pfx. | [optional] 
**thumbprint** | **str** | This must match the thumbprint from the name. | [optional] 
**thumbprint_algorithm** | **str** | This must match the first portion of the certificate name. Currently required to be &#39;SHA1&#39;. | [optional] 

## Example

```python
from openapi_client.models.certificate_properties import CertificateProperties

# TODO update the JSON string below
json = "{}"
# create an instance of CertificateProperties from a JSON string
certificate_properties_instance = CertificateProperties.from_json(json)
# print the JSON string representation of the object
print(CertificateProperties.to_json())

# convert the object into a dict
certificate_properties_dict = certificate_properties_instance.to_dict()
# create an instance of CertificateProperties from a dict
certificate_properties_from_dict = CertificateProperties.from_dict(certificate_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


