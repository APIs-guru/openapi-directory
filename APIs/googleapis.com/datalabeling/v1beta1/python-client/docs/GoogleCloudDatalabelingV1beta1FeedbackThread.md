# GoogleCloudDatalabelingV1beta1FeedbackThread

A feedback thread of a certain labeling task on a certain annotated dataset.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**feedback_thread_metadata** | [**GoogleCloudDatalabelingV1beta1FeedbackThreadMetadata**](GoogleCloudDatalabelingV1beta1FeedbackThreadMetadata.md) |  | [optional] 
**name** | **str** | Name of the feedback thread. Format: &#39;project/{project_id}/datasets/{dataset_id}/annotatedDatasets/{annotated_dataset_id}/feedbackThreads/{feedback_thread_id}&#39; | [optional] 

## Example

```python
from openapi_client.models.google_cloud_datalabeling_v1beta1_feedback_thread import GoogleCloudDatalabelingV1beta1FeedbackThread

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudDatalabelingV1beta1FeedbackThread from a JSON string
google_cloud_datalabeling_v1beta1_feedback_thread_instance = GoogleCloudDatalabelingV1beta1FeedbackThread.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudDatalabelingV1beta1FeedbackThread.to_json())

# convert the object into a dict
google_cloud_datalabeling_v1beta1_feedback_thread_dict = google_cloud_datalabeling_v1beta1_feedback_thread_instance.to_dict()
# create an instance of GoogleCloudDatalabelingV1beta1FeedbackThread from a dict
google_cloud_datalabeling_v1beta1_feedback_thread_from_dict = GoogleCloudDatalabelingV1beta1FeedbackThread.from_dict(google_cloud_datalabeling_v1beta1_feedback_thread_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


