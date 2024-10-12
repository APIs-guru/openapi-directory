# GoogleCloudAiplatformV1beta1DeleteFeatureValuesRequestSelectTimeRangeAndFeature

Message to select time range and feature. Values of the selected feature generated within an inclusive time range will be deleted. Using this option permanently deletes the feature values from the specified feature IDs within the specified time range. This might include data from the online storage. If you want to retain any deleted historical data in the online storage, you must re-ingest it.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**feature_selector** | [**GoogleCloudAiplatformV1beta1FeatureSelector**](GoogleCloudAiplatformV1beta1FeatureSelector.md) |  | [optional] 
**skip_online_storage_delete** | **bool** | If set, data will not be deleted from online storage. When time range is older than the data in online storage, setting this to be true will make the deletion have no impact on online serving. | [optional] 
**time_range** | [**GoogleTypeInterval**](GoogleTypeInterval.md) |  | [optional] 

## Example

```python
from openapi_client.models.google_cloud_aiplatform_v1beta1_delete_feature_values_request_select_time_range_and_feature import GoogleCloudAiplatformV1beta1DeleteFeatureValuesRequestSelectTimeRangeAndFeature

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudAiplatformV1beta1DeleteFeatureValuesRequestSelectTimeRangeAndFeature from a JSON string
google_cloud_aiplatform_v1beta1_delete_feature_values_request_select_time_range_and_feature_instance = GoogleCloudAiplatformV1beta1DeleteFeatureValuesRequestSelectTimeRangeAndFeature.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudAiplatformV1beta1DeleteFeatureValuesRequestSelectTimeRangeAndFeature.to_json())

# convert the object into a dict
google_cloud_aiplatform_v1beta1_delete_feature_values_request_select_time_range_and_feature_dict = google_cloud_aiplatform_v1beta1_delete_feature_values_request_select_time_range_and_feature_instance.to_dict()
# create an instance of GoogleCloudAiplatformV1beta1DeleteFeatureValuesRequestSelectTimeRangeAndFeature from a dict
google_cloud_aiplatform_v1beta1_delete_feature_values_request_select_time_range_and_feature_from_dict = GoogleCloudAiplatformV1beta1DeleteFeatureValuesRequestSelectTimeRangeAndFeature.from_dict(google_cloud_aiplatform_v1beta1_delete_feature_values_request_select_time_range_and_feature_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


