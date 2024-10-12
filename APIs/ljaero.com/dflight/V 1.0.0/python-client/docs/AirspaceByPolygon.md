# AirspaceByPolygon

Geometry-defining arguments for polygon requests

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**asptypes** | **List[str]** |  | 
**poly** | **object** |  | 

## Example

```python
from openapi_client.models.airspace_by_polygon import AirspaceByPolygon

# TODO update the JSON string below
json = "{}"
# create an instance of AirspaceByPolygon from a JSON string
airspace_by_polygon_instance = AirspaceByPolygon.from_json(json)
# print the JSON string representation of the object
print(AirspaceByPolygon.to_json())

# convert the object into a dict
airspace_by_polygon_dict = airspace_by_polygon_instance.to_dict()
# create an instance of AirspaceByPolygon from a dict
airspace_by_polygon_from_dict = AirspaceByPolygon.from_dict(airspace_by_polygon_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


