# Cuepoint

Note that there may be a 5-second end-point resolution issue. For instance, if a cuepoint comes in for 22:03:27, we may stuff the cuepoint into 22:03:25 or 22:03:30, depending. This is an artifact of HLS.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**cue_type** | **str** |  | [optional] 
**duration_secs** | **int** | The duration of this cuepoint. | [optional] 
**etag** | **str** |  | [optional] 
**id** | **str** | The identifier for cuepoint resource. | [optional] 
**insertion_offset_time_ms** | **str** | The time when the cuepoint should be inserted by offset to the broadcast actual start time. | [optional] 
**walltime_ms** | **str** | The wall clock time at which the cuepoint should be inserted. Only one of insertion_offset_time_ms and walltime_ms may be set at a time. | [optional] 

## Example

```python
from openapi_client.models.cuepoint import Cuepoint

# TODO update the JSON string below
json = "{}"
# create an instance of Cuepoint from a JSON string
cuepoint_instance = Cuepoint.from_json(json)
# print the JSON string representation of the object
print(Cuepoint.to_json())

# convert the object into a dict
cuepoint_dict = cuepoint_instance.to_dict()
# create an instance of Cuepoint from a dict
cuepoint_from_dict = Cuepoint.from_dict(cuepoint_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


