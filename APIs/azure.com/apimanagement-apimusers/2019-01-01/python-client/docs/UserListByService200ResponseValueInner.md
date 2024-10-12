# UserListByService200ResponseValueInner

User details.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**properties** | [**UserListByService200ResponseValueInnerProperties**](UserListByService200ResponseValueInnerProperties.md) |  | [optional] 

## Example

```python
from openapi_client.models.user_list_by_service200_response_value_inner import UserListByService200ResponseValueInner

# TODO update the JSON string below
json = "{}"
# create an instance of UserListByService200ResponseValueInner from a JSON string
user_list_by_service200_response_value_inner_instance = UserListByService200ResponseValueInner.from_json(json)
# print the JSON string representation of the object
print(UserListByService200ResponseValueInner.to_json())

# convert the object into a dict
user_list_by_service200_response_value_inner_dict = user_list_by_service200_response_value_inner_instance.to_dict()
# create an instance of UserListByService200ResponseValueInner from a dict
user_list_by_service200_response_value_inner_from_dict = UserListByService200ResponseValueInner.from_dict(user_list_by_service200_response_value_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


