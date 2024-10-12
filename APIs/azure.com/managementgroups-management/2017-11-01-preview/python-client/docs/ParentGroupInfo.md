# ParentGroupInfo

(Optional) The ID of the parent management group.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**display_name** | **str** | The friendly name of the parent management group. | [optional] 
**parent_id** | **str** | The fully qualified ID for the parent management group.  For example, /providers/Microsoft.Management/managementGroups/0000000-0000-0000-0000-000000000000 | [optional] 

## Example

```python
from openapi_client.models.parent_group_info import ParentGroupInfo

# TODO update the JSON string below
json = "{}"
# create an instance of ParentGroupInfo from a JSON string
parent_group_info_instance = ParentGroupInfo.from_json(json)
# print the JSON string representation of the object
print(ParentGroupInfo.to_json())

# convert the object into a dict
parent_group_info_dict = parent_group_info_instance.to_dict()
# create an instance of ParentGroupInfo from a dict
parent_group_info_from_dict = ParentGroupInfo.from_dict(parent_group_info_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


