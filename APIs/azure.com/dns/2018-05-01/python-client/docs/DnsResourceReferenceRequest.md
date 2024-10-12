# DnsResourceReferenceRequest

Represents the properties of the Dns Resource Reference Request.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**properties** | [**DnsResourceReferenceRequestProperties**](DnsResourceReferenceRequestProperties.md) |  | [optional] 

## Example

```python
from openapi_client.models.dns_resource_reference_request import DnsResourceReferenceRequest

# TODO update the JSON string below
json = "{}"
# create an instance of DnsResourceReferenceRequest from a JSON string
dns_resource_reference_request_instance = DnsResourceReferenceRequest.from_json(json)
# print the JSON string representation of the object
print(DnsResourceReferenceRequest.to_json())

# convert the object into a dict
dns_resource_reference_request_dict = dns_resource_reference_request_instance.to_dict()
# create an instance of DnsResourceReferenceRequest from a dict
dns_resource_reference_request_from_dict = DnsResourceReferenceRequest.from_dict(dns_resource_reference_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


