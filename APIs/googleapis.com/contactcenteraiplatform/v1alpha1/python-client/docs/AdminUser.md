# AdminUser

Message storing info about the first admin user. Next ID: 3

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**family_name** | **str** | Optional. Last/family name of the first admin user. | [optional] 
**given_name** | **str** | Optional. First/given name of the first admin user. | [optional] 

## Example

```python
from openapi_client.models.admin_user import AdminUser

# TODO update the JSON string below
json = "{}"
# create an instance of AdminUser from a JSON string
admin_user_instance = AdminUser.from_json(json)
# print the JSON string representation of the object
print(AdminUser.to_json())

# convert the object into a dict
admin_user_dict = admin_user_instance.to_dict()
# create an instance of AdminUser from a dict
admin_user_from_dict = AdminUser.from_dict(admin_user_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


