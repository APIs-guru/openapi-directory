# QuoteRelation


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**entity** | [**QuoteEntityRelation**](QuoteEntityRelation.md) |  | [optional] 
**type** | **str** | Type | [optional] 

## Example

```python
from openapi_client.models.quote_relation import QuoteRelation

# TODO update the JSON string below
json = "{}"
# create an instance of QuoteRelation from a JSON string
quote_relation_instance = QuoteRelation.from_json(json)
# print the JSON string representation of the object
print(QuoteRelation.to_json())

# convert the object into a dict
quote_relation_dict = quote_relation_instance.to_dict()
# create an instance of QuoteRelation from a dict
quote_relation_from_dict = QuoteRelation.from_dict(quote_relation_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


