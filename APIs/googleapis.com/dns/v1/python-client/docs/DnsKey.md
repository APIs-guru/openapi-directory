# DnsKey

A DNSSEC key pair.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**algorithm** | **str** | String mnemonic specifying the DNSSEC algorithm of this key. Immutable after creation time. | [optional] 
**creation_time** | **str** | The time that this resource was created in the control plane. This is in RFC3339 text format. Output only. | [optional] 
**description** | **str** | A mutable string of at most 1024 characters associated with this resource for the user&#39;s convenience. Has no effect on the resource&#39;s function. | [optional] 
**digests** | [**List[DnsKeyDigest]**](DnsKeyDigest.md) | Cryptographic hashes of the DNSKEY resource record associated with this DnsKey. These digests are needed to construct a DS record that points at this DNS key. Output only. | [optional] 
**id** | **str** | Unique identifier for the resource; defined by the server (output only). | [optional] 
**is_active** | **bool** | Active keys are used to sign subsequent changes to the ManagedZone. Inactive keys are still present as DNSKEY Resource Records for the use of resolvers validating existing signatures. | [optional] 
**key_length** | **int** | Length of the key in bits. Specified at creation time, and then immutable. | [optional] 
**key_tag** | **int** | The key tag is a non-cryptographic hash of the a DNSKEY resource record associated with this DnsKey. The key tag can be used to identify a DNSKEY more quickly (but it is not a unique identifier). In particular, the key tag is used in a parent zone&#39;s DS record to point at the DNSKEY in this child ManagedZone. The key tag is a number in the range [0, 65535] and the algorithm to calculate it is specified in RFC4034 Appendix B. Output only. | [optional] 
**kind** | **str** |  | [optional] [default to 'dns#dnsKey']
**public_key** | **str** | Base64 encoded public half of this key. Output only. | [optional] 
**type** | **str** | One of \&quot;KEY_SIGNING\&quot; or \&quot;ZONE_SIGNING\&quot;. Keys of type KEY_SIGNING have the Secure Entry Point flag set and, when active, are used to sign only resource record sets of type DNSKEY. Otherwise, the Secure Entry Point flag is cleared, and this key is used to sign only resource record sets of other types. Immutable after creation time. | [optional] 

## Example

```python
from openapi_client.models.dns_key import DnsKey

# TODO update the JSON string below
json = "{}"
# create an instance of DnsKey from a JSON string
dns_key_instance = DnsKey.from_json(json)
# print the JSON string representation of the object
print(DnsKey.to_json())

# convert the object into a dict
dns_key_dict = dns_key_instance.to_dict()
# create an instance of DnsKey from a dict
dns_key_from_dict = DnsKey.from_dict(dns_key_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


