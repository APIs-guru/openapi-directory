# PriceBookItemEntity


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**code** | **str** | Code | [optional] 
**created_at** | **datetime** | Created At | [optional] 
**id** | **str** | PriceBookItem Identifier | [optional] 
**is_active** | **bool** | Is Active | [optional] 
**name** | **str** | Name | [optional] 
**price** | [**List[Price]**](Price.md) | Price | [optional] 
**relation** | [**Relation**](Relation.md) |  | [optional] 
**updated_at** | **datetime** | Updated At | [optional] 
**use_standard_price** | **bool** | Is Standard | [optional] 

## Example

```python
from openapi_client.models.price_book_item_entity import PriceBookItemEntity

# TODO update the JSON string below
json = "{}"
# create an instance of PriceBookItemEntity from a JSON string
price_book_item_entity_instance = PriceBookItemEntity.from_json(json)
# print the JSON string representation of the object
print(PriceBookItemEntity.to_json())

# convert the object into a dict
price_book_item_entity_dict = price_book_item_entity_instance.to_dict()
# create an instance of PriceBookItemEntity from a dict
price_book_item_entity_from_dict = PriceBookItemEntity.from_dict(price_book_item_entity_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


