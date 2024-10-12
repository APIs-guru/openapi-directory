# ManagementGroupChildInfo

The unique identifier (ID) of a management group.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**child_id** | **str** | The ID of the child resource (management group or subscription). E.g. /providers/Microsoft.Management/managementGroups/40000000-0000-0000-0000-000000000000 | [optional] 
**child_type** | [**ManagementGroupType**](ManagementGroupType.md) |  | [optional] 
**display_name** | **str** | The friendly name of the child resource. | [optional] 
**tenant_id** | **str** | (Optional) The AAD Tenant ID associated with the child resource. | [optional] 

## Example

```python
from openapi_client.models.management_group_child_info import ManagementGroupChildInfo

# TODO update the JSON string below
json = "{}"
# create an instance of ManagementGroupChildInfo from a JSON string
management_group_child_info_instance = ManagementGroupChildInfo.from_json(json)
# print the JSON string representation of the object
print(ManagementGroupChildInfo.to_json())

# convert the object into a dict
management_group_child_info_dict = management_group_child_info_instance.to_dict()
# create an instance of ManagementGroupChildInfo from a dict
management_group_child_info_from_dict = ManagementGroupChildInfo.from_dict(management_group_child_info_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


