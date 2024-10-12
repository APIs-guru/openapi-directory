# V3RouteType


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**route_type** | **int** | Transport mode identifier | [optional] 
**route_type_name** | **str** | Name of transport mode | [optional] 

## Example

```python
from openapi_client.models.v3_route_type import V3RouteType

# TODO update the JSON string below
json = "{}"
# create an instance of V3RouteType from a JSON string
v3_route_type_instance = V3RouteType.from_json(json)
# print the JSON string representation of the object
print(V3RouteType.to_json())

# convert the object into a dict
v3_route_type_dict = v3_route_type_instance.to_dict()
# create an instance of V3RouteType from a dict
v3_route_type_from_dict = V3RouteType.from_dict(v3_route_type_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


