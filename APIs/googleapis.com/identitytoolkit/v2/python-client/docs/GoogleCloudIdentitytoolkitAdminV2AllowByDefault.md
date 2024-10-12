# GoogleCloudIdentitytoolkitAdminV2AllowByDefault

Defines a policy of allowing every region by default and adding disallowed regions to a disallow list.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**disallowed_regions** | **List[str]** | Two letter unicode region codes to disallow as defined by https://cldr.unicode.org/ The full list of these region codes is here: https://github.com/unicode-cldr/cldr-localenames-full/blob/master/main/en/territories.json | [optional] 

## Example

```python
from openapi_client.models.google_cloud_identitytoolkit_admin_v2_allow_by_default import GoogleCloudIdentitytoolkitAdminV2AllowByDefault

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudIdentitytoolkitAdminV2AllowByDefault from a JSON string
google_cloud_identitytoolkit_admin_v2_allow_by_default_instance = GoogleCloudIdentitytoolkitAdminV2AllowByDefault.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudIdentitytoolkitAdminV2AllowByDefault.to_json())

# convert the object into a dict
google_cloud_identitytoolkit_admin_v2_allow_by_default_dict = google_cloud_identitytoolkit_admin_v2_allow_by_default_instance.to_dict()
# create an instance of GoogleCloudIdentitytoolkitAdminV2AllowByDefault from a dict
google_cloud_identitytoolkit_admin_v2_allow_by_default_from_dict = GoogleCloudIdentitytoolkitAdminV2AllowByDefault.from_dict(google_cloud_identitytoolkit_admin_v2_allow_by_default_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


