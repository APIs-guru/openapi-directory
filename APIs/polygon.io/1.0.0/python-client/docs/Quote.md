# Quote


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**a_e** | **str** | Ask Exchange | [optional] 
**a_p** | **float** | Ask Price | [optional] 
**a_s** | **int** | Ask Size | [optional] 
**b_e** | **str** | Bid Exchange | [optional] 
**b_p** | **float** | Bid Price | [optional] 
**b_s** | **int** | Bid Size | [optional] 
**c** | **int** | Condition of this quote | [optional] 
**t** | **int** | Timestamp of this trade | [optional] 

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


