# DnsResourceReferenceResult

Represents the properties of the Dns Resource Reference Result.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**properties** | [**DnsResourceReferenceResultProperties**](DnsResourceReferenceResultProperties.md) |  | [optional] 

## Example

```python
from openapi_client.models.dns_resource_reference_result import DnsResourceReferenceResult

# TODO update the JSON string below
json = "{}"
# create an instance of DnsResourceReferenceResult from a JSON string
dns_resource_reference_result_instance = DnsResourceReferenceResult.from_json(json)
# print the JSON string representation of the object
print(DnsResourceReferenceResult.to_json())

# convert the object into a dict
dns_resource_reference_result_dict = dns_resource_reference_result_instance.to_dict()
# create an instance of DnsResourceReferenceResult from a dict
dns_resource_reference_result_from_dict = DnsResourceReferenceResult.from_dict(dns_resource_reference_result_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


