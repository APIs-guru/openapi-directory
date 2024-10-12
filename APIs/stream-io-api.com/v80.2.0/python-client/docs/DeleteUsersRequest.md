# DeleteUsersRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**conversations** | **str** | Conversation channels delete mode. Conversation channel is any channel which only has two members one of which is the user being deleted.  * null or empty string - doesn&#39;t delete any conversation channels * soft - marks all conversation channels as deleted (same effect as Delete Channels with &#39;hard&#39; option disabled) * hard - deletes channel and all its data completely including messages (same effect as Delete Channels with &#39;hard&#39; option enabled)  | [optional] 
**messages** | **str** | Message delete mode.  * null or empty string - doesn&#39;t delete user messages * soft - marks all user messages as deleted without removing any related message data * pruning - marks all user messages as deleted, nullifies message information and removes some message data such as reactions and flags * hard - deletes messages completely with all related information  | [optional] 
**new_channel_owner_id** | **str** |  | [optional] 
**user** | **str** | User delete mode.  * soft - marks user as deleted and retains all user data * pruning - marks user as deleted and nullifies user information * hard - deletes user completely. Requires &#39;hard&#39; option for messages and conversations as well  | [optional] 
**user_ids** | **List[str]** | IDs of users to delete | 

## Example

```python
from openapi_client.models.delete_users_request import DeleteUsersRequest

# TODO update the JSON string below
json = "{}"
# create an instance of DeleteUsersRequest from a JSON string
delete_users_request_instance = DeleteUsersRequest.from_json(json)
# print the JSON string representation of the object
print(DeleteUsersRequest.to_json())

# convert the object into a dict
delete_users_request_dict = delete_users_request_instance.to_dict()
# create an instance of DeleteUsersRequest from a dict
delete_users_request_from_dict = DeleteUsersRequest.from_dict(delete_users_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


