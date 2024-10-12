# UserListByService200Response

Paged Users list representation.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_link** | **str** | Next page link if any. | [optional] 
**value** | [**List[UserListByService200ResponseValueInner]**](UserListByService200ResponseValueInner.md) | Page values. | [optional] 

## Example

```python
from openapi_client.models.user_list_by_service200_response import UserListByService200Response

# TODO update the JSON string below
json = "{}"
# create an instance of UserListByService200Response from a JSON string
user_list_by_service200_response_instance = UserListByService200Response.from_json(json)
# print the JSON string representation of the object
print(UserListByService200Response.to_json())

# convert the object into a dict
user_list_by_service200_response_dict = user_list_by_service200_response_instance.to_dict()
# create an instance of UserListByService200Response from a dict
user_list_by_service200_response_from_dict = UserListByService200Response.from_dict(user_list_by_service200_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


