# Quote


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**author** | **str** | Author name of quote. | [optional] 
**quote** | **str** | The Quote. | 
**tags** | **List[str]** | Array of tags/categories. | [optional] 
**id** | **str** | Unique identifier representing a specific quote in theysaidso.com. | 
**image** | **str** | Image URL that can be used for background to display this quote. | [optional] 
**length** | **int** | Length of the quote string. | [optional] 

## Example

```python
from openapi_client.models.quote import Quote

# TODO update the JSON string below
json = "{}"
# create an instance of Quote from a JSON string
quote_instance = Quote.from_json(json)
# print the JSON string representation of the object
print(Quote.to_json())

# convert the object into a dict
quote_dict = quote_instance.to_dict()
# create an instance of Quote from a dict
quote_from_dict = Quote.from_dict(quote_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


