# NoOverlapGpsFailureDetails

Details related to PhotoSequenceProcessingFailureReason#NO_OVERLAP_GPS.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**gps_end_time** | **str** | Time of last recorded GPS point. | [optional] 
**gps_start_time** | **str** | Time of first recorded GPS point. | [optional] 
**video_end_time** | **str** | End time of video. | [optional] 
**video_start_time** | **str** | Start time of video. | [optional] 

## Example

```python
from openapi_client.models.no_overlap_gps_failure_details import NoOverlapGpsFailureDetails

# TODO update the JSON string below
json = "{}"
# create an instance of NoOverlapGpsFailureDetails from a JSON string
no_overlap_gps_failure_details_instance = NoOverlapGpsFailureDetails.from_json(json)
# print the JSON string representation of the object
print(NoOverlapGpsFailureDetails.to_json())

# convert the object into a dict
no_overlap_gps_failure_details_dict = no_overlap_gps_failure_details_instance.to_dict()
# create an instance of NoOverlapGpsFailureDetails from a dict
no_overlap_gps_failure_details_from_dict = NoOverlapGpsFailureDetails.from_dict(no_overlap_gps_failure_details_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


