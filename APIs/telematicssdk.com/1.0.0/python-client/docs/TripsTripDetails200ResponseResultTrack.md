# TripsTripDetails200ResponseResultTrack


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**acceleration_count** | **float** |  | [optional] 
**address_end** | **str** |  | [optional] 
**address_finish_parts** | [**TripsTripDetails200ResponseResultTrackAddressFinishParts**](TripsTripDetails200ResponseResultTrackAddressFinishParts.md) |  | [optional] 
**address_start** | **str** |  | [optional] 
**address_start_parts** | [**TripsTripDetails200ResponseResultTrackAddressFinishParts**](TripsTripDetails200ResponseResultTrackAddressFinishParts.md) |  | [optional] 
**beacon_id** | **float** |  | [optional] 
**city_finish** | **str** |  | [optional] 
**city_start** | **str** |  | [optional] 
**deceleration_count** | **float** |  | [optional] 
**distance** | **float** |  | [optional] 
**driving_tips** | **str** |  | [optional] 
**duration** | **float** |  | [optional] 
**eco_score** | **float** |  | [optional] 
**eco_score_brakes** | **float** |  | [optional] 
**eco_score_depreciation** | **float** |  | [optional] 
**eco_score_fuel** | **float** |  | [optional] 
**eco_score_tyres** | **float** |  | [optional] 
**end_date** | **str** |  | [optional] 
**high_over_speed_mileage** | **float** |  | [optional] 
**mid_over_speed_mileage** | **float** |  | [optional] 
**origin_changed** | **bool** |  | [optional] 
**phone_usage** | **float** |  | [optional] 
**points** | [**List[TripsTripDetails200ResponseResultTrackPointsInner]**](TripsTripDetails200ResponseResultTrackPointsInner.md) |  | [optional] 
**rating** | **float** |  | [optional] 
**rating100** | **float** |  | [optional] 
**rating_acceleration** | **float** |  | [optional] 
**rating_acceleration100** | **float** |  | [optional] 
**rating_braking** | **float** |  | [optional] 
**rating_braking100** | **float** |  | [optional] 
**rating_cornering** | **float** |  | [optional] 
**rating_cornering100** | **float** |  | [optional] 
**rating_phone_distraction100** | **float** |  | [optional] 
**rating_phone_usage** | **float** |  | [optional] 
**rating_speeding** | **float** |  | [optional] 
**rating_speeding100** | **float** |  | [optional] 
**rating_time_of_day** | **float** |  | [optional] 
**share_type** | **str** |  | [optional] 
**start_date** | **str** |  | [optional] 
**status** | **str** |  | [optional] 
**track_origin_code** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.trips_trip_details200_response_result_track import TripsTripDetails200ResponseResultTrack

# TODO update the JSON string below
json = "{}"
# create an instance of TripsTripDetails200ResponseResultTrack from a JSON string
trips_trip_details200_response_result_track_instance = TripsTripDetails200ResponseResultTrack.from_json(json)
# print the JSON string representation of the object
print(TripsTripDetails200ResponseResultTrack.to_json())

# convert the object into a dict
trips_trip_details200_response_result_track_dict = trips_trip_details200_response_result_track_instance.to_dict()
# create an instance of TripsTripDetails200ResponseResultTrack from a dict
trips_trip_details200_response_result_track_from_dict = TripsTripDetails200ResponseResultTrack.from_dict(trips_trip_details200_response_result_track_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


