# ReactivateUserRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**created_by_id** | **str** | ID of the user who&#39;s reactivating the user | [optional] 
**name** | **str** | Set this field to put new name for the user | [optional] 
**restore_messages** | **bool** | Restore previously deleted messages | [optional] 
**user_id** | **str** |  | 

## Example

```python
from openapi_client.models.reactivate_user_request import ReactivateUserRequest

# TODO update the JSON string below
json = "{}"
# create an instance of ReactivateUserRequest from a JSON string
reactivate_user_request_instance = ReactivateUserRequest.from_json(json)
# print the JSON string representation of the object
print(ReactivateUserRequest.to_json())

# convert the object into a dict
reactivate_user_request_dict = reactivate_user_request_instance.to_dict()
# create an instance of ReactivateUserRequest from a dict
reactivate_user_request_from_dict = ReactivateUserRequest.from_dict(reactivate_user_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


