# GoogleCloudIdentitytoolkitAdminV2ClientPermissions

Configuration related to restricting a user's ability to affect their account.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**disabled_user_deletion** | **bool** | When true, end users cannot delete their account on the associated project through any of our API methods | [optional] 
**disabled_user_signup** | **bool** | When true, end users cannot sign up for a new account on the associated project through any of our API methods | [optional] 

## Example

```python
from openapi_client.models.google_cloud_identitytoolkit_admin_v2_client_permissions import GoogleCloudIdentitytoolkitAdminV2ClientPermissions

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudIdentitytoolkitAdminV2ClientPermissions from a JSON string
google_cloud_identitytoolkit_admin_v2_client_permissions_instance = GoogleCloudIdentitytoolkitAdminV2ClientPermissions.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudIdentitytoolkitAdminV2ClientPermissions.to_json())

# convert the object into a dict
google_cloud_identitytoolkit_admin_v2_client_permissions_dict = google_cloud_identitytoolkit_admin_v2_client_permissions_instance.to_dict()
# create an instance of GoogleCloudIdentitytoolkitAdminV2ClientPermissions from a dict
google_cloud_identitytoolkit_admin_v2_client_permissions_from_dict = GoogleCloudIdentitytoolkitAdminV2ClientPermissions.from_dict(google_cloud_identitytoolkit_admin_v2_client_permissions_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


