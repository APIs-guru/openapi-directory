# UserDetailsAdminAllOfLicense

Current active license of the user

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**active** | **bool** | ID of the current license | [optional] 
**expiration_date** | **datetime** | Date when the license expires | [optional] 
**id** | **str** | ID of the current license | [optional] 
**mode** | [**LicenseMode**](LicenseMode.md) |  | [optional] 
**source** | [**LicenseSources**](LicenseSources.md) |  | [optional] [default to LicenseSources.ORDER]

## Example

```python
from openapi_client.models.user_details_admin_all_of_license import UserDetailsAdminAllOfLicense

# TODO update the JSON string below
json = "{}"
# create an instance of UserDetailsAdminAllOfLicense from a JSON string
user_details_admin_all_of_license_instance = UserDetailsAdminAllOfLicense.from_json(json)
# print the JSON string representation of the object
print(UserDetailsAdminAllOfLicense.to_json())

# convert the object into a dict
user_details_admin_all_of_license_dict = user_details_admin_all_of_license_instance.to_dict()
# create an instance of UserDetailsAdminAllOfLicense from a dict
user_details_admin_all_of_license_from_dict = UserDetailsAdminAllOfLicense.from_dict(user_details_admin_all_of_license_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


