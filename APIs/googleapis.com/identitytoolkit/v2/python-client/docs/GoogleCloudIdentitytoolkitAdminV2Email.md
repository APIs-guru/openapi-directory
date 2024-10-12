# GoogleCloudIdentitytoolkitAdminV2Email

Configuration options related to authenticating a user by their email address.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**enabled** | **bool** | Whether email auth is enabled for the project or not. | [optional] 
**password_required** | **bool** | Whether a password is required for email auth or not. If true, both an email and password must be provided to sign in. If false, a user may sign in via either email/password or email link. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_identitytoolkit_admin_v2_email import GoogleCloudIdentitytoolkitAdminV2Email

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudIdentitytoolkitAdminV2Email from a JSON string
google_cloud_identitytoolkit_admin_v2_email_instance = GoogleCloudIdentitytoolkitAdminV2Email.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudIdentitytoolkitAdminV2Email.to_json())

# convert the object into a dict
google_cloud_identitytoolkit_admin_v2_email_dict = google_cloud_identitytoolkit_admin_v2_email_instance.to_dict()
# create an instance of GoogleCloudIdentitytoolkitAdminV2Email from a dict
google_cloud_identitytoolkit_admin_v2_email_from_dict = GoogleCloudIdentitytoolkitAdminV2Email.from_dict(google_cloud_identitytoolkit_admin_v2_email_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


