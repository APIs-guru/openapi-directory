# VRF


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**comments** | **str** |  | [optional] 
**created** | **datetime** |  | [optional] [readonly] 
**custom_fields** | **object** |  | [optional] 
**description** | **str** |  | [optional] 
**display** | **str** |  | [optional] [readonly] 
**enforce_unique** | **bool** | Prevent duplicate prefixes/IP addresses within this VRF | [optional] 
**export_targets** | [**List[NestedRouteTarget]**](NestedRouteTarget.md) |  | [optional] 
**id** | **int** |  | [optional] [readonly] 
**import_targets** | [**List[NestedRouteTarget]**](NestedRouteTarget.md) |  | [optional] 
**ipaddress_count** | **int** |  | [optional] [readonly] 
**last_updated** | **datetime** |  | [optional] [readonly] 
**name** | **str** |  | 
**prefix_count** | **int** |  | [optional] [readonly] 
**rd** | **str** | Unique route distinguisher (as defined in RFC 4364) | [optional] 
**tags** | [**List[NestedTag]**](NestedTag.md) |  | [optional] 
**tenant** | [**NestedTenant**](NestedTenant.md) |  | [optional] 
**url** | **str** |  | [optional] [readonly] 

## Example

```python
from openapi_client.models.vrf import VRF

# TODO update the JSON string below
json = "{}"
# create an instance of VRF from a JSON string
vrf_instance = VRF.from_json(json)
# print the JSON string representation of the object
print(VRF.to_json())

# convert the object into a dict
vrf_dict = vrf_instance.to_dict()
# create an instance of VRF from a dict
vrf_from_dict = VRF.from_dict(vrf_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


