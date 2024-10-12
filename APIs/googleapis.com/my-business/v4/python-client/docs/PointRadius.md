# PointRadius

A radius around a particular point (latitude/longitude).

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**latlng** | [**LatLng**](LatLng.md) |  | [optional] 
**radius_km** | **float** | The distance in kilometers of the area around the point. | [optional] 

## Example

```python
from openapi_client.models.point_radius import PointRadius

# TODO update the JSON string below
json = "{}"
# create an instance of PointRadius from a JSON string
point_radius_instance = PointRadius.from_json(json)
# print the JSON string representation of the object
print(PointRadius.to_json())

# convert the object into a dict
point_radius_dict = point_radius_instance.to_dict()
# create an instance of PointRadius from a dict
point_radius_from_dict = PointRadius.from_dict(point_radius_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


