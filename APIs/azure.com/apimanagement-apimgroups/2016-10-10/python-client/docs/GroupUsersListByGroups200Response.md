# GroupUsersListByGroups200Response

Paged Users list representation.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**count** | **int** | Total record count number across all pages. | [optional] 
**next_link** | **str** | Next page link if any. | [optional] 
**value** | [**List[GroupUsersListByGroups200ResponseValueInner]**](GroupUsersListByGroups200ResponseValueInner.md) | Page values. | [optional] 

## Example

```python
from openapi_client.models.group_users_list_by_groups200_response import GroupUsersListByGroups200Response

# TODO update the JSON string below
json = "{}"
# create an instance of GroupUsersListByGroups200Response from a JSON string
group_users_list_by_groups200_response_instance = GroupUsersListByGroups200Response.from_json(json)
# print the JSON string representation of the object
print(GroupUsersListByGroups200Response.to_json())

# convert the object into a dict
group_users_list_by_groups200_response_dict = group_users_list_by_groups200_response_instance.to_dict()
# create an instance of GroupUsersListByGroups200Response from a dict
group_users_list_by_groups200_response_from_dict = GroupUsersListByGroups200Response.from_dict(group_users_list_by_groups200_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


