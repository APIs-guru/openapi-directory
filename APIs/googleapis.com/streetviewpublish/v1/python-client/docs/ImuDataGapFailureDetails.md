# ImuDataGapFailureDetails

Details related to ProcessingFailureReason#IMU_DATA_GAP. If there are multiple IMU data gaps, only the one with the largest duration is reported here.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**gap_duration** | **str** | The duration of the gap in IMU data that was found. | [optional] 
**gap_start_time** | **str** | Relative time (from the start of the video stream) when the gap started. | [optional] 

## Example

```python
from openapi_client.models.imu_data_gap_failure_details import ImuDataGapFailureDetails

# TODO update the JSON string below
json = "{}"
# create an instance of ImuDataGapFailureDetails from a JSON string
imu_data_gap_failure_details_instance = ImuDataGapFailureDetails.from_json(json)
# print the JSON string representation of the object
print(ImuDataGapFailureDetails.to_json())

# convert the object into a dict
imu_data_gap_failure_details_dict = imu_data_gap_failure_details_instance.to_dict()
# create an instance of ImuDataGapFailureDetails from a dict
imu_data_gap_failure_details_from_dict = ImuDataGapFailureDetails.from_dict(imu_data_gap_failure_details_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


