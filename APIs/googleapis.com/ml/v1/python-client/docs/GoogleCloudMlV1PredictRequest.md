# GoogleCloudMlV1PredictRequest

Request for predictions to be issued against a trained model.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**http_body** | [**GoogleApiHttpBody**](GoogleApiHttpBody.md) |  | [optional] 

## Example

```python
from openapi_client.models.google_cloud_ml_v1_predict_request import GoogleCloudMlV1PredictRequest

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudMlV1PredictRequest from a JSON string
google_cloud_ml_v1_predict_request_instance = GoogleCloudMlV1PredictRequest.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudMlV1PredictRequest.to_json())

# convert the object into a dict
google_cloud_ml_v1_predict_request_dict = google_cloud_ml_v1_predict_request_instance.to_dict()
# create an instance of GoogleCloudMlV1PredictRequest from a dict
google_cloud_ml_v1_predict_request_from_dict = GoogleCloudMlV1PredictRequest.from_dict(google_cloud_ml_v1_predict_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


