# GetOrganizationCellularGatewayUplinkStatuses200ResponseInnerUplinksInnerSignalStat

Tower Signal Status

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**rsrp** | **str** | Reference Signal Received Power | [optional] 
**rsrq** | **str** | Reference Signal Received Quality | [optional] 

## Example

```python
from openapi_client.models.get_organization_cellular_gateway_uplink_statuses200_response_inner_uplinks_inner_signal_stat import GetOrganizationCellularGatewayUplinkStatuses200ResponseInnerUplinksInnerSignalStat

# TODO update the JSON string below
json = "{}"
# create an instance of GetOrganizationCellularGatewayUplinkStatuses200ResponseInnerUplinksInnerSignalStat from a JSON string
get_organization_cellular_gateway_uplink_statuses200_response_inner_uplinks_inner_signal_stat_instance = GetOrganizationCellularGatewayUplinkStatuses200ResponseInnerUplinksInnerSignalStat.from_json(json)
# print the JSON string representation of the object
print(GetOrganizationCellularGatewayUplinkStatuses200ResponseInnerUplinksInnerSignalStat.to_json())

# convert the object into a dict
get_organization_cellular_gateway_uplink_statuses200_response_inner_uplinks_inner_signal_stat_dict = get_organization_cellular_gateway_uplink_statuses200_response_inner_uplinks_inner_signal_stat_instance.to_dict()
# create an instance of GetOrganizationCellularGatewayUplinkStatuses200ResponseInnerUplinksInnerSignalStat from a dict
get_organization_cellular_gateway_uplink_statuses200_response_inner_uplinks_inner_signal_stat_from_dict = GetOrganizationCellularGatewayUplinkStatuses200ResponseInnerUplinksInnerSignalStat.from_dict(get_organization_cellular_gateway_uplink_statuses200_response_inner_uplinks_inner_signal_stat_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


