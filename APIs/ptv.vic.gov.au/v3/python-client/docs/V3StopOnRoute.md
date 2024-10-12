# V3StopOnRoute


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**disruption_ids** | **List[int]** | Disruption information identifier(s) | [optional] 
**route_type** | **int** | Transport mode identifier | [optional] 
**stop_id** | **int** | Stop identifier | [optional] 
**stop_landmark** | **str** | Landmark in proximity of stop | [optional] 
**stop_latitude** | **float** | Geographic coordinate of latitude at stop | [optional] 
**stop_longitude** | **float** | Geographic coordinate of longitude at stop | [optional] 
**stop_name** | **str** | Name of stop | [optional] 
**stop_sequence** | **int** | Sequence of the stop on the route/run; return 0 when route_id or run_id not specified. Order ascendingly by this field (when non zero) to get physical order (earliest first) of stops on the route_id/run_id. | [optional] 
**stop_suburb** | **str** | suburb of stop | [optional] 
**stop_ticket** | [**V3StopTicket**](V3StopTicket.md) |  | [optional] 

## Example

```python
from openapi_client.models.v3_stop_on_route import V3StopOnRoute

# TODO update the JSON string below
json = "{}"
# create an instance of V3StopOnRoute from a JSON string
v3_stop_on_route_instance = V3StopOnRoute.from_json(json)
# print the JSON string representation of the object
print(V3StopOnRoute.to_json())

# convert the object into a dict
v3_stop_on_route_dict = v3_stop_on_route_instance.to_dict()
# create an instance of V3StopOnRoute from a dict
v3_stop_on_route_from_dict = V3StopOnRoute.from_dict(v3_stop_on_route_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


