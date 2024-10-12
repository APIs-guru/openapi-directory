# InsufficientGpsFailureDetails

Details related to ProcessingFailureReason#INSUFFICIENT_GPS.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**gps_points_found** | **int** | The number of GPS points that were found in the video. | [optional] 

## Example

```python
from openapi_client.models.insufficient_gps_failure_details import InsufficientGpsFailureDetails

# TODO update the JSON string below
json = "{}"
# create an instance of InsufficientGpsFailureDetails from a JSON string
insufficient_gps_failure_details_instance = InsufficientGpsFailureDetails.from_json(json)
# print the JSON string representation of the object
print(InsufficientGpsFailureDetails.to_json())

# convert the object into a dict
insufficient_gps_failure_details_dict = insufficient_gps_failure_details_instance.to_dict()
# create an instance of InsufficientGpsFailureDetails from a dict
insufficient_gps_failure_details_from_dict = InsufficientGpsFailureDetails.from_dict(insufficient_gps_failure_details_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


