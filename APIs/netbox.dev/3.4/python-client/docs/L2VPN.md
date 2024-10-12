# L2VPN


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**comments** | **str** |  | [optional] 
**created** | **datetime** |  | [optional] [readonly] 
**custom_fields** | **object** |  | [optional] 
**description** | **str** |  | [optional] 
**display** | **str** |  | [optional] [readonly] 
**export_targets** | [**List[NestedRouteTarget]**](NestedRouteTarget.md) |  | [optional] 
**id** | **int** |  | [optional] [readonly] 
**identifier** | **int** |  | [optional] 
**import_targets** | [**List[NestedRouteTarget]**](NestedRouteTarget.md) |  | [optional] 
**last_updated** | **datetime** |  | [optional] [readonly] 
**name** | **str** |  | 
**slug** | **str** |  | 
**tags** | [**List[NestedTag]**](NestedTag.md) |  | [optional] 
**tenant** | [**NestedTenant**](NestedTenant.md) |  | [optional] 
**type** | [**Type4**](Type4.md) |  | [optional] 
**url** | **str** |  | [optional] [readonly] 

## Example

```python
from openapi_client.models.l2_vpn import L2VPN

# TODO update the JSON string below
json = "{}"
# create an instance of L2VPN from a JSON string
l2_vpn_instance = L2VPN.from_json(json)
# print the JSON string representation of the object
print(L2VPN.to_json())

# convert the object into a dict
l2_vpn_dict = l2_vpn_instance.to_dict()
# create an instance of L2VPN from a dict
l2_vpn_from_dict = L2VPN.from_dict(l2_vpn_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


