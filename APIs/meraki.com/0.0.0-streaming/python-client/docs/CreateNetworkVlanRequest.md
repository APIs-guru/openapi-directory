# CreateNetworkVlanRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**appliance_ip** | **str** | The local IP of the appliance on the VLAN | 
**group_policy_id** | **str** | The id of the desired group policy to apply to the VLAN | [optional] 
**id** | **str** | The VLAN ID of the new VLAN (must be between 1 and 4094) | 
**name** | **str** | The name of the new VLAN | 
**subnet** | **str** | The subnet of the VLAN | 

## Example

```python
from openapi_client.models.create_network_vlan_request import CreateNetworkVlanRequest

# TODO update the JSON string below
json = "{}"
# create an instance of CreateNetworkVlanRequest from a JSON string
create_network_vlan_request_instance = CreateNetworkVlanRequest.from_json(json)
# print the JSON string representation of the object
print(CreateNetworkVlanRequest.to_json())

# convert the object into a dict
create_network_vlan_request_dict = create_network_vlan_request_instance.to_dict()
# create an instance of CreateNetworkVlanRequest from a dict
create_network_vlan_request_from_dict = CreateNetworkVlanRequest.from_dict(create_network_vlan_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


