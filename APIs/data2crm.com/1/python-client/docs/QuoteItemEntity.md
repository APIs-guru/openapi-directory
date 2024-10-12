# QuoteItemEntity


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**created_at** | **datetime** | Created At | [optional] 
**description** | **str** | Description | [optional] 
**discount** | [**List[Discount]**](Discount.md) | Discount | [optional] 
**id** | **str** | QuoteItem Identifier | [optional] 
**list_price** | **float** | List Price | [optional] 
**number** | **str** | Number | [optional] 
**quantity** | **float** | Quantity | [optional] 
**relation** | [**Relation**](Relation.md) |  | [optional] 
**sales_price** | **float** | Sales Price | [optional] 
**subtotal** | **float** | Subtotal | [optional] 
**tax** | [**List[Tax]**](Tax.md) | Tax | [optional] 
**total_price** | **float** | Total Price | [optional] 
**unit** | **str** | Unit | [optional] 
**updated_at** | **datetime** | Updated At | [optional] 

## Example

```python
from openapi_client.models.quote_item_entity import QuoteItemEntity

# TODO update the JSON string below
json = "{}"
# create an instance of QuoteItemEntity from a JSON string
quote_item_entity_instance = QuoteItemEntity.from_json(json)
# print the JSON string representation of the object
print(QuoteItemEntity.to_json())

# convert the object into a dict
quote_item_entity_dict = quote_item_entity_instance.to_dict()
# create an instance of QuoteItemEntity from a dict
quote_item_entity_from_dict = QuoteItemEntity.from_dict(quote_item_entity_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


