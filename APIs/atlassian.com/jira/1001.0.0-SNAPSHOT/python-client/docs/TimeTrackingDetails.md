# TimeTrackingDetails

Time tracking details.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**original_estimate** | **str** | The original estimate of time needed for this issue in readable format. | [optional] [readonly] 
**original_estimate_seconds** | **int** | The original estimate of time needed for this issue in seconds. | [optional] [readonly] 
**remaining_estimate** | **str** | The remaining estimate of time needed for this issue in readable format. | [optional] [readonly] 
**remaining_estimate_seconds** | **int** | The remaining estimate of time needed for this issue in seconds. | [optional] [readonly] 
**time_spent** | **str** | Time worked on this issue in readable format. | [optional] [readonly] 
**time_spent_seconds** | **int** | Time worked on this issue in seconds. | [optional] [readonly] 

## Example

```python
from openapi_client.models.time_tracking_details import TimeTrackingDetails

# TODO update the JSON string below
json = "{}"
# create an instance of TimeTrackingDetails from a JSON string
time_tracking_details_instance = TimeTrackingDetails.from_json(json)
# print the JSON string representation of the object
print(TimeTrackingDetails.to_json())

# convert the object into a dict
time_tracking_details_dict = time_tracking_details_instance.to_dict()
# create an instance of TimeTrackingDetails from a dict
time_tracking_details_from_dict = TimeTrackingDetails.from_dict(time_tracking_details_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


