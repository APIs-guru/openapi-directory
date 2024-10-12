# GetOrganizationCellularGatewayUplinkStatuses200ResponseInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**last_reported_at** | **datetime** | Last reported time for the device | [optional] 
**model** | **str** | Device model | [optional] 
**network_id** | **str** | Network Id | [optional] 
**serial** | **str** | Serial number of the device | [optional] 
**uplinks** | [**List[GetOrganizationCellularGatewayUplinkStatuses200ResponseInnerUplinksInner]**](GetOrganizationCellularGatewayUplinkStatuses200ResponseInnerUplinksInner.md) | Uplinks info | [optional] 

## Example

```python
from openapi_client.models.get_organization_cellular_gateway_uplink_statuses200_response_inner import GetOrganizationCellularGatewayUplinkStatuses200ResponseInner

# TODO update the JSON string below
json = "{}"
# create an instance of GetOrganizationCellularGatewayUplinkStatuses200ResponseInner from a JSON string
get_organization_cellular_gateway_uplink_statuses200_response_inner_instance = GetOrganizationCellularGatewayUplinkStatuses200ResponseInner.from_json(json)
# print the JSON string representation of the object
print(GetOrganizationCellularGatewayUplinkStatuses200ResponseInner.to_json())

# convert the object into a dict
get_organization_cellular_gateway_uplink_statuses200_response_inner_dict = get_organization_cellular_gateway_uplink_statuses200_response_inner_instance.to_dict()
# create an instance of GetOrganizationCellularGatewayUplinkStatuses200ResponseInner from a dict
get_organization_cellular_gateway_uplink_statuses200_response_inner_from_dict = GetOrganizationCellularGatewayUplinkStatuses200ResponseInner.from_dict(get_organization_cellular_gateway_uplink_statuses200_response_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


