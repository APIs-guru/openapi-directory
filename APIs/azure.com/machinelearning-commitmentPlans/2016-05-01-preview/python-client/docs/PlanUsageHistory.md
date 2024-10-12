# PlanUsageHistory

Represents historical information about usage of the Azure resources associated with a commitment plan.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**plan_deletion_overage** | **Dict[str, float]** | Overage incurred as a result of deleting a commitment plan. | [optional] 
**plan_migration_overage** | **Dict[str, float]** | Overage incurred as a result of migrating a commitment plan from one SKU to another. | [optional] 
**plan_quantities_after_usage** | **Dict[str, float]** | Included quantities remaining after usage against the commitment plan&#39;s associated resources was calculated. | [optional] 
**plan_quantities_before_usage** | **Dict[str, float]** | Included quantities remaining before usage against the commitment plan&#39;s associated resources was calculated. | [optional] 
**plan_usage_overage** | **Dict[str, float]** | Usage against the commitment plan&#39;s associated resources which was not covered by included quantities and is therefore overage. | [optional] 
**usage** | **Dict[str, float]** | Usage against the commitment plan&#39;s associated resources. | [optional] 
**usage_date** | **datetime** | The date of usage, in ISO 8601 format. | [optional] 

## Example

```python
from openapi_client.models.plan_usage_history import PlanUsageHistory

# TODO update the JSON string below
json = "{}"
# create an instance of PlanUsageHistory from a JSON string
plan_usage_history_instance = PlanUsageHistory.from_json(json)
# print the JSON string representation of the object
print(PlanUsageHistory.to_json())

# convert the object into a dict
plan_usage_history_dict = plan_usage_history_instance.to_dict()
# create an instance of PlanUsageHistory from a dict
plan_usage_history_from_dict = PlanUsageHistory.from_dict(plan_usage_history_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


