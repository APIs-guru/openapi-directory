# DeactivateUserRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**created_by_id** | **str** | ID of the user who deactivated the user | [optional] 
**mark_messages_deleted** | **bool** | Makes messages appear to be deleted | [optional] 
**user_id** | **str** |  | 

## Example

```python
from openapi_client.models.deactivate_user_request import DeactivateUserRequest

# TODO update the JSON string below
json = "{}"
# create an instance of DeactivateUserRequest from a JSON string
deactivate_user_request_instance = DeactivateUserRequest.from_json(json)
# print the JSON string representation of the object
print(DeactivateUserRequest.to_json())

# convert the object into a dict
deactivate_user_request_dict = deactivate_user_request_instance.to_dict()
# create an instance of DeactivateUserRequest from a dict
deactivate_user_request_from_dict = DeactivateUserRequest.from_dict(deactivate_user_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


