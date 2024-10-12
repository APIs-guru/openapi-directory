# TripsTripDetails200ResponseResultTrackPointsInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**alert_type** | **str** |  | [optional] 
**alert_value** | **float** |  | [optional] 
**cornering** | **bool** |  | [optional] 
**course** | **float** |  | [optional] 
**height** | **float** |  | [optional] 
**id** | **float** |  | [optional] 
**lateral** | **float** |  | [optional] 
**latitude** | **float** |  | [optional] 
**longitude** | **float** |  | [optional] 
**mid_speed** | **float** |  | [optional] 
**number** | **float** |  | [optional] 
**phone_usage** | **bool** |  | [optional] 
**point_date** | **str** |  | [optional] 
**speed** | **float** |  | [optional] 
**speed_limit** | **float** |  | [optional] 
**speed_type** | **str** |  | [optional] 
**total_meters** | **float** |  | [optional] 
**yaw** | **float** |  | [optional] 

## Example

```python
from openapi_client.models.trips_trip_details200_response_result_track_points_inner import TripsTripDetails200ResponseResultTrackPointsInner

# TODO update the JSON string below
json = "{}"
# create an instance of TripsTripDetails200ResponseResultTrackPointsInner from a JSON string
trips_trip_details200_response_result_track_points_inner_instance = TripsTripDetails200ResponseResultTrackPointsInner.from_json(json)
# print the JSON string representation of the object
print(TripsTripDetails200ResponseResultTrackPointsInner.to_json())

# convert the object into a dict
trips_trip_details200_response_result_track_points_inner_dict = trips_trip_details200_response_result_track_points_inner_instance.to_dict()
# create an instance of TripsTripDetails200ResponseResultTrackPointsInner from a dict
trips_trip_details200_response_result_track_points_inner_from_dict = TripsTripDetails200ResponseResultTrackPointsInner.from_dict(trips_trip_details200_response_result_track_points_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


