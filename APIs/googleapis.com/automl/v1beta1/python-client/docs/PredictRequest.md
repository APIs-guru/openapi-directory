# PredictRequest

Request message for PredictionService.Predict.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**params** | **Dict[str, str]** | Additional domain-specific parameters, any string must be up to 25000 characters long. * For Image Classification: &#x60;score_threshold&#x60; - (float) A value from 0.0 to 1.0. When the model makes predictions for an image, it will only produce results that have at least this confidence score. The default is 0.5. * For Image Object Detection: &#x60;score_threshold&#x60; - (float) When Model detects objects on the image, it will only produce bounding boxes which have at least this confidence score. Value in 0 to 1 range, default is 0.5. &#x60;max_bounding_box_count&#x60; - (int64) No more than this number of bounding boxes will be returned in the response. Default is 100, the requested value may be limited by server. * For Tables: feature_importance - (boolean) Whether feature importance should be populated in the returned TablesAnnotation. The default is false. | [optional] 
**payload** | [**ExamplePayload**](ExamplePayload.md) |  | [optional] 

## Example

```python
from openapi_client.models.predict_request import PredictRequest

# TODO update the JSON string below
json = "{}"
# create an instance of PredictRequest from a JSON string
predict_request_instance = PredictRequest.from_json(json)
# print the JSON string representation of the object
print(PredictRequest.to_json())

# convert the object into a dict
predict_request_dict = predict_request_instance.to_dict()
# create an instance of PredictRequest from a dict
predict_request_from_dict = PredictRequest.from_dict(predict_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


