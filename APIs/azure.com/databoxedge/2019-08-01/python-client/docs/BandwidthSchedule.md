# BandwidthSchedule

The bandwidth schedule details.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**properties** | [**BandwidthScheduleProperties**](BandwidthScheduleProperties.md) |  | 
**id** | **str** | The path ID that uniquely identifies the object. | [optional] [readonly] 
**name** | **str** | The object name. | [optional] [readonly] 
**type** | **str** | The hierarchical type of the object. | [optional] [readonly] 

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


