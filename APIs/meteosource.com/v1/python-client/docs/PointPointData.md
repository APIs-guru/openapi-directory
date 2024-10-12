# PointPointData


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**alerts** | [**PointPointAlerts**](PointPointAlerts.md) |  | 
**current** | [**PointPointCurrentData**](PointPointCurrentData.md) |  | [optional] 
**daily** | [**PointPointDaily**](PointPointDaily.md) |  | [optional] 
**elevation** | **int** | Elevation above sea level in metres (for units &#39;metric&#39;, &#39;uk&#39;, &#39;ca&#39;) or feet (for units &#39;us&#39;) | 
**hourly** | [**PointPointHourly**](PointPointHourly.md) |  | [optional] 
**lat** | **str** | Latitude of the point, always in the format &lt;float&gt;&lt;N/S&gt;, for example &#x60;&#x60;23.5S&#x60;&#x60; | 
**lon** | **str** | Longitude of the point, always in the format &lt;float&gt;&lt;E/W&gt;, for example &#x60;&#x60;23.5W&#x60;&#x60; | 
**minutely** | [**PointPointMinutely**](PointPointMinutely.md) |  | [optional] 
**timezone** | **str** | Name of the timezone in format like &#39;Europe/London&#39;. Available only when the place is specified through place ID. | [optional] 
**units** | **str** | Unit system (metric, uk, ca or us) | 

## Example

```python
from openapi_client.models.point_point_data import PointPointData

# TODO update the JSON string below
json = "{}"
# create an instance of PointPointData from a JSON string
point_point_data_instance = PointPointData.from_json(json)
# print the JSON string representation of the object
print(PointPointData.to_json())

# convert the object into a dict
point_point_data_dict = point_point_data_instance.to_dict()
# create an instance of PointPointData from a dict
point_point_data_from_dict = PointPointData.from_dict(point_point_data_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


