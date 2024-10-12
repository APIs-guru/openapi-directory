# GroupUsersListByGroups200ResponseValueInner

User profile.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**email** | **str** | Email address. | [optional] 
**first_name** | **str** | First name. | [optional] 
**id** | **str** | User identifier path. | [optional] 
**identities** | [**List[GroupUsersListByGroups200ResponseValueInnerIdentitiesInner]**](GroupUsersListByGroups200ResponseValueInnerIdentitiesInner.md) | Collection of user identities. | [optional] [readonly] 
**last_name** | **str** | Last name. | [optional] 
**note** | **str** | Administrator&#39;s note about given user. | [optional] 
**registration_date** | **datetime** | Date of user registration. The date conforms to the following format: &#x60;yyyy-MM-ddTHH:mm:ssZ&#x60; as specified by the ISO 8601 standard.  | [optional] 
**state** | **str** | User state. | [optional] 

## Example

```python
from openapi_client.models.group_users_list_by_groups200_response_value_inner import GroupUsersListByGroups200ResponseValueInner

# TODO update the JSON string below
json = "{}"
# create an instance of GroupUsersListByGroups200ResponseValueInner from a JSON string
group_users_list_by_groups200_response_value_inner_instance = GroupUsersListByGroups200ResponseValueInner.from_json(json)
# print the JSON string representation of the object
print(GroupUsersListByGroups200ResponseValueInner.to_json())

# convert the object into a dict
group_users_list_by_groups200_response_value_inner_dict = group_users_list_by_groups200_response_value_inner_instance.to_dict()
# create an instance of GroupUsersListByGroups200ResponseValueInner from a dict
group_users_list_by_groups200_response_value_inner_from_dict = GroupUsersListByGroups200ResponseValueInner.from_dict(group_users_list_by_groups200_response_value_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


