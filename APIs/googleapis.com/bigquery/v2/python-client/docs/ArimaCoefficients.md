# ArimaCoefficients

Arima coefficients.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**auto_regressive_coefficients** | **List[float]** | Auto-regressive coefficients, an array of double. | [optional] 
**intercept_coefficient** | **float** | Intercept coefficient, just a double not an array. | [optional] 
**moving_average_coefficients** | **List[float]** | Moving-average coefficients, an array of double. | [optional] 

## Example

```python
from openapi_client.models.arima_coefficients import ArimaCoefficients

# TODO update the JSON string below
json = "{}"
# create an instance of ArimaCoefficients from a JSON string
arima_coefficients_instance = ArimaCoefficients.from_json(json)
# print the JSON string representation of the object
print(ArimaCoefficients.to_json())

# convert the object into a dict
arima_coefficients_dict = arima_coefficients_instance.to_dict()
# create an instance of ArimaCoefficients from a dict
arima_coefficients_from_dict = ArimaCoefficients.from_dict(arima_coefficients_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


