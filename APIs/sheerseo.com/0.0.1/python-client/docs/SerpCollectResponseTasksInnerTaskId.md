# SerpCollectResponseTasksInnerTaskId


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**error_message** | **str** | error message in case task status is invalid | [optional] 
**keyword** | **str** | keyword (search term) | [optional] 
**localization_code** | **str** | A code for the localization, which is a combination of country and language | [optional] 
**localization_zip** | **str** | option to localize the results per zip code | [optional] 
**num_results** | **int** | number of results found in SERP | [optional] 
**organic_results** | [**List[SerpCollectResponseTasksInnerTaskIdOrganicResultsInner]**](SerpCollectResponseTasksInnerTaskIdOrganicResultsInner.md) |  | [optional] 
**ready** | **str** | task ready indicator | [optional] 
**search_engine** | **str** |  | [optional] 
**status** | **str** | task status in terms of success | [optional] 

## Example

```python
from openapi_client.models.serp_collect_response_tasks_inner_task_id import SerpCollectResponseTasksInnerTaskId

# TODO update the JSON string below
json = "{}"
# create an instance of SerpCollectResponseTasksInnerTaskId from a JSON string
serp_collect_response_tasks_inner_task_id_instance = SerpCollectResponseTasksInnerTaskId.from_json(json)
# print the JSON string representation of the object
print(SerpCollectResponseTasksInnerTaskId.to_json())

# convert the object into a dict
serp_collect_response_tasks_inner_task_id_dict = serp_collect_response_tasks_inner_task_id_instance.to_dict()
# create an instance of SerpCollectResponseTasksInnerTaskId from a dict
serp_collect_response_tasks_inner_task_id_from_dict = SerpCollectResponseTasksInnerTaskId.from_dict(serp_collect_response_tasks_inner_task_id_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


