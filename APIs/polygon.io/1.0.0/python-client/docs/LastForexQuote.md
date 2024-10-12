# LastForexQuote


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**askprice** | **float** | Ask Price | [optional] 
**bidprice** | **float** | Bid Price | [optional] 
**timestamp** | **int** | Timestamp of this trade | [optional] 

## Example

```python
from openapi_client.models.last_forex_quote import LastForexQuote

# TODO update the JSON string below
json = "{}"
# create an instance of LastForexQuote from a JSON string
last_forex_quote_instance = LastForexQuote.from_json(json)
# print the JSON string representation of the object
print(LastForexQuote.to_json())

# convert the object into a dict
last_forex_quote_dict = last_forex_quote_instance.to_dict()
# create an instance of LastForexQuote from a dict
last_forex_quote_from_dict = LastForexQuote.from_dict(last_forex_quote_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


