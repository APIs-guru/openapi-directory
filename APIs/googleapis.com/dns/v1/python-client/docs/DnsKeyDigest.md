# DnsKeyDigest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**digest** | **str** | The base-16 encoded bytes of this digest. Suitable for use in a DS resource record. | [optional] 
**type** | **str** | Specifies the algorithm used to calculate this digest. | [optional] 

## Example

```python
from openapi_client.models.dns_key_digest import DnsKeyDigest

# TODO update the JSON string below
json = "{}"
# create an instance of DnsKeyDigest from a JSON string
dns_key_digest_instance = DnsKeyDigest.from_json(json)
# print the JSON string representation of the object
print(DnsKeyDigest.to_json())

# convert the object into a dict
dns_key_digest_dict = dns_key_digest_instance.to_dict()
# create an instance of DnsKeyDigest from a dict
dns_key_digest_from_dict = DnsKeyDigest.from_dict(dns_key_digest_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


