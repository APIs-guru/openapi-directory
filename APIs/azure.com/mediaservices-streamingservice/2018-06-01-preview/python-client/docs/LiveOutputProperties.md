# LiveOutputProperties

The JSON object that contains the properties required to create a Live Output.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**archive_window_length** | **str** | ISO 8601 timespan duration of the archive window length. This is duration that customer want to retain the recorded content. | 
**asset_name** | **str** | The asset name. | 
**created** | **datetime** | The exact time the Live Output was created. | [optional] [readonly] 
**description** | **str** | The description of the Live Output. | [optional] 
**hls** | [**Hls**](Hls.md) |  | [optional] 
**last_modified** | **datetime** | The exact time the Live Output was last modified. | [optional] [readonly] 
**manifest_name** | **str** | The manifest file name. | [optional] 
**output_snap_time** | **int** | The output snapshot time. | [optional] 
**provisioning_state** | **str** | The provisioning state of the Live Output. | [optional] [readonly] 
**resource_state** | **str** | The resource state of the Live Output. | [optional] [readonly] 

## Example

```python
from openapi_client.models.live_output_properties import LiveOutputProperties

# TODO update the JSON string below
json = "{}"
# create an instance of LiveOutputProperties from a JSON string
live_output_properties_instance = LiveOutputProperties.from_json(json)
# print the JSON string representation of the object
print(LiveOutputProperties.to_json())

# convert the object into a dict
live_output_properties_dict = live_output_properties_instance.to_dict()
# create an instance of LiveOutputProperties from a dict
live_output_properties_from_dict = LiveOutputProperties.from_dict(live_output_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


