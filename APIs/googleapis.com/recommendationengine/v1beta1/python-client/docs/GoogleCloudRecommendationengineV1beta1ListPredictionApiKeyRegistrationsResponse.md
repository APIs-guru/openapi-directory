# GoogleCloudRecommendationengineV1beta1ListPredictionApiKeyRegistrationsResponse

Response message for the `ListPredictionApiKeyRegistrations`.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_page_token** | **str** | If empty, the list is complete. If nonempty, pass the token to the next request&#39;s &#x60;ListPredictionApiKeysRegistrationsRequest.pageToken&#x60;. | [optional] 
**prediction_api_key_registrations** | [**List[GoogleCloudRecommendationengineV1beta1PredictionApiKeyRegistration]**](GoogleCloudRecommendationengineV1beta1PredictionApiKeyRegistration.md) | The list of registered API keys. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_recommendationengine_v1beta1_list_prediction_api_key_registrations_response import GoogleCloudRecommendationengineV1beta1ListPredictionApiKeyRegistrationsResponse

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudRecommendationengineV1beta1ListPredictionApiKeyRegistrationsResponse from a JSON string
google_cloud_recommendationengine_v1beta1_list_prediction_api_key_registrations_response_instance = GoogleCloudRecommendationengineV1beta1ListPredictionApiKeyRegistrationsResponse.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudRecommendationengineV1beta1ListPredictionApiKeyRegistrationsResponse.to_json())

# convert the object into a dict
google_cloud_recommendationengine_v1beta1_list_prediction_api_key_registrations_response_dict = google_cloud_recommendationengine_v1beta1_list_prediction_api_key_registrations_response_instance.to_dict()
# create an instance of GoogleCloudRecommendationengineV1beta1ListPredictionApiKeyRegistrationsResponse from a dict
google_cloud_recommendationengine_v1beta1_list_prediction_api_key_registrations_response_from_dict = GoogleCloudRecommendationengineV1beta1ListPredictionApiKeyRegistrationsResponse.from_dict(google_cloud_recommendationengine_v1beta1_list_prediction_api_key_registrations_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


