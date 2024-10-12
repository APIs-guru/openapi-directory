# DnsUpdates

A set of DNS record updates that you should make to allow Hosting to serve secure content in response to requests against your domain name. These updates present the current state of your domain name's DNS records when Hosting last queried them, and the desired set of records that Hosting needs to see before your custom domain can be fully active.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**check_time** | **str** | The last time Hosting checked your custom domain&#39;s DNS records. | [optional] 
**desired** | [**List[DnsRecordSet]**](DnsRecordSet.md) | The set of DNS records Hosting needs to serve secure content on the domain. | [optional] 
**discovered** | [**List[DnsRecordSet]**](DnsRecordSet.md) | The set of DNS records Hosting discovered when inspecting a domain. | [optional] 

## Example

```python
from openapi_client.models.dns_updates import DnsUpdates

# TODO update the JSON string below
json = "{}"
# create an instance of DnsUpdates from a JSON string
dns_updates_instance = DnsUpdates.from_json(json)
# print the JSON string representation of the object
print(DnsUpdates.to_json())

# convert the object into a dict
dns_updates_dict = dns_updates_instance.to_dict()
# create an instance of DnsUpdates from a dict
dns_updates_from_dict = DnsUpdates.from_dict(dns_updates_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


