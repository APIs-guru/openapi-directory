# EndpointPostUsersInvites


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data** | [**EndpointPostUsersInvitesData**](EndpointPostUsersInvitesData.md) |  | [optional] 
**success** | **bool** |  | [optional] 

## Example

```python
from openapi_client.models.endpoint_post_users_invites import EndpointPostUsersInvites

# TODO update the JSON string below
json = "{}"
# create an instance of EndpointPostUsersInvites from a JSON string
endpoint_post_users_invites_instance = EndpointPostUsersInvites.from_json(json)
# print the JSON string representation of the object
print(EndpointPostUsersInvites.to_json())

# convert the object into a dict
endpoint_post_users_invites_dict = endpoint_post_users_invites_instance.to_dict()
# create an instance of EndpointPostUsersInvites from a dict
endpoint_post_users_invites_from_dict = EndpointPostUsersInvites.from_dict(endpoint_post_users_invites_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


