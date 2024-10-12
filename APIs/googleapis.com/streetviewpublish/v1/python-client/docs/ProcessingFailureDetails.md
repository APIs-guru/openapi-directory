# ProcessingFailureDetails

Additional details to accompany the ProcessingFailureReason enum. This message is always expected to be used in conjunction with ProcessingFailureReason, and the oneof value set in this message should match the FailureReason.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**gps_data_gap_details** | [**GpsDataGapFailureDetails**](GpsDataGapFailureDetails.md) |  | [optional] 
**imu_data_gap_details** | [**ImuDataGapFailureDetails**](ImuDataGapFailureDetails.md) |  | [optional] 
**insufficient_gps_details** | [**InsufficientGpsFailureDetails**](InsufficientGpsFailureDetails.md) |  | [optional] 
**no_overlap_gps_details** | [**NoOverlapGpsFailureDetails**](NoOverlapGpsFailureDetails.md) |  | [optional] 
**not_outdoors_details** | [**NotOutdoorsFailureDetails**](NotOutdoorsFailureDetails.md) |  | [optional] 

## Example

```python
from openapi_client.models.processing_failure_details import ProcessingFailureDetails

# TODO update the JSON string below
json = "{}"
# create an instance of ProcessingFailureDetails from a JSON string
processing_failure_details_instance = ProcessingFailureDetails.from_json(json)
# print the JSON string representation of the object
print(ProcessingFailureDetails.to_json())

# convert the object into a dict
processing_failure_details_dict = processing_failure_details_instance.to_dict()
# create an instance of ProcessingFailureDetails from a dict
processing_failure_details_from_dict = ProcessingFailureDetails.from_dict(processing_failure_details_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


