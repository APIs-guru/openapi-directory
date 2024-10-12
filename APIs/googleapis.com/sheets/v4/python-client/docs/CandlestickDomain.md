# CandlestickDomain

The domain of a CandlestickChart.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data** | [**ChartData**](ChartData.md) |  | [optional] 
**reversed** | **bool** | True to reverse the order of the domain values (horizontal axis). | [optional] 

## Example

```python
from openapi_client.models.candlestick_domain import CandlestickDomain

# TODO update the JSON string below
json = "{}"
# create an instance of CandlestickDomain from a JSON string
candlestick_domain_instance = CandlestickDomain.from_json(json)
# print the JSON string representation of the object
print(CandlestickDomain.to_json())

# convert the object into a dict
candlestick_domain_dict = candlestick_domain_instance.to_dict()
# create an instance of CandlestickDomain from a dict
candlestick_domain_from_dict = CandlestickDomain.from_dict(candlestick_domain_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


