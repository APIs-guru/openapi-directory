# SearchResponseResultsInner

The list of products matching the search

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**currency_code** | **str** | The currency that the price is in | [optional] 
**description** | **str** | The description of the product | [optional] 
**price** | **float** | The price of the product | [optional] 
**title** | **str** | The title of the product | [optional] 
**url** | **str** | The url of the product page for this product | [optional] 

## Example

```python
from openapi_client.models.search_response_results_inner import SearchResponseResultsInner

# TODO update the JSON string below
json = "{}"
# create an instance of SearchResponseResultsInner from a JSON string
search_response_results_inner_instance = SearchResponseResultsInner.from_json(json)
# print the JSON string representation of the object
print(SearchResponseResultsInner.to_json())

# convert the object into a dict
search_response_results_inner_dict = search_response_results_inner_instance.to_dict()
# create an instance of SearchResponseResultsInner from a dict
search_response_results_inner_from_dict = SearchResponseResultsInner.from_dict(search_response_results_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


