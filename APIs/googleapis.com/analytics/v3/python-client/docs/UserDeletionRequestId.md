# UserDeletionRequestId

User ID.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** | **str** | Type of user | [optional] 
**user_id** | **str** | The User&#39;s id | [optional] 

## Example

```python
from openapi_client.models.user_deletion_request_id import UserDeletionRequestId

# TODO update the JSON string below
json = "{}"
# create an instance of UserDeletionRequestId from a JSON string
user_deletion_request_id_instance = UserDeletionRequestId.from_json(json)
# print the JSON string representation of the object
print(UserDeletionRequestId.to_json())

# convert the object into a dict
user_deletion_request_id_dict = user_deletion_request_id_instance.to_dict()
# create an instance of UserDeletionRequestId from a dict
user_deletion_request_id_from_dict = UserDeletionRequestId.from_dict(user_deletion_request_id_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


