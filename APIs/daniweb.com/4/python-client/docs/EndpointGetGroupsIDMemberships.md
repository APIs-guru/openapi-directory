# EndpointGetGroupsIDMemberships


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data** | [**List[EndpointGetGroupsIDMembershipsDataInner]**](EndpointGetGroupsIDMembershipsDataInner.md) |  | [optional] 
**pagination** | [**ApiPagination**](ApiPagination.md) |  | [optional] 

## Example

```python
from openapi_client.models.endpoint_get_groups_id_memberships import EndpointGetGroupsIDMemberships

# TODO update the JSON string below
json = "{}"
# create an instance of EndpointGetGroupsIDMemberships from a JSON string
endpoint_get_groups_id_memberships_instance = EndpointGetGroupsIDMemberships.from_json(json)
# print the JSON string representation of the object
print(EndpointGetGroupsIDMemberships.to_json())

# convert the object into a dict
endpoint_get_groups_id_memberships_dict = endpoint_get_groups_id_memberships_instance.to_dict()
# create an instance of EndpointGetGroupsIDMemberships from a dict
endpoint_get_groups_id_memberships_from_dict = EndpointGetGroupsIDMemberships.from_dict(endpoint_get_groups_id_memberships_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


