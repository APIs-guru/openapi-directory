# CertDnsChallenge

Represents a DNS certificate challenge.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**domain_name** | **str** | The domain name upon which the DNS challenge must be satisfied. | [optional] 
**token** | **str** | The value that must be present as a TXT record on the domain name to satisfy the challenge. | [optional] 

## Example

```python
from openapi_client.models.cert_dns_challenge import CertDnsChallenge

# TODO update the JSON string below
json = "{}"
# create an instance of CertDnsChallenge from a JSON string
cert_dns_challenge_instance = CertDnsChallenge.from_json(json)
# print the JSON string representation of the object
print(CertDnsChallenge.to_json())

# convert the object into a dict
cert_dns_challenge_dict = cert_dns_challenge_instance.to_dict()
# create an instance of CertDnsChallenge from a dict
cert_dns_challenge_from_dict = CertDnsChallenge.from_dict(cert_dns_challenge_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


