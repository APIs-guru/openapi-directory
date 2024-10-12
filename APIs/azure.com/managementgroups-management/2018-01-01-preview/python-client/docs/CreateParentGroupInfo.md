# CreateParentGroupInfo

(Optional) The ID of the parent management group used during creation.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**display_name** | **str** | The friendly name of the parent management group. | [optional] [readonly] 
**id** | **str** | The fully qualified ID for the parent management group.  For example, /providers/Microsoft.Management/managementGroups/0000000-0000-0000-0000-000000000000 | [optional] 
**name** | **str** | The name of the parent management group | [optional] [readonly] 

## Example

```python
from openapi_client.models.create_parent_group_info import CreateParentGroupInfo

# TODO update the JSON string below
json = "{}"
# create an instance of CreateParentGroupInfo from a JSON string
create_parent_group_info_instance = CreateParentGroupInfo.from_json(json)
# print the JSON string representation of the object
print(CreateParentGroupInfo.to_json())

# convert the object into a dict
create_parent_group_info_dict = create_parent_group_info_instance.to_dict()
# create an instance of CreateParentGroupInfo from a dict
create_parent_group_info_from_dict = CreateParentGroupInfo.from_dict(create_parent_group_info_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


