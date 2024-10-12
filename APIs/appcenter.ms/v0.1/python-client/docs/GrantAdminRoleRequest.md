# GrantAdminRoleRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**admin_role** | **str** | The new admin_role | 

## Example

```python
from openapi_client.models.grant_admin_role_request import GrantAdminRoleRequest

# TODO update the JSON string below
json = "{}"
# create an instance of GrantAdminRoleRequest from a JSON string
grant_admin_role_request_instance = GrantAdminRoleRequest.from_json(json)
# print the JSON string representation of the object
print(GrantAdminRoleRequest.to_json())

# convert the object into a dict
grant_admin_role_request_dict = grant_admin_role_request_instance.to_dict()
# create an instance of GrantAdminRoleRequest from a dict
grant_admin_role_request_from_dict = GrantAdminRoleRequest.from_dict(grant_admin_role_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


