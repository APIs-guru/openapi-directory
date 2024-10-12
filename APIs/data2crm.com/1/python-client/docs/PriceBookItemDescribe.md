# PriceBookItemDescribe


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**entity** | **str** | Entity | [optional] 
**var_schema** | [**SchemaDescribe**](SchemaDescribe.md) |  | [optional] 

## Example

```python
from openapi_client.models.price_book_item_describe import PriceBookItemDescribe

# TODO update the JSON string below
json = "{}"
# create an instance of PriceBookItemDescribe from a JSON string
price_book_item_describe_instance = PriceBookItemDescribe.from_json(json)
# print the JSON string representation of the object
print(PriceBookItemDescribe.to_json())

# convert the object into a dict
price_book_item_describe_dict = price_book_item_describe_instance.to_dict()
# create an instance of PriceBookItemDescribe from a dict
price_book_item_describe_from_dict = PriceBookItemDescribe.from_dict(price_book_item_describe_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


