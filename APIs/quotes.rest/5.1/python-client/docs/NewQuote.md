# NewQuote


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**author** | **str** | Author name of quote. | [optional] 
**quote** | **str** | The Quote. | 
**tags** | **List[str]** | Array of tags/categories. | [optional] 

## Example

```python
from openapi_client.models.new_quote import NewQuote

# TODO update the JSON string below
json = "{}"
# create an instance of NewQuote from a JSON string
new_quote_instance = NewQuote.from_json(json)
# print the JSON string representation of the object
print(NewQuote.to_json())

# convert the object into a dict
new_quote_dict = new_quote_instance.to_dict()
# create an instance of NewQuote from a dict
new_quote_from_dict = NewQuote.from_dict(new_quote_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


