# GoogleCloudRecommendationengineV1beta1PredictRequest

Request message for Predict method. Full resource name of the format: `{name=projects/*/locations/global/catalogs/default_catalog/eventStores/default_event_store/placements/*}` The id of the recommendation engine placement. This id is used to identify the set of models that will be used to make the prediction. We currently support three placements with the following IDs by default: // * `shopping_cart`: Predicts items frequently bought together with one or more catalog items in the same shopping session. Commonly displayed after `add-to-cart` event, on product detail pages, or on the shopping cart page. * `home_page`: Predicts the next product that a user will most likely engage with or purchase based on the shopping or viewing history of the specified `userId` or `visitorId`. For example - Recommendations for you. * `product_detail`: Predicts the next product that a user will most likely engage with or purchase. The prediction is based on the shopping or viewing history of the specified `userId` or `visitorId` and its relevance to a specified `CatalogItem`. Typically used on product detail pages. For example - More items like this. * `recently_viewed_default`: Returns up to 75 items recently viewed by the specified `userId` or `visitorId`, most recent ones first. Returns nothing if neither of them has viewed any items yet. For example - Recently viewed. The full list of available placements can be seen at https://console.cloud.google.com/recommendation/catalogs/default_catalog/placements

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**dry_run** | **bool** | Optional. Use dryRun mode for this prediction query. If set to true, a fake model will be used that returns arbitrary catalog items. Note that the dryRun mode should only be used for testing the API, or if the model is not ready. | [optional] 
**filter** | **str** | Optional. Filter for restricting prediction results. Accepts values for tags and the &#x60;filterOutOfStockItems&#x60; flag. * Tag expressions. Restricts predictions to items that match all of the specified tags. Boolean operators &#x60;OR&#x60; and &#x60;NOT&#x60; are supported if the expression is enclosed in parentheses, and must be separated from the tag values by a space. &#x60;-\&quot;tagA\&quot;&#x60; is also supported and is equivalent to &#x60;NOT \&quot;tagA\&quot;&#x60;. Tag values must be double quoted UTF-8 encoded strings with a size limit of 1 KiB. * filterOutOfStockItems. Restricts predictions to items that do not have a stockState value of OUT_OF_STOCK. Examples: * tag&#x3D;(\&quot;Red\&quot; OR \&quot;Blue\&quot;) tag&#x3D;\&quot;New-Arrival\&quot; tag&#x3D;(NOT \&quot;promotional\&quot;) * filterOutOfStockItems tag&#x3D;(-\&quot;promotional\&quot;) * filterOutOfStockItems If your filter blocks all prediction results, nothing will be returned. If you want generic (unfiltered) popular items to be returned instead, set &#x60;strictFiltering&#x60; to false in &#x60;PredictRequest.params&#x60;. | [optional] 
**labels** | **Dict[str, str]** | Optional. The labels for the predict request. * Label keys can contain lowercase letters, digits and hyphens, must start with a letter, and must end with a letter or digit. * Non-zero label values can contain lowercase letters, digits and hyphens, must start with a letter, and must end with a letter or digit. * No more than 64 labels can be associated with a given request. See https://goo.gl/xmQnxf for more information on and examples of labels. | [optional] 
**page_size** | **int** | Optional. Maximum number of results to return per page. Set this property to the number of prediction results required. If zero, the service will choose a reasonable default. | [optional] 
**page_token** | **str** | Optional. The previous PredictResponse.next_page_token. | [optional] 
**params** | **Dict[str, object]** | Optional. Additional domain specific parameters for the predictions. Allowed values: * &#x60;returnCatalogItem&#x60;: Boolean. If set to true, the associated catalogItem object will be returned in the &#x60;PredictResponse.PredictionResult.itemMetadata&#x60; object in the method response. * &#x60;returnItemScore&#x60;: Boolean. If set to true, the prediction &#39;score&#39; corresponding to each returned item will be set in the &#x60;metadata&#x60; field in the prediction response. The given &#39;score&#39; indicates the probability of an item being clicked/purchased given the user&#39;s context and history. * &#x60;strictFiltering&#x60;: Boolean. True by default. If set to false, the service will return generic (unfiltered) popular items instead of empty if your filter blocks all prediction results. * &#x60;priceRerankLevel&#x60;: String. Default empty. If set to be non-empty, then it needs to be one of {&#39;no-price-reranking&#39;, &#39;low-price-reranking&#39;, &#39;medium-price-reranking&#39;, &#39;high-price-reranking&#39;}. This gives request level control and adjust prediction results based on product price. * &#x60;diversityLevel&#x60;: String. Default empty. If set to be non-empty, then it needs to be one of {&#39;no-diversity&#39;, &#39;low-diversity&#39;, &#39;medium-diversity&#39;, &#39;high-diversity&#39;, &#39;auto-diversity&#39;}. This gives request level control and adjust prediction results based on product category. | [optional] 
**user_event** | [**GoogleCloudRecommendationengineV1beta1UserEvent**](GoogleCloudRecommendationengineV1beta1UserEvent.md) |  | [optional] 

## Example

```python
from openapi_client.models.google_cloud_recommendationengine_v1beta1_predict_request import GoogleCloudRecommendationengineV1beta1PredictRequest

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudRecommendationengineV1beta1PredictRequest from a JSON string
google_cloud_recommendationengine_v1beta1_predict_request_instance = GoogleCloudRecommendationengineV1beta1PredictRequest.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudRecommendationengineV1beta1PredictRequest.to_json())

# convert the object into a dict
google_cloud_recommendationengine_v1beta1_predict_request_dict = google_cloud_recommendationengine_v1beta1_predict_request_instance.to_dict()
# create an instance of GoogleCloudRecommendationengineV1beta1PredictRequest from a dict
google_cloud_recommendationengine_v1beta1_predict_request_from_dict = GoogleCloudRecommendationengineV1beta1PredictRequest.from_dict(google_cloud_recommendationengine_v1beta1_predict_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


