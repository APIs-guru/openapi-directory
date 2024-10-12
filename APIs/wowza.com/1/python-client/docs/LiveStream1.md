# LiveStream1


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**connection_code** | **str** | A six-character, alphanumeric string that allows certain encoders, including Wowza Streaming Engine and the Wowza GoCoder app, to connect with Wowza Streaming Cloud. The code can be used once and expires 24 hours after it&#39;s created. | [optional] 

## Example

```python
from openapi_client.models.live_stream1 import LiveStream1

# TODO update the JSON string below
json = "{}"
# create an instance of LiveStream1 from a JSON string
live_stream1_instance = LiveStream1.from_json(json)
# print the JSON string representation of the object
print(LiveStream1.to_json())

# convert the object into a dict
live_stream1_dict = live_stream1_instance.to_dict()
# create an instance of LiveStream1 from a dict
live_stream1_from_dict = LiveStream1.from_dict(live_stream1_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


