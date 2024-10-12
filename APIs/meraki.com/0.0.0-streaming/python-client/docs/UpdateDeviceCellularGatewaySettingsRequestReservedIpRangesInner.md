# UpdateDeviceCellularGatewaySettingsRequestReservedIpRangesInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**comment** | **str** | Comment explaining the reserved IP range | 
**end** | **str** | Ending IP included in the reserved range of IPs | 
**start** | **str** | Starting IP included in the reserved range of IPs | 

## Example

```python
from openapi_client.models.update_device_cellular_gateway_settings_request_reserved_ip_ranges_inner import UpdateDeviceCellularGatewaySettingsRequestReservedIpRangesInner

# TODO update the JSON string below
json = "{}"
# create an instance of UpdateDeviceCellularGatewaySettingsRequestReservedIpRangesInner from a JSON string
update_device_cellular_gateway_settings_request_reserved_ip_ranges_inner_instance = UpdateDeviceCellularGatewaySettingsRequestReservedIpRangesInner.from_json(json)
# print the JSON string representation of the object
print(UpdateDeviceCellularGatewaySettingsRequestReservedIpRangesInner.to_json())

# convert the object into a dict
update_device_cellular_gateway_settings_request_reserved_ip_ranges_inner_dict = update_device_cellular_gateway_settings_request_reserved_ip_ranges_inner_instance.to_dict()
# create an instance of UpdateDeviceCellularGatewaySettingsRequestReservedIpRangesInner from a dict
update_device_cellular_gateway_settings_request_reserved_ip_ranges_inner_from_dict = UpdateDeviceCellularGatewaySettingsRequestReservedIpRangesInner.from_dict(update_device_cellular_gateway_settings_request_reserved_ip_ranges_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


