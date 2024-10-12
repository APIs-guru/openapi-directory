# ResponseCartCatalogPriceRulesListResult


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**additional_fields** | **object** |  | [optional] 
**catalog_price_rules** | [**List[CatalogPriceRule]**](CatalogPriceRule.md) |  | [optional] 
**catalog_price_rules_count** | **int** |  | [optional] 
**custom_fields** | **object** |  | [optional] 

## Example

```python
from openapi_client.models.response_cart_catalog_price_rules_list_result import ResponseCartCatalogPriceRulesListResult

# TODO update the JSON string below
json = "{}"
# create an instance of ResponseCartCatalogPriceRulesListResult from a JSON string
response_cart_catalog_price_rules_list_result_instance = ResponseCartCatalogPriceRulesListResult.from_json(json)
# print the JSON string representation of the object
print(ResponseCartCatalogPriceRulesListResult.to_json())

# convert the object into a dict
response_cart_catalog_price_rules_list_result_dict = response_cart_catalog_price_rules_list_result_instance.to_dict()
# create an instance of ResponseCartCatalogPriceRulesListResult from a dict
response_cart_catalog_price_rules_list_result_from_dict = ResponseCartCatalogPriceRulesListResult.from_dict(response_cart_catalog_price_rules_list_result_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


