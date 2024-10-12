# GooglePrivacyDlpV2DataSourceType

Message used to identify the type of resource being profiled.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data_source** | **str** | Output only. An identifying string to the type of resource being profiled. Current values: google/bigquery/table, google/project | [optional] [readonly] 

## Example

```python
from openapi_client.models.google_privacy_dlp_v2_data_source_type import GooglePrivacyDlpV2DataSourceType

# TODO update the JSON string below
json = "{}"
# create an instance of GooglePrivacyDlpV2DataSourceType from a JSON string
google_privacy_dlp_v2_data_source_type_instance = GooglePrivacyDlpV2DataSourceType.from_json(json)
# print the JSON string representation of the object
print(GooglePrivacyDlpV2DataSourceType.to_json())

# convert the object into a dict
google_privacy_dlp_v2_data_source_type_dict = google_privacy_dlp_v2_data_source_type_instance.to_dict()
# create an instance of GooglePrivacyDlpV2DataSourceType from a dict
google_privacy_dlp_v2_data_source_type_from_dict = GooglePrivacyDlpV2DataSourceType.from_dict(google_privacy_dlp_v2_data_source_type_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


