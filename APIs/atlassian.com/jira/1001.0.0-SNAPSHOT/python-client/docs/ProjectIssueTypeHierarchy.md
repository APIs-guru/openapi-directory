# ProjectIssueTypeHierarchy

The hierarchy of issue types within a project.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**hierarchy** | [**List[ProjectIssueTypesHierarchyLevel]**](ProjectIssueTypesHierarchyLevel.md) | Details of an issue type hierarchy level. | [optional] [readonly] 
**project_id** | **int** | The ID of the project. | [optional] [readonly] 

## Example

```python
from openapi_client.models.project_issue_type_hierarchy import ProjectIssueTypeHierarchy

# TODO update the JSON string below
json = "{}"
# create an instance of ProjectIssueTypeHierarchy from a JSON string
project_issue_type_hierarchy_instance = ProjectIssueTypeHierarchy.from_json(json)
# print the JSON string representation of the object
print(ProjectIssueTypeHierarchy.to_json())

# convert the object into a dict
project_issue_type_hierarchy_dict = project_issue_type_hierarchy_instance.to_dict()
# create an instance of ProjectIssueTypeHierarchy from a dict
project_issue_type_hierarchy_from_dict = ProjectIssueTypeHierarchy.from_dict(project_issue_type_hierarchy_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


