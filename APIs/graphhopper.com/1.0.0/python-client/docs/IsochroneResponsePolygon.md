# IsochroneResponsePolygon

A found path

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**geometry** | [**Polygon**](Polygon.md) |  | [optional] 
**properties** | [**IsochroneResponsePolygonProperties**](IsochroneResponsePolygonProperties.md) |  | [optional] 
**type** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.isochrone_response_polygon import IsochroneResponsePolygon

# TODO update the JSON string below
json = "{}"
# create an instance of IsochroneResponsePolygon from a JSON string
isochrone_response_polygon_instance = IsochroneResponsePolygon.from_json(json)
# print the JSON string representation of the object
print(IsochroneResponsePolygon.to_json())

# convert the object into a dict
isochrone_response_polygon_dict = isochrone_response_polygon_instance.to_dict()
# create an instance of IsochroneResponsePolygon from a dict
isochrone_response_polygon_from_dict = IsochroneResponsePolygon.from_dict(isochrone_response_polygon_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


