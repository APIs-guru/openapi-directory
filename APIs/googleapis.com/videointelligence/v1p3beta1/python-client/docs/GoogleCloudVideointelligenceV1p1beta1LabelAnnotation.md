# GoogleCloudVideointelligenceV1p1beta1LabelAnnotation

Label annotation.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**category_entities** | [**List[GoogleCloudVideointelligenceV1p1beta1Entity]**](GoogleCloudVideointelligenceV1p1beta1Entity.md) | Common categories for the detected entity. For example, when the label is &#x60;Terrier&#x60;, the category is likely &#x60;dog&#x60;. And in some cases there might be more than one categories e.g., &#x60;Terrier&#x60; could also be a &#x60;pet&#x60;. | [optional] 
**entity** | [**GoogleCloudVideointelligenceV1p1beta1Entity**](GoogleCloudVideointelligenceV1p1beta1Entity.md) |  | [optional] 
**frames** | [**List[GoogleCloudVideointelligenceV1p1beta1LabelFrame]**](GoogleCloudVideointelligenceV1p1beta1LabelFrame.md) | All video frames where a label was detected. | [optional] 
**segments** | [**List[GoogleCloudVideointelligenceV1p1beta1LabelSegment]**](GoogleCloudVideointelligenceV1p1beta1LabelSegment.md) | All video segments where a label was detected. | [optional] 
**version** | **str** | Feature version. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_videointelligence_v1p1beta1_label_annotation import GoogleCloudVideointelligenceV1p1beta1LabelAnnotation

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudVideointelligenceV1p1beta1LabelAnnotation from a JSON string
google_cloud_videointelligence_v1p1beta1_label_annotation_instance = GoogleCloudVideointelligenceV1p1beta1LabelAnnotation.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudVideointelligenceV1p1beta1LabelAnnotation.to_json())

# convert the object into a dict
google_cloud_videointelligence_v1p1beta1_label_annotation_dict = google_cloud_videointelligence_v1p1beta1_label_annotation_instance.to_dict()
# create an instance of GoogleCloudVideointelligenceV1p1beta1LabelAnnotation from a dict
google_cloud_videointelligence_v1p1beta1_label_annotation_from_dict = GoogleCloudVideointelligenceV1p1beta1LabelAnnotation.from_dict(google_cloud_videointelligence_v1p1beta1_label_annotation_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


