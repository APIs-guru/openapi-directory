# LastQuote


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**askexchange** | **int** | Exchange the ask happened on | [optional] 
**askprice** | **float** | Ask Price | [optional] 
**asksize** | **int** | Ask Size | [optional] 
**bidexchange** | **int** | Exchange the bid happened on | [optional] 
**bidprice** | **float** | Bid Price | [optional] 
**bidsize** | **int** | Bid Size | [optional] 
**cond** | **int** | Condition of the quote | [optional] 
**timestamp** | **int** | Timestamp of this trade | [optional] 

## Example

```python
from openapi_client.models.last_quote import LastQuote

# TODO update the JSON string below
json = "{}"
# create an instance of LastQuote from a JSON string
last_quote_instance = LastQuote.from_json(json)
# print the JSON string representation of the object
print(LastQuote.to_json())

# convert the object into a dict
last_quote_dict = last_quote_instance.to_dict()
# create an instance of LastQuote from a dict
last_quote_from_dict = LastQuote.from_dict(last_quote_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


