# CertificateAuthority

A CertificateAuthority represents an individual Certificate Authority. A CertificateAuthority can be used to create Certificates.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**access_urls** | [**AccessUrls**](AccessUrls.md) |  | [optional] 
**ca_certificate_descriptions** | [**List[CertificateDescription]**](CertificateDescription.md) | Output only. A structured description of this CertificateAuthority&#39;s CA certificate and its issuers. Ordered as self-to-root. | [optional] [readonly] 
**config** | [**CertificateConfig**](CertificateConfig.md) |  | [optional] 
**create_time** | **str** | Output only. The time at which this CertificateAuthority was created. | [optional] [readonly] 
**delete_time** | **str** | Output only. The time at which this CertificateAuthority was soft deleted, if it is in the DELETED state. | [optional] [readonly] 
**expire_time** | **str** | Output only. The time at which this CertificateAuthority will be permanently purged, if it is in the DELETED state. | [optional] [readonly] 
**gcs_bucket** | **str** | Immutable. The name of a Cloud Storage bucket where this CertificateAuthority will publish content, such as the CA certificate and CRLs. This must be a bucket name, without any prefixes (such as &#x60;gs://&#x60;) or suffixes (such as &#x60;.googleapis.com&#x60;). For example, to use a bucket named &#x60;my-bucket&#x60;, you would simply specify &#x60;my-bucket&#x60;. If not specified, a managed bucket will be created. | [optional] 
**key_spec** | [**KeyVersionSpec**](KeyVersionSpec.md) |  | [optional] 
**labels** | **Dict[str, str]** | Optional. Labels with user-defined metadata. | [optional] 
**lifetime** | **str** | Required. Immutable. The desired lifetime of the CA certificate. Used to create the \&quot;not_before_time\&quot; and \&quot;not_after_time\&quot; fields inside an X.509 certificate. | [optional] 
**name** | **str** | Output only. The resource name for this CertificateAuthority in the format &#x60;projects/*/locations/*/caPools/*/certificateAuthorities/*&#x60;. | [optional] [readonly] 
**pem_ca_certificates** | **List[str]** | Output only. This CertificateAuthority&#39;s certificate chain, including the current CertificateAuthority&#39;s certificate. Ordered such that the root issuer is the final element (consistent with RFC 5246). For a self-signed CA, this will only list the current CertificateAuthority&#39;s certificate. | [optional] [readonly] 
**state** | **str** | Output only. The State for this CertificateAuthority. | [optional] [readonly] 
**subordinate_config** | [**SubordinateConfig**](SubordinateConfig.md) |  | [optional] 
**tier** | **str** | Output only. The CaPool.Tier of the CaPool that includes this CertificateAuthority. | [optional] [readonly] 
**type** | **str** | Required. Immutable. The Type of this CertificateAuthority. | [optional] 
**update_time** | **str** | Output only. The time at which this CertificateAuthority was last updated. | [optional] [readonly] 

## Example

```python
from openapi_client.models.certificate_authority import CertificateAuthority

# TODO update the JSON string below
json = "{}"
# create an instance of CertificateAuthority from a JSON string
certificate_authority_instance = CertificateAuthority.from_json(json)
# print the JSON string representation of the object
print(CertificateAuthority.to_json())

# convert the object into a dict
certificate_authority_dict = certificate_authority_instance.to_dict()
# create an instance of CertificateAuthority from a dict
certificate_authority_from_dict = CertificateAuthority.from_dict(certificate_authority_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


