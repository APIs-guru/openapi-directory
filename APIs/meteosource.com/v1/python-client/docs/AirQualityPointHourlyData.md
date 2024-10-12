# AirQualityPointHourlyData


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**aerosol_550** | **float** | Total aerosol optical depth at 550 nm. Unit: dimensionless | [optional] 
**air_quality** | **float** | Air quality index. The following values can appear:  * 1 - Very good * 2 - Good * 3 - Medium * 4 - Poor * 5 - Very poor * 6 - Extremely poor  Unit: index | [optional] 
**co_surface** | **float** | Carbon monoxide at surface level. Unit: µg/m3 | [optional] 
**var_date** | **datetime** | Datetime in YYYY-MM-DDTHH:MM:SS format. | [optional] 
**dust_550nm** | **float** | Dust aerosol optical depth at 550 nm. Unit: dimensionless | [optional] 
**dust_mixing_ratio_05** | **float** | Dust aerosol (0.55 - 0.9 µm) mixing ratio. Unit: kg/kg | [optional] 
**no2_surface** | **float** | Nitrogen dioxide at surface level. Unit: µg/m3 | [optional] 
**no_surface** | **float** | Nitrogen monoxide at surface level. Unit: µg/m3 | [optional] 
**ozone_surface** | **float** | Ozone. Unit: µg/m3 | [optional] 
**ozone_total** | **float** | Total column ozone. Unit: Dobson | [optional] 
**pm10** | **float** | Particulate matter d &lt; 10 µm (PM10). Unit: µg/m3 | [optional] 
**pm25** | **float** | Particulate matter d &lt; 2.5 µm (PM2.5). Unit: µg/m3 | [optional] 
**so2_surface** | **float** | Sulphur dioxide at surface level. Unit: µg/m3 | [optional] 

## Example

```python
from openapi_client.models.air_quality_point_hourly_data import AirQualityPointHourlyData

# TODO update the JSON string below
json = "{}"
# create an instance of AirQualityPointHourlyData from a JSON string
air_quality_point_hourly_data_instance = AirQualityPointHourlyData.from_json(json)
# print the JSON string representation of the object
print(AirQualityPointHourlyData.to_json())

# convert the object into a dict
air_quality_point_hourly_data_dict = air_quality_point_hourly_data_instance.to_dict()
# create an instance of AirQualityPointHourlyData from a dict
air_quality_point_hourly_data_from_dict = AirQualityPointHourlyData.from_dict(air_quality_point_hourly_data_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


