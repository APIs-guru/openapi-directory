# PeakRecording


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**bytes_total** | **int** | The amount, in bytes, used to store recordings during the selected time frame. If the time frame is in the past, &lt;em&gt;bytes_total&lt;/em&gt; is the amount of storage that was used and billed. If the time frame includes the current billing period, &lt;em&gt;bytes_total&lt;/em&gt; is the greatest amount of content stored in Wowza Streaming Cloud at any point to date in the billing period. | [optional] 

## Example

```python
from openapi_client.models.peak_recording import PeakRecording

# TODO update the JSON string below
json = "{}"
# create an instance of PeakRecording from a JSON string
peak_recording_instance = PeakRecording.from_json(json)
# print the JSON string representation of the object
print(PeakRecording.to_json())

# convert the object into a dict
peak_recording_dict = peak_recording_instance.to_dict()
# create an instance of PeakRecording from a dict
peak_recording_from_dict = PeakRecording.from_dict(peak_recording_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


