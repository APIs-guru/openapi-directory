# V3DirectionsResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**directions** | [**List[V3DirectionWithDescription]**](V3DirectionWithDescription.md) | Directions of travel of route | [optional] 
**status** | [**V3Status**](V3Status.md) |  | [optional] 

## Example

```python
from openapi_client.models.v3_directions_response import V3DirectionsResponse

# TODO update the JSON string below
json = "{}"
# create an instance of V3DirectionsResponse from a JSON string
v3_directions_response_instance = V3DirectionsResponse.from_json(json)
# print the JSON string representation of the object
print(V3DirectionsResponse.to_json())

# convert the object into a dict
v3_directions_response_dict = v3_directions_response_instance.to_dict()
# create an instance of V3DirectionsResponse from a dict
v3_directions_response_from_dict = V3DirectionsResponse.from_dict(v3_directions_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


