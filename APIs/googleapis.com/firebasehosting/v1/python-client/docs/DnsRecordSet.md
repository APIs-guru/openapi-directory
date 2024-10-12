# DnsRecordSet

A set of DNS records relevant to the setup and maintenance of a custom domain in Firebase Hosting.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**check_error** | [**Status**](Status.md) |  | [optional] 
**domain_name** | **str** | Output only. The domain name the record set pertains to. | [optional] [readonly] 
**records** | [**List[DnsRecord]**](DnsRecord.md) | Output only. Records on the domain. | [optional] [readonly] 

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


