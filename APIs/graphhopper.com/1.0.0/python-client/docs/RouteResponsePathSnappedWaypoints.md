# RouteResponsePathSnappedWaypoints


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**coordinates** | **List[List[float]]** | A list of coordinate pairs or triples, &#x60;[lon,lat]&#x60; or &#x60;[lon,lat,elevation]&#x60;.  | [optional] 
**type** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.route_response_path_snapped_waypoints import RouteResponsePathSnappedWaypoints

# TODO update the JSON string below
json = "{}"
# create an instance of RouteResponsePathSnappedWaypoints from a JSON string
route_response_path_snapped_waypoints_instance = RouteResponsePathSnappedWaypoints.from_json(json)
# print the JSON string representation of the object
print(RouteResponsePathSnappedWaypoints.to_json())

# convert the object into a dict
route_response_path_snapped_waypoints_dict = route_response_path_snapped_waypoints_instance.to_dict()
# create an instance of RouteResponsePathSnappedWaypoints from a dict
route_response_path_snapped_waypoints_from_dict = RouteResponsePathSnappedWaypoints.from_dict(route_response_path_snapped_waypoints_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


