# ForecastProperties

The properties of the forecast charge.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**charge** | **float** | The amount of charge | [optional] [readonly] 
**charge_type** | **str** | The type of the charge. Could be actual or forecast | [optional] 
**confidence_levels** | [**List[ForecastPropertiesConfidenceLevelsInner]**](ForecastPropertiesConfidenceLevelsInner.md) | The details about the forecast confidence levels. This is populated only when chargeType is Forecast. | [optional] [readonly] 
**currency** | **str** | The ISO currency in which the meter is charged, for example, USD. | [optional] [readonly] 
**grain** | **str** | The granularity of forecast. | [optional] 
**usage_date** | **str** | The usage date of the forecast. | [optional] [readonly] 

## Example

```python
from openapi_client.models.forecast_properties import ForecastProperties

# TODO update the JSON string below
json = "{}"
# create an instance of ForecastProperties from a JSON string
forecast_properties_instance = ForecastProperties.from_json(json)
# print the JSON string representation of the object
print(ForecastProperties.to_json())

# convert the object into a dict
forecast_properties_dict = forecast_properties_instance.to_dict()
# create an instance of ForecastProperties from a dict
forecast_properties_from_dict = ForecastProperties.from_dict(forecast_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


