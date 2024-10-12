# UserListByService200ResponseValueInnerPropertiesGroupsInner

Group contract Properties.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**built_in** | **bool** | true if the group is one of the three system groups (Administrators, Developers, or Guests); otherwise false. | [optional] [readonly] 
**description** | **str** | Group description. Can contain HTML formatting tags. | [optional] 
**display_name** | **str** | Group name. | 
**external_id** | **str** | For external groups, this property contains the id of the group from the external identity provider, e.g. for Azure Active Directory &#x60;aad://&lt;tenant&gt;.onmicrosoft.com/groups/&lt;group object id&gt;&#x60;; otherwise the value is null. | [optional] 
**type** | **str** | Group type. | [optional] 

## Example

```python
from openapi_client.models.user_list_by_service200_response_value_inner_properties_groups_inner import UserListByService200ResponseValueInnerPropertiesGroupsInner

# TODO update the JSON string below
json = "{}"
# create an instance of UserListByService200ResponseValueInnerPropertiesGroupsInner from a JSON string
user_list_by_service200_response_value_inner_properties_groups_inner_instance = UserListByService200ResponseValueInnerPropertiesGroupsInner.from_json(json)
# print the JSON string representation of the object
print(UserListByService200ResponseValueInnerPropertiesGroupsInner.to_json())

# convert the object into a dict
user_list_by_service200_response_value_inner_properties_groups_inner_dict = user_list_by_service200_response_value_inner_properties_groups_inner_instance.to_dict()
# create an instance of UserListByService200ResponseValueInnerPropertiesGroupsInner from a dict
user_list_by_service200_response_value_inner_properties_groups_inner_from_dict = UserListByService200ResponseValueInnerPropertiesGroupsInner.from_dict(user_list_by_service200_response_value_inner_properties_groups_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


