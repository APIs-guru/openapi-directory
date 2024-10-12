# PricePredictionPriceRange

Price range around the predicted price, estimating the error in predicted price

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**lower_bound** | **int** | Lower bound | [optional] 
**upper_bound** | **int** | Upper bound | [optional] 

## Example

```python
from openapi_client.models.price_prediction_price_range import PricePredictionPriceRange

# TODO update the JSON string below
json = "{}"
# create an instance of PricePredictionPriceRange from a JSON string
price_prediction_price_range_instance = PricePredictionPriceRange.from_json(json)
# print the JSON string representation of the object
print(PricePredictionPriceRange.to_json())

# convert the object into a dict
price_prediction_price_range_dict = price_prediction_price_range_instance.to_dict()
# create an instance of PricePredictionPriceRange from a dict
price_prediction_price_range_from_dict = PricePredictionPriceRange.from_dict(price_prediction_price_range_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


