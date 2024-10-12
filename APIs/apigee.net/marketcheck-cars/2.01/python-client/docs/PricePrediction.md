# PricePrediction

Predicted price of a car

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**predicted_price** | **int** | Actual predicted price of a car | [optional] 
**price_range** | [**PricePredictionPriceRange**](PricePredictionPriceRange.md) |  | [optional] 
**specs** | [**PredictedSpecs**](PredictedSpecs.md) |  | [optional] 

## Example

```python
from openapi_client.models.price_prediction import PricePrediction

# TODO update the JSON string below
json = "{}"
# create an instance of PricePrediction from a JSON string
price_prediction_instance = PricePrediction.from_json(json)
# print the JSON string representation of the object
print(PricePrediction.to_json())

# convert the object into a dict
price_prediction_dict = price_prediction_instance.to_dict()
# create an instance of PricePrediction from a dict
price_prediction_from_dict = PricePrediction.from_dict(price_prediction_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


