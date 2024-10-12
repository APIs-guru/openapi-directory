# GooglePrivacyDlpV2TableDataProfile

The profile for a scanned table.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**config_snapshot** | [**GooglePrivacyDlpV2DataProfileConfigSnapshot**](GooglePrivacyDlpV2DataProfileConfigSnapshot.md) |  | [optional] 
**create_time** | **str** | The time at which the table was created. | [optional] 
**data_risk_level** | [**GooglePrivacyDlpV2DataRiskLevel**](GooglePrivacyDlpV2DataRiskLevel.md) |  | [optional] 
**data_source_type** | [**GooglePrivacyDlpV2DataSourceType**](GooglePrivacyDlpV2DataSourceType.md) |  | [optional] 
**dataset_id** | **str** | If the resource is BigQuery, the dataset ID. | [optional] 
**dataset_location** | **str** | If supported, the location where the dataset&#39;s data is stored. See https://cloud.google.com/bigquery/docs/locations for supported locations. | [optional] 
**dataset_project_id** | **str** | The Google Cloud project ID that owns the resource. | [optional] 
**encryption_status** | **str** | How the table is encrypted. | [optional] 
**expiration_time** | **str** | Optional. The time when this table expires. | [optional] 
**failed_column_count** | **str** | The number of columns skipped in the table because of an error. | [optional] 
**full_resource** | **str** | The resource name of the resource profiled. https://cloud.google.com/apis/design/resource_names#full_resource_name | [optional] 
**last_modified_time** | **str** | The time when this table was last modified | [optional] 
**name** | **str** | The name of the profile. | [optional] 
**other_info_types** | [**List[GooglePrivacyDlpV2OtherInfoTypeSummary]**](GooglePrivacyDlpV2OtherInfoTypeSummary.md) | Other infoTypes found in this table&#39;s data. | [optional] 
**predicted_info_types** | [**List[GooglePrivacyDlpV2InfoTypeSummary]**](GooglePrivacyDlpV2InfoTypeSummary.md) | The infoTypes predicted from this table&#39;s data. | [optional] 
**profile_last_generated** | **str** | The last time the profile was generated. | [optional] 
**profile_status** | [**GooglePrivacyDlpV2ProfileStatus**](GooglePrivacyDlpV2ProfileStatus.md) |  | [optional] 
**project_data_profile** | **str** | The resource name to the project data profile for this table. | [optional] 
**resource_labels** | **Dict[str, str]** | The labels applied to the resource at the time the profile was generated. | [optional] 
**resource_visibility** | **str** | How broadly a resource has been shared. | [optional] 
**row_count** | **str** | Number of rows in the table when the profile was generated. This will not be populated for BigLake tables. | [optional] 
**scanned_column_count** | **str** | The number of columns profiled in the table. | [optional] 
**sensitivity_score** | [**GooglePrivacyDlpV2SensitivityScore**](GooglePrivacyDlpV2SensitivityScore.md) |  | [optional] 
**state** | **str** | State of a profile. | [optional] 
**table_id** | **str** | If the resource is BigQuery, the BigQuery table ID. | [optional] 
**table_size_bytes** | **str** | The size of the table when the profile was generated. | [optional] 

## Example

```python
from openapi_client.models.google_privacy_dlp_v2_table_data_profile import GooglePrivacyDlpV2TableDataProfile

# TODO update the JSON string below
json = "{}"
# create an instance of GooglePrivacyDlpV2TableDataProfile from a JSON string
google_privacy_dlp_v2_table_data_profile_instance = GooglePrivacyDlpV2TableDataProfile.from_json(json)
# print the JSON string representation of the object
print(GooglePrivacyDlpV2TableDataProfile.to_json())

# convert the object into a dict
google_privacy_dlp_v2_table_data_profile_dict = google_privacy_dlp_v2_table_data_profile_instance.to_dict()
# create an instance of GooglePrivacyDlpV2TableDataProfile from a dict
google_privacy_dlp_v2_table_data_profile_from_dict = GooglePrivacyDlpV2TableDataProfile.from_dict(google_privacy_dlp_v2_table_data_profile_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


