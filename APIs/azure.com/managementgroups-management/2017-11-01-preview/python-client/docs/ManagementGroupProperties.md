# ManagementGroupProperties

The generic properties of a management group.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**children** | [**List[ManagementGroupChildInfo]**](ManagementGroupChildInfo.md) | The list of children. | [optional] 
**details** | [**ManagementGroupDetails**](ManagementGroupDetails.md) |  | [optional] 
**display_name** | **str** | The friendly name of the management group. | [optional] 
**tenant_id** | **str** | The AAD Tenant ID associated with the management group. For example, 00000000-0000-0000-0000-000000000000 | [optional] 

## Example

```python
from openapi_client.models.management_group_properties import ManagementGroupProperties

# TODO update the JSON string below
json = "{}"
# create an instance of ManagementGroupProperties from a JSON string
management_group_properties_instance = ManagementGroupProperties.from_json(json)
# print the JSON string representation of the object
print(ManagementGroupProperties.to_json())

# convert the object into a dict
management_group_properties_dict = management_group_properties_instance.to_dict()
# create an instance of ManagementGroupProperties from a dict
management_group_properties_from_dict = ManagementGroupProperties.from_dict(management_group_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


