# Certificate

A Certificate corresponds to a signed X.509 certificate issued by a CertificateAuthority.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**certificate_description** | [**CertificateDescription**](CertificateDescription.md) |  | [optional] 
**certificate_template** | **str** | Immutable. The resource name for a CertificateTemplate used to issue this certificate, in the format &#x60;projects/*/locations/*/certificateTemplates/*&#x60;. If this is specified, the caller must have the necessary permission to use this template. If this is omitted, no template will be used. This template must be in the same location as the Certificate. | [optional] 
**config** | [**CertificateConfig**](CertificateConfig.md) |  | [optional] 
**create_time** | **str** | Output only. The time at which this Certificate was created. | [optional] [readonly] 
**issuer_certificate_authority** | **str** | Output only. The resource name of the issuing CertificateAuthority in the format &#x60;projects/*/locations/*/caPools/*/certificateAuthorities/*&#x60;. | [optional] [readonly] 
**labels** | **Dict[str, str]** | Optional. Labels with user-defined metadata. | [optional] 
**lifetime** | **str** | Required. Immutable. The desired lifetime of a certificate. Used to create the \&quot;not_before_time\&quot; and \&quot;not_after_time\&quot; fields inside an X.509 certificate. Note that the lifetime may be truncated if it would extend past the life of any certificate authority in the issuing chain. | [optional] 
**name** | **str** | Output only. The resource name for this Certificate in the format &#x60;projects/*/locations/*/caPools/*/certificates/*&#x60;. | [optional] [readonly] 
**pem_certificate** | **str** | Output only. The pem-encoded, signed X.509 certificate. | [optional] [readonly] 
**pem_certificate_chain** | **List[str]** | Output only. The chain that may be used to verify the X.509 certificate. Expected to be in issuer-to-root order according to RFC 5246. | [optional] [readonly] 
**pem_csr** | **str** | Immutable. A pem-encoded X.509 certificate signing request (CSR). | [optional] 
**revocation_details** | [**RevocationDetails**](RevocationDetails.md) |  | [optional] 
**subject_mode** | **str** | Immutable. Specifies how the Certificate&#39;s identity fields are to be decided. If this is omitted, the &#x60;DEFAULT&#x60; subject mode will be used. | [optional] 
**update_time** | **str** | Output only. The time at which this Certificate was updated. | [optional] [readonly] 

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


