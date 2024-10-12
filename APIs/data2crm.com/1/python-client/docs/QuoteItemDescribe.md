# QuoteItemDescribe


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**entity** | **str** | Entity | [optional] 
**var_schema** | [**SchemaDescribe**](SchemaDescribe.md) |  | [optional] 

## Example

```python
from openapi_client.models.quote_item_describe import QuoteItemDescribe

# TODO update the JSON string below
json = "{}"
# create an instance of QuoteItemDescribe from a JSON string
quote_item_describe_instance = QuoteItemDescribe.from_json(json)
# print the JSON string representation of the object
print(QuoteItemDescribe.to_json())

# convert the object into a dict
quote_item_describe_dict = quote_item_describe_instance.to_dict()
# create an instance of QuoteItemDescribe from a dict
quote_item_describe_from_dict = QuoteItemDescribe.from_dict(quote_item_describe_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


