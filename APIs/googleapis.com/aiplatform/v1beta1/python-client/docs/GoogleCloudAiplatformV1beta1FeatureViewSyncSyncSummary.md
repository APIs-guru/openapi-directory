# GoogleCloudAiplatformV1beta1FeatureViewSyncSyncSummary

Summary from the Sync job. For continuous syncs, the summary is updated periodically. For batch syncs, it gets updated on completion of the sync.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**row_synced** | **str** | Output only. Total number of rows synced. | [optional] [readonly] 
**total_slot** | **str** | Output only. BigQuery slot milliseconds consumed for the sync job. | [optional] [readonly] 

## Example

```python
from openapi_client.models.google_cloud_aiplatform_v1beta1_feature_view_sync_sync_summary import GoogleCloudAiplatformV1beta1FeatureViewSyncSyncSummary

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudAiplatformV1beta1FeatureViewSyncSyncSummary from a JSON string
google_cloud_aiplatform_v1beta1_feature_view_sync_sync_summary_instance = GoogleCloudAiplatformV1beta1FeatureViewSyncSyncSummary.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudAiplatformV1beta1FeatureViewSyncSyncSummary.to_json())

# convert the object into a dict
google_cloud_aiplatform_v1beta1_feature_view_sync_sync_summary_dict = google_cloud_aiplatform_v1beta1_feature_view_sync_sync_summary_instance.to_dict()
# create an instance of GoogleCloudAiplatformV1beta1FeatureViewSyncSyncSummary from a dict
google_cloud_aiplatform_v1beta1_feature_view_sync_sync_summary_from_dict = GoogleCloudAiplatformV1beta1FeatureViewSyncSyncSummary.from_dict(google_cloud_aiplatform_v1beta1_feature_view_sync_sync_summary_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


