# TargetChange

Targets being watched have changed.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**cause** | [**Status**](Status.md) |  | [optional] 
**read_time** | **str** | The consistent &#x60;read_time&#x60; for the given &#x60;target_ids&#x60; (omitted when the target_ids are not at a consistent snapshot). The stream is guaranteed to send a &#x60;read_time&#x60; with &#x60;target_ids&#x60; empty whenever the entire stream reaches a new consistent snapshot. ADD, CURRENT, and RESET messages are guaranteed to (eventually) result in a new consistent snapshot (while NO_CHANGE and REMOVE messages are not). For a given stream, &#x60;read_time&#x60; is guaranteed to be monotonically increasing. | [optional] 
**resume_token** | **bytearray** | A token that can be used to resume the stream for the given &#x60;target_ids&#x60;, or all targets if &#x60;target_ids&#x60; is empty. Not set on every target change. | [optional] 
**target_change_type** | **str** | The type of change that occurred. | [optional] 
**target_ids** | **List[int]** | The target IDs of targets that have changed. If empty, the change applies to all targets. The order of the target IDs is not defined. | [optional] 

## Example

```python
from openapi_client.models.target_change import TargetChange

# TODO update the JSON string below
json = "{}"
# create an instance of TargetChange from a JSON string
target_change_instance = TargetChange.from_json(json)
# print the JSON string representation of the object
print(TargetChange.to_json())

# convert the object into a dict
target_change_dict = target_change_instance.to_dict()
# create an instance of TargetChange from a dict
target_change_from_dict = TargetChange.from_dict(target_change_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


