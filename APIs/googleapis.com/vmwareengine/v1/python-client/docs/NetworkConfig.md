# NetworkConfig

Network configuration in the consumer project with which the peering has to be done.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**dns_server_ip** | **str** | Output only. DNS Server IP of the Private Cloud. All DNS queries can be forwarded to this address for name resolution of Private Cloud&#39;s management entities like vCenter, NSX-T Manager and ESXi hosts. | [optional] [readonly] 
**management_cidr** | **str** | Required. Management CIDR used by VMware management appliances. | [optional] 
**management_ip_address_layout_version** | **int** | Output only. The IP address layout version of the management IP address range. Possible versions include: * &#x60;managementIpAddressLayoutVersion&#x3D;1&#x60;: Indicates the legacy IP address layout used by some existing private clouds. This is no longer supported for new private clouds as it does not support all features. * &#x60;managementIpAddressLayoutVersion&#x3D;2&#x60;: Indicates the latest IP address layout used by all newly created private clouds. This version supports all current features. | [optional] [readonly] 
**vmware_engine_network** | **str** | Optional. The relative resource name of the VMware Engine network attached to the private cloud. Specify the name in the following form: &#x60;projects/{project}/locations/{location}/vmwareEngineNetworks/{vmware_engine_network_id}&#x60; where &#x60;{project}&#x60; can either be a project number or a project ID. | [optional] 
**vmware_engine_network_canonical** | **str** | Output only. The canonical name of the VMware Engine network in the form: &#x60;projects/{project_number}/locations/{location}/vmwareEngineNetworks/{vmware_engine_network_id}&#x60; | [optional] [readonly] 

## Example

```python
from openapi_client.models.network_config import NetworkConfig

# TODO update the JSON string below
json = "{}"
# create an instance of NetworkConfig from a JSON string
network_config_instance = NetworkConfig.from_json(json)
# print the JSON string representation of the object
print(NetworkConfig.to_json())

# convert the object into a dict
network_config_dict = network_config_instance.to_dict()
# create an instance of NetworkConfig from a dict
network_config_from_dict = NetworkConfig.from_dict(network_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


