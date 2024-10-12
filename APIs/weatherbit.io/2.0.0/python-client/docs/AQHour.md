# AQHour


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**aqi** | **int** | Cloud cover as a percentage (%) | [optional] 
**no2** | **float** | Concentration of NO2 (µg/m³) | [optional] 
**o3** | **float** | Concentration of O3 (µg/m³) | [optional] 
**pm10** | **float** | Concentration of PM 10 (µg/m³) | [optional] 
**pm25** | **float** | Concentration of PM 2.5 (µg/m³) | [optional] 
**so2** | **float** | Concentration of SO2 (µg/m³) | [optional] 
**timestamp_local** | **str** | Timestamp in local time | [optional] 
**timestamp_utc** | **str** | Timestamp UTC | [optional] 
**ts** | **float** | Unix Timestamp | [optional] 

## Example

```python
from openapi_client.models.aq_hour import AQHour

# TODO update the JSON string below
json = "{}"
# create an instance of AQHour from a JSON string
aq_hour_instance = AQHour.from_json(json)
# print the JSON string representation of the object
print(AQHour.to_json())

# convert the object into a dict
aq_hour_dict = aq_hour_instance.to_dict()
# create an instance of AQHour from a dict
aq_hour_from_dict = AQHour.from_dict(aq_hour_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


