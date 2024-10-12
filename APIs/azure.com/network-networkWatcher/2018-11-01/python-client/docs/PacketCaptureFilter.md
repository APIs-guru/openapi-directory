# PacketCaptureFilter

Filter that is applied to packet capture request. Multiple filters can be applied.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**local_ip_address** | **str** | Local IP Address to be filtered on. Notation: \&quot;127.0.0.1\&quot; for single address entry. \&quot;127.0.0.1-127.0.0.255\&quot; for range. \&quot;127.0.0.1;127.0.0.5\&quot;? for multiple entries. Multiple ranges not currently supported. Mixing ranges with multiple entries not currently supported. Default &#x3D; null. | [optional] 
**local_port** | **str** | Local port to be filtered on. Notation: \&quot;80\&quot; for single port entry.\&quot;80-85\&quot; for range. \&quot;80;443;\&quot; for multiple entries. Multiple ranges not currently supported. Mixing ranges with multiple entries not currently supported. Default &#x3D; null. | [optional] 
**protocol** | **str** | Protocol to be filtered on. | [optional] [default to 'Any']
**remote_ip_address** | **str** | Local IP Address to be filtered on. Notation: \&quot;127.0.0.1\&quot; for single address entry. \&quot;127.0.0.1-127.0.0.255\&quot; for range. \&quot;127.0.0.1;127.0.0.5;\&quot; for multiple entries. Multiple ranges not currently supported. Mixing ranges with multiple entries not currently supported. Default &#x3D; null. | [optional] 
**remote_port** | **str** | Remote port to be filtered on. Notation: \&quot;80\&quot; for single port entry.\&quot;80-85\&quot; for range. \&quot;80;443;\&quot; for multiple entries. Multiple ranges not currently supported. Mixing ranges with multiple entries not currently supported. Default &#x3D; null. | [optional] 

## Example

```python
from openapi_client.models.packet_capture_filter import PacketCaptureFilter

# TODO update the JSON string below
json = "{}"
# create an instance of PacketCaptureFilter from a JSON string
packet_capture_filter_instance = PacketCaptureFilter.from_json(json)
# print the JSON string representation of the object
print(PacketCaptureFilter.to_json())

# convert the object into a dict
packet_capture_filter_dict = packet_capture_filter_instance.to_dict()
# create an instance of PacketCaptureFilter from a dict
packet_capture_filter_from_dict = PacketCaptureFilter.from_dict(packet_capture_filter_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


