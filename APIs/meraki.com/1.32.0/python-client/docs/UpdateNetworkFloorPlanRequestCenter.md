# UpdateNetworkFloorPlanRequestCenter

The longitude and latitude of the center of your floor plan. If you want to change the geolocation data of your floor plan, either the 'center' or two adjacent corners (e.g. 'topLeftCorner' and 'bottomLeftCorner') must be specified. If 'center' is specified, the floor plan is placed over that point with no rotation. If two adjacent corners are specified, the floor plan is rotated to line up with the two specified points. The aspect ratio of the floor plan's image is preserved regardless of which corners/center are specified. (This means if that more than two corners are specified, only two corners may be used to preserve the floor plan's aspect ratio.). No two points can have the same latitude, longitude pair.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**lat** | **float** | Latitude | [optional] 
**lng** | **float** | Longitude | [optional] 

## Example

```python
from openapi_client.models.update_network_floor_plan_request_center import UpdateNetworkFloorPlanRequestCenter

# TODO update the JSON string below
json = "{}"
# create an instance of UpdateNetworkFloorPlanRequestCenter from a JSON string
update_network_floor_plan_request_center_instance = UpdateNetworkFloorPlanRequestCenter.from_json(json)
# print the JSON string representation of the object
print(UpdateNetworkFloorPlanRequestCenter.to_json())

# convert the object into a dict
update_network_floor_plan_request_center_dict = update_network_floor_plan_request_center_instance.to_dict()
# create an instance of UpdateNetworkFloorPlanRequestCenter from a dict
update_network_floor_plan_request_center_from_dict = UpdateNetworkFloorPlanRequestCenter.from_dict(update_network_floor_plan_request_center_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


