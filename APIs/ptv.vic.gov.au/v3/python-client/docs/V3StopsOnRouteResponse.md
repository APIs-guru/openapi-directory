# V3StopsOnRouteResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**disruptions** | [**Dict[str, V3Disruption]**](V3Disruption.md) | Disruption information applicable to relevant routes or stops | [optional] 
**geopath** | **List[object]** | GeoPath for the route | [optional] 
**status** | [**V3Status**](V3Status.md) |  | [optional] 
**stops** | [**List[V3StopOnRoute]**](V3StopOnRoute.md) | Train stations, tram stops, bus stops, regional coach stops or Night Bus stops | [optional] 

## Example

```python
from openapi_client.models.v3_stops_on_route_response import V3StopsOnRouteResponse

# TODO update the JSON string below
json = "{}"
# create an instance of V3StopsOnRouteResponse from a JSON string
v3_stops_on_route_response_instance = V3StopsOnRouteResponse.from_json(json)
# print the JSON string representation of the object
print(V3StopsOnRouteResponse.to_json())

# convert the object into a dict
v3_stops_on_route_response_dict = v3_stops_on_route_response_instance.to_dict()
# create an instance of V3StopsOnRouteResponse from a dict
v3_stops_on_route_response_from_dict = V3StopsOnRouteResponse.from_dict(v3_stops_on_route_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


