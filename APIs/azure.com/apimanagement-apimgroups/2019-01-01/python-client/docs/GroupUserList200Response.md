# GroupUserList200Response

Paged Users list representation.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_link** | **str** | Next page link if any. | [optional] 
**value** | [**List[GroupUserList200ResponseValueInner]**](GroupUserList200ResponseValueInner.md) | Page values. | [optional] 

## Example

```python
from openapi_client.models.group_user_list200_response import GroupUserList200Response

# TODO update the JSON string below
json = "{}"
# create an instance of GroupUserList200Response from a JSON string
group_user_list200_response_instance = GroupUserList200Response.from_json(json)
# print the JSON string representation of the object
print(GroupUserList200Response.to_json())

# convert the object into a dict
group_user_list200_response_dict = group_user_list200_response_instance.to_dict()
# create an instance of GroupUserList200Response from a dict
group_user_list200_response_from_dict = GroupUserList200Response.from_dict(group_user_list200_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


