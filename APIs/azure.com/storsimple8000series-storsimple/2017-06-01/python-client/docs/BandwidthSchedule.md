# BandwidthSchedule

The schedule for bandwidth setting.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**days** | **List[str]** | The days of the week when this schedule is applicable. | 
**rate_in_mbps** | **int** | The rate in Mbps. | 
**start** | [**Time**](Time.md) |  | 
**stop** | [**Time**](Time.md) |  | 

## Example

```python
from openapi_client.models.bandwidth_schedule import BandwidthSchedule

# TODO update the JSON string below
json = "{}"
# create an instance of BandwidthSchedule from a JSON string
bandwidth_schedule_instance = BandwidthSchedule.from_json(json)
# print the JSON string representation of the object
print(BandwidthSchedule.to_json())

# convert the object into a dict
bandwidth_schedule_dict = bandwidth_schedule_instance.to_dict()
# create an instance of BandwidthSchedule from a dict
bandwidth_schedule_from_dict = BandwidthSchedule.from_dict(bandwidth_schedule_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


