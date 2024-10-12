# ProductSearchResults

Results for a product search request.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**index_time** | **str** | Timestamp of the index which provided these results. Products added to the product set and products removed from the product set after this time are not reflected in the current results. | [optional] 
**product_grouped_results** | [**List[GroupedResult]**](GroupedResult.md) | List of results grouped by products detected in the query image. Each entry corresponds to one bounding polygon in the query image, and contains the matching products specific to that region. There may be duplicate product matches in the union of all the per-product results. | [optional] 
**results** | [**List[Result]**](Result.md) | List of results, one for each product match. | [optional] 

## Example

```python
from openapi_client.models.product_search_results import ProductSearchResults

# TODO update the JSON string below
json = "{}"
# create an instance of ProductSearchResults from a JSON string
product_search_results_instance = ProductSearchResults.from_json(json)
# print the JSON string representation of the object
print(ProductSearchResults.to_json())

# convert the object into a dict
product_search_results_dict = product_search_results_instance.to_dict()
# create an instance of ProductSearchResults from a dict
product_search_results_from_dict = ProductSearchResults.from_dict(product_search_results_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


