# UpdateNetworkApplianceWarmSpareRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**enabled** | **bool** | Enable warm spare | 
**spare_serial** | **str** | Serial number of the warm spare appliance | [optional] 
**uplink_mode** | **str** | Uplink mode, either virtual or public | [optional] 
**virtual_ip1** | **str** | The WAN 1 shared IP | [optional] 
**virtual_ip2** | **str** | The WAN 2 shared IP | [optional] 

## Example

```python
from openapi_client.models.update_network_appliance_warm_spare_request import UpdateNetworkApplianceWarmSpareRequest

# TODO update the JSON string below
json = "{}"
# create an instance of UpdateNetworkApplianceWarmSpareRequest from a JSON string
update_network_appliance_warm_spare_request_instance = UpdateNetworkApplianceWarmSpareRequest.from_json(json)
# print the JSON string representation of the object
print(UpdateNetworkApplianceWarmSpareRequest.to_json())

# convert the object into a dict
update_network_appliance_warm_spare_request_dict = update_network_appliance_warm_spare_request_instance.to_dict()
# create an instance of UpdateNetworkApplianceWarmSpareRequest from a dict
update_network_appliance_warm_spare_request_from_dict = UpdateNetworkApplianceWarmSpareRequest.from_dict(update_network_appliance_warm_spare_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


