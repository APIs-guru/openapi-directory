# GoogleCloudDatalabelingV1beta1Example

An Example is a piece of data and its annotation. For example, an image with label \"house\".

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**annotations** | [**List[GoogleCloudDatalabelingV1beta1Annotation]**](GoogleCloudDatalabelingV1beta1Annotation.md) | Output only. Annotations for the piece of data in Example. One piece of data can have multiple annotations. | [optional] 
**image_payload** | [**GoogleCloudDatalabelingV1beta1ImagePayload**](GoogleCloudDatalabelingV1beta1ImagePayload.md) |  | [optional] 
**name** | **str** | Output only. Name of the example, in format of: projects/{project_id}/datasets/{dataset_id}/annotatedDatasets/ {annotated_dataset_id}/examples/{example_id} | [optional] 
**text_payload** | [**GoogleCloudDatalabelingV1beta1TextPayload**](GoogleCloudDatalabelingV1beta1TextPayload.md) |  | [optional] 
**video_payload** | [**GoogleCloudDatalabelingV1beta1VideoPayload**](GoogleCloudDatalabelingV1beta1VideoPayload.md) |  | [optional] 

## Example

```python
from openapi_client.models.google_cloud_datalabeling_v1beta1_example import GoogleCloudDatalabelingV1beta1Example

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudDatalabelingV1beta1Example from a JSON string
google_cloud_datalabeling_v1beta1_example_instance = GoogleCloudDatalabelingV1beta1Example.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudDatalabelingV1beta1Example.to_json())

# convert the object into a dict
google_cloud_datalabeling_v1beta1_example_dict = google_cloud_datalabeling_v1beta1_example_instance.to_dict()
# create an instance of GoogleCloudDatalabelingV1beta1Example from a dict
google_cloud_datalabeling_v1beta1_example_from_dict = GoogleCloudDatalabelingV1beta1Example.from_dict(google_cloud_datalabeling_v1beta1_example_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


