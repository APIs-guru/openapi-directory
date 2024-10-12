# RankCollectResponseTasksInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**task_id** | [**RankCollectResponseTasksInnerTaskId**](RankCollectResponseTasksInnerTaskId.md) |  | [optional] 

## Example

```python
from openapi_client.models.rank_collect_response_tasks_inner import RankCollectResponseTasksInner

# TODO update the JSON string below
json = "{}"
# create an instance of RankCollectResponseTasksInner from a JSON string
rank_collect_response_tasks_inner_instance = RankCollectResponseTasksInner.from_json(json)
# print the JSON string representation of the object
print(RankCollectResponseTasksInner.to_json())

# convert the object into a dict
rank_collect_response_tasks_inner_dict = rank_collect_response_tasks_inner_instance.to_dict()
# create an instance of RankCollectResponseTasksInner from a dict
rank_collect_response_tasks_inner_from_dict = RankCollectResponseTasksInner.from_dict(rank_collect_response_tasks_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


