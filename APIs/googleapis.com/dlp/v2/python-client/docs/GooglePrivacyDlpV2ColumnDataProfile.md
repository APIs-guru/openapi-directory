# GooglePrivacyDlpV2ColumnDataProfile

The profile for a scanned column within a table.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**column** | **str** | The name of the column. | [optional] 
**column_info_type** | [**GooglePrivacyDlpV2InfoTypeSummary**](GooglePrivacyDlpV2InfoTypeSummary.md) |  | [optional] 
**column_type** | **str** | The data type of a given column. | [optional] 
**data_risk_level** | [**GooglePrivacyDlpV2DataRiskLevel**](GooglePrivacyDlpV2DataRiskLevel.md) |  | [optional] 
**dataset_id** | **str** | The BigQuery dataset ID. | [optional] 
**dataset_location** | **str** | The BigQuery location where the dataset&#39;s data is stored. See https://cloud.google.com/bigquery/docs/locations for supported locations. | [optional] 
**dataset_project_id** | **str** | The Google Cloud project ID that owns the profiled resource. | [optional] 
**estimated_null_percentage** | **str** | Approximate percentage of entries being null in the column. | [optional] 
**estimated_uniqueness_score** | **str** | Approximate uniqueness of the column. | [optional] 
**free_text_score** | **float** | The likelihood that this column contains free-form text. A value close to 1 may indicate the column is likely to contain free-form or natural language text. Range in 0-1. | [optional] 
**name** | **str** | The name of the profile. | [optional] 
**other_matches** | [**List[GooglePrivacyDlpV2OtherInfoTypeSummary]**](GooglePrivacyDlpV2OtherInfoTypeSummary.md) | Other types found within this column. List will be unordered. | [optional] 
**policy_state** | **str** | Indicates if a policy tag has been applied to the column. | [optional] 
**profile_last_generated** | **str** | The last time the profile was generated. | [optional] 
**profile_status** | [**GooglePrivacyDlpV2ProfileStatus**](GooglePrivacyDlpV2ProfileStatus.md) |  | [optional] 
**sensitivity_score** | [**GooglePrivacyDlpV2SensitivityScore**](GooglePrivacyDlpV2SensitivityScore.md) |  | [optional] 
**state** | **str** | State of a profile. | [optional] 
**table_data_profile** | **str** | The resource name of the table data profile. | [optional] 
**table_full_resource** | **str** | The resource name of the resource this column is within. | [optional] 
**table_id** | **str** | The BigQuery table ID. | [optional] 

## Example

```python
from openapi_client.models.google_privacy_dlp_v2_column_data_profile import GooglePrivacyDlpV2ColumnDataProfile

# TODO update the JSON string below
json = "{}"
# create an instance of GooglePrivacyDlpV2ColumnDataProfile from a JSON string
google_privacy_dlp_v2_column_data_profile_instance = GooglePrivacyDlpV2ColumnDataProfile.from_json(json)
# print the JSON string representation of the object
print(GooglePrivacyDlpV2ColumnDataProfile.to_json())

# convert the object into a dict
google_privacy_dlp_v2_column_data_profile_dict = google_privacy_dlp_v2_column_data_profile_instance.to_dict()
# create an instance of GooglePrivacyDlpV2ColumnDataProfile from a dict
google_privacy_dlp_v2_column_data_profile_from_dict = GooglePrivacyDlpV2ColumnDataProfile.from_dict(google_privacy_dlp_v2_column_data_profile_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


