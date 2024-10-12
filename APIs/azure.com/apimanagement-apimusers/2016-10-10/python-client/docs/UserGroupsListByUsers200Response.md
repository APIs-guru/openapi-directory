# UserGroupsListByUsers200Response

Paged Group list representation.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**count** | **int** | Total record count number across all pages. | [optional] 
**next_link** | **str** | Next page link if any. | [optional] 
**value** | [**List[UserGroupsListByUsers200ResponseValueInner]**](UserGroupsListByUsers200ResponseValueInner.md) | Page values. | [optional] 

## Example

```python
from openapi_client.models.user_groups_list_by_users200_response import UserGroupsListByUsers200Response

# TODO update the JSON string below
json = "{}"
# create an instance of UserGroupsListByUsers200Response from a JSON string
user_groups_list_by_users200_response_instance = UserGroupsListByUsers200Response.from_json(json)
# print the JSON string representation of the object
print(UserGroupsListByUsers200Response.to_json())

# convert the object into a dict
user_groups_list_by_users200_response_dict = user_groups_list_by_users200_response_instance.to_dict()
# create an instance of UserGroupsListByUsers200Response from a dict
user_groups_list_by_users200_response_from_dict = UserGroupsListByUsers200Response.from_dict(user_groups_list_by_users200_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


