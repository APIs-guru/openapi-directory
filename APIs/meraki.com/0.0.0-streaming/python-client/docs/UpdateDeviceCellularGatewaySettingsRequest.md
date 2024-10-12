# UpdateDeviceCellularGatewaySettingsRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**fixed_ip_assignments** | [**List[UpdateDeviceCellularGatewaySettingsRequestFixedIpAssignmentsInner]**](UpdateDeviceCellularGatewaySettingsRequestFixedIpAssignmentsInner.md) | list of all fixed IP assignments for a single MG | [optional] 
**reserved_ip_ranges** | [**List[UpdateDeviceCellularGatewaySettingsRequestReservedIpRangesInner]**](UpdateDeviceCellularGatewaySettingsRequestReservedIpRangesInner.md) | list of all reserved IP ranges for a single MG | [optional] 

## Example

```python
from openapi_client.models.update_device_cellular_gateway_settings_request import UpdateDeviceCellularGatewaySettingsRequest

# TODO update the JSON string below
json = "{}"
# create an instance of UpdateDeviceCellularGatewaySettingsRequest from a JSON string
update_device_cellular_gateway_settings_request_instance = UpdateDeviceCellularGatewaySettingsRequest.from_json(json)
# print the JSON string representation of the object
print(UpdateDeviceCellularGatewaySettingsRequest.to_json())

# convert the object into a dict
update_device_cellular_gateway_settings_request_dict = update_device_cellular_gateway_settings_request_instance.to_dict()
# create an instance of UpdateDeviceCellularGatewaySettingsRequest from a dict
update_device_cellular_gateway_settings_request_from_dict = UpdateDeviceCellularGatewaySettingsRequest.from_dict(update_device_cellular_gateway_settings_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


