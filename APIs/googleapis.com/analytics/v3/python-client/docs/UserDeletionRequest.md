# UserDeletionRequest

JSON template for a user deletion request resource.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**deletion_request_time** | **datetime** | This marks the point in time for which all user data before should be deleted | [optional] [readonly] 
**firebase_project_id** | **str** | Firebase Project Id | [optional] 
**id** | [**UserDeletionRequestId**](UserDeletionRequestId.md) |  | [optional] 
**kind** | **str** | Value is \&quot;analytics#userDeletionRequest\&quot;. | [optional] [default to 'analytics#userDeletionRequest']
**property_id** | **str** | Property ID | [optional] 
**web_property_id** | **str** | Web property ID of the form UA-XXXXX-YY. | [optional] 

## Example

```python
from openapi_client.models.user_deletion_request import UserDeletionRequest

# TODO update the JSON string below
json = "{}"
# create an instance of UserDeletionRequest from a JSON string
user_deletion_request_instance = UserDeletionRequest.from_json(json)
# print the JSON string representation of the object
print(UserDeletionRequest.to_json())

# convert the object into a dict
user_deletion_request_dict = user_deletion_request_instance.to_dict()
# create an instance of UserDeletionRequest from a dict
user_deletion_request_from_dict = UserDeletionRequest.from_dict(user_deletion_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


