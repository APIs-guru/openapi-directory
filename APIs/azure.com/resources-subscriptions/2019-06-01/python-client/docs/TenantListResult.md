# TenantListResult

Tenant Ids information.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_link** | **str** | The URL to use for getting the next set of results. | 
**value** | [**List[TenantIdDescription]**](TenantIdDescription.md) | An array of tenants. | [optional] 

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


