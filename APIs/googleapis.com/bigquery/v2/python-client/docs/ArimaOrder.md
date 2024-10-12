# ArimaOrder

Arima order, can be used for both non-seasonal and seasonal parts.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**d** | **str** | Order of the differencing part. | [optional] 
**p** | **str** | Order of the autoregressive part. | [optional] 
**q** | **str** | Order of the moving-average part. | [optional] 

## Example

```python
from openapi_client.models.arima_order import ArimaOrder

# TODO update the JSON string below
json = "{}"
# create an instance of ArimaOrder from a JSON string
arima_order_instance = ArimaOrder.from_json(json)
# print the JSON string representation of the object
print(ArimaOrder.to_json())

# convert the object into a dict
arima_order_dict = arima_order_instance.to_dict()
# create an instance of ArimaOrder from a dict
arima_order_from_dict = ArimaOrder.from_dict(arima_order_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


