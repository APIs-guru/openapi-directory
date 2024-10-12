# UserGroupList200ResponseValueInner

Contract details.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**properties** | [**UserListByService200ResponseValueInnerPropertiesGroupsInner**](UserListByService200ResponseValueInnerPropertiesGroupsInner.md) |  | [optional] 

## Example

```python
from openapi_client.models.user_group_list200_response_value_inner import UserGroupList200ResponseValueInner

# TODO update the JSON string below
json = "{}"
# create an instance of UserGroupList200ResponseValueInner from a JSON string
user_group_list200_response_value_inner_instance = UserGroupList200ResponseValueInner.from_json(json)
# print the JSON string representation of the object
print(UserGroupList200ResponseValueInner.to_json())

# convert the object into a dict
user_group_list200_response_value_inner_dict = user_group_list200_response_value_inner_instance.to_dict()
# create an instance of UserGroupList200ResponseValueInner from a dict
user_group_list200_response_value_inner_from_dict = UserGroupList200ResponseValueInner.from_dict(user_group_list200_response_value_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


