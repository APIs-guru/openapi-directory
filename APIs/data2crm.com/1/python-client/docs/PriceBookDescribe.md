# PriceBookDescribe


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**entity** | **str** | Entity | [optional] 
**var_schema** | [**SchemaDescribe**](SchemaDescribe.md) |  | [optional] 

## Example

```python
from openapi_client.models.price_book_describe import PriceBookDescribe

# TODO update the JSON string below
json = "{}"
# create an instance of PriceBookDescribe from a JSON string
price_book_describe_instance = PriceBookDescribe.from_json(json)
# print the JSON string representation of the object
print(PriceBookDescribe.to_json())

# convert the object into a dict
price_book_describe_dict = price_book_describe_instance.to_dict()
# create an instance of PriceBookDescribe from a dict
price_book_describe_from_dict = PriceBookDescribe.from_dict(price_book_describe_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


