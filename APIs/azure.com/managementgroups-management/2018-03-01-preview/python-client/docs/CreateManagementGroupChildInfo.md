# CreateManagementGroupChildInfo

The child information of a management group used during creation.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**children** | [**List[CreateManagementGroupChildInfo]**](CreateManagementGroupChildInfo.md) | The list of children. | [optional] [readonly] 
**display_name** | **str** | The friendly name of the child resource. | [optional] [readonly] 
**id** | **str** | The fully qualified ID for the child resource (management group or subscription).  For example, /providers/Microsoft.Management/managementGroups/0000000-0000-0000-0000-000000000000 | [optional] [readonly] 
**name** | **str** | The name of the child entity. | [optional] [readonly] 
**roles** | **List[str]** | The roles definitions associated with the management group. | [optional] [readonly] 
**type** | [**ManagementGroupChildType**](ManagementGroupChildType.md) |  | [optional] 

## Example

```python
from openapi_client.models.create_management_group_child_info import CreateManagementGroupChildInfo

# TODO update the JSON string below
json = "{}"
# create an instance of CreateManagementGroupChildInfo from a JSON string
create_management_group_child_info_instance = CreateManagementGroupChildInfo.from_json(json)
# print the JSON string representation of the object
print(CreateManagementGroupChildInfo.to_json())

# convert the object into a dict
create_management_group_child_info_dict = create_management_group_child_info_instance.to_dict()
# create an instance of CreateManagementGroupChildInfo from a dict
create_management_group_child_info_from_dict = CreateManagementGroupChildInfo.from_dict(create_management_group_child_info_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


