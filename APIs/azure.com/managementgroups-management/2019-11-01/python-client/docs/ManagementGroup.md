# ManagementGroup

The management group details.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | The fully qualified ID for the management group.  For example, /providers/Microsoft.Management/managementGroups/0000000-0000-0000-0000-000000000000 | [optional] [readonly] 
**name** | **str** | The name of the management group. For example, 00000000-0000-0000-0000-000000000000 | [optional] [readonly] 
**properties** | [**ManagementGroupProperties**](ManagementGroupProperties.md) |  | [optional] 
**type** | **str** | The type of the resource.  For example, Microsoft.Management/managementGroups | [optional] [readonly] 

## Example

```python
from openapi_client.models.management_group import ManagementGroup

# TODO update the JSON string below
json = "{}"
# create an instance of ManagementGroup from a JSON string
management_group_instance = ManagementGroup.from_json(json)
# print the JSON string representation of the object
print(ManagementGroup.to_json())

# convert the object into a dict
management_group_dict = management_group_instance.to_dict()
# create an instance of ManagementGroup from a dict
management_group_from_dict = ManagementGroup.from_dict(management_group_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


