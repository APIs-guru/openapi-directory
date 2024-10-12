# VideoClassificationAnnotation

Contains annotation details specific to video classification.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**classification_annotation** | [**ClassificationAnnotation**](ClassificationAnnotation.md) |  | [optional] 
**time_segment** | [**TimeSegment**](TimeSegment.md) |  | [optional] 
**type** | **str** | Output only. Expresses the type of video classification. Possible values: * &#x60;segment&#x60; - Classification done on a specified by user time segment of a video. AnnotationSpec is answered to be present in that time segment, if it is present in any part of it. The video ML model evaluations are done only for this type of classification. * &#x60;shot&#x60;- Shot-level classification. AutoML Video Intelligence determines the boundaries for each camera shot in the entire segment of the video that user specified in the request configuration. AutoML Video Intelligence then returns labels and their confidence scores for each detected shot, along with the start and end time of the shot. WARNING: Model evaluation is not done for this classification type, the quality of it depends on training data, but there are no metrics provided to describe that quality. * &#x60;1s_interval&#x60; - AutoML Video Intelligence returns labels and their confidence scores for each second of the entire segment of the video that user specified in the request configuration. WARNING: Model evaluation is not done for this classification type, the quality of it depends on training data, but there are no metrics provided to describe that quality. | [optional] 

## Example

```python
from openapi_client.models.video_classification_annotation import VideoClassificationAnnotation

# TODO update the JSON string below
json = "{}"
# create an instance of VideoClassificationAnnotation from a JSON string
video_classification_annotation_instance = VideoClassificationAnnotation.from_json(json)
# print the JSON string representation of the object
print(VideoClassificationAnnotation.to_json())

# convert the object into a dict
video_classification_annotation_dict = video_classification_annotation_instance.to_dict()
# create an instance of VideoClassificationAnnotation from a dict
video_classification_annotation_from_dict = VideoClassificationAnnotation.from_dict(video_classification_annotation_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


