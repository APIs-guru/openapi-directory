# EndpointPatchGroupsIDMemberships


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data** | [**List[EndpointPatchGroupsIDMembershipsDataInner]**](EndpointPatchGroupsIDMembershipsDataInner.md) |  | [optional] 
**pagination** | [**ApiPagination**](ApiPagination.md) |  | [optional] 
**success** | **bool** |  | [optional] 

## Example

```python
from openapi_client.models.endpoint_patch_groups_id_memberships import EndpointPatchGroupsIDMemberships

# TODO update the JSON string below
json = "{}"
# create an instance of EndpointPatchGroupsIDMemberships from a JSON string
endpoint_patch_groups_id_memberships_instance = EndpointPatchGroupsIDMemberships.from_json(json)
# print the JSON string representation of the object
print(EndpointPatchGroupsIDMemberships.to_json())

# convert the object into a dict
endpoint_patch_groups_id_memberships_dict = endpoint_patch_groups_id_memberships_instance.to_dict()
# create an instance of EndpointPatchGroupsIDMemberships from a dict
endpoint_patch_groups_id_memberships_from_dict = EndpointPatchGroupsIDMemberships.from_dict(endpoint_patch_groups_id_memberships_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


