# DnsResourceRecord

The structure describing the DNS Resource Record that needs to be added to DNS configuration for the authorization to be usable by certificate.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data** | **str** | Output only. Data of the DNS Resource Record. | [optional] [readonly] 
**name** | **str** | Output only. Fully qualified name of the DNS Resource Record. e.g. &#x60;_acme-challenge.example.com&#x60; | [optional] [readonly] 
**type** | **str** | Output only. Type of the DNS Resource Record. Currently always set to \&quot;CNAME\&quot;. | [optional] [readonly] 

## Example

```python
from openapi_client.models.dns_resource_record import DnsResourceRecord

# TODO update the JSON string below
json = "{}"
# create an instance of DnsResourceRecord from a JSON string
dns_resource_record_instance = DnsResourceRecord.from_json(json)
# print the JSON string representation of the object
print(DnsResourceRecord.to_json())

# convert the object into a dict
dns_resource_record_dict = dns_resource_record_instance.to_dict()
# create an instance of DnsResourceRecord from a dict
dns_resource_record_from_dict = DnsResourceRecord.from_dict(dns_resource_record_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


