# TenantIdDescription

Tenant Id information.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | The fully qualified ID of the tenant. For example, /tenants/00000000-0000-0000-0000-000000000000. | [optional] [readonly] 
**tenant_id** | **str** | The tenant ID. For example, 00000000-0000-0000-0000-000000000000. | [optional] [readonly] 

## Example

```python
from openapi_client.models.tenant_id_description import TenantIdDescription

# TODO update the JSON string below
json = "{}"
# create an instance of TenantIdDescription from a JSON string
tenant_id_description_instance = TenantIdDescription.from_json(json)
# print the JSON string representation of the object
print(TenantIdDescription.to_json())

# convert the object into a dict
tenant_id_description_dict = tenant_id_description_instance.to_dict()
# create an instance of TenantIdDescription from a dict
tenant_id_description_from_dict = TenantIdDescription.from_dict(tenant_id_description_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


