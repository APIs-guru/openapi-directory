# NestedTenantGroup


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**depth** | **int** |  | [optional] [readonly] 
**display** | **str** |  | [optional] [readonly] 
**id** | **int** |  | [optional] [readonly] 
**name** | **str** |  | 
**slug** | **str** |  | 
**tenant_count** | **int** |  | [optional] [readonly] 
**url** | **str** |  | [optional] [readonly] 

## Example

```python
from openapi_client.models.nested_tenant_group import NestedTenantGroup

# TODO update the JSON string below
json = "{}"
# create an instance of NestedTenantGroup from a JSON string
nested_tenant_group_instance = NestedTenantGroup.from_json(json)
# print the JSON string representation of the object
print(NestedTenantGroup.to_json())

# convert the object into a dict
nested_tenant_group_dict = nested_tenant_group_instance.to_dict()
# create an instance of NestedTenantGroup from a dict
nested_tenant_group_from_dict = NestedTenantGroup.from_dict(nested_tenant_group_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


