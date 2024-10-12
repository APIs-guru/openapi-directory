# VpnPacketCaptureStopParameters

Stop packet capture parameters.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**sas_url** | **str** | SAS url for packet capture on virtual network gateway. | [optional] 

## Example

```python
from openapi_client.models.vpn_packet_capture_stop_parameters import VpnPacketCaptureStopParameters

# TODO update the JSON string below
json = "{}"
# create an instance of VpnPacketCaptureStopParameters from a JSON string
vpn_packet_capture_stop_parameters_instance = VpnPacketCaptureStopParameters.from_json(json)
# print the JSON string representation of the object
print(VpnPacketCaptureStopParameters.to_json())

# convert the object into a dict
vpn_packet_capture_stop_parameters_dict = vpn_packet_capture_stop_parameters_instance.to_dict()
# create an instance of VpnPacketCaptureStopParameters from a dict
vpn_packet_capture_stop_parameters_from_dict = VpnPacketCaptureStopParameters.from_dict(vpn_packet_capture_stop_parameters_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


