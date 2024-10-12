# UserUpdateRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data** | [**UserUpdateRequestData**](UserUpdateRequestData.md) |  | 

## Example

```python
from openapi_client.models.user_update_request import UserUpdateRequest

# TODO update the JSON string below
json = "{}"
# create an instance of UserUpdateRequest from a JSON string
user_update_request_instance = UserUpdateRequest.from_json(json)
# print the JSON string representation of the object
print(UserUpdateRequest.to_json())

# convert the object into a dict
user_update_request_dict = user_update_request_instance.to_dict()
# create an instance of UserUpdateRequest from a dict
user_update_request_from_dict = UserUpdateRequest.from_dict(user_update_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


