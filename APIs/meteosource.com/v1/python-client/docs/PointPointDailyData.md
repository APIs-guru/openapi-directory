# PointPointDailyData


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**afternoon** | [**PointPointDailyAfternoonData**](PointPointDailyAfternoonData.md) |  | [optional] 
**all_day** | [**PointPointDailyAllDayData**](PointPointDailyAllDayData.md) |  | 
**astro** | [**PointPointDailyAstroData**](PointPointDailyAstroData.md) |  | 
**day** | **bytearray** | Datetime in YYYY-MM-DDTHH:MM:SS format. | [optional] 
**evening** | [**PointPointDailyEveningData**](PointPointDailyEveningData.md) |  | [optional] 
**icon** | **int** | Numeric identifier of the weather icon. The following values can appear:  * 1 - Not available * 2 - Sunny * 3 - Mostly sunny * 4 - Partly sunny * 5 - Mostly cloudy * 6 - Cloudy * 7 - Overcast * 8 - Overcast with low clouds * 9 - Fog * 10 - Light rain * 11 - Rain * 12 - Possible rain * 13 - Rain shower * 14 - Thunderstorm * 15 - Local thunderstorms * 16 - Light snow * 17 - Snow * 18 - Possible snow * 19 - Snow shower * 20 - Rain and snow * 21 - Possible rain and snow * 22 - Rain and snow * 23 - Freezing rain * 24 - Possible freezing rain * 25 - Hail * 26 - Clear (night) * 27 - Mostly clear (night) * 28 - Partly clear (night) * 29 - Mostly cloudy (night) * 30 - Cloudy (night) * 31 - Overcast with low clouds (night) * 32 - Rain shower (night) * 33 - Local thunderstorms (night) * 34 - Snow shower (night) * 35 - Rain and snow (night) * 36 - Possible freezing rain (night)  Unit: icon | [optional] 
**morning** | [**PointPointDailyMorningData**](PointPointDailyMorningData.md) |  | [optional] 
**predictability** | **int** | Weather predictability. Values from 1 (very high predictability) to 5 (very low predictability). Unit: 1-5 | [optional] 
**statistics** | [**PointPointDailyStatsData**](PointPointDailyStatsData.md) |  | 
**summary** | **str** | Short text summary of the weather, e.g. &#x60;Light rain&#x60;. | [optional] 
**weather** | **str** | All day string identifier of the weather icon, e.g. &#x60;light_rain&#x60;. | [optional] 

## Example

```python
from openapi_client.models.point_point_daily_data import PointPointDailyData

# TODO update the JSON string below
json = "{}"
# create an instance of PointPointDailyData from a JSON string
point_point_daily_data_instance = PointPointDailyData.from_json(json)
# print the JSON string representation of the object
print(PointPointDailyData.to_json())

# convert the object into a dict
point_point_daily_data_dict = point_point_daily_data_instance.to_dict()
# create an instance of PointPointDailyData from a dict
point_point_daily_data_from_dict = PointPointDailyData.from_dict(point_point_daily_data_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


