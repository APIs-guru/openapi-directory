# GetOrganizationUplinksStatuses200ResponseInnerUplinksInner


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
**ip_assigned_by** | **str** | The way in which the IP is assigned | [optional] 
**primary_dns** | **str** | Primary DNS IP | [optional] 
**provider** | **str** | Network Provider | [optional] 
**public_ip** | **str** | Public IP | [optional] 
**secondary_dns** | **str** | Secondary DNS IP | [optional] 
**signal_stat** | [**GetOrganizationCellularGatewayUplinkStatuses200ResponseInnerUplinksInnerSignalStat**](GetOrganizationCellularGatewayUplinkStatuses200ResponseInnerUplinksInnerSignalStat.md) |  | [optional] 
**signal_type** | **str** | Signal Type | [optional] 
**status** | **str** | Uplink status | [optional] 

## Example

```python
from openapi_client.models.get_organization_uplinks_statuses200_response_inner_uplinks_inner import GetOrganizationUplinksStatuses200ResponseInnerUplinksInner

# TODO update the JSON string below
json = "{}"
# create an instance of GetOrganizationUplinksStatuses200ResponseInnerUplinksInner from a JSON string
get_organization_uplinks_statuses200_response_inner_uplinks_inner_instance = GetOrganizationUplinksStatuses200ResponseInnerUplinksInner.from_json(json)
# print the JSON string representation of the object
print(GetOrganizationUplinksStatuses200ResponseInnerUplinksInner.to_json())

# convert the object into a dict
get_organization_uplinks_statuses200_response_inner_uplinks_inner_dict = get_organization_uplinks_statuses200_response_inner_uplinks_inner_instance.to_dict()
# create an instance of GetOrganizationUplinksStatuses200ResponseInnerUplinksInner from a dict
get_organization_uplinks_statuses200_response_inner_uplinks_inner_from_dict = GetOrganizationUplinksStatuses200ResponseInnerUplinksInner.from_dict(get_organization_uplinks_statuses200_response_inner_uplinks_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


