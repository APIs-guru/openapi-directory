# WritableTenantGroup


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**depth** | **int** |  | [optional] [readonly] 
**created** | **datetime** |  | [optional] [readonly] 
**custom_fields** | **object** |  | [optional] 
**description** | **str** |  | [optional] 
**display** | **str** |  | [optional] [readonly] 
**id** | **int** |  | [optional] [readonly] 
**last_updated** | **datetime** |  | [optional] [readonly] 
**name** | **str** |  | 
**parent** | **int** |  | [optional] 
**slug** | **str** |  | 
**tags** | [**List[NestedTag]**](NestedTag.md) |  | [optional] 
**tenant_count** | **int** |  | [optional] [readonly] 
**url** | **str** |  | [optional] [readonly] 

## Example

```python
from openapi_client.models.writable_tenant_group import WritableTenantGroup

# TODO update the JSON string below
json = "{}"
# create an instance of WritableTenantGroup from a JSON string
writable_tenant_group_instance = WritableTenantGroup.from_json(json)
# print the JSON string representation of the object
print(WritableTenantGroup.to_json())

# convert the object into a dict
writable_tenant_group_dict = writable_tenant_group_instance.to_dict()
# create an instance of WritableTenantGroup from a dict
writable_tenant_group_from_dict = WritableTenantGroup.from_dict(writable_tenant_group_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


