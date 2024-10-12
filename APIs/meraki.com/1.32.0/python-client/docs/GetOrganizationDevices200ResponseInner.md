# GetOrganizationDevices200ResponseInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**address** | **str** | Physical address of the device | [optional] 
**firmware** | **str** | Firmware version of the device | [optional] 
**lan_ip** | **str** | LAN IP address of the device | [optional] 
**lat** | **float** | Latitude of the device | [optional] 
**lng** | **float** | Longitude of the device | [optional] 
**mac** | **str** | MAC address of the device | [optional] 
**model** | **str** | Model of the device | [optional] 
**name** | **str** | Name of the device | [optional] 
**network_id** | **str** | ID of the network the device belongs to | [optional] 
**notes** | **str** | Notes for the device, limited to 255 characters | [optional] 
**product_type** | **str** | Product type of the device | [optional] 
**serial** | **str** | Serial number of the device | [optional] 
**tags** | **List[str]** | List of tags assigned to the device | [optional] 

## Example

```python
from openapi_client.models.get_organization_devices200_response_inner import GetOrganizationDevices200ResponseInner

# TODO update the JSON string below
json = "{}"
# create an instance of GetOrganizationDevices200ResponseInner from a JSON string
get_organization_devices200_response_inner_instance = GetOrganizationDevices200ResponseInner.from_json(json)
# print the JSON string representation of the object
print(GetOrganizationDevices200ResponseInner.to_json())

# convert the object into a dict
get_organization_devices200_response_inner_dict = get_organization_devices200_response_inner_instance.to_dict()
# create an instance of GetOrganizationDevices200ResponseInner from a dict
get_organization_devices200_response_inner_from_dict = GetOrganizationDevices200ResponseInner.from_dict(get_organization_devices200_response_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


