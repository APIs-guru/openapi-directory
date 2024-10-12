# ManagedCertificate

Configuration and state of a Managed Certificate. Certificate Manager provisions and renews Managed Certificates automatically, for as long as it's authorized to do so.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**authorization_attempt_info** | [**List[AuthorizationAttemptInfo]**](AuthorizationAttemptInfo.md) | Output only. Detailed state of the latest authorization attempt for each domain specified for managed certificate resource. | [optional] [readonly] 
**dns_authorizations** | **List[str]** | Immutable. Authorizations that will be used for performing domain authorization. | [optional] 
**domains** | **List[str]** | Immutable. The domains for which a managed SSL certificate will be generated. Wildcard domains are only supported with DNS challenge resolution. | [optional] 
**issuance_config** | **str** | Immutable. The resource name for a CertificateIssuanceConfig used to configure private PKI certificates in the format &#x60;projects/*/locations/*/certificateIssuanceConfigs/*&#x60;. If this field is not set, the certificates will instead be publicly signed as documented at https://cloud.google.com/load-balancing/docs/ssl-certificates/google-managed-certs#caa. | [optional] 
**provisioning_issue** | [**ProvisioningIssue**](ProvisioningIssue.md) |  | [optional] 
**state** | **str** | Output only. State of the managed certificate resource. | [optional] [readonly] 

## Example

```python
from openapi_client.models.managed_certificate import ManagedCertificate

# TODO update the JSON string below
json = "{}"
# create an instance of ManagedCertificate from a JSON string
managed_certificate_instance = ManagedCertificate.from_json(json)
# print the JSON string representation of the object
print(ManagedCertificate.to_json())

# convert the object into a dict
managed_certificate_dict = managed_certificate_instance.to_dict()
# create an instance of ManagedCertificate from a dict
managed_certificate_from_dict = ManagedCertificate.from_dict(managed_certificate_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


