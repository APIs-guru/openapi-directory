# V3RouteResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**route** | **object** |  | [optional] 
**status** | [**V3Status**](V3Status.md) |  | [optional] 

## Example

```python
from openapi_client.models.v3_route_response import V3RouteResponse

# TODO update the JSON string below
json = "{}"
# create an instance of V3RouteResponse from a JSON string
v3_route_response_instance = V3RouteResponse.from_json(json)
# print the JSON string representation of the object
print(V3RouteResponse.to_json())

# convert the object into a dict
v3_route_response_dict = v3_route_response_instance.to_dict()
# create an instance of V3RouteResponse from a dict
v3_route_response_from_dict = V3RouteResponse.from_dict(v3_route_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


