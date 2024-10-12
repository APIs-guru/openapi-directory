# V3StoppingPattern


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**departures** | [**List[V3PatternDeparture]**](V3PatternDeparture.md) | Timetabled and real-time service departures | [optional] 
**directions** | [**Dict[str, V3Direction]**](V3Direction.md) | Directions of travel of route | [optional] 
**disruptions** | [**List[V3Disruption]**](V3Disruption.md) | Disruption information applicable to relevant routes or stops | [optional] 
**routes** | **Dict[str, object]** | Train lines, tram routes, bus routes, regional coach routes, Night Bus routes | [optional] 
**runs** | [**Dict[str, V3Run]**](V3Run.md) | Individual trips/services of a route | [optional] 
**status** | [**V3Status**](V3Status.md) |  | [optional] 
**stops** | [**Dict[str, V3StoppingPatternStop]**](V3StoppingPatternStop.md) | A train station, tram stop, bus stop, regional coach stop or Night Bus stop | [optional] 

## Example

```python
from openapi_client.models.v3_stopping_pattern import V3StoppingPattern

# TODO update the JSON string below
json = "{}"
# create an instance of V3StoppingPattern from a JSON string
v3_stopping_pattern_instance = V3StoppingPattern.from_json(json)
# print the JSON string representation of the object
print(V3StoppingPattern.to_json())

# convert the object into a dict
v3_stopping_pattern_dict = v3_stopping_pattern_instance.to_dict()
# create an instance of V3StoppingPattern from a dict
v3_stopping_pattern_from_dict = V3StoppingPattern.from_dict(v3_stopping_pattern_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


