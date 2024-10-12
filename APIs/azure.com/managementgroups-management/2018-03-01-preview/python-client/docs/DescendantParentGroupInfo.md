# DescendantParentGroupInfo

The ID of the parent management group.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | The fully qualified ID for the parent management group.  For example, /providers/Microsoft.Management/managementGroups/0000000-0000-0000-0000-000000000000 | [optional] 

## Example

```python
from openapi_client.models.descendant_parent_group_info import DescendantParentGroupInfo

# TODO update the JSON string below
json = "{}"
# create an instance of DescendantParentGroupInfo from a JSON string
descendant_parent_group_info_instance = DescendantParentGroupInfo.from_json(json)
# print the JSON string representation of the object
print(DescendantParentGroupInfo.to_json())

# convert the object into a dict
descendant_parent_group_info_dict = descendant_parent_group_info_instance.to_dict()
# create an instance of DescendantParentGroupInfo from a dict
descendant_parent_group_info_from_dict = DescendantParentGroupInfo.from_dict(descendant_parent_group_info_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


