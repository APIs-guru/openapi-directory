# QuoteItemRelation


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**entity** | [**QuoteItemEntityRelation**](QuoteItemEntityRelation.md) |  | [optional] 
**type** | **str** | Type | [optional] 

## Example

```python
from openapi_client.models.quote_item_relation import QuoteItemRelation

# TODO update the JSON string below
json = "{}"
# create an instance of QuoteItemRelation from a JSON string
quote_item_relation_instance = QuoteItemRelation.from_json(json)
# print the JSON string representation of the object
print(QuoteItemRelation.to_json())

# convert the object into a dict
quote_item_relation_dict = quote_item_relation_instance.to_dict()
# create an instance of QuoteItemRelation from a dict
quote_item_relation_from_dict = QuoteItemRelation.from_dict(quote_item_relation_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


