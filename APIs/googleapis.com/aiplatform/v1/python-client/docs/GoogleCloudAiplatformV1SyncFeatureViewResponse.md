# GoogleCloudAiplatformV1SyncFeatureViewResponse

Respose message for FeatureOnlineStoreAdminService.SyncFeatureView.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**feature_view_sync** | **str** | Format: &#x60;projects/{project}/locations/{location}/featureOnlineStores/{feature_online_store}/featureViews/{feature_view}/featureViewSyncs/{feature_view_sync}&#x60; | [optional] 

## Example

```python
from openapi_client.models.google_cloud_aiplatform_v1_sync_feature_view_response import GoogleCloudAiplatformV1SyncFeatureViewResponse

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudAiplatformV1SyncFeatureViewResponse from a JSON string
google_cloud_aiplatform_v1_sync_feature_view_response_instance = GoogleCloudAiplatformV1SyncFeatureViewResponse.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudAiplatformV1SyncFeatureViewResponse.to_json())

# convert the object into a dict
google_cloud_aiplatform_v1_sync_feature_view_response_dict = google_cloud_aiplatform_v1_sync_feature_view_response_instance.to_dict()
# create an instance of GoogleCloudAiplatformV1SyncFeatureViewResponse from a dict
google_cloud_aiplatform_v1_sync_feature_view_response_from_dict = GoogleCloudAiplatformV1SyncFeatureViewResponse.from_dict(google_cloud_aiplatform_v1_sync_feature_view_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


