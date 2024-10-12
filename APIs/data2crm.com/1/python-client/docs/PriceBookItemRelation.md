# PriceBookItemRelation


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**entity** | [**PriceBookItemEntityRelation**](PriceBookItemEntityRelation.md) |  | [optional] 
**type** | **str** | Type | [optional] 

## Example

```python
from openapi_client.models.price_book_item_relation import PriceBookItemRelation

# TODO update the JSON string below
json = "{}"
# create an instance of PriceBookItemRelation from a JSON string
price_book_item_relation_instance = PriceBookItemRelation.from_json(json)
# print the JSON string representation of the object
print(PriceBookItemRelation.to_json())

# convert the object into a dict
price_book_item_relation_dict = price_book_item_relation_instance.to_dict()
# create an instance of PriceBookItemRelation from a dict
price_book_item_relation_from_dict = PriceBookItemRelation.from_dict(price_book_item_relation_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


