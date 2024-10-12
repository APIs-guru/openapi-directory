# UsageRateTimelineEntry

A usage rate timeline entry. Each entry specifies a constant usage rate during a time interval.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**effective_time** | [**EstimationTimePoint**](EstimationTimePoint.md) |  | [optional] 
**usage_rate** | **float** | The usage rate. | [optional] 

## Example

```python
from openapi_client.models.usage_rate_timeline_entry import UsageRateTimelineEntry

# TODO update the JSON string below
json = "{}"
# create an instance of UsageRateTimelineEntry from a JSON string
usage_rate_timeline_entry_instance = UsageRateTimelineEntry.from_json(json)
# print the JSON string representation of the object
print(UsageRateTimelineEntry.to_json())

# convert the object into a dict
usage_rate_timeline_entry_dict = usage_rate_timeline_entry_instance.to_dict()
# create an instance of UsageRateTimelineEntry from a dict
usage_rate_timeline_entry_from_dict = UsageRateTimelineEntry.from_dict(usage_rate_timeline_entry_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


