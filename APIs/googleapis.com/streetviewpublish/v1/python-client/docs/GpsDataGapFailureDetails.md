# GpsDataGapFailureDetails

Details related to ProcessingFailureReason#GPS_DATA_GAP. If there are multiple GPS data gaps, only the one with the largest duration is reported here.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**gap_duration** | **str** | The duration of the gap in GPS data that was found. | [optional] 
**gap_start_time** | **str** | Relative time (from the start of the video stream) when the gap started. | [optional] 

## Example

```python
from openapi_client.models.gps_data_gap_failure_details import GpsDataGapFailureDetails

# TODO update the JSON string below
json = "{}"
# create an instance of GpsDataGapFailureDetails from a JSON string
gps_data_gap_failure_details_instance = GpsDataGapFailureDetails.from_json(json)
# print the JSON string representation of the object
print(GpsDataGapFailureDetails.to_json())

# convert the object into a dict
gps_data_gap_failure_details_dict = gps_data_gap_failure_details_instance.to_dict()
# create an instance of GpsDataGapFailureDetails from a dict
gps_data_gap_failure_details_from_dict = GpsDataGapFailureDetails.from_dict(gps_data_gap_failure_details_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


