# ArimaResult

(Auto-)arima fitting result. Wrap everything in ArimaResult for easier refactoring if we want to use model-specific iteration results.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**arima_model_info** | [**List[ArimaModelInfo]**](ArimaModelInfo.md) | This message is repeated because there are multiple arima models fitted in auto-arima. For non-auto-arima model, its size is one. | [optional] 
**seasonal_periods** | **List[str]** | Seasonal periods. Repeated because multiple periods are supported for one time series. | [optional] 

## Example

```python
from openapi_client.models.arima_result import ArimaResult

# TODO update the JSON string below
json = "{}"
# create an instance of ArimaResult from a JSON string
arima_result_instance = ArimaResult.from_json(json)
# print the JSON string representation of the object
print(ArimaResult.to_json())

# convert the object into a dict
arima_result_dict = arima_result_instance.to_dict()
# create an instance of ArimaResult from a dict
arima_result_from_dict = ArimaResult.from_dict(arima_result_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


