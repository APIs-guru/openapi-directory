# GoogleCloudRecommendationengineV1beta1PredictResponse

Response message for predict method.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**dry_run** | **bool** | True if the dryRun property was set in the request. | [optional] 
**items_missing_in_catalog** | **List[str]** | IDs of items in the request that were missing from the catalog. | [optional] 
**metadata** | **Dict[str, object]** | Additional domain specific prediction response metadata. | [optional] 
**next_page_token** | **str** | If empty, the list is complete. If nonempty, the token to pass to the next request&#39;s PredictRequest.page_token. | [optional] 
**recommendation_token** | **str** | A unique recommendation token. This should be included in the user event logs resulting from this recommendation, which enables accurate attribution of recommendation model performance. | [optional] 
**results** | [**List[GoogleCloudRecommendationengineV1beta1PredictResponsePredictionResult]**](GoogleCloudRecommendationengineV1beta1PredictResponsePredictionResult.md) | A list of recommended items. The order represents the ranking (from the most relevant item to the least). | [optional] 

## Example

```python
from openapi_client.models.google_cloud_recommendationengine_v1beta1_predict_response import GoogleCloudRecommendationengineV1beta1PredictResponse

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudRecommendationengineV1beta1PredictResponse from a JSON string
google_cloud_recommendationengine_v1beta1_predict_response_instance = GoogleCloudRecommendationengineV1beta1PredictResponse.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudRecommendationengineV1beta1PredictResponse.to_json())

# convert the object into a dict
google_cloud_recommendationengine_v1beta1_predict_response_dict = google_cloud_recommendationengine_v1beta1_predict_response_instance.to_dict()
# create an instance of GoogleCloudRecommendationengineV1beta1PredictResponse from a dict
google_cloud_recommendationengine_v1beta1_predict_response_from_dict = GoogleCloudRecommendationengineV1beta1PredictResponse.from_dict(google_cloud_recommendationengine_v1beta1_predict_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


