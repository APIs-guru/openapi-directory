# NestedTenant


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**display** | **str** |  | [optional] [readonly] 
**id** | **int** |  | [optional] [readonly] 
**name** | **str** |  | 
**slug** | **str** |  | 
**url** | **str** |  | [optional] [readonly] 

## Example

```python
from openapi_client.models.nested_tenant import NestedTenant

# TODO update the JSON string below
json = "{}"
# create an instance of NestedTenant from a JSON string
nested_tenant_instance = NestedTenant.from_json(json)
# print the JSON string representation of the object
print(NestedTenant.to_json())

# convert the object into a dict
nested_tenant_dict = nested_tenant_instance.to_dict()
# create an instance of NestedTenant from a dict
nested_tenant_from_dict = NestedTenant.from_dict(nested_tenant_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


