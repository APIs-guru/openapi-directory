# UserGetSharedAccessToken200Response

Get User Token response details.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**value** | **str** | Shared Access Authorization token for the User. | [optional] 

## Example

```python
from openapi_client.models.user_get_shared_access_token200_response import UserGetSharedAccessToken200Response

# TODO update the JSON string below
json = "{}"
# create an instance of UserGetSharedAccessToken200Response from a JSON string
user_get_shared_access_token200_response_instance = UserGetSharedAccessToken200Response.from_json(json)
# print the JSON string representation of the object
print(UserGetSharedAccessToken200Response.to_json())

# convert the object into a dict
user_get_shared_access_token200_response_dict = user_get_shared_access_token200_response_instance.to_dict()
# create an instance of UserGetSharedAccessToken200Response from a dict
user_get_shared_access_token200_response_from_dict = UserGetSharedAccessToken200Response.from_dict(user_get_shared_access_token200_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


