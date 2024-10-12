# GoogleCloudAiplatformV1beta1SchemaVideoDataItem

Payload of Video DataItem.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**gcs_uri** | **str** | Required. Google Cloud Storage URI points to the original video in user&#39;s bucket. The video is up to 50 GB in size and up to 3 hour in duration. | [optional] 
**mime_type** | **str** | Output only. The mime type of the content of the video. Only the videos in below listed mime types are supported. Supported mime_type: - video/mp4 - video/avi - video/quicktime | [optional] [readonly] 

## Example

```python
from openapi_client.models.google_cloud_aiplatform_v1beta1_schema_video_data_item import GoogleCloudAiplatformV1beta1SchemaVideoDataItem

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudAiplatformV1beta1SchemaVideoDataItem from a JSON string
google_cloud_aiplatform_v1beta1_schema_video_data_item_instance = GoogleCloudAiplatformV1beta1SchemaVideoDataItem.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudAiplatformV1beta1SchemaVideoDataItem.to_json())

# convert the object into a dict
google_cloud_aiplatform_v1beta1_schema_video_data_item_dict = google_cloud_aiplatform_v1beta1_schema_video_data_item_instance.to_dict()
# create an instance of GoogleCloudAiplatformV1beta1SchemaVideoDataItem from a dict
google_cloud_aiplatform_v1beta1_schema_video_data_item_from_dict = GoogleCloudAiplatformV1beta1SchemaVideoDataItem.from_dict(google_cloud_aiplatform_v1beta1_schema_video_data_item_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


