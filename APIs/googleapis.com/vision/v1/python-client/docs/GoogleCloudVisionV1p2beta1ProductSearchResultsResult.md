# GoogleCloudVisionV1p2beta1ProductSearchResultsResult

Information about a product.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**image** | **str** | The resource name of the image from the product that is the closest match to the query. | [optional] 
**product** | [**GoogleCloudVisionV1p2beta1Product**](GoogleCloudVisionV1p2beta1Product.md) |  | [optional] 
**score** | **float** | A confidence level on the match, ranging from 0 (no confidence) to 1 (full confidence). | [optional] 

## Example

```python
from openapi_client.models.google_cloud_vision_v1p2beta1_product_search_results_result import GoogleCloudVisionV1p2beta1ProductSearchResultsResult

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudVisionV1p2beta1ProductSearchResultsResult from a JSON string
google_cloud_vision_v1p2beta1_product_search_results_result_instance = GoogleCloudVisionV1p2beta1ProductSearchResultsResult.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudVisionV1p2beta1ProductSearchResultsResult.to_json())

# convert the object into a dict
google_cloud_vision_v1p2beta1_product_search_results_result_dict = google_cloud_vision_v1p2beta1_product_search_results_result_instance.to_dict()
# create an instance of GoogleCloudVisionV1p2beta1ProductSearchResultsResult from a dict
google_cloud_vision_v1p2beta1_product_search_results_result_from_dict = GoogleCloudVisionV1p2beta1ProductSearchResultsResult.from_dict(google_cloud_vision_v1p2beta1_product_search_results_result_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


