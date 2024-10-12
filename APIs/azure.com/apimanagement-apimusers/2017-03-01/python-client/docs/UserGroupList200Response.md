# UserGroupList200Response

Paged Group list representation.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_link** | **str** | Next page link if any. | [optional] 
**value** | [**List[UserGroupList200ResponseValueInner]**](UserGroupList200ResponseValueInner.md) | Page values. | [optional] 

## Example

```python
from openapi_client.models.user_group_list200_response import UserGroupList200Response

# TODO update the JSON string below
json = "{}"
# create an instance of UserGroupList200Response from a JSON string
user_group_list200_response_instance = UserGroupList200Response.from_json(json)
# print the JSON string representation of the object
print(UserGroupList200Response.to_json())

# convert the object into a dict
user_group_list200_response_dict = user_group_list200_response_instance.to_dict()
# create an instance of UserGroupList200Response from a dict
user_group_list200_response_from_dict = UserGroupList200Response.from_dict(user_group_list200_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


