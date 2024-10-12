# BareMetalNodeDescription

Description of a bare metal node used for ScaleOut operation on a cluster.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**bios_version** | **str** | Bios version of the physical machine. | [optional] 
**bmc_ipv4_address** | **str** | BMC address of the physical machine. | [optional] 
**cluster_name** | **str** | Name of the cluster. | [optional] 
**computer_name** | **str** | Name of the computer. | [optional] 
**mac_address** | **str** | Name of the MAC address of the bare metal node. | [optional] 
**model** | **str** | Model of the physical machine. | [optional] 
**serial_number** | **str** | Serial number of the physical machine. | [optional] 
**vendor** | **str** | Vendor of the physical machine. | [optional] 

## Example

```python
from openapi_client.models.bare_metal_node_description import BareMetalNodeDescription

# TODO update the JSON string below
json = "{}"
# create an instance of BareMetalNodeDescription from a JSON string
bare_metal_node_description_instance = BareMetalNodeDescription.from_json(json)
# print the JSON string representation of the object
print(BareMetalNodeDescription.to_json())

# convert the object into a dict
bare_metal_node_description_dict = bare_metal_node_description_instance.to_dict()
# create an instance of BareMetalNodeDescription from a dict
bare_metal_node_description_from_dict = BareMetalNodeDescription.from_dict(bare_metal_node_description_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


