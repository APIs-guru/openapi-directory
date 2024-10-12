# UserEmailOrgRoleRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**role** | **str** | The user&#39;s role | [optional] 
**user_email** | **str** | The user&#39;s email address | 

## Example

```python
from openapi_client.models.user_email_org_role_request import UserEmailOrgRoleRequest

# TODO update the JSON string below
json = "{}"
# create an instance of UserEmailOrgRoleRequest from a JSON string
user_email_org_role_request_instance = UserEmailOrgRoleRequest.from_json(json)
# print the JSON string representation of the object
print(UserEmailOrgRoleRequest.to_json())

# convert the object into a dict
user_email_org_role_request_dict = user_email_org_role_request_instance.to_dict()
# create an instance of UserEmailOrgRoleRequest from a dict
user_email_org_role_request_from_dict = UserEmailOrgRoleRequest.from_dict(user_email_org_role_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


