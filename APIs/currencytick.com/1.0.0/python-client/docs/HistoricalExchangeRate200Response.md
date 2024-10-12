# HistoricalExchangeRate200Response


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**amount** | **str** |  | [optional] 
**var_date** | **str** |  | [optional] 
**var_from** | **str** |  | [optional] 
**rate** | **float** |  | [optional] 
**to** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.historical_exchange_rate200_response import HistoricalExchangeRate200Response

# TODO update the JSON string below
json = "{}"
# create an instance of HistoricalExchangeRate200Response from a JSON string
historical_exchange_rate200_response_instance = HistoricalExchangeRate200Response.from_json(json)
# print the JSON string representation of the object
print(HistoricalExchangeRate200Response.to_json())

# convert the object into a dict
historical_exchange_rate200_response_dict = historical_exchange_rate200_response_instance.to_dict()
# create an instance of HistoricalExchangeRate200Response from a dict
historical_exchange_rate200_response_from_dict = HistoricalExchangeRate200Response.from_dict(historical_exchange_rate200_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


