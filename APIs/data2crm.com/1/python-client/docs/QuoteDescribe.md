# QuoteDescribe


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**entity** | **str** | Entity | [optional] 
**var_schema** | [**SchemaDescribe**](SchemaDescribe.md) |  | [optional] 

## Example

```python
from openapi_client.models.quote_describe import QuoteDescribe

# TODO update the JSON string below
json = "{}"
# create an instance of QuoteDescribe from a JSON string
quote_describe_instance = QuoteDescribe.from_json(json)
# print the JSON string representation of the object
print(QuoteDescribe.to_json())

# convert the object into a dict
quote_describe_dict = quote_describe_instance.to_dict()
# create an instance of QuoteDescribe from a dict
quote_describe_from_dict = QuoteDescribe.from_dict(quote_describe_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


