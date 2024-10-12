# GooglePrivacyDlpV2Export

If set, the detailed data profiles will be persisted to the location of your choice whenever updated.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**profile_table** | [**GooglePrivacyDlpV2BigQueryTable**](GooglePrivacyDlpV2BigQueryTable.md) |  | [optional] 

## Example

```python
from openapi_client.models.google_privacy_dlp_v2_export import GooglePrivacyDlpV2Export

# TODO update the JSON string below
json = "{}"
# create an instance of GooglePrivacyDlpV2Export from a JSON string
google_privacy_dlp_v2_export_instance = GooglePrivacyDlpV2Export.from_json(json)
# print the JSON string representation of the object
print(GooglePrivacyDlpV2Export.to_json())

# convert the object into a dict
google_privacy_dlp_v2_export_dict = google_privacy_dlp_v2_export_instance.to_dict()
# create an instance of GooglePrivacyDlpV2Export from a dict
google_privacy_dlp_v2_export_from_dict = GooglePrivacyDlpV2Export.from_dict(google_privacy_dlp_v2_export_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


