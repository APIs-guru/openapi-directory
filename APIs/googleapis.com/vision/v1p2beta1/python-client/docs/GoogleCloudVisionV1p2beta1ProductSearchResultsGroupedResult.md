# GoogleCloudVisionV1p2beta1ProductSearchResultsGroupedResult

Information about the products similar to a single product in a query image.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**bounding_poly** | [**GoogleCloudVisionV1p2beta1BoundingPoly**](GoogleCloudVisionV1p2beta1BoundingPoly.md) |  | [optional] 
**object_annotations** | [**List[GoogleCloudVisionV1p2beta1ProductSearchResultsObjectAnnotation]**](GoogleCloudVisionV1p2beta1ProductSearchResultsObjectAnnotation.md) | List of generic predictions for the object in the bounding box. | [optional] 
**results** | [**List[GoogleCloudVisionV1p2beta1ProductSearchResultsResult]**](GoogleCloudVisionV1p2beta1ProductSearchResultsResult.md) | List of results, one for each product match. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_vision_v1p2beta1_product_search_results_grouped_result import GoogleCloudVisionV1p2beta1ProductSearchResultsGroupedResult

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudVisionV1p2beta1ProductSearchResultsGroupedResult from a JSON string
google_cloud_vision_v1p2beta1_product_search_results_grouped_result_instance = GoogleCloudVisionV1p2beta1ProductSearchResultsGroupedResult.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudVisionV1p2beta1ProductSearchResultsGroupedResult.to_json())

# convert the object into a dict
google_cloud_vision_v1p2beta1_product_search_results_grouped_result_dict = google_cloud_vision_v1p2beta1_product_search_results_grouped_result_instance.to_dict()
# create an instance of GoogleCloudVisionV1p2beta1ProductSearchResultsGroupedResult from a dict
google_cloud_vision_v1p2beta1_product_search_results_grouped_result_from_dict = GoogleCloudVisionV1p2beta1ProductSearchResultsGroupedResult.from_dict(google_cloud_vision_v1p2beta1_product_search_results_grouped_result_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


