# V3BulkDeparturesUpdateResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**departures** | [**List[V3Departure]**](V3Departure.md) | Timetabled and real-time service departures | [optional] 
**requested_route_direction** | [**V3BulkDeparturesRouteDirectionResponse**](V3BulkDeparturesRouteDirectionResponse.md) |  | [optional] 
**route_direction** | [**V3BulkDeparturesRouteDirectionResponse**](V3BulkDeparturesRouteDirectionResponse.md) |  | [optional] 
**route_direction_status** | **int** | The status of the route direction (changed | unchanged).              If changed, requests should change the requested_route_direction for the route_direction supplied. | [optional] 
**route_type** | **int** | Transport mode identifier | [optional] 
**stop_id** | **int** | Stop identifier | [optional] 

## Example

```python
from openapi_client.models.v3_bulk_departures_update_response import V3BulkDeparturesUpdateResponse

# TODO update the JSON string below
json = "{}"
# create an instance of V3BulkDeparturesUpdateResponse from a JSON string
v3_bulk_departures_update_response_instance = V3BulkDeparturesUpdateResponse.from_json(json)
# print the JSON string representation of the object
print(V3BulkDeparturesUpdateResponse.to_json())

# convert the object into a dict
v3_bulk_departures_update_response_dict = v3_bulk_departures_update_response_instance.to_dict()
# create an instance of V3BulkDeparturesUpdateResponse from a dict
v3_bulk_departures_update_response_from_dict = V3BulkDeparturesUpdateResponse.from_dict(v3_bulk_departures_update_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


