# GoogleCloudDatalabelingV1beta1FeedbackThreadMetadata


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**create_time** | **str** | When the thread is created | [optional] 
**last_update_time** | **str** | When the thread is last updated. | [optional] 
**status** | **str** |  | [optional] 
**thumbnail** | **bytearray** | An image thumbnail of this thread. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_datalabeling_v1beta1_feedback_thread_metadata import GoogleCloudDatalabelingV1beta1FeedbackThreadMetadata

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudDatalabelingV1beta1FeedbackThreadMetadata from a JSON string
google_cloud_datalabeling_v1beta1_feedback_thread_metadata_instance = GoogleCloudDatalabelingV1beta1FeedbackThreadMetadata.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudDatalabelingV1beta1FeedbackThreadMetadata.to_json())

# convert the object into a dict
google_cloud_datalabeling_v1beta1_feedback_thread_metadata_dict = google_cloud_datalabeling_v1beta1_feedback_thread_metadata_instance.to_dict()
# create an instance of GoogleCloudDatalabelingV1beta1FeedbackThreadMetadata from a dict
google_cloud_datalabeling_v1beta1_feedback_thread_metadata_from_dict = GoogleCloudDatalabelingV1beta1FeedbackThreadMetadata.from_dict(google_cloud_datalabeling_v1beta1_feedback_thread_metadata_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


