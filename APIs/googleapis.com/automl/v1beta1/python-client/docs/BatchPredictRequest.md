# BatchPredictRequest

Request message for PredictionService.BatchPredict.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**input_config** | [**BatchPredictInputConfig**](BatchPredictInputConfig.md) |  | [optional] 
**output_config** | [**BatchPredictOutputConfig**](BatchPredictOutputConfig.md) |  | [optional] 
**params** | **Dict[str, str]** | Required. Additional domain-specific parameters for the predictions, any string must be up to 25000 characters long. * For Text Classification: &#x60;score_threshold&#x60; - (float) A value from 0.0 to 1.0. When the model makes predictions for a text snippet, it will only produce results that have at least this confidence score. The default is 0.5. * For Image Classification: &#x60;score_threshold&#x60; - (float) A value from 0.0 to 1.0. When the model makes predictions for an image, it will only produce results that have at least this confidence score. The default is 0.5. * For Image Object Detection: &#x60;score_threshold&#x60; - (float) When Model detects objects on the image, it will only produce bounding boxes which have at least this confidence score. Value in 0 to 1 range, default is 0.5. &#x60;max_bounding_box_count&#x60; - (int64) No more than this number of bounding boxes will be produced per image. Default is 100, the requested value may be limited by server. * For Video Classification : &#x60;score_threshold&#x60; - (float) A value from 0.0 to 1.0. When the model makes predictions for a video, it will only produce results that have at least this confidence score. The default is 0.5. &#x60;segment_classification&#x60; - (boolean) Set to true to request segment-level classification. AutoML Video Intelligence returns labels and their confidence scores for the entire segment of the video that user specified in the request configuration. The default is \&quot;true\&quot;. &#x60;shot_classification&#x60; - (boolean) Set to true to request shot-level classification. AutoML Video Intelligence determines the boundaries for each camera shot in the entire segment of the video that user specified in the request configuration. AutoML Video Intelligence then returns labels and their confidence scores for each detected shot, along with the start and end time of the shot. WARNING: Model evaluation is not done for this classification type, the quality of it depends on training data, but there are no metrics provided to describe that quality. The default is \&quot;false\&quot;. &#x60;1s_interval_classification&#x60; - (boolean) Set to true to request classification for a video at one-second intervals. AutoML Video Intelligence returns labels and their confidence scores for each second of the entire segment of the video that user specified in the request configuration. WARNING: Model evaluation is not done for this classification type, the quality of it depends on training data, but there are no metrics provided to describe that quality. The default is \&quot;false\&quot;. * For Tables: feature_importance - (boolean) Whether feature importance should be populated in the returned TablesAnnotations. The default is false. * For Video Object Tracking: &#x60;score_threshold&#x60; - (float) When Model detects objects on video frames, it will only produce bounding boxes which have at least this confidence score. Value in 0 to 1 range, default is 0.5. &#x60;max_bounding_box_count&#x60; - (int64) No more than this number of bounding boxes will be returned per frame. Default is 100, the requested value may be limited by server. &#x60;min_bounding_box_size&#x60; - (float) Only bounding boxes with shortest edge at least that long as a relative value of video frame size will be returned. Value in 0 to 1 range. Default is 0. | [optional] 

## Example

```python
from openapi_client.models.batch_predict_request import BatchPredictRequest

# TODO update the JSON string below
json = "{}"
# create an instance of BatchPredictRequest from a JSON string
batch_predict_request_instance = BatchPredictRequest.from_json(json)
# print the JSON string representation of the object
print(BatchPredictRequest.to_json())

# convert the object into a dict
batch_predict_request_dict = batch_predict_request_instance.to_dict()
# create an instance of BatchPredictRequest from a dict
batch_predict_request_from_dict = BatchPredictRequest.from_dict(batch_predict_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


