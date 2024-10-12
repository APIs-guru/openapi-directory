# V1LastStocksSymbolGet200Response


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**last** | [**LastTrade**](LastTrade.md) |  | [optional] 
**status** | **str** | Status of this requests response | [optional] 
**symbol** | **str** | Symbol that was evaluated from the request | [optional] 

## Example

```python
from openapi_client.models.v1_last_stocks_symbol_get200_response import V1LastStocksSymbolGet200Response

# TODO update the JSON string below
json = "{}"
# create an instance of V1LastStocksSymbolGet200Response from a JSON string
v1_last_stocks_symbol_get200_response_instance = V1LastStocksSymbolGet200Response.from_json(json)
# print the JSON string representation of the object
print(V1LastStocksSymbolGet200Response.to_json())

# convert the object into a dict
v1_last_stocks_symbol_get200_response_dict = v1_last_stocks_symbol_get200_response_instance.to_dict()
# create an instance of V1LastStocksSymbolGet200Response from a dict
v1_last_stocks_symbol_get200_response_from_dict = V1LastStocksSymbolGet200Response.from_dict(v1_last_stocks_symbol_get200_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


