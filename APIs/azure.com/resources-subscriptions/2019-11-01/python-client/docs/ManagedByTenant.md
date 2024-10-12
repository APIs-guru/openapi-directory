# ManagedByTenant

Information about a tenant managing the subscription.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**tenant_id** | **str** | The tenant ID of the managing tenant. This is a GUID. | [optional] [readonly] 

## Example

```python
from openapi_client.models.managed_by_tenant import ManagedByTenant

# TODO update the JSON string below
json = "{}"
# create an instance of ManagedByTenant from a JSON string
managed_by_tenant_instance = ManagedByTenant.from_json(json)
# print the JSON string representation of the object
print(ManagedByTenant.to_json())

# convert the object into a dict
managed_by_tenant_dict = managed_by_tenant_instance.to_dict()
# create an instance of ManagedByTenant from a dict
managed_by_tenant_from_dict = ManagedByTenant.from_dict(managed_by_tenant_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


