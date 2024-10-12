# V3DeparturesResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**departures** | [**List[V3Departure]**](V3Departure.md) | Timetabled and real-time service departures | [optional] 
**directions** | [**Dict[str, V3Direction]**](V3Direction.md) | Directions of travel of route | [optional] 
**disruptions** | [**Dict[str, V3Disruption]**](V3Disruption.md) | Disruption information applicable to relevant routes or stops | [optional] 
**routes** | **Dict[str, object]** | Train lines, tram routes, bus routes, regional coach routes, Night Bus routes | [optional] 
**runs** | [**Dict[str, V3Run]**](V3Run.md) | Individual trips/services of a route | [optional] 
**status** | [**V3Status**](V3Status.md) |  | [optional] 
**stops** | [**Dict[str, V3StopModel]**](V3StopModel.md) | A train station, tram stop, bus stop, regional coach stop or Night Bus stop | [optional] 

## Example

```python
from openapi_client.models.v3_departures_response import V3DeparturesResponse

# TODO update the JSON string below
json = "{}"
# create an instance of V3DeparturesResponse from a JSON string
v3_departures_response_instance = V3DeparturesResponse.from_json(json)
# print the JSON string representation of the object
print(V3DeparturesResponse.to_json())

# convert the object into a dict
v3_departures_response_dict = v3_departures_response_instance.to_dict()
# create an instance of V3DeparturesResponse from a dict
v3_departures_response_from_dict = V3DeparturesResponse.from_dict(v3_departures_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


