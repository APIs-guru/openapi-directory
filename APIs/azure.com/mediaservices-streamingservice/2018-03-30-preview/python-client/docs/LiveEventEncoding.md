# LiveEventEncoding

The Live Event encoding.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**encoding_type** | **str** | The encoding type for Live Event. | [optional] 
**preset_name** | **str** | The encoding preset name. | [optional] 

## Example

```python
from openapi_client.models.live_event_encoding import LiveEventEncoding

# TODO update the JSON string below
json = "{}"
# create an instance of LiveEventEncoding from a JSON string
live_event_encoding_instance = LiveEventEncoding.from_json(json)
# print the JSON string representation of the object
print(LiveEventEncoding.to_json())

# convert the object into a dict
live_event_encoding_dict = live_event_encoding_instance.to_dict()
# create an instance of LiveEventEncoding from a dict
live_event_encoding_from_dict = LiveEventEncoding.from_dict(live_event_encoding_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


