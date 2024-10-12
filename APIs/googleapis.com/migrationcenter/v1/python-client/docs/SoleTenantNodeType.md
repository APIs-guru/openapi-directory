# SoleTenantNodeType

A Sole Tenant node type.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**node_name** | **str** | Name of the Sole Tenant node. Consult https://cloud.google.com/compute/docs/nodes/sole-tenant-nodes | [optional] 

## Example

```python
from openapi_client.models.sole_tenant_node_type import SoleTenantNodeType

# TODO update the JSON string below
json = "{}"
# create an instance of SoleTenantNodeType from a JSON string
sole_tenant_node_type_instance = SoleTenantNodeType.from_json(json)
# print the JSON string representation of the object
print(SoleTenantNodeType.to_json())

# convert the object into a dict
sole_tenant_node_type_dict = sole_tenant_node_type_instance.to_dict()
# create an instance of SoleTenantNodeType from a dict
sole_tenant_node_type_from_dict = SoleTenantNodeType.from_dict(sole_tenant_node_type_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


