# DomainProvisioning

The current certificate provisioning status information for a domain.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**cert_challenge_discovered_txt** | **List[str]** | The TXT records (for the certificate challenge) that were found at the last DNS fetch. | [optional] 
**cert_challenge_dns** | [**CertDnsChallenge**](CertDnsChallenge.md) |  | [optional] 
**cert_challenge_http** | [**CertHttpChallenge**](CertHttpChallenge.md) |  | [optional] 
**cert_status** | **str** | The certificate provisioning status; updated when Firebase Hosting provisions an SSL certificate for the domain. | [optional] 
**discovered_ips** | **List[str]** | The IPs found at the last DNS fetch. | [optional] 
**dns_fetch_time** | **str** | The time at which the last DNS fetch occurred. | [optional] 
**dns_status** | **str** | The DNS record match status as of the last DNS fetch. | [optional] 
**expected_ips** | **List[str]** | The list of IPs to which the domain is expected to resolve. | [optional] 

## Example

```python
from openapi_client.models.domain_provisioning import DomainProvisioning

# TODO update the JSON string below
json = "{}"
# create an instance of DomainProvisioning from a JSON string
domain_provisioning_instance = DomainProvisioning.from_json(json)
# print the JSON string representation of the object
print(DomainProvisioning.to_json())

# convert the object into a dict
domain_provisioning_dict = domain_provisioning_instance.to_dict()
# create an instance of DomainProvisioning from a dict
domain_provisioning_from_dict = DomainProvisioning.from_dict(domain_provisioning_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


