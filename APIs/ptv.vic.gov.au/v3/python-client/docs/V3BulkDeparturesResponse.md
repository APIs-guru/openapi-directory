# V3BulkDeparturesResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**directions** | [**List[V3Direction]**](V3Direction.md) | Directions of travel of route | [optional] 
**disruptions** | [**Dict[str, V3Disruption]**](V3Disruption.md) | Disruption information applicable to relevant routes or stops | [optional] 
**responses** | [**List[V3BulkDeparturesUpdateResponse]**](V3BulkDeparturesUpdateResponse.md) | Contains departures for the requested stop and route(s). It includes details as to the route_direction and whether it is still valid. | [optional] 
**routes** | **List[object]** | Train lines, tram routes, bus routes, regional coach routes, Night Bus routes | [optional] 
**runs** | [**List[V3Run]**](V3Run.md) | Individual trips/services of a route | [optional] 
**status** | [**V3Status**](V3Status.md) |  | [optional] 
**stops** | [**Dict[str, V3BulkDeparturesStopResponse]**](V3BulkDeparturesStopResponse.md) | A train station, tram stop, bus stop, regional coach stop or Night Bus stop | [optional] 

## Example

```python
from openapi_client.models.v3_bulk_departures_response import V3BulkDeparturesResponse

# TODO update the JSON string below
json = "{}"
# create an instance of V3BulkDeparturesResponse from a JSON string
v3_bulk_departures_response_instance = V3BulkDeparturesResponse.from_json(json)
# print the JSON string representation of the object
print(V3BulkDeparturesResponse.to_json())

# convert the object into a dict
v3_bulk_departures_response_dict = v3_bulk_departures_response_instance.to_dict()
# create an instance of V3BulkDeparturesResponse from a dict
v3_bulk_departures_response_from_dict = V3BulkDeparturesResponse.from_dict(v3_bulk_departures_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


