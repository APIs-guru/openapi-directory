# BandwidthScheduleProperties

The properties of the bandwidth schedule.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**days** | **List[str]** | The days of the week when this schedule is applicable. | 
**rate_in_mbps** | **int** | The bandwidth rate in Mbps. | 
**start** | **str** | The start time of the schedule in UTC. | 
**stop** | **str** | The stop time of the schedule in UTC. | 

## Example

```python
from openapi_client.models.bandwidth_schedule_properties import BandwidthScheduleProperties

# TODO update the JSON string below
json = "{}"
# create an instance of BandwidthScheduleProperties from a JSON string
bandwidth_schedule_properties_instance = BandwidthScheduleProperties.from_json(json)
# print the JSON string representation of the object
print(BandwidthScheduleProperties.to_json())

# convert the object into a dict
bandwidth_schedule_properties_dict = bandwidth_schedule_properties_instance.to_dict()
# create an instance of BandwidthScheduleProperties from a dict
bandwidth_schedule_properties_from_dict = BandwidthScheduleProperties.from_dict(bandwidth_schedule_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


