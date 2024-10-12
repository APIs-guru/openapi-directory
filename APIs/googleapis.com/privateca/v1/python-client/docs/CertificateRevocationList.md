# CertificateRevocationList

A CertificateRevocationList corresponds to a signed X.509 certificate Revocation List (CRL). A CRL contains the serial numbers of certificates that should no longer be trusted.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**access_url** | **str** | Output only. The location where &#39;pem_crl&#39; can be accessed. | [optional] [readonly] 
**create_time** | **str** | Output only. The time at which this CertificateRevocationList was created. | [optional] [readonly] 
**labels** | **Dict[str, str]** | Optional. Labels with user-defined metadata. | [optional] 
**name** | **str** | Output only. The resource name for this CertificateRevocationList in the format &#x60;projects/*/locations/*/caPools/*certificateAuthorities/*/ certificateRevocationLists/*&#x60;. | [optional] [readonly] 
**pem_crl** | **str** | Output only. The PEM-encoded X.509 CRL. | [optional] [readonly] 
**revision_id** | **str** | Output only. The revision ID of this CertificateRevocationList. A new revision is committed whenever a new CRL is published. The format is an 8-character hexadecimal string. | [optional] [readonly] 
**revoked_certificates** | [**List[RevokedCertificate]**](RevokedCertificate.md) | Output only. The revoked serial numbers that appear in pem_crl. | [optional] [readonly] 
**sequence_number** | **str** | Output only. The CRL sequence number that appears in pem_crl. | [optional] [readonly] 
**state** | **str** | Output only. The State for this CertificateRevocationList. | [optional] [readonly] 
**update_time** | **str** | Output only. The time at which this CertificateRevocationList was updated. | [optional] [readonly] 

## Example

```python
from openapi_client.models.certificate_revocation_list import CertificateRevocationList

# TODO update the JSON string below
json = "{}"
# create an instance of CertificateRevocationList from a JSON string
certificate_revocation_list_instance = CertificateRevocationList.from_json(json)
# print the JSON string representation of the object
print(CertificateRevocationList.to_json())

# convert the object into a dict
certificate_revocation_list_dict = certificate_revocation_list_instance.to_dict()
# create an instance of CertificateRevocationList from a dict
certificate_revocation_list_from_dict = CertificateRevocationList.from_dict(certificate_revocation_list_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


