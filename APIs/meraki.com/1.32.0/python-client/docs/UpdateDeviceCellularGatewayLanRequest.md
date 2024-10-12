# UpdateDeviceCellularGatewayLanRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**fixed_ip_assignments** | [**List[UpdateDeviceCellularGatewayLanRequestFixedIpAssignmentsInner]**](UpdateDeviceCellularGatewayLanRequestFixedIpAssignmentsInner.md) | list of all fixed IP assignments for a single MG | [optional] 
**reserved_ip_ranges** | [**List[UpdateDeviceCellularGatewayLanRequestReservedIpRangesInner]**](UpdateDeviceCellularGatewayLanRequestReservedIpRangesInner.md) | list of all reserved IP ranges for a single MG | [optional] 

## Example

```python
from openapi_client.models.update_device_cellular_gateway_lan_request import UpdateDeviceCellularGatewayLanRequest

# TODO update the JSON string below
json = "{}"
# create an instance of UpdateDeviceCellularGatewayLanRequest from a JSON string
update_device_cellular_gateway_lan_request_instance = UpdateDeviceCellularGatewayLanRequest.from_json(json)
# print the JSON string representation of the object
print(UpdateDeviceCellularGatewayLanRequest.to_json())

# convert the object into a dict
update_device_cellular_gateway_lan_request_dict = update_device_cellular_gateway_lan_request_instance.to_dict()
# create an instance of UpdateDeviceCellularGatewayLanRequest from a dict
update_device_cellular_gateway_lan_request_from_dict = UpdateDeviceCellularGatewayLanRequest.from_dict(update_device_cellular_gateway_lan_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


