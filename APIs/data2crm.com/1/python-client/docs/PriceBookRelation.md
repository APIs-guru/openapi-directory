# PriceBookRelation


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**entity** | [**PriceBookEntityRelation**](PriceBookEntityRelation.md) |  | [optional] 
**type** | **str** | Type | [optional] 

## Example

```python
from openapi_client.models.price_book_relation import PriceBookRelation

# TODO update the JSON string below
json = "{}"
# create an instance of PriceBookRelation from a JSON string
price_book_relation_instance = PriceBookRelation.from_json(json)
# print the JSON string representation of the object
print(PriceBookRelation.to_json())

# convert the object into a dict
price_book_relation_dict = price_book_relation_instance.to_dict()
# create an instance of PriceBookRelation from a dict
price_book_relation_from_dict = PriceBookRelation.from_dict(price_book_relation_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


