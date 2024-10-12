# UserBasics


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**firstname** | **str** | Firstname of the user (for education users) | [optional] 
**id** | **str** | The user unique identifier | [optional] 
**is_flat_team** | **bool** | Will be &#39;true&#39; if user is part of the Flat Team | [optional] 
**is_power_user** | **bool** | User license status. &#39;true&#39; if user is an individual Power user | [optional] 
**lastname** | **str** | Lastname of the user (for education users) | [optional] 
**name** | **str** | A displayable name for the user (for consumer users) | [optional] 
**picture** | **str** | The URL of the picture to display | [optional] 
**printable_name** | **str** | The name that can be directly printed (name, firstname &amp; lastname, or username) | [optional] 
**type** | **str** | The type of user account | [optional] 
**username** | **str** | The user name (unique for the organization) | [optional] 

## Example

```python
from openapi_client.models.user_basics import UserBasics

# TODO update the JSON string below
json = "{}"
# create an instance of UserBasics from a JSON string
user_basics_instance = UserBasics.from_json(json)
# print the JSON string representation of the object
print(UserBasics.to_json())

# convert the object into a dict
user_basics_dict = user_basics_instance.to_dict()
# create an instance of UserBasics from a dict
user_basics_from_dict = UserBasics.from_dict(user_basics_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


