# DnsRecord

DNS records are resource records that define how systems and services should behave when handling requests for a domain name. For example, when you add `A` records to your domain name's DNS records, you're informing other systems (such as your users' web browsers) to contact those IPv4 addresses to retrieve resources relevant to your domain name (such as your Hosting site files).

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**domain_name** | **str** | Output only. The domain name the record pertains to, e.g. &#x60;foo.bar.com.&#x60;. | [optional] [readonly] 
**rdata** | **str** | Output only. The data of the record. The meaning of the value depends on record type: - A and AAAA: IP addresses for the domain name. - CNAME: Another domain to check for records. - TXT: Arbitrary text strings associated with the domain name. Hosting uses TXT records to determine which Firebase projects have permission to act on the domain name&#39;s behalf. - CAA: The record&#39;s flags, tag, and value, e.g. &#x60;0 issue \&quot;pki.goog\&quot;&#x60;. | [optional] [readonly] 
**required_action** | **str** | Output only. An enum that indicates the a required action for this record. | [optional] [readonly] 
**type** | **str** | Output only. The record&#39;s type, which determines what data the record contains. | [optional] [readonly] 

## Example

```python
from openapi_client.models.dns_record import DnsRecord

# TODO update the JSON string below
json = "{}"
# create an instance of DnsRecord from a JSON string
dns_record_instance = DnsRecord.from_json(json)
# print the JSON string representation of the object
print(DnsRecord.to_json())

# convert the object into a dict
dns_record_dict = dns_record_instance.to_dict()
# create an instance of DnsRecord from a dict
dns_record_from_dict = DnsRecord.from_dict(dns_record_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


