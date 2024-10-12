# UserDetailsAdmin

User details (view for organization teacher / admin)

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**email** | **str** | Email of the user | [optional] 
**last_activity_date** | **datetime** | Date of the last user activity | [optional] 
**license** | [**UserDetailsAdminAllOfLicense**](UserDetailsAdminAllOfLicense.md) |  | [optional] 

## Example

```python
from openapi_client.models.user_details_admin import UserDetailsAdmin

# TODO update the JSON string below
json = "{}"
# create an instance of UserDetailsAdmin from a JSON string
user_details_admin_instance = UserDetailsAdmin.from_json(json)
# print the JSON string representation of the object
print(UserDetailsAdmin.to_json())

# convert the object into a dict
user_details_admin_dict = user_details_admin_instance.to_dict()
# create an instance of UserDetailsAdmin from a dict
user_details_admin_from_dict = UserDetailsAdmin.from_dict(user_details_admin_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


