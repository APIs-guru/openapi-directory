# GroupUserList200ResponseValueInnerProperties

User profile.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**email** | **str** | Email address. | [optional] 
**first_name** | **str** | First name. | [optional] 
**groups** | [**List[GroupUserList200ResponseValueInnerPropertiesGroupsInner]**](GroupUserList200ResponseValueInnerPropertiesGroupsInner.md) | Collection of groups user is part of. | [optional] [readonly] 
**last_name** | **str** | Last name. | [optional] 
**registration_date** | **datetime** | Date of user registration. The date conforms to the following format: &#x60;yyyy-MM-ddTHH:mm:ssZ&#x60; as specified by the ISO 8601 standard.  | [optional] 

## Example

```python
from openapi_client.models.group_user_list200_response_value_inner_properties import GroupUserList200ResponseValueInnerProperties

# TODO update the JSON string below
json = "{}"
# create an instance of GroupUserList200ResponseValueInnerProperties from a JSON string
group_user_list200_response_value_inner_properties_instance = GroupUserList200ResponseValueInnerProperties.from_json(json)
# print the JSON string representation of the object
print(GroupUserList200ResponseValueInnerProperties.to_json())

# convert the object into a dict
group_user_list200_response_value_inner_properties_dict = group_user_list200_response_value_inner_properties_instance.to_dict()
# create an instance of GroupUserList200ResponseValueInnerProperties from a dict
group_user_list200_response_value_inner_properties_from_dict = GroupUserList200ResponseValueInnerProperties.from_dict(group_user_list200_response_value_inner_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


