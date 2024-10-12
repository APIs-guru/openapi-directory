# AvailabilityStatusPropertiesRecentlyResolvedState

An annotation describing a change in the availabilityState to Available from Unavailable with a reasonType of type Unplanned

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**resolved_time** | **datetime** | Timestamp when the availabilityState changes to Available. | [optional] 
**unavailability_summary** | **str** | Brief description of cause of the resource becoming unavailable. | [optional] 
**unavailable_occurred_time** | **datetime** | Timestamp for when the availabilityState changed to Unavailable | [optional] 

## Example

```python
from openapi_client.models.availability_status_properties_recently_resolved_state import AvailabilityStatusPropertiesRecentlyResolvedState

# TODO update the JSON string below
json = "{}"
# create an instance of AvailabilityStatusPropertiesRecentlyResolvedState from a JSON string
availability_status_properties_recently_resolved_state_instance = AvailabilityStatusPropertiesRecentlyResolvedState.from_json(json)
# print the JSON string representation of the object
print(AvailabilityStatusPropertiesRecentlyResolvedState.to_json())

# convert the object into a dict
availability_status_properties_recently_resolved_state_dict = availability_status_properties_recently_resolved_state_instance.to_dict()
# create an instance of AvailabilityStatusPropertiesRecentlyResolvedState from a dict
availability_status_properties_recently_resolved_state_from_dict = AvailabilityStatusPropertiesRecentlyResolvedState.from_dict(availability_status_properties_recently_resolved_state_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


