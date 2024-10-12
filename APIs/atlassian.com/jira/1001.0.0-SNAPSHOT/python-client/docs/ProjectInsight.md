# ProjectInsight

Additional details about a project.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**last_issue_update_time** | **datetime** | The last issue update time. | [optional] [readonly] 
**total_issue_count** | **int** | Total issue count. | [optional] [readonly] 

## Example

```python
from openapi_client.models.project_insight import ProjectInsight

# TODO update the JSON string below
json = "{}"
# create an instance of ProjectInsight from a JSON string
project_insight_instance = ProjectInsight.from_json(json)
# print the JSON string representation of the object
print(ProjectInsight.to_json())

# convert the object into a dict
project_insight_dict = project_insight_instance.to_dict()
# create an instance of ProjectInsight from a dict
project_insight_from_dict = ProjectInsight.from_dict(project_insight_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


