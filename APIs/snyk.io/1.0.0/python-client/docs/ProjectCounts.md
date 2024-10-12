# ProjectCounts


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**results** | [**List[GetProjectCounts200ResponseResultsInner]**](GetProjectCounts200ResponseResultsInner.md) | A list of project counts by day | 

## Example

```python
from openapi_client.models.project_counts import ProjectCounts

# TODO update the JSON string below
json = "{}"
# create an instance of ProjectCounts from a JSON string
project_counts_instance = ProjectCounts.from_json(json)
# print the JSON string representation of the object
print(ProjectCounts.to_json())

# convert the object into a dict
project_counts_dict = project_counts_instance.to_dict()
# create an instance of ProjectCounts from a dict
project_counts_from_dict = ProjectCounts.from_dict(project_counts_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


