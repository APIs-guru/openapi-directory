# VirtualNic

Virtual NIC model

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**customization** | [**GuestOSNICCustomization**](GuestOSNICCustomization.md) |  | [optional] 
**ip_addresses** | **List[str]** | NIC ip address | [optional] 
**mac_address** | **str** | NIC MAC address | [optional] 
**network** | [**VirtualNetwork**](VirtualNetwork.md) |  | 
**nic_type** | **str** | NIC type | 
**power_on_boot** | **bool** | Is NIC powered on/off on boot | [optional] 
**virtual_nic_id** | **str** | NIC id | [optional] 
**virtual_nic_name** | **str** | NIC name | [optional] [readonly] 

## Example

```python
from openapi_client.models.virtual_nic import VirtualNic

# TODO update the JSON string below
json = "{}"
# create an instance of VirtualNic from a JSON string
virtual_nic_instance = VirtualNic.from_json(json)
# print the JSON string representation of the object
print(VirtualNic.to_json())

# convert the object into a dict
virtual_nic_dict = virtual_nic_instance.to_dict()
# create an instance of VirtualNic from a dict
virtual_nic_from_dict = VirtualNic.from_dict(virtual_nic_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


