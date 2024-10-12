# ProductsListResult

Result of listing products summary. It contains a list of available products summaries in reverse chronological order by purchase date.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_link** | **str** | The link (url) to the next page of results. | [optional] [readonly] 
**value** | [**List[ProductSummary]**](ProductSummary.md) | The list of products summary. | [optional] [readonly] 

## Example

```python
from openapi_client.models.products_list_result import ProductsListResult

# TODO update the JSON string below
json = "{}"
# create an instance of ProductsListResult from a JSON string
products_list_result_instance = ProductsListResult.from_json(json)
# print the JSON string representation of the object
print(ProductsListResult.to_json())

# convert the object into a dict
products_list_result_dict = products_list_result_instance.to_dict()
# create an instance of ProductsListResult from a dict
products_list_result_from_dict = ProductsListResult.from_dict(products_list_result_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


