# CreateNetworkFloorPlanRequestTopLeftCorner

The longitude and latitude of the top left corner of your floor plan.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**lat** | **float** | Latitude | [optional] 
**lng** | **float** | Longitude | [optional] 

## Example

```python
from openapi_client.models.create_network_floor_plan_request_top_left_corner import CreateNetworkFloorPlanRequestTopLeftCorner

# TODO update the JSON string below
json = "{}"
# create an instance of CreateNetworkFloorPlanRequestTopLeftCorner from a JSON string
create_network_floor_plan_request_top_left_corner_instance = CreateNetworkFloorPlanRequestTopLeftCorner.from_json(json)
# print the JSON string representation of the object
print(CreateNetworkFloorPlanRequestTopLeftCorner.to_json())

# convert the object into a dict
create_network_floor_plan_request_top_left_corner_dict = create_network_floor_plan_request_top_left_corner_instance.to_dict()
# create an instance of CreateNetworkFloorPlanRequestTopLeftCorner from a dict
create_network_floor_plan_request_top_left_corner_from_dict = CreateNetworkFloorPlanRequestTopLeftCorner.from_dict(create_network_floor_plan_request_top_left_corner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


