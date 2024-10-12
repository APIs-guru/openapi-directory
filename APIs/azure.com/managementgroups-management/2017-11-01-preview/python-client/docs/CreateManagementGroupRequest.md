# CreateManagementGroupRequest

Management group creation parameters.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**display_name** | **str** | The friendly name of the management group. | [optional] 
**parent_id** | **str** | (Optional) The fully qualified ID for the parent management group.  For example, /providers/Microsoft.Management/managementGroups/0000000-0000-0000-0000-000000000000 | [optional] 

## Example

```python
from openapi_client.models.create_management_group_request import CreateManagementGroupRequest

# TODO update the JSON string below
json = "{}"
# create an instance of CreateManagementGroupRequest from a JSON string
create_management_group_request_instance = CreateManagementGroupRequest.from_json(json)
# print the JSON string representation of the object
print(CreateManagementGroupRequest.to_json())

# convert the object into a dict
create_management_group_request_dict = create_management_group_request_instance.to_dict()
# create an instance of CreateManagementGroupRequest from a dict
create_management_group_request_from_dict = CreateManagementGroupRequest.from_dict(create_management_group_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


