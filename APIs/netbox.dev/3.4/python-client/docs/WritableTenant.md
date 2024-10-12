# WritableTenant


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**circuit_count** | **int** |  | [optional] [readonly] 
**cluster_count** | **int** |  | [optional] [readonly] 
**comments** | **str** |  | [optional] 
**created** | **datetime** |  | [optional] [readonly] 
**custom_fields** | **object** |  | [optional] 
**description** | **str** |  | [optional] 
**device_count** | **int** |  | [optional] [readonly] 
**display** | **str** |  | [optional] [readonly] 
**group** | **int** |  | [optional] 
**id** | **int** |  | [optional] [readonly] 
**ipaddress_count** | **int** |  | [optional] [readonly] 
**last_updated** | **datetime** |  | [optional] [readonly] 
**name** | **str** |  | 
**prefix_count** | **int** |  | [optional] [readonly] 
**rack_count** | **int** |  | [optional] [readonly] 
**site_count** | **int** |  | [optional] [readonly] 
**slug** | **str** |  | 
**tags** | [**List[NestedTag]**](NestedTag.md) |  | [optional] 
**url** | **str** |  | [optional] [readonly] 
**virtualmachine_count** | **int** |  | [optional] [readonly] 
**vlan_count** | **int** |  | [optional] [readonly] 
**vrf_count** | **int** |  | [optional] [readonly] 

## Example

```python
from openapi_client.models.writable_tenant import WritableTenant

# TODO update the JSON string below
json = "{}"
# create an instance of WritableTenant from a JSON string
writable_tenant_instance = WritableTenant.from_json(json)
# print the JSON string representation of the object
print(WritableTenant.to_json())

# convert the object into a dict
writable_tenant_dict = writable_tenant_instance.to_dict()
# create an instance of WritableTenant from a dict
writable_tenant_from_dict = WritableTenant.from_dict(writable_tenant_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


