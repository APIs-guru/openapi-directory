# UserCreateOrUpdateRequest

User create details.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**properties** | [**UserCreateOrUpdateRequestProperties**](UserCreateOrUpdateRequestProperties.md) |  | [optional] 

## Example

```python
from openapi_client.models.user_create_or_update_request import UserCreateOrUpdateRequest

# TODO update the JSON string below
json = "{}"
# create an instance of UserCreateOrUpdateRequest from a JSON string
user_create_or_update_request_instance = UserCreateOrUpdateRequest.from_json(json)
# print the JSON string representation of the object
print(UserCreateOrUpdateRequest.to_json())

# convert the object into a dict
user_create_or_update_request_dict = user_create_or_update_request_instance.to_dict()
# create an instance of UserCreateOrUpdateRequest from a dict
user_create_or_update_request_from_dict = UserCreateOrUpdateRequest.from_dict(user_create_or_update_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


