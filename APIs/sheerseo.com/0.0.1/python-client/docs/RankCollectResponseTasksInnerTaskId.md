# RankCollectResponseTasksInnerTaskId

the id of the task you want to look for

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**error_message** | **str** | error message in case task status is invalid | [optional] 
**keyword** | **str** | keyword (search term) | [optional] 
**local_pack_rank** | **int** | relevent only to google: show the local pack rank of the domain in case exist | [optional] 
**localization_code** | **str** | A code for the localization, which is a combination of country and language | [optional] 
**localization_zip** | **str** | option to localize the results per zip code | [optional] 
**rank** | **int** | the exact rank of the domain in the search engine asked | [optional] 
**ready** | **str** | task ready indicator | [optional] 
**search_engine** | **str** | google/bing/google_mobile | [optional] 
**status** | **str** | task status in terms of success | [optional] 

## Example

```python
from openapi_client.models.rank_collect_response_tasks_inner_task_id import RankCollectResponseTasksInnerTaskId

# TODO update the JSON string below
json = "{}"
# create an instance of RankCollectResponseTasksInnerTaskId from a JSON string
rank_collect_response_tasks_inner_task_id_instance = RankCollectResponseTasksInnerTaskId.from_json(json)
# print the JSON string representation of the object
print(RankCollectResponseTasksInnerTaskId.to_json())

# convert the object into a dict
rank_collect_response_tasks_inner_task_id_dict = rank_collect_response_tasks_inner_task_id_instance.to_dict()
# create an instance of RankCollectResponseTasksInnerTaskId from a dict
rank_collect_response_tasks_inner_task_id_from_dict = RankCollectResponseTasksInnerTaskId.from_dict(rank_collect_response_tasks_inner_task_id_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


