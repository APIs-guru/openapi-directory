# VenuesByPolygon

Geometry-defining arguments for polygon requests

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**poly** | **object** |  | 

## Example

```python
from openapi_client.models.venues_by_polygon import VenuesByPolygon

# TODO update the JSON string below
json = "{}"
# create an instance of VenuesByPolygon from a JSON string
venues_by_polygon_instance = VenuesByPolygon.from_json(json)
# print the JSON string representation of the object
print(VenuesByPolygon.to_json())

# convert the object into a dict
venues_by_polygon_dict = venues_by_polygon_instance.to_dict()
# create an instance of VenuesByPolygon from a dict
venues_by_polygon_from_dict = VenuesByPolygon.from_dict(venues_by_polygon_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


