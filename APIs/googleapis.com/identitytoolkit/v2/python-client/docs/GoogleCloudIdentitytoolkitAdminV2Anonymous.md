# GoogleCloudIdentitytoolkitAdminV2Anonymous

Configuration options related to authenticating an anonymous user.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**enabled** | **bool** | Whether anonymous user auth is enabled for the project or not. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_identitytoolkit_admin_v2_anonymous import GoogleCloudIdentitytoolkitAdminV2Anonymous

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudIdentitytoolkitAdminV2Anonymous from a JSON string
google_cloud_identitytoolkit_admin_v2_anonymous_instance = GoogleCloudIdentitytoolkitAdminV2Anonymous.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudIdentitytoolkitAdminV2Anonymous.to_json())

# convert the object into a dict
google_cloud_identitytoolkit_admin_v2_anonymous_dict = google_cloud_identitytoolkit_admin_v2_anonymous_instance.to_dict()
# create an instance of GoogleCloudIdentitytoolkitAdminV2Anonymous from a dict
google_cloud_identitytoolkit_admin_v2_anonymous_from_dict = GoogleCloudIdentitytoolkitAdminV2Anonymous.from_dict(google_cloud_identitytoolkit_admin_v2_anonymous_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


