# DeactivateUsersRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**created_by_id** | **str** | ID of the user who deactivated the users | [optional] 
**mark_messages_deleted** | **bool** | Makes messages appear to be deleted | [optional] 
**user_ids** | **List[str]** | User IDs to deactivate | 

## Example

```python
from openapi_client.models.deactivate_users_request import DeactivateUsersRequest

# TODO update the JSON string below
json = "{}"
# create an instance of DeactivateUsersRequest from a JSON string
deactivate_users_request_instance = DeactivateUsersRequest.from_json(json)
# print the JSON string representation of the object
print(DeactivateUsersRequest.to_json())

# convert the object into a dict
deactivate_users_request_dict = deactivate_users_request_instance.to_dict()
# create an instance of DeactivateUsersRequest from a dict
deactivate_users_request_from_dict = DeactivateUsersRequest.from_dict(deactivate_users_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


