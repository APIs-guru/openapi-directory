# ReactivateUsersRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**created_by_id** | **str** | ID of the user who&#39;s reactivating the users | [optional] 
**restore_messages** | **bool** | Restore previously deleted messages | [optional] 
**user_ids** | **List[str]** | User IDs to reactivate | 

## Example

```python
from openapi_client.models.reactivate_users_request import ReactivateUsersRequest

# TODO update the JSON string below
json = "{}"
# create an instance of ReactivateUsersRequest from a JSON string
reactivate_users_request_instance = ReactivateUsersRequest.from_json(json)
# print the JSON string representation of the object
print(ReactivateUsersRequest.to_json())

# convert the object into a dict
reactivate_users_request_dict = reactivate_users_request_instance.to_dict()
# create an instance of ReactivateUsersRequest from a dict
reactivate_users_request_from_dict = ReactivateUsersRequest.from_dict(reactivate_users_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


