# PointPointDailyEveningPrecipitationData


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**total** | **float** | Total precipitation amount accumulated since last hour. (evening sum) Units: metric &#x3D; mm/h, us &#x3D; inches per hour, uk &#x3D; mm/h, ca &#x3D; mm/h | [optional] 
**type** | **bytearray** | Precipitation type, may be one of:  * &#x60;none&#x60;, it there is no precipitation * &#x60;rain&#x60; * &#x60;snow&#x60; * &#x60;rain_snow&#x60; * &#x60;ice pellets&#x60; * &#x60;frozen rain&#x60;  Unit: precipitation type | [optional] 

## Example

```python
from openapi_client.models.point_point_daily_evening_precipitation_data import PointPointDailyEveningPrecipitationData

# TODO update the JSON string below
json = "{}"
# create an instance of PointPointDailyEveningPrecipitationData from a JSON string
point_point_daily_evening_precipitation_data_instance = PointPointDailyEveningPrecipitationData.from_json(json)
# print the JSON string representation of the object
print(PointPointDailyEveningPrecipitationData.to_json())

# convert the object into a dict
point_point_daily_evening_precipitation_data_dict = point_point_daily_evening_precipitation_data_instance.to_dict()
# create an instance of PointPointDailyEveningPrecipitationData from a dict
point_point_daily_evening_precipitation_data_from_dict = PointPointDailyEveningPrecipitationData.from_dict(point_point_daily_evening_precipitation_data_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


