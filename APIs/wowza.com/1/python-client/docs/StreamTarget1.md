# StreamTarget1


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**connection_code** | **str** | A six-character, alphanumeric string that allows Wowza Streaming Engine to send a transcoded stream to a &lt;strong&gt;WowzaStreamTarget&lt;/strong&gt; or for the Wowza GoCoder app to send an encoded stream to a &lt;strong&gt;UltraLowLatencyStreamTarget&lt;/strong&gt;. The code can be used once and expires 24 hours after it&#39;s created. | [optional] 

## Example

```python
from openapi_client.models.stream_target1 import StreamTarget1

# TODO update the JSON string below
json = "{}"
# create an instance of StreamTarget1 from a JSON string
stream_target1_instance = StreamTarget1.from_json(json)
# print the JSON string representation of the object
print(StreamTarget1.to_json())

# convert the object into a dict
stream_target1_dict = stream_target1_instance.to_dict()
# create an instance of StreamTarget1 from a dict
stream_target1_from_dict = StreamTarget1.from_dict(stream_target1_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


