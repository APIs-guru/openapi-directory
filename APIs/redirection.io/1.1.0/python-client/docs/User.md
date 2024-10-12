# User



## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**current_password** | **object** |  | [optional] 
**default_organization** | [**Organization**](Organization.md) |  | [optional] 
**email** | **str** |  | 
**id** | **str** |  | [optional] [readonly] 
**name** | **str** |  | 
**new_email** | **str** |  | [optional] 
**new_email_token** | **str** |  | [optional] 
**new_email_token_expired_at** | **datetime** |  | [optional] 
**password** | **str** |  | [optional] 
**plain_password** | **str** |  | [optional] 
**plain_password_repeat** | **object** |  | [optional] 
**projects_flattened** | **List[str]** |  | [optional] 
**super_admin** | **bool** |  | [optional] 
**updated_at** | **datetime** |  | [optional] 
**user_organizations** | [**List[UserOrganization]**](UserOrganization.md) |  | [optional] 
**user_projects** | **List[str]** |  | [optional] 

## Example

```python
from openapi_client.models.user import User

# TODO update the JSON string below
json = "{}"
# create an instance of User from a JSON string
user_instance = User.from_json(json)
# print the JSON string representation of the object
print(User.to_json())

# convert the object into a dict
user_dict = user_instance.to_dict()
# create an instance of User from a dict
user_from_dict = User.from_dict(user_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


