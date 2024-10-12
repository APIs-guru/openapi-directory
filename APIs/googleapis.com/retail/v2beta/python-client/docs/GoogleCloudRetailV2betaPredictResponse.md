# GoogleCloudRetailV2betaPredictResponse

Response message for predict method.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**attribution_token** | **str** | A unique attribution token. This should be included in the UserEvent logs resulting from this recommendation, which enables accurate attribution of recommendation model performance. | [optional] 
**missing_ids** | **List[str]** | IDs of products in the request that were missing from the inventory. | [optional] 
**results** | [**List[GoogleCloudRetailV2betaPredictResponsePredictionResult]**](GoogleCloudRetailV2betaPredictResponsePredictionResult.md) | A list of recommended products. The order represents the ranking (from the most relevant product to the least). | [optional] 
**validate_only** | **bool** | True if the validateOnly property was set in the request. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_retail_v2beta_predict_response import GoogleCloudRetailV2betaPredictResponse

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudRetailV2betaPredictResponse from a JSON string
google_cloud_retail_v2beta_predict_response_instance = GoogleCloudRetailV2betaPredictResponse.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudRetailV2betaPredictResponse.to_json())

# convert the object into a dict
google_cloud_retail_v2beta_predict_response_dict = google_cloud_retail_v2beta_predict_response_instance.to_dict()
# create an instance of GoogleCloudRetailV2betaPredictResponse from a dict
google_cloud_retail_v2beta_predict_response_from_dict = GoogleCloudRetailV2betaPredictResponse.from_dict(google_cloud_retail_v2beta_predict_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


