# V3StopDepartureRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**gtfs** | **bool** | Indicates that stop_id parameter will accept \&quot;GTFS stop_id\&quot; data and route_directions[x].route_id parameters will accept route_gtfs_id data | [optional] 
**max_results** | **int** | Maximum number of results returned | [optional] 
**route_directions** | [**List[V3StopDepartureRequestRouteDirection]**](V3StopDepartureRequestRouteDirection.md) | The route directions to find departures for at this stop. | 
**route_type** | **int** | Number identifying transport mode; values returned via RouteTypes API | [optional] 
**stop_id** | **int** | Identifier of stop; values returned by Stops API | [optional] 

## Example

```python
from openapi_client.models.v3_stop_departure_request import V3StopDepartureRequest

# TODO update the JSON string below
json = "{}"
# create an instance of V3StopDepartureRequest from a JSON string
v3_stop_departure_request_instance = V3StopDepartureRequest.from_json(json)
# print the JSON string representation of the object
print(V3StopDepartureRequest.to_json())

# convert the object into a dict
v3_stop_departure_request_dict = v3_stop_departure_request_instance.to_dict()
# create an instance of V3StopDepartureRequest from a dict
v3_stop_departure_request_from_dict = V3StopDepartureRequest.from_dict(v3_stop_departure_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


