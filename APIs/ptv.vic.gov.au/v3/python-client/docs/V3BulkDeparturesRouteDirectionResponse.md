# V3BulkDeparturesRouteDirectionResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**direction_id** | **int** | Direction of travel identifier | [optional] 
**direction_name** | **str** | Name of direction of travel | [optional] 
**route_id** | **str** | Route identifier | [optional] 

## Example

```python
from openapi_client.models.v3_bulk_departures_route_direction_response import V3BulkDeparturesRouteDirectionResponse

# TODO update the JSON string below
json = "{}"
# create an instance of V3BulkDeparturesRouteDirectionResponse from a JSON string
v3_bulk_departures_route_direction_response_instance = V3BulkDeparturesRouteDirectionResponse.from_json(json)
# print the JSON string representation of the object
print(V3BulkDeparturesRouteDirectionResponse.to_json())

# convert the object into a dict
v3_bulk_departures_route_direction_response_dict = v3_bulk_departures_route_direction_response_instance.to_dict()
# create an instance of V3BulkDeparturesRouteDirectionResponse from a dict
v3_bulk_departures_route_direction_response_from_dict = V3BulkDeparturesRouteDirectionResponse.from_dict(v3_bulk_departures_route_direction_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


