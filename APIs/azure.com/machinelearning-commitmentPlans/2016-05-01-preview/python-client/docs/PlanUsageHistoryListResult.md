# PlanUsageHistoryListResult

A page of usage history.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_link** | **str** | A URI to retrieve the next page of results. | [optional] 
**value** | [**List[PlanUsageHistory]**](PlanUsageHistory.md) | The set of results for this page. | [optional] 

## Example

```python
from openapi_client.models.plan_usage_history_list_result import PlanUsageHistoryListResult

# TODO update the JSON string below
json = "{}"
# create an instance of PlanUsageHistoryListResult from a JSON string
plan_usage_history_list_result_instance = PlanUsageHistoryListResult.from_json(json)
# print the JSON string representation of the object
print(PlanUsageHistoryListResult.to_json())

# convert the object into a dict
plan_usage_history_list_result_dict = plan_usage_history_list_result_instance.to_dict()
# create an instance of PlanUsageHistoryListResult from a dict
plan_usage_history_list_result_from_dict = PlanUsageHistoryListResult.from_dict(plan_usage_history_list_result_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


