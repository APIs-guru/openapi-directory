# GroupUserList200ResponseValueInnerPropertiesGroupsInner

Group contract Properties.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**built_in** | **bool** | true if the group is one of the three system groups (Administrators, Developers, or Guests); otherwise false. | [optional] [readonly] 
**description** | **str** | Group description. Can contain HTML formatting tags. | [optional] 
**display_name** | **str** | Group name. | 
**external_id** | **str** | For external groups, this property contains the id of the group from the external identity provider, e.g. for Azure Active Directory aad://&lt;tenant&gt;.onmicrosoft.com/groups/&lt;group object id&gt;; otherwise the value is null. | [optional] 
**type** | **str** | Group type. | [optional] 

## Example

```python
from openapi_client.models.group_user_list200_response_value_inner_properties_groups_inner import GroupUserList200ResponseValueInnerPropertiesGroupsInner

# TODO update the JSON string below
json = "{}"
# create an instance of GroupUserList200ResponseValueInnerPropertiesGroupsInner from a JSON string
group_user_list200_response_value_inner_properties_groups_inner_instance = GroupUserList200ResponseValueInnerPropertiesGroupsInner.from_json(json)
# print the JSON string representation of the object
print(GroupUserList200ResponseValueInnerPropertiesGroupsInner.to_json())

# convert the object into a dict
group_user_list200_response_value_inner_properties_groups_inner_dict = group_user_list200_response_value_inner_properties_groups_inner_instance.to_dict()
# create an instance of GroupUserList200ResponseValueInnerPropertiesGroupsInner from a dict
group_user_list200_response_value_inner_properties_groups_inner_from_dict = GroupUserList200ResponseValueInnerPropertiesGroupsInner.from_dict(group_user_list200_response_value_inner_properties_groups_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


