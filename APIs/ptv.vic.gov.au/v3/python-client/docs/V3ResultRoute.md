# V3ResultRoute


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**route_gtfs_id** | **str** | GTFS Identifer of the route | [optional] 
**route_id** | **int** | Route identifier | [optional] 
**route_name** | **str** | Name of route | [optional] 
**route_number** | **str** | Route number presented to public (nb. not route_id) | [optional] 
**route_service_status** | [**V3RouteServiceStatus**](V3RouteServiceStatus.md) |  | [optional] 
**route_type** | **int** | Transport mode identifier | [optional] 

## Example

```python
from openapi_client.models.v3_result_route import V3ResultRoute

# TODO update the JSON string below
json = "{}"
# create an instance of V3ResultRoute from a JSON string
v3_result_route_instance = V3ResultRoute.from_json(json)
# print the JSON string representation of the object
print(V3ResultRoute.to_json())

# convert the object into a dict
v3_result_route_dict = v3_result_route_instance.to_dict()
# create an instance of V3ResultRoute from a dict
v3_result_route_from_dict = V3ResultRoute.from_dict(v3_result_route_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


