# ManagementGroupPropertiesWithHierarchy

The generic properties of a management group.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**children** | [**List[ManagementGroupRecursiveChildInfo]**](ManagementGroupRecursiveChildInfo.md) | The list of children. | [optional] 
**details** | [**ManagementGroupDetailsProperties**](ManagementGroupDetailsProperties.md) |  | [optional] 
**display_name** | **str** | The friendly name of the management group. | [optional] 
**tenant_id** | **str** | The AAD Tenant ID associated with the management group. E.g. 10000000-0000-0000-0000-000000000000 | [optional] 

## Example

```python
from openapi_client.models.management_group_properties_with_hierarchy import ManagementGroupPropertiesWithHierarchy

# TODO update the JSON string below
json = "{}"
# create an instance of ManagementGroupPropertiesWithHierarchy from a JSON string
management_group_properties_with_hierarchy_instance = ManagementGroupPropertiesWithHierarchy.from_json(json)
# print the JSON string representation of the object
print(ManagementGroupPropertiesWithHierarchy.to_json())

# convert the object into a dict
management_group_properties_with_hierarchy_dict = management_group_properties_with_hierarchy_instance.to_dict()
# create an instance of ManagementGroupPropertiesWithHierarchy from a dict
management_group_properties_with_hierarchy_from_dict = ManagementGroupPropertiesWithHierarchy.from_dict(management_group_properties_with_hierarchy_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


