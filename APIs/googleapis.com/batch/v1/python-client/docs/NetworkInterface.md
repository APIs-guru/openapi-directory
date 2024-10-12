# NetworkInterface

A network interface.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**network** | **str** | The URL of an existing network resource. You can specify the network as a full or partial URL. For example, the following are all valid URLs: * https://www.googleapis.com/compute/v1/projects/{project}/global/networks/{network} * projects/{project}/global/networks/{network} * global/networks/{network} | [optional] 
**no_external_ip_address** | **bool** | Default is false (with an external IP address). Required if no external public IP address is attached to the VM. If no external public IP address, additional configuration is required to allow the VM to access Google Services. See https://cloud.google.com/vpc/docs/configure-private-google-access and https://cloud.google.com/nat/docs/gce-example#create-nat for more information. | [optional] 
**subnetwork** | **str** | The URL of an existing subnetwork resource in the network. You can specify the subnetwork as a full or partial URL. For example, the following are all valid URLs: * https://www.googleapis.com/compute/v1/projects/{project}/regions/{region}/subnetworks/{subnetwork} * projects/{project}/regions/{region}/subnetworks/{subnetwork} * regions/{region}/subnetworks/{subnetwork} | [optional] 

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


