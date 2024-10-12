# Route


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**activities** | [**List[Activity]**](Activity.md) | Array of activities | [optional] 
**completion_time** | **int** | Completion time of route in seconds | [optional] 
**distance** | **int** | Distance of route in meter | [optional] 
**points** | [**List[RoutePoint]**](RoutePoint.md) | Array of route planning points | [optional] 
**preparation_time** | **int** | Preparation time of route in seconds | [optional] 
**service_duration** | **int** | Service duration of route in seconds | [optional] 
**transport_time** | **int** | Transport time of route in seconds | [optional] 
**vehicle_id** | **str** | Id of vehicle that operates route | [optional] 
**waiting_time** | **int** | Waiting time of route in seconds | [optional] 

## Example

```python
from openapi_client.models.route import Route

# TODO update the JSON string below
json = "{}"
# create an instance of Route from a JSON string
route_instance = Route.from_json(json)
# print the JSON string representation of the object
print(Route.to_json())

# convert the object into a dict
route_dict = route_instance.to_dict()
# create an instance of Route from a dict
route_from_dict = Route.from_dict(route_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


