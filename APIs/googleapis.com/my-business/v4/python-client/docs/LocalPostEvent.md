# LocalPostEvent

All the information pertaining to an event featured in a local post.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**schedule** | [**TimeInterval**](TimeInterval.md) |  | [optional] 
**title** | **str** | Name of the event. | [optional] 

## Example

```python
from openapi_client.models.local_post_event import LocalPostEvent

# TODO update the JSON string below
json = "{}"
# create an instance of LocalPostEvent from a JSON string
local_post_event_instance = LocalPostEvent.from_json(json)
# print the JSON string representation of the object
print(LocalPostEvent.to_json())

# convert the object into a dict
local_post_event_dict = local_post_event_instance.to_dict()
# create an instance of LocalPostEvent from a dict
local_post_event_from_dict = LocalPostEvent.from_dict(local_post_event_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


