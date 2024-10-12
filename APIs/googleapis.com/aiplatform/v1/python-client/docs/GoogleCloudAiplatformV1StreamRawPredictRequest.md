# GoogleCloudAiplatformV1StreamRawPredictRequest

Request message for PredictionService.StreamRawPredict.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**http_body** | [**GoogleApiHttpBody**](GoogleApiHttpBody.md) |  | [optional] 

## Example

```python
from openapi_client.models.google_cloud_aiplatform_v1_stream_raw_predict_request import GoogleCloudAiplatformV1StreamRawPredictRequest

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudAiplatformV1StreamRawPredictRequest from a JSON string
google_cloud_aiplatform_v1_stream_raw_predict_request_instance = GoogleCloudAiplatformV1StreamRawPredictRequest.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudAiplatformV1StreamRawPredictRequest.to_json())

# convert the object into a dict
google_cloud_aiplatform_v1_stream_raw_predict_request_dict = google_cloud_aiplatform_v1_stream_raw_predict_request_instance.to_dict()
# create an instance of GoogleCloudAiplatformV1StreamRawPredictRequest from a dict
google_cloud_aiplatform_v1_stream_raw_predict_request_from_dict = GoogleCloudAiplatformV1StreamRawPredictRequest.from_dict(google_cloud_aiplatform_v1_stream_raw_predict_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


