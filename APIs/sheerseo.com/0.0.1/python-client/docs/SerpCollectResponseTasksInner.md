# SerpCollectResponseTasksInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**task_id** | [**SerpCollectResponseTasksInnerTaskId**](SerpCollectResponseTasksInnerTaskId.md) |  | [optional] 

## Example

```python
from openapi_client.models.serp_collect_response_tasks_inner import SerpCollectResponseTasksInner

# TODO update the JSON string below
json = "{}"
# create an instance of SerpCollectResponseTasksInner from a JSON string
serp_collect_response_tasks_inner_instance = SerpCollectResponseTasksInner.from_json(json)
# print the JSON string representation of the object
print(SerpCollectResponseTasksInner.to_json())

# convert the object into a dict
serp_collect_response_tasks_inner_dict = serp_collect_response_tasks_inner_instance.to_dict()
# create an instance of SerpCollectResponseTasksInner from a dict
serp_collect_response_tasks_inner_from_dict = SerpCollectResponseTasksInner.from_dict(serp_collect_response_tasks_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


