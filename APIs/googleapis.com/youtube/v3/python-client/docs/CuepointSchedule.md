# CuepointSchedule

Schedule to insert cuepoints into a broadcast by ads automator.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**enabled** | **bool** | This field is semantically required. If it is set false or not set, other fields in this message will be ignored. | [optional] 
**pause_ads_until** | **str** | If set, automatic cuepoint insertion is paused until this timestamp (\&quot;No Ad Zone\&quot;). The value is specified in ISO 8601 format. | [optional] 
**repeat_interval_secs** | **int** | Interval frequency in seconds that api uses to insert cuepoints automatically. | [optional] 
**schedule_strategy** | **str** | The strategy to use when scheduling cuepoints. | [optional] 

## Example

```python
from openapi_client.models.cuepoint_schedule import CuepointSchedule

# TODO update the JSON string below
json = "{}"
# create an instance of CuepointSchedule from a JSON string
cuepoint_schedule_instance = CuepointSchedule.from_json(json)
# print the JSON string representation of the object
print(CuepointSchedule.to_json())

# convert the object into a dict
cuepoint_schedule_dict = cuepoint_schedule_instance.to_dict()
# create an instance of CuepointSchedule from a dict
cuepoint_schedule_from_dict = CuepointSchedule.from_dict(cuepoint_schedule_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


