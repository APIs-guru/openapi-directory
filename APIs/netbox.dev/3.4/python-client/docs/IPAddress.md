# IPAddress


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
**family** | [**Family**](Family.md) |  | [optional] 
**id** | **int** |  | [optional] [readonly] 
**last_updated** | **datetime** |  | [optional] [readonly] 
**nat_inside** | [**NestedIPAddress**](NestedIPAddress.md) |  | [optional] 
**nat_outside** | [**List[NestedIPAddress]**](NestedIPAddress.md) |  | [optional] [readonly] 
**role** | [**Role1**](Role1.md) |  | [optional] 
**status** | [**Status4**](Status4.md) |  | [optional] 
**tags** | [**List[NestedTag]**](NestedTag.md) |  | [optional] 
**tenant** | [**NestedTenant**](NestedTenant.md) |  | [optional] 
**url** | **str** |  | [optional] [readonly] 
**vrf** | [**NestedVRF**](NestedVRF.md) |  | [optional] 

## Example

```python
from openapi_client.models.ip_address import IPAddress

# TODO update the JSON string below
json = "{}"
# create an instance of IPAddress from a JSON string
ip_address_instance = IPAddress.from_json(json)
# print the JSON string representation of the object
print(IPAddress.to_json())

# convert the object into a dict
ip_address_dict = ip_address_instance.to_dict()
# create an instance of IPAddress from a dict
ip_address_from_dict = IPAddress.from_dict(ip_address_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


