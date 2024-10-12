# L2VPNTermination


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**assigned_object** | **object** |  | [optional] [readonly] 
**assigned_object_id** | **int** |  | 
**assigned_object_type** | **str** |  | 
**created** | **datetime** |  | [optional] [readonly] 
**custom_fields** | **object** |  | [optional] 
**display** | **str** |  | [optional] [readonly] 
**id** | **int** |  | [optional] [readonly] 
**l2vpn** | [**NestedL2VPN**](NestedL2VPN.md) |  | 
**last_updated** | **datetime** |  | [optional] [readonly] 
**tags** | [**List[NestedTag]**](NestedTag.md) |  | [optional] 
**url** | **str** |  | [optional] [readonly] 

## Example

```python
from openapi_client.models.l2_vpn_termination import L2VPNTermination

# TODO update the JSON string below
json = "{}"
# create an instance of L2VPNTermination from a JSON string
l2_vpn_termination_instance = L2VPNTermination.from_json(json)
# print the JSON string representation of the object
print(L2VPNTermination.to_json())

# convert the object into a dict
l2_vpn_termination_dict = l2_vpn_termination_instance.to_dict()
# create an instance of L2VPNTermination from a dict
l2_vpn_termination_from_dict = L2VPNTermination.from_dict(l2_vpn_termination_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


