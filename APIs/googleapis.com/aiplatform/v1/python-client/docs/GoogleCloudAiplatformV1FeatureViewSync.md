# GoogleCloudAiplatformV1FeatureViewSync

FeatureViewSync is a representation of sync operation which copies data from data source to Feature View in Online Store.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**create_time** | **str** | Output only. Time when this FeatureViewSync is created. Creation of a FeatureViewSync means that the job is pending / waiting for sufficient resources but may not have started the actual data transfer yet. | [optional] [readonly] 
**final_status** | [**GoogleRpcStatus**](GoogleRpcStatus.md) |  | [optional] 
**name** | **str** | Identifier. Name of the FeatureViewSync. Format: &#x60;projects/{project}/locations/{location}/featureOnlineStores/{feature_online_store}/featureViews/{feature_view}/featureViewSyncs/{feature_view_sync}&#x60; | [optional] 
**run_time** | [**GoogleTypeInterval**](GoogleTypeInterval.md) |  | [optional] 
**sync_summary** | [**GoogleCloudAiplatformV1FeatureViewSyncSyncSummary**](GoogleCloudAiplatformV1FeatureViewSyncSyncSummary.md) |  | [optional] 

## Example

```python
from openapi_client.models.google_cloud_aiplatform_v1_feature_view_sync import GoogleCloudAiplatformV1FeatureViewSync

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudAiplatformV1FeatureViewSync from a JSON string
google_cloud_aiplatform_v1_feature_view_sync_instance = GoogleCloudAiplatformV1FeatureViewSync.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudAiplatformV1FeatureViewSync.to_json())

# convert the object into a dict
google_cloud_aiplatform_v1_feature_view_sync_dict = google_cloud_aiplatform_v1_feature_view_sync_instance.to_dict()
# create an instance of GoogleCloudAiplatformV1FeatureViewSync from a dict
google_cloud_aiplatform_v1_feature_view_sync_from_dict = GoogleCloudAiplatformV1FeatureViewSync.from_dict(google_cloud_aiplatform_v1_feature_view_sync_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


