# EndpointGetUsersIDGroupsMessages


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data** | [**List[GroupMessage]**](GroupMessage.md) |  | [optional] 
**pagination** | [**ApiPagination**](ApiPagination.md) |  | [optional] 

## Example

```python
from openapi_client.models.endpoint_get_users_id_groups_messages import EndpointGetUsersIDGroupsMessages

# TODO update the JSON string below
json = "{}"
# create an instance of EndpointGetUsersIDGroupsMessages from a JSON string
endpoint_get_users_id_groups_messages_instance = EndpointGetUsersIDGroupsMessages.from_json(json)
# print the JSON string representation of the object
print(EndpointGetUsersIDGroupsMessages.to_json())

# convert the object into a dict
endpoint_get_users_id_groups_messages_dict = endpoint_get_users_id_groups_messages_instance.to_dict()
# create an instance of EndpointGetUsersIDGroupsMessages from a dict
endpoint_get_users_id_groups_messages_from_dict = EndpointGetUsersIDGroupsMessages.from_dict(endpoint_get_users_id_groups_messages_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


