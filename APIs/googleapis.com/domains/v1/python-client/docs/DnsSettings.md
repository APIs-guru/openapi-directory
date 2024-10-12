# DnsSettings

Defines the DNS configuration of a `Registration`, including name servers, DNSSEC, and glue records.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**custom_dns** | [**CustomDns**](CustomDns.md) |  | [optional] 
**glue_records** | [**List[GlueRecord]**](GlueRecord.md) | The list of glue records for this &#x60;Registration&#x60;. Commonly empty. | [optional] 
**google_domains_dns** | [**GoogleDomainsDns**](GoogleDomainsDns.md) |  | [optional] 

## Example

```python
from openapi_client.models.dns_settings import DnsSettings

# TODO update the JSON string below
json = "{}"
# create an instance of DnsSettings from a JSON string
dns_settings_instance = DnsSettings.from_json(json)
# print the JSON string representation of the object
print(DnsSettings.to_json())

# convert the object into a dict
dns_settings_dict = dns_settings_instance.to_dict()
# create an instance of DnsSettings from a dict
dns_settings_from_dict = DnsSettings.from_dict(dns_settings_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


