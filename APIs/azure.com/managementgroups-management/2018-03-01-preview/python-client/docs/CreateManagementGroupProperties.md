# CreateManagementGroupProperties

The generic properties of a management group used during creation.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**children** | [**List[CreateManagementGroupChildInfo]**](CreateManagementGroupChildInfo.md) | The list of children. | [optional] [readonly] 
**details** | [**CreateManagementGroupDetails**](CreateManagementGroupDetails.md) |  | [optional] 
**display_name** | **str** | The friendly name of the management group. If no value is passed then this  field will be set to the groupId. | [optional] 
**roles** | **List[str]** | The roles definitions associated with the management group. | [optional] [readonly] 
**tenant_id** | **str** | The AAD Tenant ID associated with the management group. For example, 00000000-0000-0000-0000-000000000000 | [optional] [readonly] 

## Example

```python
from openapi_client.models.create_management_group_properties import CreateManagementGroupProperties

# TODO update the JSON string below
json = "{}"
# create an instance of CreateManagementGroupProperties from a JSON string
create_management_group_properties_instance = CreateManagementGroupProperties.from_json(json)
# print the JSON string representation of the object
print(CreateManagementGroupProperties.to_json())

# convert the object into a dict
create_management_group_properties_dict = create_management_group_properties_instance.to_dict()
# create an instance of CreateManagementGroupProperties from a dict
create_management_group_properties_from_dict = CreateManagementGroupProperties.from_dict(create_management_group_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


