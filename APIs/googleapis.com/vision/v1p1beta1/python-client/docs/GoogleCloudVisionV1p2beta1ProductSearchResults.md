# GoogleCloudVisionV1p2beta1ProductSearchResults

Results for a product search request.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**index_time** | **str** | Timestamp of the index which provided these results. Products added to the product set and products removed from the product set after this time are not reflected in the current results. | [optional] 
**product_grouped_results** | [**List[GoogleCloudVisionV1p2beta1ProductSearchResultsGroupedResult]**](GoogleCloudVisionV1p2beta1ProductSearchResultsGroupedResult.md) | List of results grouped by products detected in the query image. Each entry corresponds to one bounding polygon in the query image, and contains the matching products specific to that region. There may be duplicate product matches in the union of all the per-product results. | [optional] 
**results** | [**List[GoogleCloudVisionV1p2beta1ProductSearchResultsResult]**](GoogleCloudVisionV1p2beta1ProductSearchResultsResult.md) | List of results, one for each product match. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_vision_v1p2beta1_product_search_results import GoogleCloudVisionV1p2beta1ProductSearchResults

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudVisionV1p2beta1ProductSearchResults from a JSON string
google_cloud_vision_v1p2beta1_product_search_results_instance = GoogleCloudVisionV1p2beta1ProductSearchResults.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudVisionV1p2beta1ProductSearchResults.to_json())

# convert the object into a dict
google_cloud_vision_v1p2beta1_product_search_results_dict = google_cloud_vision_v1p2beta1_product_search_results_instance.to_dict()
# create an instance of GoogleCloudVisionV1p2beta1ProductSearchResults from a dict
google_cloud_vision_v1p2beta1_product_search_results_from_dict = GoogleCloudVisionV1p2beta1ProductSearchResults.from_dict(google_cloud_vision_v1p2beta1_product_search_results_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


