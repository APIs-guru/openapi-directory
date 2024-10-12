# TenantListResult

A Tenant properties Resource

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_link** | **str** | The link (url) to the next page of results. | [optional] [readonly] 
**value** | [**List[Tenant]**](Tenant.md) | The list of tenant details. | [optional] [readonly] 

## Example

```python
from openapi_client.models.tenant_list_result import TenantListResult

# TODO update the JSON string below
json = "{}"
# create an instance of TenantListResult from a JSON string
tenant_list_result_instance = TenantListResult.from_json(json)
# print the JSON string representation of the object
print(TenantListResult.to_json())

# convert the object into a dict
tenant_list_result_dict = tenant_list_result_instance.to_dict()
# create an instance of TenantListResult from a dict
tenant_list_result_from_dict = TenantListResult.from_dict(tenant_list_result_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


