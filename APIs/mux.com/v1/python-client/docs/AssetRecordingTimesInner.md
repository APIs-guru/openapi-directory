# AssetRecordingTimesInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**duration** | **float** | The duration of the live stream recorded. The time value is in seconds. | [optional] 
**started_at** | **datetime** | The time at which the recording for the live stream started. The time value is Unix epoch time represented in ISO 8601 format. | [optional] 
**type** | **str** | The type of media represented by the recording session, either &#x60;content&#x60; for normal stream content or &#x60;slate&#x60; for slate media inserted during stream interruptions. | [optional] 

## Example

```python
from openapi_client.models.asset_recording_times_inner import AssetRecordingTimesInner

# TODO update the JSON string below
json = "{}"
# create an instance of AssetRecordingTimesInner from a JSON string
asset_recording_times_inner_instance = AssetRecordingTimesInner.from_json(json)
# print the JSON string representation of the object
print(AssetRecordingTimesInner.to_json())

# convert the object into a dict
asset_recording_times_inner_dict = asset_recording_times_inner_instance.to_dict()
# create an instance of AssetRecordingTimesInner from a dict
asset_recording_times_inner_from_dict = AssetRecordingTimesInner.from_dict(asset_recording_times_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


