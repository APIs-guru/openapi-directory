# Certificate

Defines TLS certificate.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**create_time** | **str** | Output only. The creation timestamp of a Certificate. | [optional] [readonly] 
**description** | **str** | One or more paragraphs of text description of a certificate. | [optional] 
**expire_time** | **str** | Output only. The expiry timestamp of a Certificate. | [optional] [readonly] 
**labels** | **Dict[str, str]** | Set of labels associated with a Certificate. | [optional] 
**managed** | [**ManagedCertificate**](ManagedCertificate.md) |  | [optional] 
**name** | **str** | A user-defined name of the certificate. Certificate names must be unique globally and match pattern &#x60;projects/*/locations/*/certificates/*&#x60;. | [optional] 
**pem_certificate** | **str** | Output only. The PEM-encoded certificate chain. | [optional] [readonly] 
**san_dnsnames** | **List[str]** | Output only. The list of Subject Alternative Names of dnsName type defined in the certificate (see RFC 5280 4.2.1.6). Managed certificates that haven&#39;t been provisioned yet have this field populated with a value of the managed.domains field. | [optional] [readonly] 
**scope** | **str** | Immutable. The scope of the certificate. | [optional] 
**self_managed** | [**SelfManagedCertificate**](SelfManagedCertificate.md) |  | [optional] 
**update_time** | **str** | Output only. The last update timestamp of a Certificate. | [optional] [readonly] 

## Example

```python
from openapi_client.models.certificate import Certificate

# TODO update the JSON string below
json = "{}"
# create an instance of Certificate from a JSON string
certificate_instance = Certificate.from_json(json)
# print the JSON string representation of the object
print(Certificate.to_json())

# convert the object into a dict
certificate_dict = certificate_instance.to_dict()
# create an instance of Certificate from a dict
certificate_from_dict = Certificate.from_dict(certificate_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


