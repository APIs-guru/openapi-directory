# DnsKeySpec

Parameters for DnsKey key generation. Used for generating initial keys for a new ManagedZone and as default when adding a new DnsKey.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**algorithm** | **str** | String mnemonic specifying the DNSSEC algorithm of this key. | [optional] 
**key_length** | **int** | Length of the keys in bits. | [optional] 
**key_type** | **str** | Specifies whether this is a key signing key (KSK) or a zone signing key (ZSK). Key signing keys have the Secure Entry Point flag set and, when active, are only used to sign resource record sets of type DNSKEY. Zone signing keys do not have the Secure Entry Point flag set and are used to sign all other types of resource record sets. | [optional] 
**kind** | **str** |  | [optional] [default to 'dns#dnsKeySpec']

## Example

```python
from openapi_client.models.dns_key_spec import DnsKeySpec

# TODO update the JSON string below
json = "{}"
# create an instance of DnsKeySpec from a JSON string
dns_key_spec_instance = DnsKeySpec.from_json(json)
# print the JSON string representation of the object
print(DnsKeySpec.to_json())

# convert the object into a dict
dns_key_spec_dict = dns_key_spec_instance.to_dict()
# create an instance of DnsKeySpec from a dict
dns_key_spec_from_dict = DnsKeySpec.from_dict(dns_key_spec_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


