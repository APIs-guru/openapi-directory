# PriceBookEntity


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**created_at** | **datetime** | Created At | [optional] 
**currency** | [**Currency**](Currency.md) |  | [optional] 
**description** | **str** | Description | [optional] 
**id** | **str** | PriceBook Identifier | [optional] 
**is_active** | **bool** | Is Active | [optional] 
**is_standard** | **bool** | Is Standard | [optional] 
**name** | **str** | Name | [optional] 
**relation** | [**Relation**](Relation.md) |  | [optional] 
**type** | **str** | Number | [optional] 
**updated_at** | **datetime** | Updated At | [optional] 

## Example

```python
from openapi_client.models.price_book_entity import PriceBookEntity

# TODO update the JSON string below
json = "{}"
# create an instance of PriceBookEntity from a JSON string
price_book_entity_instance = PriceBookEntity.from_json(json)
# print the JSON string representation of the object
print(PriceBookEntity.to_json())

# convert the object into a dict
price_book_entity_dict = price_book_entity_instance.to_dict()
# create an instance of PriceBookEntity from a dict
price_book_entity_from_dict = PriceBookEntity.from_dict(price_book_entity_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


