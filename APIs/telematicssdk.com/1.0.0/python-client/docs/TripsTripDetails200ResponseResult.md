# TripsTripDetails200ResponseResult


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**code** | **float** |  | [optional] 
**track** | [**TripsTripDetails200ResponseResultTrack**](TripsTripDetails200ResponseResultTrack.md) |  | [optional] 

## Example

```python
from openapi_client.models.trips_trip_details200_response_result import TripsTripDetails200ResponseResult

# TODO update the JSON string below
json = "{}"
# create an instance of TripsTripDetails200ResponseResult from a JSON string
trips_trip_details200_response_result_instance = TripsTripDetails200ResponseResult.from_json(json)
# print the JSON string representation of the object
print(TripsTripDetails200ResponseResult.to_json())

# convert the object into a dict
trips_trip_details200_response_result_dict = trips_trip_details200_response_result_instance.to_dict()
# create an instance of TripsTripDetails200ResponseResult from a dict
trips_trip_details200_response_result_from_dict = TripsTripDetails200ResponseResult.from_dict(trips_trip_details200_response_result_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


