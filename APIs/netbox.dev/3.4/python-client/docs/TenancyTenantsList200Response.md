# TenancyTenantsList200Response


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**count** | **int** |  | 
**next** | **str** |  | [optional] 
**previous** | **str** |  | [optional] 
**results** | [**List[Tenant]**](Tenant.md) |  | 

## Example

```python
from openapi_client.models.tenancy_tenants_list200_response import TenancyTenantsList200Response

# TODO update the JSON string below
json = "{}"
# create an instance of TenancyTenantsList200Response from a JSON string
tenancy_tenants_list200_response_instance = TenancyTenantsList200Response.from_json(json)
# print the JSON string representation of the object
print(TenancyTenantsList200Response.to_json())

# convert the object into a dict
tenancy_tenants_list200_response_dict = tenancy_tenants_list200_response_instance.to_dict()
# create an instance of TenancyTenantsList200Response from a dict
tenancy_tenants_list200_response_from_dict = TenancyTenantsList200Response.from_dict(tenancy_tenants_list200_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


