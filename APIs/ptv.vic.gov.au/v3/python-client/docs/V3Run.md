# V3Run


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**destination_name** | **str** | Name of destination of run | [optional] 
**direction_id** | **int** | Direction of travel identifier | [optional] 
**express_stop_count** | **int** | The number of remaining skipped/express stations for the run/service from a stop | [optional] 
**final_stop_id** | **int** | stop_id of final stop of run | [optional] 
**geopath** | **List[object]** | Geopath of the route | [optional] 
**route_id** | **int** | Route identifier | [optional] 
**route_type** | **int** | Transport mode identifier | [optional] 
**run_id** | **int** | Numeric trip/service run identifier. Defaults to -1 when run identifier is Alphanumeric | [optional] [readonly] 
**run_ref** | **str** | Alphanumeric trip/service run identifier | [optional] 
**run_sequence** | **int** | Chronological sequence of the trip/service run on the route in direction. Order ascendingly by this field to get chronological order (earliest first) of runs with the same route_id and direction_id. | [optional] 
**status** | **str** | Status of metropolitan train run; returns \&quot;scheduled\&quot; for other modes | [optional] 
**vehicle_descriptor** | [**V3VehicleDescriptor**](V3VehicleDescriptor.md) |  | [optional] 
**vehicle_position** | [**V3VehiclePosition**](V3VehiclePosition.md) |  | [optional] 

## Example

```python
from openapi_client.models.v3_run import V3Run

# TODO update the JSON string below
json = "{}"
# create an instance of V3Run from a JSON string
v3_run_instance = V3Run.from_json(json)
# print the JSON string representation of the object
print(V3Run.to_json())

# convert the object into a dict
v3_run_dict = v3_run_instance.to_dict()
# create an instance of V3Run from a dict
v3_run_from_dict = V3Run.from_dict(v3_run_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


