# ForecastPropertiesConfidenceLevelsInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**bound** | **str** | The boundary of the percentage, values could be &#39;Upper&#39; or &#39;Lower&#39; | [optional] 
**percentage** | **float** | The percentage level of the confidence | [optional] [readonly] 
**value** | **float** | The amount of forecast within the percentage level | [optional] [readonly] 

## Example

```python
from openapi_client.models.forecast_properties_confidence_levels_inner import ForecastPropertiesConfidenceLevelsInner

# TODO update the JSON string below
json = "{}"
# create an instance of ForecastPropertiesConfidenceLevelsInner from a JSON string
forecast_properties_confidence_levels_inner_instance = ForecastPropertiesConfidenceLevelsInner.from_json(json)
# print the JSON string representation of the object
print(ForecastPropertiesConfidenceLevelsInner.to_json())

# convert the object into a dict
forecast_properties_confidence_levels_inner_dict = forecast_properties_confidence_levels_inner_instance.to_dict()
# create an instance of ForecastPropertiesConfidenceLevelsInner from a dict
forecast_properties_confidence_levels_inner_from_dict = ForecastPropertiesConfidenceLevelsInner.from_dict(forecast_properties_confidence_levels_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


