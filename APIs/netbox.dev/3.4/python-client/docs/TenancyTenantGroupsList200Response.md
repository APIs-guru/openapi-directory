# TenancyTenantGroupsList200Response


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**count** | **int** |  | 
**next** | **str** |  | [optional] 
**previous** | **str** |  | [optional] 
**results** | [**List[TenantGroup]**](TenantGroup.md) |  | 

## Example

```python
from openapi_client.models.tenancy_tenant_groups_list200_response import TenancyTenantGroupsList200Response

# TODO update the JSON string below
json = "{}"
# create an instance of TenancyTenantGroupsList200Response from a JSON string
tenancy_tenant_groups_list200_response_instance = TenancyTenantGroupsList200Response.from_json(json)
# print the JSON string representation of the object
print(TenancyTenantGroupsList200Response.to_json())

# convert the object into a dict
tenancy_tenant_groups_list200_response_dict = tenancy_tenant_groups_list200_response_instance.to_dict()
# create an instance of TenancyTenantGroupsList200Response from a dict
tenancy_tenant_groups_list200_response_from_dict = TenancyTenantGroupsList200Response.from_dict(tenancy_tenant_groups_list200_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


