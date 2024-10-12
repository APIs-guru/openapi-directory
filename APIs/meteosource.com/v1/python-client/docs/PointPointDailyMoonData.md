# PointPointDailyMoonData


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**always_down** | **bool** | True if the moon never rises on given day, false otherwise. | [optional] 
**always_up** | **bool** | True if the moon never sets on given day, false otherwise. | [optional] 
**phase** | **bytearray** | Name of the moon phase, one of &#39;new_moon&#39;, &#39;first_quarter&#39;, &#39;full_moon&#39;, &#39;last_quarter&#39;. | [optional] 
**rise** | **datetime** | Datetime of the moonrise or null if the moon does not rise on given day. | [optional] 
**set** | **datetime** | Datetime of the moonset or null if the moon does not set on given day. | [optional] 

## Example

```python
from openapi_client.models.point_point_daily_moon_data import PointPointDailyMoonData

# TODO update the JSON string below
json = "{}"
# create an instance of PointPointDailyMoonData from a JSON string
point_point_daily_moon_data_instance = PointPointDailyMoonData.from_json(json)
# print the JSON string representation of the object
print(PointPointDailyMoonData.to_json())

# convert the object into a dict
point_point_daily_moon_data_dict = point_point_daily_moon_data_instance.to_dict()
# create an instance of PointPointDailyMoonData from a dict
point_point_daily_moon_data_from_dict = PointPointDailyMoonData.from_dict(point_point_daily_moon_data_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


