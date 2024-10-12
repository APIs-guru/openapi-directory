# TenantBackfillStatusResult

The tenant backfill status

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**status** | **str** | The status of the Tenant Backfill | [optional] [readonly] 
**tenant_id** | **str** | The AAD Tenant ID associated with the management group. For example, 00000000-0000-0000-0000-000000000000 | [optional] [readonly] 

## Example

```python
from openapi_client.models.tenant_backfill_status_result import TenantBackfillStatusResult

# TODO update the JSON string below
json = "{}"
# create an instance of TenantBackfillStatusResult from a JSON string
tenant_backfill_status_result_instance = TenantBackfillStatusResult.from_json(json)
# print the JSON string representation of the object
print(TenantBackfillStatusResult.to_json())

# convert the object into a dict
tenant_backfill_status_result_dict = tenant_backfill_status_result_instance.to_dict()
# create an instance of TenantBackfillStatusResult from a dict
tenant_backfill_status_result_from_dict = TenantBackfillStatusResult.from_dict(tenant_backfill_status_result_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


