# GoogleCloudAiplatformV1DirectRawPredictResponse

Response message for PredictionService.DirectRawPredict.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**output** | **bytearray** | The prediction output. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_aiplatform_v1_direct_raw_predict_response import GoogleCloudAiplatformV1DirectRawPredictResponse

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudAiplatformV1DirectRawPredictResponse from a JSON string
google_cloud_aiplatform_v1_direct_raw_predict_response_instance = GoogleCloudAiplatformV1DirectRawPredictResponse.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudAiplatformV1DirectRawPredictResponse.to_json())

# convert the object into a dict
google_cloud_aiplatform_v1_direct_raw_predict_response_dict = google_cloud_aiplatform_v1_direct_raw_predict_response_instance.to_dict()
# create an instance of GoogleCloudAiplatformV1DirectRawPredictResponse from a dict
google_cloud_aiplatform_v1_direct_raw_predict_response_from_dict = GoogleCloudAiplatformV1DirectRawPredictResponse.from_dict(google_cloud_aiplatform_v1_direct_raw_predict_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


