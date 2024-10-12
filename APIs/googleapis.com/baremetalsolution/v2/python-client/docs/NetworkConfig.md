# NetworkConfig

Configuration parameters for a new network.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**bandwidth** | **str** | Interconnect bandwidth. Set only when type is CLIENT. | [optional] 
**cidr** | **str** | CIDR range of the network. | [optional] 
**gcp_service** | **str** | The GCP service of the network. Available gcp_service are in https://cloud.google.com/bare-metal/docs/bms-planning. | [optional] 
**id** | **str** | A transient unique identifier to identify a volume within an ProvisioningConfig request. | [optional] 
**jumbo_frames_enabled** | **bool** | The JumboFramesEnabled option for customer to set. | [optional] 
**name** | **str** | Output only. The name of the network config. | [optional] [readonly] 
**service_cidr** | **str** | Service CIDR, if any. | [optional] 
**type** | **str** | The type of this network, either Client or Private. | [optional] 
**user_note** | **str** | User note field, it can be used by customers to add additional information for the BMS Ops team . | [optional] 
**vlan_attachments** | [**List[IntakeVlanAttachment]**](IntakeVlanAttachment.md) | List of VLAN attachments. As of now there are always 2 attachments, but it is going to change in the future (multi vlan). | [optional] 
**vlan_same_project** | **bool** | Whether the VLAN attachment pair is located in the same project. | [optional] 

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


