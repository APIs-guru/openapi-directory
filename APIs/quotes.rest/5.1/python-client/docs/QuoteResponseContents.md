# QuoteResponseContents


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**quotes** | [**List[Quote]**](Quote.md) | List of quotes | [optional] 

## Example

```python
from openapi_client.models.quote_response_contents import QuoteResponseContents

# TODO update the JSON string below
json = "{}"
# create an instance of QuoteResponseContents from a JSON string
quote_response_contents_instance = QuoteResponseContents.from_json(json)
# print the JSON string representation of the object
print(QuoteResponseContents.to_json())

# convert the object into a dict
quote_response_contents_dict = quote_response_contents_instance.to_dict()
# create an instance of QuoteResponseContents from a dict
quote_response_contents_from_dict = QuoteResponseContents.from_dict(quote_response_contents_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


