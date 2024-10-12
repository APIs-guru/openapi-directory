# EndpointPostUsersInvitesData


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**discovered** | [**EndpointPostUsersInvitesDataDiscovered**](EndpointPostUsersInvitesDataDiscovered.md) |  | [optional] 
**emailed** | [**EndpointPostUsersInvitesDataEmailed**](EndpointPostUsersInvitesDataEmailed.md) |  | [optional] 
**existing** | [**EndpointPostUsersInvitesDataExisting**](EndpointPostUsersInvitesDataExisting.md) |  | [optional] 
**invalid** | [**EndpointPostUsersInvitesDataEmailed**](EndpointPostUsersInvitesDataEmailed.md) |  | [optional] 

## Example

```python
from openapi_client.models.endpoint_post_users_invites_data import EndpointPostUsersInvitesData

# TODO update the JSON string below
json = "{}"
# create an instance of EndpointPostUsersInvitesData from a JSON string
endpoint_post_users_invites_data_instance = EndpointPostUsersInvitesData.from_json(json)
# print the JSON string representation of the object
print(EndpointPostUsersInvitesData.to_json())

# convert the object into a dict
endpoint_post_users_invites_data_dict = endpoint_post_users_invites_data_instance.to_dict()
# create an instance of EndpointPostUsersInvitesData from a dict
endpoint_post_users_invites_data_from_dict = EndpointPostUsersInvitesData.from_dict(endpoint_post_users_invites_data_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


