# GoogleCloudIdentitytoolkitAdminV2PhoneNumber

Configuration options related to authenticated a user by their phone number.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**enabled** | **bool** | Whether phone number auth is enabled for the project or not. | [optional] 
**test_phone_numbers** | **Dict[str, str]** | A map of that can be used for phone auth testing. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_identitytoolkit_admin_v2_phone_number import GoogleCloudIdentitytoolkitAdminV2PhoneNumber

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudIdentitytoolkitAdminV2PhoneNumber from a JSON string
google_cloud_identitytoolkit_admin_v2_phone_number_instance = GoogleCloudIdentitytoolkitAdminV2PhoneNumber.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudIdentitytoolkitAdminV2PhoneNumber.to_json())

# convert the object into a dict
google_cloud_identitytoolkit_admin_v2_phone_number_dict = google_cloud_identitytoolkit_admin_v2_phone_number_instance.to_dict()
# create an instance of GoogleCloudIdentitytoolkitAdminV2PhoneNumber from a dict
google_cloud_identitytoolkit_admin_v2_phone_number_from_dict = GoogleCloudIdentitytoolkitAdminV2PhoneNumber.from_dict(google_cloud_identitytoolkit_admin_v2_phone_number_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


