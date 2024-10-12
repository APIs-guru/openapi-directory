# CatalogPriceRule


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**actions** | [**List[CatalogPriceRuleAction]**](CatalogPriceRuleAction.md) |  | [optional] 
**additional_fields** | **object** |  | [optional] 
**avail** | **bool** |  | [optional] 
**conditions** | [**List[CouponCondition]**](CouponCondition.md) |  | [optional] 
**created_time** | [**A2CDateTime**](A2CDateTime.md) |  | [optional] 
**custom_fields** | **object** |  | [optional] 
**date_end** | [**A2CDateTime**](A2CDateTime.md) |  | [optional] 
**date_start** | [**A2CDateTime**](A2CDateTime.md) |  | [optional] 
**description** | **str** |  | [optional] 
**gid** | **str** |  | [optional] 
**id** | **str** |  | [optional] 
**name** | **str** |  | [optional] 
**short_description** | **str** |  | [optional] 
**type** | **str** |  | [optional] 
**usage_count** | **float** |  | [optional] 
**uses_per_order_limit** | **int** |  | [optional] 

## Example

```python
from openapi_client.models.catalog_price_rule import CatalogPriceRule

# TODO update the JSON string below
json = "{}"
# create an instance of CatalogPriceRule from a JSON string
catalog_price_rule_instance = CatalogPriceRule.from_json(json)
# print the JSON string representation of the object
print(CatalogPriceRule.to_json())

# convert the object into a dict
catalog_price_rule_dict = catalog_price_rule_instance.to_dict()
# create an instance of CatalogPriceRule from a dict
catalog_price_rule_from_dict = CatalogPriceRule.from_dict(catalog_price_rule_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


