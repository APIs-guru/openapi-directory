# Hierarchy

The project issue type hierarchy.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**base_level_id** | **int** | The ID of the base level. This property is deprecated, see [Change notice: Removing hierarchy level IDs from next-gen APIs](https://developer.atlassian.com/cloud/jira/platform/change-notice-removing-hierarchy-level-ids-from-next-gen-apis/). | [optional] 
**levels** | [**List[SimplifiedHierarchyLevel]**](SimplifiedHierarchyLevel.md) | Details about the hierarchy level. | [optional] [readonly] 

## Example

```python
from openapi_client.models.hierarchy import Hierarchy

# TODO update the JSON string below
json = "{}"
# create an instance of Hierarchy from a JSON string
hierarchy_instance = Hierarchy.from_json(json)
# print the JSON string representation of the object
print(Hierarchy.to_json())

# convert the object into a dict
hierarchy_dict = hierarchy_instance.to_dict()
# create an instance of Hierarchy from a dict
hierarchy_from_dict = Hierarchy.from_dict(hierarchy_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


