# EndpointGetUsersIDGroups


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data** | [**List[Group]**](Group.md) |  | [optional] 

## Example

```python
from openapi_client.models.endpoint_get_users_id_groups import EndpointGetUsersIDGroups

# TODO update the JSON string below
json = "{}"
# create an instance of EndpointGetUsersIDGroups from a JSON string
endpoint_get_users_id_groups_instance = EndpointGetUsersIDGroups.from_json(json)
# print the JSON string representation of the object
print(EndpointGetUsersIDGroups.to_json())

# convert the object into a dict
endpoint_get_users_id_groups_dict = endpoint_get_users_id_groups_instance.to_dict()
# create an instance of EndpointGetUsersIDGroups from a dict
endpoint_get_users_id_groups_from_dict = EndpointGetUsersIDGroups.from_dict(endpoint_get_users_id_groups_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


