# GetOrganizationDevicesStatuses200Response


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**components** | [**GetOrganizationDevicesStatuses200ResponseComponents**](GetOrganizationDevicesStatuses200ResponseComponents.md) |  | [optional] 
**gateway** | **str** | IP Gateway | [optional] 
**ip_type** | **str** | IP Type | [optional] 
**lan_ip** | **str** | LAN IP Address | [optional] 
**last_reported_at** | **str** | Device Last Reported Location | [optional] 
**mac** | **str** | MAC Address | [optional] 
**model** | **str** | Model | [optional] 
**name** | **str** | Device Name | [optional] 
**network_id** | **str** | Network ID | [optional] 
**primary_dns** | **str** | Primary DNS | [optional] 
**product_type** | **str** | Product Type | [optional] 
**public_ip** | **str** | Public IP Address | [optional] 
**secondary_dns** | **str** | Secondary DNS | [optional] 
**serial** | **str** | Device Serial Number | [optional] 
**status** | **str** | Device Status | [optional] 
**tags** | **List[str]** | Tags | [optional] 

## Example

```python
from openapi_client.models.get_organization_devices_statuses200_response import GetOrganizationDevicesStatuses200Response

# TODO update the JSON string below
json = "{}"
# create an instance of GetOrganizationDevicesStatuses200Response from a JSON string
get_organization_devices_statuses200_response_instance = GetOrganizationDevicesStatuses200Response.from_json(json)
# print the JSON string representation of the object
print(GetOrganizationDevicesStatuses200Response.to_json())

# convert the object into a dict
get_organization_devices_statuses200_response_dict = get_organization_devices_statuses200_response_instance.to_dict()
# create an instance of GetOrganizationDevicesStatuses200Response from a dict
get_organization_devices_statuses200_response_from_dict = GetOrganizationDevicesStatuses200Response.from_dict(get_organization_devices_statuses200_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


