# ManagementGroupWithChildren

The management group details.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | The ID of the management group. E.g. /providers/Microsoft.Management/managementGroups/20000000-0000-0000-0000-000000000000 | [optional] [readonly] 
**name** | **str** | The name of the management group. E.g. 20000000-0000-0000-0000-000000000000 | [optional] [readonly] 
**properties** | [**ManagementGroupPropertiesWithChildren**](ManagementGroupPropertiesWithChildren.md) |  | [optional] 
**type** | **str** | The type of the resource. E.g. /providers/Microsoft.Management/managementGroups | [optional] [readonly] 

## Example

```python
from openapi_client.models.management_group_with_children import ManagementGroupWithChildren

# TODO update the JSON string below
json = "{}"
# create an instance of ManagementGroupWithChildren from a JSON string
management_group_with_children_instance = ManagementGroupWithChildren.from_json(json)
# print the JSON string representation of the object
print(ManagementGroupWithChildren.to_json())

# convert the object into a dict
management_group_with_children_dict = management_group_with_children_instance.to_dict()
# create an instance of ManagementGroupWithChildren from a dict
management_group_with_children_from_dict = ManagementGroupWithChildren.from_dict(management_group_with_children_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


