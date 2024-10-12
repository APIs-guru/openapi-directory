# Prefix


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**depth** | **int** |  | [optional] [readonly] 
**children** | **int** |  | [optional] [readonly] 
**comments** | **str** |  | [optional] 
**created** | **datetime** |  | [optional] [readonly] 
**custom_fields** | **object** |  | [optional] 
**description** | **str** |  | [optional] 
**display** | **str** |  | [optional] [readonly] 
**family** | [**Family**](Family.md) |  | [optional] 
**id** | **int** |  | [optional] [readonly] 
**is_pool** | **bool** | All IP addresses within this prefix are considered usable | [optional] 
**last_updated** | **datetime** |  | [optional] [readonly] 
**mark_utilized** | **bool** | Treat as 100% utilized | [optional] 
**prefix** | **str** | IPv4 or IPv6 network with mask | 
**role** | [**NestedRole**](NestedRole.md) |  | [optional] 
**site** | [**NestedSite**](NestedSite.md) |  | [optional] 
**status** | [**Status10**](Status10.md) |  | [optional] 
**tags** | [**List[NestedTag]**](NestedTag.md) |  | [optional] 
**tenant** | [**NestedTenant**](NestedTenant.md) |  | [optional] 
**url** | **str** |  | [optional] [readonly] 
**vlan** | [**NestedVLAN**](NestedVLAN.md) |  | [optional] 
**vrf** | [**NestedVRF**](NestedVRF.md) |  | [optional] 

## Example

```python
from openapi_client.models.prefix import Prefix

# TODO update the JSON string below
json = "{}"
# create an instance of Prefix from a JSON string
prefix_instance = Prefix.from_json(json)
# print the JSON string representation of the object
print(Prefix.to_json())

# convert the object into a dict
prefix_dict = prefix_instance.to_dict()
# create an instance of Prefix from a dict
prefix_from_dict = Prefix.from_dict(prefix_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


