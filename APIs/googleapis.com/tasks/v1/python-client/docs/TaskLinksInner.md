# TaskLinksInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**description** | **str** | The description. In HTML speak: Everything between &lt;a&gt; and &lt;/a&gt;. | [optional] 
**link** | **str** | The URL. | [optional] 
**type** | **str** | Type of the link, e.g. \&quot;email\&quot;. | [optional] 

## Example

```python
from openapi_client.models.task_links_inner import TaskLinksInner

# TODO update the JSON string below
json = "{}"
# create an instance of TaskLinksInner from a JSON string
task_links_inner_instance = TaskLinksInner.from_json(json)
# print the JSON string representation of the object
print(TaskLinksInner.to_json())

# convert the object into a dict
task_links_inner_dict = task_links_inner_instance.to_dict()
# create an instance of TaskLinksInner from a dict
task_links_inner_from_dict = TaskLinksInner.from_dict(task_links_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


