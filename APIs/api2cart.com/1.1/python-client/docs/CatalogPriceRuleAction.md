# CatalogPriceRuleAction


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**additional_fields** | **object** |  | [optional] 
**apply_to** | **str** |  | [optional] 
**conditions** | [**List[CouponCondition]**](CouponCondition.md) |  | [optional] 
**currency_code** | **str** |  | [optional] 
**custom_fields** | **object** |  | [optional] 
**include_tax** | **bool** |  | [optional] 
**quantity** | **float** |  | [optional] 
**scope** | **str** |  | [optional] 
**type** | **str** |  | [optional] 
**value** | **float** |  | [optional] 

## Example

```python
from openapi_client.models.catalog_price_rule_action import CatalogPriceRuleAction

# TODO update the JSON string below
json = "{}"
# create an instance of CatalogPriceRuleAction from a JSON string
catalog_price_rule_action_instance = CatalogPriceRuleAction.from_json(json)
# print the JSON string representation of the object
print(CatalogPriceRuleAction.to_json())

# convert the object into a dict
catalog_price_rule_action_dict = catalog_price_rule_action_instance.to_dict()
# create an instance of CatalogPriceRuleAction from a dict
catalog_price_rule_action_from_dict = CatalogPriceRuleAction.from_dict(catalog_price_rule_action_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


