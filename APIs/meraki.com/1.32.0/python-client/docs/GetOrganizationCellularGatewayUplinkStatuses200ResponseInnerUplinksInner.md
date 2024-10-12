# GetOrganizationCellularGatewayUplinkStatuses200ResponseInnerUplinksInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**apn** | **str** | Access Point Name | [optional] 
**connection_type** | **str** | Connection Type | [optional] 
**dns1** | **str** | Primary DNS IP | [optional] 
**dns2** | **str** | Secondary DNS IP | [optional] 
**gateway** | **str** | Gateway IP | [optional] 
**iccid** | **str** | Integrated Circuit Card Identification Number | [optional] 
**interface** | **str** | Uplink interface | [optional] 
**ip** | **str** | Uplink IP | [optional] 
**model** | **str** | Uplink model | [optional] 
**provider** | **str** | Network Provider | [optional] 
**public_ip** | **str** | Public IP | [optional] 
**signal_stat** | [**GetOrganizationCellularGatewayUplinkStatuses200ResponseInnerUplinksInnerSignalStat**](GetOrganizationCellularGatewayUplinkStatuses200ResponseInnerUplinksInnerSignalStat.md) |  | [optional] 
**signal_type** | **str** | Signal Type | [optional] 
**status** | **str** | Uplink status | [optional] 

## Example

```python
from openapi_client.models.get_organization_cellular_gateway_uplink_statuses200_response_inner_uplinks_inner import GetOrganizationCellularGatewayUplinkStatuses200ResponseInnerUplinksInner

# TODO update the JSON string below
json = "{}"
# create an instance of GetOrganizationCellularGatewayUplinkStatuses200ResponseInnerUplinksInner from a JSON string
get_organization_cellular_gateway_uplink_statuses200_response_inner_uplinks_inner_instance = GetOrganizationCellularGatewayUplinkStatuses200ResponseInnerUplinksInner.from_json(json)
# print the JSON string representation of the object
print(GetOrganizationCellularGatewayUplinkStatuses200ResponseInnerUplinksInner.to_json())

# convert the object into a dict
get_organization_cellular_gateway_uplink_statuses200_response_inner_uplinks_inner_dict = get_organization_cellular_gateway_uplink_statuses200_response_inner_uplinks_inner_instance.to_dict()
# create an instance of GetOrganizationCellularGatewayUplinkStatuses200ResponseInnerUplinksInner from a dict
get_organization_cellular_gateway_uplink_statuses200_response_inner_uplinks_inner_from_dict = GetOrganizationCellularGatewayUplinkStatuses200ResponseInnerUplinksInner.from_dict(get_organization_cellular_gateway_uplink_statuses200_response_inner_uplinks_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


