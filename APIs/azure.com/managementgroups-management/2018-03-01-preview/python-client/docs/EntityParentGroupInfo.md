# EntityParentGroupInfo

(Optional) The ID of the parent management group.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | The fully qualified ID for the parent management group.  For example, /providers/Microsoft.Management/managementGroups/0000000-0000-0000-0000-000000000000 | [optional] 

## Example

```python
from openapi_client.models.entity_parent_group_info import EntityParentGroupInfo

# TODO update the JSON string below
json = "{}"
# create an instance of EntityParentGroupInfo from a JSON string
entity_parent_group_info_instance = EntityParentGroupInfo.from_json(json)
# print the JSON string representation of the object
print(EntityParentGroupInfo.to_json())

# convert the object into a dict
entity_parent_group_info_dict = entity_parent_group_info_instance.to_dict()
# create an instance of EntityParentGroupInfo from a dict
entity_parent_group_info_from_dict = EntityParentGroupInfo.from_dict(entity_parent_group_info_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


