# SnappedWaypoint

Access point to the (road)network. It is only available if `return_snapped_waypoints` is true (be default it is false).

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**lat** | **float** | Latitude of location. | [optional] 
**lon** | **float** | Longitude of location. | [optional] 

## Example

```python
from openapi_client.models.snapped_waypoint import SnappedWaypoint

# TODO update the JSON string below
json = "{}"
# create an instance of SnappedWaypoint from a JSON string
snapped_waypoint_instance = SnappedWaypoint.from_json(json)
# print the JSON string representation of the object
print(SnappedWaypoint.to_json())

# convert the object into a dict
snapped_waypoint_dict = snapped_waypoint_instance.to_dict()
# create an instance of SnappedWaypoint from a dict
snapped_waypoint_from_dict = SnappedWaypoint.from_dict(snapped_waypoint_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


