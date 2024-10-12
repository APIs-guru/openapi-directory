# CustomDns

Configuration for an arbitrary DNS provider.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ds_records** | [**List[DsRecord]**](DsRecord.md) | The list of DS records for this domain, which are used to enable DNSSEC. The domain&#39;s DNS provider can provide the values to set here. If this field is empty, DNSSEC is disabled. | [optional] 
**name_servers** | **List[str]** | Required. A list of name servers that store the DNS zone for this domain. Each name server is a domain name, with Unicode domain names expressed in Punycode format. | [optional] 

## Example

```python
from openapi_client.models.custom_dns import CustomDns

# TODO update the JSON string below
json = "{}"
# create an instance of CustomDns from a JSON string
custom_dns_instance = CustomDns.from_json(json)
# print the JSON string representation of the object
print(CustomDns.to_json())

# convert the object into a dict
custom_dns_dict = custom_dns_instance.to_dict()
# create an instance of CustomDns from a dict
custom_dns_from_dict = CustomDns.from_dict(custom_dns_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


