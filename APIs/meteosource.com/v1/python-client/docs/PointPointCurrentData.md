# PointPointCurrentData


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**cloud_cover** | **float** | Percentage of sky covered by clouds. Unit: \\% | [optional] 
**dew_point** | **float** | Current dew point temperature. Units: metric &#x3D; °C, us &#x3D; °F, uk &#x3D; °C, ca &#x3D; °C | [optional] 
**feels_like** | **float** | Feels like temperature. Units: metric &#x3D; °C, us &#x3D; °F, uk &#x3D; °C, ca &#x3D; °C | [optional] 
**humidity** | **int** | Relative humidity. Unit: \\% | [optional] 
**icon** | **str** | String identifier of current weather icon, e.g. &#x60;light_rain&#x60;. | [optional] 
**icon_num** | **int** | Numeric identifier of current weather icon. The following values can appear:  * 1 - Not available * 2 - Sunny * 3 - Mostly sunny * 4 - Partly sunny * 5 - Mostly cloudy * 6 - Cloudy * 7 - Overcast * 8 - Overcast with low clouds * 9 - Fog * 10 - Light rain * 11 - Rain * 12 - Possible rain * 13 - Rain shower * 14 - Thunderstorm * 15 - Local thunderstorms * 16 - Light snow * 17 - Snow * 18 - Possible snow * 19 - Snow shower * 20 - Rain and snow * 21 - Possible rain and snow * 22 - Rain and snow * 23 - Freezing rain * 24 - Possible freezing rain * 25 - Hail * 26 - Clear (night) * 27 - Mostly clear (night) * 28 - Partly clear (night) * 29 - Mostly cloudy (night) * 30 - Cloudy (night) * 31 - Overcast with low clouds (night) * 32 - Rain shower (night) * 33 - Local thunderstorms (night) * 34 - Snow shower (night) * 35 - Rain and snow (night) * 36 - Possible freezing rain (night)  Unit: weather_ico0_36 | [optional] 
**irradiance** | **float** | Global downward short-wave radiation flux. Unit: W/m2 | [optional] 
**ozone** | **float** | Total column of ozone. Unit: Dobson | [optional] 
**precipitation** | [**PointPointCurrentPrecipitationData**](PointPointCurrentPrecipitationData.md) |  | 
**pressure** | **float** | Atmospheric pressure at mean sea level. Units: metric &#x3D; hPa, us &#x3D; Hg, uk &#x3D; hPa, ca &#x3D; kPa | [optional] 
**summary** | **str** | Short text summary of current weather, e.g. &#x60;Light rain&#x60;. | [optional] 
**temperature** | **float** | Current temperature 2 metres above ground. Units: metric &#x3D; °C, us &#x3D; °F, uk &#x3D; °C, ca &#x3D; °C | [optional] 
**uv_index** | **float** | UV index, values from zero (low risk of harm) to 11+ (extreme risk of harm). Unit: uv_index | [optional] 
**visibility** | **float** | Visibility. Units: metric &#x3D; km, us &#x3D; mi, uk &#x3D; mi, ca &#x3D; km | [optional] 
**wind** | [**PointPointCurrentWindData**](PointPointCurrentWindData.md) |  | 
**wind_chill** | **float** | Windchill temperature. Units: metric &#x3D; °C, us &#x3D; °F, uk &#x3D; °C, ca &#x3D; °C | [optional] 

## Example

```python
from openapi_client.models.point_point_current_data import PointPointCurrentData

# TODO update the JSON string below
json = "{}"
# create an instance of PointPointCurrentData from a JSON string
point_point_current_data_instance = PointPointCurrentData.from_json(json)
# print the JSON string representation of the object
print(PointPointCurrentData.to_json())

# convert the object into a dict
point_point_current_data_dict = point_point_current_data_instance.to_dict()
# create an instance of PointPointCurrentData from a dict
point_point_current_data_from_dict = PointPointCurrentData.from_dict(point_point_current_data_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


