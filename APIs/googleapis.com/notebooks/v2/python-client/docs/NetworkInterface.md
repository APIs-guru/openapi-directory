# NetworkInterface

The definition of a network interface resource attached to a VM.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**network** | **str** | Optional. The name of the VPC that this VM instance is in. Format: &#x60;projects/{project_id}/global/networks/{network_id}&#x60; | [optional] 
**nic_type** | **str** | Optional. The type of vNIC to be used on this interface. This may be gVNIC or VirtioNet. | [optional] 
**subnet** | **str** | Optional. The name of the subnet that this VM instance is in. Format: &#x60;projects/{project_id}/regions/{region}/subnetworks/{subnetwork_id}&#x60; | [optional] 

## Example

```python
from openapi_client.models.network_interface import NetworkInterface

# TODO update the JSON string below
json = "{}"
# create an instance of NetworkInterface from a JSON string
network_interface_instance = NetworkInterface.from_json(json)
# print the JSON string representation of the object
print(NetworkInterface.to_json())

# convert the object into a dict
network_interface_dict = network_interface_instance.to_dict()
# create an instance of NetworkInterface from a dict
network_interface_from_dict = NetworkInterface.from_dict(network_interface_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


