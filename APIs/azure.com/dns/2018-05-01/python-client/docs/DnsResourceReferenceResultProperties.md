# DnsResourceReferenceResultProperties

The result of dns resource reference request. Returns a list of dns resource references for each of the azure resource in the request.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**dns_resource_references** | [**List[DnsResourceReference]**](DnsResourceReference.md) | The result of dns resource reference request. A list of dns resource references for each of the azure resource in the request | [optional] 

## Example

```python
from openapi_client.models.dns_resource_reference_result_properties import DnsResourceReferenceResultProperties

# TODO update the JSON string below
json = "{}"
# create an instance of DnsResourceReferenceResultProperties from a JSON string
dns_resource_reference_result_properties_instance = DnsResourceReferenceResultProperties.from_json(json)
# print the JSON string representation of the object
print(DnsResourceReferenceResultProperties.to_json())

# convert the object into a dict
dns_resource_reference_result_properties_dict = dns_resource_reference_result_properties_instance.to_dict()
# create an instance of DnsResourceReferenceResultProperties from a dict
dns_resource_reference_result_properties_from_dict = DnsResourceReferenceResultProperties.from_dict(dns_resource_reference_result_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


