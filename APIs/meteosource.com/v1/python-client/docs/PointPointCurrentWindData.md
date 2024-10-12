# PointPointCurrentWindData


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**angle** | **float** | Wind direction angle in degrees, 180° means wind from the south. Unit: degrees | [optional] 
**dir** | **bytearray** | Wind direction in &#x60;N&#x60;, &#x60;NNE&#x60;, &#x60;NE&#x60;, ..., &#x60;NNW&#x60; format. Unit: 16dir | [optional] 
**gusts** | **float** | Wind gust speed. Units: metric &#x3D; m/s, us &#x3D; mph, uk &#x3D; mph, ca &#x3D; km/h | [optional] 
**speed** | **float** | Wind speed 10 metres above the ground. Units: metric &#x3D; m/s, us &#x3D; mph, uk &#x3D; mph, ca &#x3D; km/h | [optional] 

## Example

```python
from openapi_client.models.point_point_current_wind_data import PointPointCurrentWindData

# TODO update the JSON string below
json = "{}"
# create an instance of PointPointCurrentWindData from a JSON string
point_point_current_wind_data_instance = PointPointCurrentWindData.from_json(json)
# print the JSON string representation of the object
print(PointPointCurrentWindData.to_json())

# convert the object into a dict
point_point_current_wind_data_dict = point_point_current_wind_data_instance.to_dict()
# create an instance of PointPointCurrentWindData from a dict
point_point_current_wind_data_from_dict = PointPointCurrentWindData.from_dict(point_point_current_wind_data_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


