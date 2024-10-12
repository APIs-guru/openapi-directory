# GoogleCloudIdentitytoolkitAdminV2Inheritance

Settings that the tenants will inherit from project level.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**email_sending_config** | **bool** | Whether to allow the tenant to inherit custom domains, email templates, and custom SMTP settings. If true, email sent from tenant will follow the project level email sending configurations. If false (by default), emails will go with the default settings with no customizations. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_identitytoolkit_admin_v2_inheritance import GoogleCloudIdentitytoolkitAdminV2Inheritance

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudIdentitytoolkitAdminV2Inheritance from a JSON string
google_cloud_identitytoolkit_admin_v2_inheritance_instance = GoogleCloudIdentitytoolkitAdminV2Inheritance.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudIdentitytoolkitAdminV2Inheritance.to_json())

# convert the object into a dict
google_cloud_identitytoolkit_admin_v2_inheritance_dict = google_cloud_identitytoolkit_admin_v2_inheritance_instance.to_dict()
# create an instance of GoogleCloudIdentitytoolkitAdminV2Inheritance from a dict
google_cloud_identitytoolkit_admin_v2_inheritance_from_dict = GoogleCloudIdentitytoolkitAdminV2Inheritance.from_dict(google_cloud_identitytoolkit_admin_v2_inheritance_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


