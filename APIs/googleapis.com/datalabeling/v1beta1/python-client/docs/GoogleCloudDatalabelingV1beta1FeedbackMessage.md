# GoogleCloudDatalabelingV1beta1FeedbackMessage

A feedback message inside a feedback thread.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**body** | **str** | String content of the feedback. Maximum of 10000 characters. | [optional] 
**create_time** | **str** | Create time. | [optional] 
**image** | **bytearray** | The image storing this feedback if the feedback is an image representing operator&#39;s comments. | [optional] 
**name** | **str** | Name of the feedback message in a feedback thread. Format: &#39;project/{project_id}/datasets/{dataset_id}/annotatedDatasets/{annotated_dataset_id}/feedbackThreads/{feedback_thread_id}/feedbackMessage/{feedback_message_id}&#39; | [optional] 
**operator_feedback_metadata** | **object** | Metadata describing the feedback from the operator. | [optional] 
**requester_feedback_metadata** | **object** | Metadata describing the feedback from the labeling task requester. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_datalabeling_v1beta1_feedback_message import GoogleCloudDatalabelingV1beta1FeedbackMessage

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudDatalabelingV1beta1FeedbackMessage from a JSON string
google_cloud_datalabeling_v1beta1_feedback_message_instance = GoogleCloudDatalabelingV1beta1FeedbackMessage.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudDatalabelingV1beta1FeedbackMessage.to_json())

# convert the object into a dict
google_cloud_datalabeling_v1beta1_feedback_message_dict = google_cloud_datalabeling_v1beta1_feedback_message_instance.to_dict()
# create an instance of GoogleCloudDatalabelingV1beta1FeedbackMessage from a dict
google_cloud_datalabeling_v1beta1_feedback_message_from_dict = GoogleCloudDatalabelingV1beta1FeedbackMessage.from_dict(google_cloud_datalabeling_v1beta1_feedback_message_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


