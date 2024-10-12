# VpnPacketCaptureStartParameters

Start packet capture parameters on virtual network gateway.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**filter_data** | **str** | Start Packet capture parameters. | [optional] 

## Example

```python
from openapi_client.models.vpn_packet_capture_start_parameters import VpnPacketCaptureStartParameters

# TODO update the JSON string below
json = "{}"
# create an instance of VpnPacketCaptureStartParameters from a JSON string
vpn_packet_capture_start_parameters_instance = VpnPacketCaptureStartParameters.from_json(json)
# print the JSON string representation of the object
print(VpnPacketCaptureStartParameters.to_json())

# convert the object into a dict
vpn_packet_capture_start_parameters_dict = vpn_packet_capture_start_parameters_instance.to_dict()
# create an instance of VpnPacketCaptureStartParameters from a dict
vpn_packet_capture_start_parameters_from_dict = VpnPacketCaptureStartParameters.from_dict(vpn_packet_capture_start_parameters_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


