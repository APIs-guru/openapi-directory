# CustomStreamTarget


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**backup_url** | **str** | Only for targets whose &lt;em&gt;type&lt;/em&gt; is &lt;strong&gt;CustomStreamTarget&lt;/strong&gt;. The backup RTMP ingest URL of the target, without the preceding protocol and without the trailing slash (/). | [optional] 
**hds_playback_url** | **str** | Only for targets whose &lt;em&gt;type&lt;/em&gt; is &lt;strong&gt;CustomStreamTarget&lt;/strong&gt; and &lt;em&gt;provider&lt;/em&gt; is &lt;em&gt;not&lt;/em&gt; &lt;strong&gt;akamai_cupertino&lt;/strong&gt;. The web address that the target uses to play Adobe HDS streams. | [optional] 
**hls_playback_url** | **str** | Only for targets whose &lt;em&gt;type&lt;/em&gt; is &lt;strong&gt;CustomStreamTarget&lt;/strong&gt;. The web address that the target uses to play Apple HLS streams. | [optional] 
**name** | **str** | A descriptive name for the stream target. Maximum 255 characters. | 
**password** | **str** | Only for targets whose &lt;em&gt;type&lt;/em&gt; is &lt;strong&gt;CustomStreamTarget&lt;/strong&gt; and &lt;em&gt;provider&lt;/em&gt; is &lt;em&gt;not&lt;/em&gt; **akamai_cupertino**. A &lt;em&gt;username&lt;/em&gt; must also be present. The password associated with the target username for RTMP authentication. | [optional] 
**primary_url** | **str** | Only for targets whose &lt;em&gt;type&lt;/em&gt; is &lt;strong&gt;CustomStreamTarget&lt;/strong&gt;. The primary RTMP ingest URL, without the preceding protocol and without the trailing slash (/). | 
**provider** | **str** | The CDN for the target. &lt;br /&gt;&lt;br /&gt;Required for targets whose &lt;em&gt;type&lt;/em&gt; is &lt;strong&gt;CustomStreamTarget&lt;/strong&gt;. Valid values for &lt;strong&gt;CustomStreamTarget&lt;/strong&gt; are &lt;strong&gt;akamai&lt;/strong&gt;, &lt;strong&gt;akamai_cupertino&lt;/strong&gt;, &lt;strong&gt;akamai_rtmp&lt;/strong&gt;, &lt;strong&gt;limelight&lt;/strong&gt;, &lt;strong&gt;rtmp&lt;/strong&gt;, and &lt;strong&gt;ustream&lt;/strong&gt;. Values can be appended with **_mock** to use in the sandbox environment. &lt;br /&gt;&lt;br /&gt;Valid values for &lt;strong&gt;WowzaStreamTarget&lt;/strong&gt; are &lt;strong&gt;akamai&lt;/strong&gt;, &lt;strong&gt;akamai_cupertino&lt;/strong&gt; (default), &lt;strong&gt;akamai_legacy_rtmp&lt;/strong&gt;, and &lt;strong&gt;wowza&lt;/strong&gt;. &lt;br /&gt;&lt;br /&gt;&lt;strong&gt;UltraLowLatencyStreamTarget&lt;/strong&gt; defaults to and must be &lt;strong&gt;wowza&lt;/strong&gt;. | 
**rtmp_playback_url** | **str** | Only for targets whose &lt;em&gt;type&lt;/em&gt; is &lt;strong&gt;CustomStreamTarget&lt;/strong&gt;. The web address that the target uses to play RTMP streams. | [optional] 
**stream_name** | **str** | Only for targets whose &lt;em&gt;type&lt;/em&gt; is &lt;strong&gt;CustomStreamTarget&lt;/strong&gt;. The name of the stream as defined in the target&#39;s ingestion settings. | 
**type** | **str** | &lt;strong&gt;WowzaStreamTarget&lt;/strong&gt; is a Wowza CDN target. &lt;strong&gt;UltraLowLatencyStreamTarget&lt;/strong&gt; is an ultra low latency Wowza stream target. &lt;strong&gt;CustomStreamTarget&lt;/strong&gt; (the default) is an external, third-party destination. &lt;!--and &lt;strong&gt;FacebookStreamTarget&lt;/strong&gt; (a Facebook Live target).--&gt; | [optional] 
**username** | **str** | Only for targets whose &lt;em&gt;type&lt;/em&gt; is &lt;strong&gt;CustomStreamTarget&lt;/strong&gt; and &lt;em&gt;provider&lt;/em&gt; is &lt;em&gt;not&lt;/em&gt; **akamai_cupertino**. The username or ID that the target uses for RTMP authentication. | [optional] 

## Example

```python
from openapi_client.models.custom_stream_target import CustomStreamTarget

# TODO update the JSON string below
json = "{}"
# create an instance of CustomStreamTarget from a JSON string
custom_stream_target_instance = CustomStreamTarget.from_json(json)
# print the JSON string representation of the object
print(CustomStreamTarget.to_json())

# convert the object into a dict
custom_stream_target_dict = custom_stream_target_instance.to_dict()
# create an instance of CustomStreamTarget from a dict
custom_stream_target_from_dict = CustomStreamTarget.from_dict(custom_stream_target_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


