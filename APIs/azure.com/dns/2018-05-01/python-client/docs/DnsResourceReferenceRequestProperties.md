# DnsResourceReferenceRequestProperties

Represents the properties of the Dns Resource Reference Request.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**target_resources** | [**List[SubResource]**](SubResource.md) | A list of references to azure resources for which referencing dns records need to be queried. | [optional] 

## Example

```python
from openapi_client.models.dns_resource_reference_request_properties import DnsResourceReferenceRequestProperties

# TODO update the JSON string below
json = "{}"
# create an instance of DnsResourceReferenceRequestProperties from a JSON string
dns_resource_reference_request_properties_instance = DnsResourceReferenceRequestProperties.from_json(json)
# print the JSON string representation of the object
print(DnsResourceReferenceRequestProperties.to_json())

# convert the object into a dict
dns_resource_reference_request_properties_dict = dns_resource_reference_request_properties_instance.to_dict()
# create an instance of DnsResourceReferenceRequestProperties from a dict
dns_resource_reference_request_properties_from_dict = DnsResourceReferenceRequestProperties.from_dict(dns_resource_reference_request_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


