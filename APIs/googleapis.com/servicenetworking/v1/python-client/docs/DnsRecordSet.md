# DnsRecordSet

Represents a DNS record set resource.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data** | **List[str]** | Required. As defined in RFC 1035 (section 5) and RFC 1034 (section 3.6.1) for examples see https://cloud.google.com/dns/records/json-record. | [optional] 
**domain** | **str** | Required. The DNS or domain name of the record set, e.g. &#x60;test.example.com&#x60;. Cloud DNS requires that a DNS suffix ends with a trailing dot. | [optional] 
**ttl** | **str** | Required. The period of time for which this RecordSet can be cached by resolvers. | [optional] 
**type** | **str** | Required. The identifier of a supported record type. | [optional] 

## Example

```python
from openapi_client.models.dns_record_set import DnsRecordSet

# TODO update the JSON string below
json = "{}"
# create an instance of DnsRecordSet from a JSON string
dns_record_set_instance = DnsRecordSet.from_json(json)
# print the JSON string representation of the object
print(DnsRecordSet.to_json())

# convert the object into a dict
dns_record_set_dict = dns_record_set_instance.to_dict()
# create an instance of DnsRecordSet from a dict
dns_record_set_from_dict = DnsRecordSet.from_dict(dns_record_set_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


