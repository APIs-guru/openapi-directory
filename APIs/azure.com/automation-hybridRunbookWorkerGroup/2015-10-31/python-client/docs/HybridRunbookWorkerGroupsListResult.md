# HybridRunbookWorkerGroupsListResult

The response model for the list hybrid runbook worker groups.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_link** | **str** | Gets or sets the next link. | [optional] 
**value** | [**List[HybridRunbookWorkerGroup]**](HybridRunbookWorkerGroup.md) | Gets or sets a list of hybrid runbook worker groups. | [optional] 

## Example

```python
from openapi_client.models.hybrid_runbook_worker_groups_list_result import HybridRunbookWorkerGroupsListResult

# TODO update the JSON string below
json = "{}"
# create an instance of HybridRunbookWorkerGroupsListResult from a JSON string
hybrid_runbook_worker_groups_list_result_instance = HybridRunbookWorkerGroupsListResult.from_json(json)
# print the JSON string representation of the object
print(HybridRunbookWorkerGroupsListResult.to_json())

# convert the object into a dict
hybrid_runbook_worker_groups_list_result_dict = hybrid_runbook_worker_groups_list_result_instance.to_dict()
# create an instance of HybridRunbookWorkerGroupsListResult from a dict
hybrid_runbook_worker_groups_list_result_from_dict = HybridRunbookWorkerGroupsListResult.from_dict(hybrid_runbook_worker_groups_list_result_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


