# GoogleCloudIdentitytoolkitAdminV2AllowlistOnly

Defines a policy of only allowing regions by explicitly adding them to an allowlist.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**allowed_regions** | **List[str]** | Two letter unicode region codes to allow as defined by https://cldr.unicode.org/ The full list of these region codes is here: https://github.com/unicode-cldr/cldr-localenames-full/blob/master/main/en/territories.json | [optional] 

## Example

```python
from openapi_client.models.google_cloud_identitytoolkit_admin_v2_allowlist_only import GoogleCloudIdentitytoolkitAdminV2AllowlistOnly

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudIdentitytoolkitAdminV2AllowlistOnly from a JSON string
google_cloud_identitytoolkit_admin_v2_allowlist_only_instance = GoogleCloudIdentitytoolkitAdminV2AllowlistOnly.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudIdentitytoolkitAdminV2AllowlistOnly.to_json())

# convert the object into a dict
google_cloud_identitytoolkit_admin_v2_allowlist_only_dict = google_cloud_identitytoolkit_admin_v2_allowlist_only_instance.to_dict()
# create an instance of GoogleCloudIdentitytoolkitAdminV2AllowlistOnly from a dict
google_cloud_identitytoolkit_admin_v2_allowlist_only_from_dict = GoogleCloudIdentitytoolkitAdminV2AllowlistOnly.from_dict(google_cloud_identitytoolkit_admin_v2_allowlist_only_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


