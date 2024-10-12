# SimplifiedHierarchyLevel


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**above_level_id** | **int** | The ID of the level above this one in the hierarchy. This property is deprecated, see [Change notice: Removing hierarchy level IDs from next-gen APIs](https://developer.atlassian.com/cloud/jira/platform/change-notice-removing-hierarchy-level-ids-from-next-gen-apis/). | [optional] 
**below_level_id** | **int** | The ID of the level below this one in the hierarchy. This property is deprecated, see [Change notice: Removing hierarchy level IDs from next-gen APIs](https://developer.atlassian.com/cloud/jira/platform/change-notice-removing-hierarchy-level-ids-from-next-gen-apis/). | [optional] 
**external_uuid** | **str** | The external UUID of the hierarchy level. This property is deprecated, see [Change notice: Removing hierarchy level IDs from next-gen APIs](https://developer.atlassian.com/cloud/jira/platform/change-notice-removing-hierarchy-level-ids-from-next-gen-apis/). | [optional] 
**hierarchy_level_number** | **int** |  | [optional] 
**id** | **int** | The ID of the hierarchy level. This property is deprecated, see [Change notice: Removing hierarchy level IDs from next-gen APIs](https://developer.atlassian.com/cloud/jira/platform/change-notice-removing-hierarchy-level-ids-from-next-gen-apis/). | [optional] 
**issue_type_ids** | **List[int]** | The issue types available in this hierarchy level. | [optional] 
**level** | **int** | The level of this item in the hierarchy. | [optional] 
**name** | **str** | The name of this hierarchy level. | [optional] 
**project_configuration_id** | **int** | The ID of the project configuration. This property is deprecated, see [Change oticen: Removing hierarchy level IDs from next-gen APIs](https://developer.atlassian.com/cloud/jira/platform/change-notice-removing-hierarchy-level-ids-from-next-gen-apis/). | [optional] 

## Example

```python
from openapi_client.models.simplified_hierarchy_level import SimplifiedHierarchyLevel

# TODO update the JSON string below
json = "{}"
# create an instance of SimplifiedHierarchyLevel from a JSON string
simplified_hierarchy_level_instance = SimplifiedHierarchyLevel.from_json(json)
# print the JSON string representation of the object
print(SimplifiedHierarchyLevel.to_json())

# convert the object into a dict
simplified_hierarchy_level_dict = simplified_hierarchy_level_instance.to_dict()
# create an instance of SimplifiedHierarchyLevel from a dict
simplified_hierarchy_level_from_dict = SimplifiedHierarchyLevel.from_dict(simplified_hierarchy_level_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


