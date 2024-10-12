# WritableIPAddress


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**address** | **str** | IPv4 or IPv6 address (with mask) | 
**assigned_object** | **object** |  | [optional] [readonly] 
**assigned_object_id** | **int** |  | [optional] 
**assigned_object_type** | **str** |  | [optional] 
**comments** | **str** |  | [optional] 
**created** | **datetime** |  | [optional] [readonly] 
**custom_fields** | **object** |  | [optional] 
**description** | **str** |  | [optional] 
**display** | **str** |  | [optional] [readonly] 
**dns_name** | **str** | Hostname or FQDN (not case-sensitive) | [optional] 
**family** | **str** |  | [optional] [readonly] 
**id** | **int** |  | [optional] [readonly] 
**last_updated** | **datetime** |  | [optional] [readonly] 
**nat_inside** | **int** | The IP for which this address is the \&quot;outside\&quot; IP | [optional] 
**nat_outside** | [**List[NestedIPAddress]**](NestedIPAddress.md) |  | [optional] [readonly] 
**role** | **str** | The functional role of this IP | [optional] 
**status** | **str** | The operational status of this IP | [optional] 
**tags** | [**List[NestedTag]**](NestedTag.md) |  | [optional] 
**tenant** | **int** |  | [optional] 
**url** | **str** |  | [optional] [readonly] 
**vrf** | **int** |  | [optional] 

## Example

```python
from openapi_client.models.writable_ip_address import WritableIPAddress

# TODO update the JSON string below
json = "{}"
# create an instance of WritableIPAddress from a JSON string
writable_ip_address_instance = WritableIPAddress.from_json(json)
# print the JSON string representation of the object
print(WritableIPAddress.to_json())

# convert the object into a dict
writable_ip_address_dict = writable_ip_address_instance.to_dict()
# create an instance of WritableIPAddress from a dict
writable_ip_address_from_dict = WritableIPAddress.from_dict(writable_ip_address_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


