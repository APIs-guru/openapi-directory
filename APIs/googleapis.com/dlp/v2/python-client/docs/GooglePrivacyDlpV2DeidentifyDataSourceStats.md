# GooglePrivacyDlpV2DeidentifyDataSourceStats

Summary of what was modified during a transformation.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**transformation_count** | **str** | Number of successfully applied transformations. | [optional] 
**transformation_error_count** | **str** | Number of errors encountered while trying to apply transformations. | [optional] 
**transformed_bytes** | **str** | Total size in bytes that were transformed in some way. | [optional] 

## Example

```python
from openapi_client.models.google_privacy_dlp_v2_deidentify_data_source_stats import GooglePrivacyDlpV2DeidentifyDataSourceStats

# TODO update the JSON string below
json = "{}"
# create an instance of GooglePrivacyDlpV2DeidentifyDataSourceStats from a JSON string
google_privacy_dlp_v2_deidentify_data_source_stats_instance = GooglePrivacyDlpV2DeidentifyDataSourceStats.from_json(json)
# print the JSON string representation of the object
print(GooglePrivacyDlpV2DeidentifyDataSourceStats.to_json())

# convert the object into a dict
google_privacy_dlp_v2_deidentify_data_source_stats_dict = google_privacy_dlp_v2_deidentify_data_source_stats_instance.to_dict()
# create an instance of GooglePrivacyDlpV2DeidentifyDataSourceStats from a dict
google_privacy_dlp_v2_deidentify_data_source_stats_from_dict = GooglePrivacyDlpV2DeidentifyDataSourceStats.from_dict(google_privacy_dlp_v2_deidentify_data_source_stats_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


