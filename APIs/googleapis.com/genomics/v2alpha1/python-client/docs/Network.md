# Network

VM networking options.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** | The network name to attach the VM&#39;s network interface to. The value will be prefixed with &#x60;global/networks/&#x60; unless it contains a &#x60;/&#x60;, in which case it is assumed to be a fully specified network resource URL. If unspecified, the global default network is used. | [optional] 
**subnetwork** | **str** | If the specified network is configured for custom subnet creation, the name of the subnetwork to attach the instance to must be specified here. The value is prefixed with &#x60;regions/*/subnetworks/&#x60; unless it contains a &#x60;/&#x60;, in which case it is assumed to be a fully specified subnetwork resource URL. If the &#x60;*&#x60; character appears in the value, it is replaced with the region that the virtual machine has been allocated in. | [optional] 
**use_private_address** | **bool** | If set to true, do not attach a public IP address to the VM. Note that without a public IP address, additional configuration is required to allow the VM to access Google services. See https://cloud.google.com/vpc/docs/configure-private-google-access for more information. | [optional] 

## Example

```python
from openapi_client.models.network import Network

# TODO update the JSON string below
json = "{}"
# create an instance of Network from a JSON string
network_instance = Network.from_json(json)
# print the JSON string representation of the object
print(Network.to_json())

# convert the object into a dict
network_dict = network_instance.to_dict()
# create an instance of Network from a dict
network_from_dict = Network.from_dict(network_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


