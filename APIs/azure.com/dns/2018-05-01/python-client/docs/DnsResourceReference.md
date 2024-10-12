# DnsResourceReference

Represents a single Azure resource and its referencing DNS records.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**dns_resources** | [**List[SubResource]**](SubResource.md) | A list of dns Records  | [optional] 
**target_resource** | [**SubResource**](SubResource.md) |  | [optional] 

## Example

```python
from openapi_client.models.dns_resource_reference import DnsResourceReference

# TODO update the JSON string below
json = "{}"
# create an instance of DnsResourceReference from a JSON string
dns_resource_reference_instance = DnsResourceReference.from_json(json)
# print the JSON string representation of the object
print(DnsResourceReference.to_json())

# convert the object into a dict
dns_resource_reference_dict = dns_resource_reference_instance.to_dict()
# create an instance of DnsResourceReference from a dict
dns_resource_reference_from_dict = DnsResourceReference.from_dict(dns_resource_reference_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


