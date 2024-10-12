# GoogleCloudDatalabelingV1beta1LabelTextRequest

Request message for LabelText.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**basic_config** | [**GoogleCloudDatalabelingV1beta1HumanAnnotationConfig**](GoogleCloudDatalabelingV1beta1HumanAnnotationConfig.md) |  | [optional] 
**feature** | **str** | Required. The type of text labeling task. | [optional] 
**text_classification_config** | [**GoogleCloudDatalabelingV1beta1TextClassificationConfig**](GoogleCloudDatalabelingV1beta1TextClassificationConfig.md) |  | [optional] 
**text_entity_extraction_config** | [**GoogleCloudDatalabelingV1beta1TextEntityExtractionConfig**](GoogleCloudDatalabelingV1beta1TextEntityExtractionConfig.md) |  | [optional] 

## Example

```python
from openapi_client.models.google_cloud_datalabeling_v1beta1_label_text_request import GoogleCloudDatalabelingV1beta1LabelTextRequest

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudDatalabelingV1beta1LabelTextRequest from a JSON string
google_cloud_datalabeling_v1beta1_label_text_request_instance = GoogleCloudDatalabelingV1beta1LabelTextRequest.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudDatalabelingV1beta1LabelTextRequest.to_json())

# convert the object into a dict
google_cloud_datalabeling_v1beta1_label_text_request_dict = google_cloud_datalabeling_v1beta1_label_text_request_instance.to_dict()
# create an instance of GoogleCloudDatalabelingV1beta1LabelTextRequest from a dict
google_cloud_datalabeling_v1beta1_label_text_request_from_dict = GoogleCloudDatalabelingV1beta1LabelTextRequest.from_dict(google_cloud_datalabeling_v1beta1_label_text_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


