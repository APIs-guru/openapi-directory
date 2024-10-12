# UserGroupList200ResponseValueInnerProperties

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
from openapi_client.models.user_group_list200_response_value_inner_properties import UserGroupList200ResponseValueInnerProperties

# TODO update the JSON string below
json = "{}"
# create an instance of UserGroupList200ResponseValueInnerProperties from a JSON string
user_group_list200_response_value_inner_properties_instance = UserGroupList200ResponseValueInnerProperties.from_json(json)
# print the JSON string representation of the object
print(UserGroupList200ResponseValueInnerProperties.to_json())

# convert the object into a dict
user_group_list200_response_value_inner_properties_dict = user_group_list200_response_value_inner_properties_instance.to_dict()
# create an instance of UserGroupList200ResponseValueInnerProperties from a dict
user_group_list200_response_value_inner_properties_from_dict = UserGroupList200ResponseValueInnerProperties.from_dict(user_group_list200_response_value_inner_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


