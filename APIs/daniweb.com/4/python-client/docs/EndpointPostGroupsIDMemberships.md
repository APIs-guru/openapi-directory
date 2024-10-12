# EndpointPostGroupsIDMemberships


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data** | [**EndpointPostGroupsIDMembershipsData**](EndpointPostGroupsIDMembershipsData.md) |  | [optional] 
**success** | **bool** |  | [optional] 

## Example

```python
from openapi_client.models.endpoint_post_groups_id_memberships import EndpointPostGroupsIDMemberships

# TODO update the JSON string below
json = "{}"
# create an instance of EndpointPostGroupsIDMemberships from a JSON string
endpoint_post_groups_id_memberships_instance = EndpointPostGroupsIDMemberships.from_json(json)
# print the JSON string representation of the object
print(EndpointPostGroupsIDMemberships.to_json())

# convert the object into a dict
endpoint_post_groups_id_memberships_dict = endpoint_post_groups_id_memberships_instance.to_dict()
# create an instance of EndpointPostGroupsIDMemberships from a dict
endpoint_post_groups_id_memberships_from_dict = EndpointPostGroupsIDMemberships.from_dict(endpoint_post_groups_id_memberships_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


