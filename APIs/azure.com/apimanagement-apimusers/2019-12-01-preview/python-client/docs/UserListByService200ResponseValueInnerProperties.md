# UserListByService200ResponseValueInnerProperties

User profile.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**email** | **str** | Email address. | [optional] 
**first_name** | **str** | First name. | [optional] 
**groups** | [**List[UserListByService200ResponseValueInnerPropertiesGroupsInner]**](UserListByService200ResponseValueInnerPropertiesGroupsInner.md) | Collection of groups user is part of. | [optional] [readonly] 
**last_name** | **str** | Last name. | [optional] 
**registration_date** | **datetime** | Date of user registration. The date conforms to the following format: &#x60;yyyy-MM-ddTHH:mm:ssZ&#x60; as specified by the ISO 8601 standard.  | [optional] 

## Example

```python
from openapi_client.models.user_list_by_service200_response_value_inner_properties import UserListByService200ResponseValueInnerProperties

# TODO update the JSON string below
json = "{}"
# create an instance of UserListByService200ResponseValueInnerProperties from a JSON string
user_list_by_service200_response_value_inner_properties_instance = UserListByService200ResponseValueInnerProperties.from_json(json)
# print the JSON string representation of the object
print(UserListByService200ResponseValueInnerProperties.to_json())

# convert the object into a dict
user_list_by_service200_response_value_inner_properties_dict = user_list_by_service200_response_value_inner_properties_instance.to_dict()
# create an instance of UserListByService200ResponseValueInnerProperties from a dict
user_list_by_service200_response_value_inner_properties_from_dict = UserListByService200ResponseValueInnerProperties.from_dict(user_list_by_service200_response_value_inner_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


