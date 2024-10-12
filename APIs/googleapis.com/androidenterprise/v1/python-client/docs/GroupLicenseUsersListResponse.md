# GroupLicenseUsersListResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**user** | [**List[User]**](User.md) | A user of an enterprise. | [optional] 

## Example

```python
from openapi_client.models.group_license_users_list_response import GroupLicenseUsersListResponse

# TODO update the JSON string below
json = "{}"
# create an instance of GroupLicenseUsersListResponse from a JSON string
group_license_users_list_response_instance = GroupLicenseUsersListResponse.from_json(json)
# print the JSON string representation of the object
print(GroupLicenseUsersListResponse.to_json())

# convert the object into a dict
group_license_users_list_response_dict = group_license_users_list_response_instance.to_dict()
# create an instance of GroupLicenseUsersListResponse from a dict
group_license_users_list_response_from_dict = GroupLicenseUsersListResponse.from_dict(group_license_users_list_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


