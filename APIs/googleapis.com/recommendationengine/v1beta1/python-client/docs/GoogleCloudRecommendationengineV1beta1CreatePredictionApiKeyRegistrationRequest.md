# GoogleCloudRecommendationengineV1beta1CreatePredictionApiKeyRegistrationRequest

Request message for the `CreatePredictionApiKeyRegistration` method.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**prediction_api_key_registration** | [**GoogleCloudRecommendationengineV1beta1PredictionApiKeyRegistration**](GoogleCloudRecommendationengineV1beta1PredictionApiKeyRegistration.md) |  | [optional] 

## Example

```python
from openapi_client.models.google_cloud_recommendationengine_v1beta1_create_prediction_api_key_registration_request import GoogleCloudRecommendationengineV1beta1CreatePredictionApiKeyRegistrationRequest

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudRecommendationengineV1beta1CreatePredictionApiKeyRegistrationRequest from a JSON string
google_cloud_recommendationengine_v1beta1_create_prediction_api_key_registration_request_instance = GoogleCloudRecommendationengineV1beta1CreatePredictionApiKeyRegistrationRequest.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudRecommendationengineV1beta1CreatePredictionApiKeyRegistrationRequest.to_json())

# convert the object into a dict
google_cloud_recommendationengine_v1beta1_create_prediction_api_key_registration_request_dict = google_cloud_recommendationengine_v1beta1_create_prediction_api_key_registration_request_instance.to_dict()
# create an instance of GoogleCloudRecommendationengineV1beta1CreatePredictionApiKeyRegistrationRequest from a dict
google_cloud_recommendationengine_v1beta1_create_prediction_api_key_registration_request_from_dict = GoogleCloudRecommendationengineV1beta1CreatePredictionApiKeyRegistrationRequest.from_dict(google_cloud_recommendationengine_v1beta1_create_prediction_api_key_registration_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


