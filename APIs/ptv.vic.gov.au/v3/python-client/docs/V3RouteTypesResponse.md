# V3RouteTypesResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**route_types** | [**List[V3RouteType]**](V3RouteType.md) | Transport mode identifiers | [optional] 
**status** | [**V3Status**](V3Status.md) |  | [optional] 

## Example

```python
from openapi_client.models.v3_route_types_response import V3RouteTypesResponse

# TODO update the JSON string below
json = "{}"
# create an instance of V3RouteTypesResponse from a JSON string
v3_route_types_response_instance = V3RouteTypesResponse.from_json(json)
# print the JSON string representation of the object
print(V3RouteTypesResponse.to_json())

# convert the object into a dict
v3_route_types_response_dict = v3_route_types_response_instance.to_dict()
# create an instance of V3RouteTypesResponse from a dict
v3_route_types_response_from_dict = V3RouteTypesResponse.from_dict(v3_route_types_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


