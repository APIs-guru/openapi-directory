# V3RouteServiceStatus


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**description** | **str** |  | [optional] 
**timestamp** | **datetime** |  | [optional] 

## Example

```python
from openapi_client.models.v3_route_service_status import V3RouteServiceStatus

# TODO update the JSON string below
json = "{}"
# create an instance of V3RouteServiceStatus from a JSON string
v3_route_service_status_instance = V3RouteServiceStatus.from_json(json)
# print the JSON string representation of the object
print(V3RouteServiceStatus.to_json())

# convert the object into a dict
v3_route_service_status_dict = v3_route_service_status_instance.to_dict()
# create an instance of V3RouteServiceStatus from a dict
v3_route_service_status_from_dict = V3RouteServiceStatus.from_dict(v3_route_service_status_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


