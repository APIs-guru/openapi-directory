# PointPointHourlyPrecipitationData


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**convective** | **float** | Total precipitation amount accumulated since last hour. Units: metric &#x3D; mm/h, us &#x3D; inches per hour, uk &#x3D; mm/h, ca &#x3D; mm/h | [optional] 
**rainspot** | **bytearray** | Precipitation in the surrounding of queried location. The data is 7x7 ASCII art string, queried location being in the center. Character &#x60;#&#x60; means there is precipitation, &#x60;.&#x60; means no precipitation. The distance between neighboring cells is 0.25°. Unit: rainspot | [optional] 
**total** | **float** | Total precipitation amount accumulated since last hour. Units: metric &#x3D; mm/h, us &#x3D; inches per hour, uk &#x3D; mm/h, ca &#x3D; mm/h | [optional] 
**type** | **bytearray** | Precipitation type, may be one of:  * &#x60;none&#x60;, it there is no precipitation * &#x60;rain&#x60; * &#x60;snow&#x60; * &#x60;rain_snow&#x60; * &#x60;ice pellets&#x60; * &#x60;frozen rain&#x60;  Unit: precipitation type | [optional] 

## Example

```python
from openapi_client.models.point_point_hourly_precipitation_data import PointPointHourlyPrecipitationData

# TODO update the JSON string below
json = "{}"
# create an instance of PointPointHourlyPrecipitationData from a JSON string
point_point_hourly_precipitation_data_instance = PointPointHourlyPrecipitationData.from_json(json)
# print the JSON string representation of the object
print(PointPointHourlyPrecipitationData.to_json())

# convert the object into a dict
point_point_hourly_precipitation_data_dict = point_point_hourly_precipitation_data_instance.to_dict()
# create an instance of PointPointHourlyPrecipitationData from a dict
point_point_hourly_precipitation_data_from_dict = PointPointHourlyPrecipitationData.from_dict(point_point_hourly_precipitation_data_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


