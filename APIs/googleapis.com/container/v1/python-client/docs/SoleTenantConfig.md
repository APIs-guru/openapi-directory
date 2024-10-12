# SoleTenantConfig

SoleTenantConfig contains the NodeAffinities to specify what shared sole tenant node groups should back the node pool.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**node_affinities** | [**List[NodeAffinity]**](NodeAffinity.md) | NodeAffinities used to match to a shared sole tenant node group. | [optional] 

## Example

```python
from openapi_client.models.sole_tenant_config import SoleTenantConfig

# TODO update the JSON string below
json = "{}"
# create an instance of SoleTenantConfig from a JSON string
sole_tenant_config_instance = SoleTenantConfig.from_json(json)
# print the JSON string representation of the object
print(SoleTenantConfig.to_json())

# convert the object into a dict
sole_tenant_config_dict = sole_tenant_config_instance.to_dict()
# create an instance of SoleTenantConfig from a dict
sole_tenant_config_from_dict = SoleTenantConfig.from_dict(sole_tenant_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


