# ProjectIssueTypesHierarchyLevel

Details of an issue type hierarchy level.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**entity_id** | **str** | The ID of the issue type hierarchy level. This property is deprecated, see [Change notice: Removing hierarchy level IDs from next-gen APIs](https://developer.atlassian.com/cloud/jira/platform/change-notice-removing-hierarchy-level-ids-from-next-gen-apis/). | [optional] [readonly] 
**issue_types** | [**List[IssueTypeInfo]**](IssueTypeInfo.md) | The list of issue types in the hierarchy level. | [optional] [readonly] 
**level** | **int** | The level of the issue type hierarchy level. | [optional] [readonly] 
**name** | **str** | The name of the issue type hierarchy level. | [optional] [readonly] 

## Example

```python
from openapi_client.models.project_issue_types_hierarchy_level import ProjectIssueTypesHierarchyLevel

# TODO update the JSON string below
json = "{}"
# create an instance of ProjectIssueTypesHierarchyLevel from a JSON string
project_issue_types_hierarchy_level_instance = ProjectIssueTypesHierarchyLevel.from_json(json)
# print the JSON string representation of the object
print(ProjectIssueTypesHierarchyLevel.to_json())

# convert the object into a dict
project_issue_types_hierarchy_level_dict = project_issue_types_hierarchy_level_instance.to_dict()
# create an instance of ProjectIssueTypesHierarchyLevel from a dict
project_issue_types_hierarchy_level_from_dict = ProjectIssueTypesHierarchyLevel.from_dict(project_issue_types_hierarchy_level_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


