# UserLicenseInfo


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**current_users** | **int** |  | [optional] 
**is_free** | **bool** |  | [optional] 
**is_trial** | **bool** |  | [optional] 
**licensed_users** | **int** |  | [optional] 
**plan_code** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.user_license_info import UserLicenseInfo

# TODO update the JSON string below
json = "{}"
# create an instance of UserLicenseInfo from a JSON string
user_license_info_instance = UserLicenseInfo.from_json(json)
# print the JSON string representation of the object
print(UserLicenseInfo.to_json())

# convert the object into a dict
user_license_info_dict = user_license_info_instance.to_dict()
# create an instance of UserLicenseInfo from a dict
user_license_info_from_dict = UserLicenseInfo.from_dict(user_license_info_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


