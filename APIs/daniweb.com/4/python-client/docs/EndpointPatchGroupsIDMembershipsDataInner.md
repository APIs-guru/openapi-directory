# EndpointPatchGroupsIDMembershipsDataInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**group** | [**Group**](Group.md) |  | [optional] 
**member** | [**User**](User.md) |  | [optional] 
**privileges** | [**EndpointPatchGroupsIDMembershipsDataInnerPrivileges**](EndpointPatchGroupsIDMembershipsDataInnerPrivileges.md) |  | [optional] 

## Example

```python
from openapi_client.models.endpoint_patch_groups_id_memberships_data_inner import EndpointPatchGroupsIDMembershipsDataInner

# TODO update the JSON string below
json = "{}"
# create an instance of EndpointPatchGroupsIDMembershipsDataInner from a JSON string
endpoint_patch_groups_id_memberships_data_inner_instance = EndpointPatchGroupsIDMembershipsDataInner.from_json(json)
# print the JSON string representation of the object
print(EndpointPatchGroupsIDMembershipsDataInner.to_json())

# convert the object into a dict
endpoint_patch_groups_id_memberships_data_inner_dict = endpoint_patch_groups_id_memberships_data_inner_instance.to_dict()
# create an instance of EndpointPatchGroupsIDMembershipsDataInner from a dict
endpoint_patch_groups_id_memberships_data_inner_from_dict = EndpointPatchGroupsIDMembershipsDataInner.from_dict(endpoint_patch_groups_id_memberships_data_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


