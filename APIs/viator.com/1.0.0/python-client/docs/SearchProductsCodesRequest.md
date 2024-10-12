# SearchProductsCodesRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**currency_code** | **str** | **currency code** for the currency in which to display product pricing | [optional] 
**product_codes** | **List[str]** | **array** of product codes to search for | [optional] 

## Example

```python
from openapi_client.models.search_products_codes_request import SearchProductsCodesRequest

# TODO update the JSON string below
json = "{}"
# create an instance of SearchProductsCodesRequest from a JSON string
search_products_codes_request_instance = SearchProductsCodesRequest.from_json(json)
# print the JSON string representation of the object
print(SearchProductsCodesRequest.to_json())

# convert the object into a dict
search_products_codes_request_dict = search_products_codes_request_instance.to_dict()
# create an instance of SearchProductsCodesRequest from a dict
search_products_codes_request_from_dict = SearchProductsCodesRequest.from_dict(search_products_codes_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


