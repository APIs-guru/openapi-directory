# V3SearchResult


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**outlets** | [**List[V3ResultOutlet]**](V3ResultOutlet.md) | myki ticket outlets | [optional] 
**routes** | [**List[V3ResultRoute]**](V3ResultRoute.md) | Train lines, tram routes, bus routes, regional coach routes, Night Bus routes | [optional] 
**status** | [**V3Status**](V3Status.md) |  | [optional] 
**stops** | [**List[V3ResultStop]**](V3ResultStop.md) | Train stations, tram stops, bus stops, regional coach stops or Night Bus stops | [optional] 

## Example

```python
from openapi_client.models.v3_search_result import V3SearchResult

# TODO update the JSON string below
json = "{}"
# create an instance of V3SearchResult from a JSON string
v3_search_result_instance = V3SearchResult.from_json(json)
# print the JSON string representation of the object
print(V3SearchResult.to_json())

# convert the object into a dict
v3_search_result_dict = v3_search_result_instance.to_dict()
# create an instance of V3SearchResult from a dict
v3_search_result_from_dict = V3SearchResult.from_dict(v3_search_result_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


