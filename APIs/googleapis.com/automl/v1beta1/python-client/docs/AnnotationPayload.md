# AnnotationPayload

Contains annotation information that is relevant to AutoML.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**annotation_spec_id** | **str** | Output only . The resource ID of the annotation spec that this annotation pertains to. The annotation spec comes from either an ancestor dataset, or the dataset that was used to train the model in use. | [optional] 
**classification** | [**ClassificationAnnotation**](ClassificationAnnotation.md) |  | [optional] 
**display_name** | **str** | Output only. The value of display_name when the model was trained. Because this field returns a value at model training time, for different models trained using the same dataset, the returned value could be different as model owner could update the &#x60;display_name&#x60; between any two model training. | [optional] 
**image_object_detection** | [**ImageObjectDetectionAnnotation**](ImageObjectDetectionAnnotation.md) |  | [optional] 
**tables** | [**TablesAnnotation**](TablesAnnotation.md) |  | [optional] 
**text_extraction** | [**TextExtractionAnnotation**](TextExtractionAnnotation.md) |  | [optional] 
**text_sentiment** | [**TextSentimentAnnotation**](TextSentimentAnnotation.md) |  | [optional] 
**translation** | [**TranslationAnnotation**](TranslationAnnotation.md) |  | [optional] 
**video_classification** | [**VideoClassificationAnnotation**](VideoClassificationAnnotation.md) |  | [optional] 
**video_object_tracking** | [**VideoObjectTrackingAnnotation**](VideoObjectTrackingAnnotation.md) |  | [optional] 

## Example

```python
from openapi_client.models.annotation_payload import AnnotationPayload

# TODO update the JSON string below
json = "{}"
# create an instance of AnnotationPayload from a JSON string
annotation_payload_instance = AnnotationPayload.from_json(json)
# print the JSON string representation of the object
print(AnnotationPayload.to_json())

# convert the object into a dict
annotation_payload_dict = annotation_payload_instance.to_dict()
# create an instance of AnnotationPayload from a dict
annotation_payload_from_dict = AnnotationPayload.from_dict(annotation_payload_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


