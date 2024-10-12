# V3StopsByDistanceResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**disruptions** | [**Dict[str, V3Disruption]**](V3Disruption.md) | Disruption information applicable to relevant routes or stops | [optional] 
**status** | [**V3Status**](V3Status.md) |  | [optional] 
**stops** | [**List[V3StopGeosearch]**](V3StopGeosearch.md) | Train stations, tram stops, bus stops, regional coach stops or Night Bus stops | [optional] 

## Example

```python
from openapi_client.models.v3_stops_by_distance_response import V3StopsByDistanceResponse

# TODO update the JSON string below
json = "{}"
# create an instance of V3StopsByDistanceResponse from a JSON string
v3_stops_by_distance_response_instance = V3StopsByDistanceResponse.from_json(json)
# print the JSON string representation of the object
print(V3StopsByDistanceResponse.to_json())

# convert the object into a dict
v3_stops_by_distance_response_dict = v3_stops_by_distance_response_instance.to_dict()
# create an instance of V3StopsByDistanceResponse from a dict
v3_stops_by_distance_response_from_dict = V3StopsByDistanceResponse.from_dict(v3_stops_by_distance_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


