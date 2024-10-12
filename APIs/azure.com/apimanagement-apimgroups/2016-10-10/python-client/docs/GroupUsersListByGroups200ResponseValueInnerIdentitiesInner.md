# GroupUsersListByGroups200ResponseValueInnerIdentitiesInner

User identity details.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | Identifier value within provider. | [optional] 
**provider** | **str** | Identity provider name. | [optional] 

## Example

```python
from openapi_client.models.group_users_list_by_groups200_response_value_inner_identities_inner import GroupUsersListByGroups200ResponseValueInnerIdentitiesInner

# TODO update the JSON string below
json = "{}"
# create an instance of GroupUsersListByGroups200ResponseValueInnerIdentitiesInner from a JSON string
group_users_list_by_groups200_response_value_inner_identities_inner_instance = GroupUsersListByGroups200ResponseValueInnerIdentitiesInner.from_json(json)
# print the JSON string representation of the object
print(GroupUsersListByGroups200ResponseValueInnerIdentitiesInner.to_json())

# convert the object into a dict
group_users_list_by_groups200_response_value_inner_identities_inner_dict = group_users_list_by_groups200_response_value_inner_identities_inner_instance.to_dict()
# create an instance of GroupUsersListByGroups200ResponseValueInnerIdentitiesInner from a dict
group_users_list_by_groups200_response_value_inner_identities_inner_from_dict = GroupUsersListByGroups200ResponseValueInnerIdentitiesInner.from_dict(group_users_list_by_groups200_response_value_inner_identities_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


