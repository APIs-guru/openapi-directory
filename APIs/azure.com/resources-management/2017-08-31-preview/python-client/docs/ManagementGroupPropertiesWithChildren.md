# ManagementGroupPropertiesWithChildren

The generic properties of a management group.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**children** | [**List[ManagementGroupChildInfo]**](ManagementGroupChildInfo.md) | The list of children. | [optional] 
**details** | [**ManagementGroupDetailsProperties**](ManagementGroupDetailsProperties.md) |  | [optional] 
**display_name** | **str** | The friendly name of the management group. | [optional] 
**tenant_id** | **str** | The AAD Tenant ID associated with the management group. E.g. 10000000-0000-0000-0000-000000000000 | [optional] 

## Example

```python
from openapi_client.models.management_group_properties_with_children import ManagementGroupPropertiesWithChildren

# TODO update the JSON string below
json = "{}"
# create an instance of ManagementGroupPropertiesWithChildren from a JSON string
management_group_properties_with_children_instance = ManagementGroupPropertiesWithChildren.from_json(json)
# print the JSON string representation of the object
print(ManagementGroupPropertiesWithChildren.to_json())

# convert the object into a dict
management_group_properties_with_children_dict = management_group_properties_with_children_instance.to_dict()
# create an instance of ManagementGroupPropertiesWithChildren from a dict
management_group_properties_with_children_from_dict = ManagementGroupPropertiesWithChildren.from_dict(management_group_properties_with_children_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


