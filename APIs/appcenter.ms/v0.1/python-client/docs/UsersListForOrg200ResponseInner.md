# UsersListForOrg200ResponseInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**display_name** | **str** | The full name of the user. Might for example be first and last name | 
**email** | **str** | The email address of the user | 
**joined_at** | **str** | The date when the user joined the organization | 
**name** | **str** | The unique name that is used to identify the user. | 
**role** | **str** | The role the user has within the organization | 

## Example

```python
from openapi_client.models.users_list_for_org200_response_inner import UsersListForOrg200ResponseInner

# TODO update the JSON string below
json = "{}"
# create an instance of UsersListForOrg200ResponseInner from a JSON string
users_list_for_org200_response_inner_instance = UsersListForOrg200ResponseInner.from_json(json)
# print the JSON string representation of the object
print(UsersListForOrg200ResponseInner.to_json())

# convert the object into a dict
users_list_for_org200_response_inner_dict = users_list_for_org200_response_inner_instance.to_dict()
# create an instance of UsersListForOrg200ResponseInner from a dict
users_list_for_org200_response_inner_from_dict = UsersListForOrg200ResponseInner.from_dict(users_list_for_org200_response_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


