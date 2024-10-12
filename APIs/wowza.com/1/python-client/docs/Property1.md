# Property1


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**key** | **str** | The key of the property. For &lt;strong&gt;rtsp&lt;/strong&gt;, valid values are &lt;strong&gt;debugRtspSession&lt;/strong&gt;, &lt;strong&gt;maxRtcpWaitTime&lt;/strong&gt;, &lt;strong&gt;avSyncMethod&lt;/strong&gt;, &lt;strong&gt;rtspValidationFrequency&lt;/strong&gt;, &lt;strong&gt;rtpTransportMode&lt;/strong&gt;, &lt;strong&gt;rtspFilterUnknownTracks&lt;/strong&gt;, &lt;strong&gt;rtpIgnoreSpropParameterSets&lt;/strong&gt;, and &lt;strong&gt;rtpIgnoreProfileLevelId&lt;/strong&gt;. For &lt;strong&gt;cupertino&lt;/strong&gt;, valid values are &lt;strong&gt;cupertinoEnableProgramDateTime&lt;/strong&gt;, &lt;strong&gt;cupertinoEnableId3ProgramDateTime&lt;/strong&gt;, and &lt;strong&gt;cupertinoProgramDateTimeOffset&lt;/strong&gt;. | 
**section** | **str** | The section of the transcoder configuration table that contains the property. Valid values are &lt;strong&gt;rtsp&lt;/strong&gt; and &lt;strong&gt;cupertino&lt;/strong&gt;. | 
**value** | **str** | The value of the property. For &lt;strong&gt;debugRtspSession&lt;/strong&gt;, &lt;strong&gt;avSyncMethod&lt;/strong&gt;, &lt;strong&gt;rtspFilterUnknownTracks&lt;/strong&gt;, &lt;strong&gt;rtpIgnoreSpropParameterSets&lt;/strong&gt;, &lt;strong&gt;rtpIgnoreProfileLevelId&lt;/strong&gt;, &lt;strong&gt;cupertinoEnableProgramDateTime&lt;/strong&gt;, and &lt;strong&gt;cupertinoEnableId3ProgramDateTime&lt;/strong&gt;, valid values are &lt;strong&gt;true&lt;/strong&gt; or &lt;strong&gt;false&lt;/strong&gt;. &lt;strong&gt;maxRtcpWaitTime&lt;/strong&gt; must be &lt;strong&gt;0&lt;/strong&gt; (ms, off) or greater. The default is &lt;strong&gt;2000&lt;/strong&gt;. Valid values for &lt;strong&gt;rtpTransportMode&lt;/strong&gt; are &lt;strong&gt;udp&lt;/strong&gt; or &lt;strong&gt;interleave&lt;/strong&gt; (the default). &lt;strong&gt;rtspValidationFrequency&lt;/strong&gt; must be &lt;strong&gt;0&lt;/strong&gt; (ms, off) or greater. The default is &lt;strong&gt;15000&lt;/strong&gt;. &lt;strong&gt;cupertinoProgramDateTimeOffset&lt;/strong&gt; must be an integer, positive or negative. The default is &lt;strong&gt;0&lt;/strong&gt; (ms). | 

## Example

```python
from openapi_client.models.property1 import Property1

# TODO update the JSON string below
json = "{}"
# create an instance of Property1 from a JSON string
property1_instance = Property1.from_json(json)
# print the JSON string representation of the object
print(Property1.to_json())

# convert the object into a dict
property1_dict = property1_instance.to_dict()
# create an instance of Property1 from a dict
property1_from_dict = Property1.from_dict(property1_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


