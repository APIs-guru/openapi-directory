# GoogleCloudRetailV2betaPredictRequest

Request message for Predict method.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**filter** | **str** | Filter for restricting prediction results with a length limit of 5,000 characters. Accepts values for tags and the &#x60;filterOutOfStockItems&#x60; flag. * Tag expressions. Restricts predictions to products that match all of the specified tags. Boolean operators &#x60;OR&#x60; and &#x60;NOT&#x60; are supported if the expression is enclosed in parentheses, and must be separated from the tag values by a space. &#x60;-\&quot;tagA\&quot;&#x60; is also supported and is equivalent to &#x60;NOT \&quot;tagA\&quot;&#x60;. Tag values must be double quoted UTF-8 encoded strings with a size limit of 1,000 characters. Note: \&quot;Recently viewed\&quot; models don&#39;t support tag filtering at the moment. * filterOutOfStockItems. Restricts predictions to products that do not have a stockState value of OUT_OF_STOCK. Examples: * tag&#x3D;(\&quot;Red\&quot; OR \&quot;Blue\&quot;) tag&#x3D;\&quot;New-Arrival\&quot; tag&#x3D;(NOT \&quot;promotional\&quot;) * filterOutOfStockItems tag&#x3D;(-\&quot;promotional\&quot;) * filterOutOfStockItems If your filter blocks all prediction results, the API will return *no* results. If instead you want empty result sets to return generic (unfiltered) popular products, set &#x60;strictFiltering&#x60; to False in &#x60;PredictRequest.params&#x60;. Note that the API will never return items with storageStatus of \&quot;EXPIRED\&quot; or \&quot;DELETED\&quot; regardless of filter choices. If &#x60;filterSyntaxV2&#x60; is set to true under the &#x60;params&#x60; field, then attribute-based expressions are expected instead of the above described tag-based syntax. Examples: * (colors: ANY(\&quot;Red\&quot;, \&quot;Blue\&quot;)) AND NOT (categories: ANY(\&quot;Phones\&quot;)) * (availability: ANY(\&quot;IN_STOCK\&quot;)) AND (colors: ANY(\&quot;Red\&quot;) OR categories: ANY(\&quot;Phones\&quot;)) For more information, see [Filter recommendations](https://cloud.google.com/retail/docs/filter-recs). | [optional] 
**labels** | **Dict[str, str]** | The labels applied to a resource must meet the following requirements: * Each resource can have multiple labels, up to a maximum of 64. * Each label must be a key-value pair. * Keys have a minimum length of 1 character and a maximum length of 63 characters and cannot be empty. Values can be empty and have a maximum length of 63 characters. * Keys and values can contain only lowercase letters, numeric characters, underscores, and dashes. All characters must use UTF-8 encoding, and international characters are allowed. * The key portion of a label must be unique. However, you can use the same key with multiple resources. * Keys must start with a lowercase letter or international character. See [Google Cloud Document](https://cloud.google.com/resource-manager/docs/creating-managing-labels#requirements) for more details. | [optional] 
**page_size** | **int** | Maximum number of results to return. Set this property to the number of prediction results needed. If zero, the service will choose a reasonable default. The maximum allowed value is 100. Values above 100 will be coerced to 100. | [optional] 
**page_token** | **str** | This field is not used; leave it unset. | [optional] 
**params** | **Dict[str, object]** | Additional domain specific parameters for the predictions. Allowed values: * &#x60;returnProduct&#x60;: Boolean. If set to true, the associated product object will be returned in the &#x60;results.metadata&#x60; field in the prediction response. * &#x60;returnScore&#x60;: Boolean. If set to true, the prediction &#39;score&#39; corresponding to each returned product will be set in the &#x60;results.metadata&#x60; field in the prediction response. The given &#39;score&#39; indicates the probability of a product being clicked/purchased given the user&#39;s context and history. * &#x60;strictFiltering&#x60;: Boolean. True by default. If set to false, the service will return generic (unfiltered) popular products instead of empty if your filter blocks all prediction results. * &#x60;priceRerankLevel&#x60;: String. Default empty. If set to be non-empty, then it needs to be one of {&#39;no-price-reranking&#39;, &#39;low-price-reranking&#39;, &#39;medium-price-reranking&#39;, &#39;high-price-reranking&#39;}. This gives request-level control and adjusts prediction results based on product price. * &#x60;diversityLevel&#x60;: String. Default empty. If set to be non-empty, then it needs to be one of {&#39;no-diversity&#39;, &#39;low-diversity&#39;, &#39;medium-diversity&#39;, &#39;high-diversity&#39;, &#39;auto-diversity&#39;}. This gives request-level control and adjusts prediction results based on product category. * &#x60;filterSyntaxV2&#x60;: Boolean. False by default. If set to true, the &#x60;filter&#x60; field is interpreteted according to the new, attribute-based syntax. | [optional] 
**user_event** | [**GoogleCloudRetailV2betaUserEvent**](GoogleCloudRetailV2betaUserEvent.md) |  | [optional] 
**validate_only** | **bool** | Use validate only mode for this prediction query. If set to true, a dummy model will be used that returns arbitrary products. Note that the validate only mode should only be used for testing the API, or if the model is not ready. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_retail_v2beta_predict_request import GoogleCloudRetailV2betaPredictRequest

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudRetailV2betaPredictRequest from a JSON string
google_cloud_retail_v2beta_predict_request_instance = GoogleCloudRetailV2betaPredictRequest.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudRetailV2betaPredictRequest.to_json())

# convert the object into a dict
google_cloud_retail_v2beta_predict_request_dict = google_cloud_retail_v2beta_predict_request_instance.to_dict()
# create an instance of GoogleCloudRetailV2betaPredictRequest from a dict
google_cloud_retail_v2beta_predict_request_from_dict = GoogleCloudRetailV2betaPredictRequest.from_dict(google_cloud_retail_v2beta_predict_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


