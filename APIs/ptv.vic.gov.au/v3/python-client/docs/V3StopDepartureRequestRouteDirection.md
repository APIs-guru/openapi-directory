# V3StopDepartureRequestRouteDirection


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**direction_id** | **int** | Direction of travel identifier; values returned by Directions API - v3/directions | [optional] 
**direction_name** | **str** | Name of direction of travel; values returned by Directions API - v3/directions | 
**route_id** | **str** | Identifier of route; values returned by Routes API - v3/routes | [optional] 

## Example

```python
from openapi_client.models.v3_stop_departure_request_route_direction import V3StopDepartureRequestRouteDirection

# TODO update the JSON string below
json = "{}"
# create an instance of V3StopDepartureRequestRouteDirection from a JSON string
v3_stop_departure_request_route_direction_instance = V3StopDepartureRequestRouteDirection.from_json(json)
# print the JSON string representation of the object
print(V3StopDepartureRequestRouteDirection.to_json())

# convert the object into a dict
v3_stop_departure_request_route_direction_dict = v3_stop_departure_request_route_direction_instance.to_dict()
# create an instance of V3StopDepartureRequestRouteDirection from a dict
v3_stop_departure_request_route_direction_from_dict = V3StopDepartureRequestRouteDirection.from_dict(v3_stop_departure_request_route_direction_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


