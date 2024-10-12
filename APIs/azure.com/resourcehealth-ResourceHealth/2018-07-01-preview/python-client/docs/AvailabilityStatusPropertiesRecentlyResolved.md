# AvailabilityStatusPropertiesRecentlyResolved

An annotation describing a change in the availabilityState to Available from Unavailable with a reasonType of type Unplanned

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**resolved_time** | **datetime** | Timestamp when the availabilityState changes to Available. | [optional] 
**unavailability_summary** | **str** | Brief description of cause of the resource becoming unavailable. | [optional] 
**unavailable_occurred_time** | **datetime** | Timestamp for when the availabilityState changed to Unavailable | [optional] 

## Example

```python
from openapi_client.models.availability_status_properties_recently_resolved import AvailabilityStatusPropertiesRecentlyResolved

# TODO update the JSON string below
json = "{}"
# create an instance of AvailabilityStatusPropertiesRecentlyResolved from a JSON string
availability_status_properties_recently_resolved_instance = AvailabilityStatusPropertiesRecentlyResolved.from_json(json)
# print the JSON string representation of the object
print(AvailabilityStatusPropertiesRecentlyResolved.to_json())

# convert the object into a dict
availability_status_properties_recently_resolved_dict = availability_status_properties_recently_resolved_instance.to_dict()
# create an instance of AvailabilityStatusPropertiesRecentlyResolved from a dict
availability_status_properties_recently_resolved_from_dict = AvailabilityStatusPropertiesRecentlyResolved.from_dict(availability_status_properties_recently_resolved_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


