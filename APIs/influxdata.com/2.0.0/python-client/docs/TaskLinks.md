# TaskLinks


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**labels** | **str** | URI of resource. | [optional] [readonly] 
**logs** | **str** | URI of resource. | [optional] [readonly] 
**members** | **str** | URI of resource. | [optional] [readonly] 
**owners** | **str** | URI of resource. | [optional] [readonly] 
**runs** | **str** | URI of resource. | [optional] [readonly] 
**var_self** | **str** | URI of resource. | [optional] [readonly] 

## Example

```python
from openapi_client.models.task_links import TaskLinks

# TODO update the JSON string below
json = "{}"
# create an instance of TaskLinks from a JSON string
task_links_instance = TaskLinks.from_json(json)
# print the JSON string representation of the object
print(TaskLinks.to_json())

# convert the object into a dict
task_links_dict = task_links_instance.to_dict()
# create an instance of TaskLinks from a dict
task_links_from_dict = TaskLinks.from_dict(task_links_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


