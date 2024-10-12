# ScaleUnitNodeModel

Holds all properties related to a scale unit node.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**bios_version** | **str** | BIOS version of the physical machine. | [optional] 
**bmc_address** | **str** | BMC address of the physical machine. | [optional] 
**can_power_off** | **bool** | Value indicating whether the node can be powered off. | [optional] 
**capacity** | [**ScaleUnitNodeModelCapacity**](ScaleUnitNodeModelCapacity.md) |  | [optional] 
**model** | **str** | Model of the physical machine. | [optional] 
**power_state** | **str** | PowerState of the physical machine. | [optional] 
**scale_unit_name** | **str** | Cluster name of the physical machine. | [optional] 
**scale_unit_node_status** | **str** | Status of the physical machine. | [optional] 
**scale_unit_uri** | **str** | URI of the corresponding cluster. | [optional] 
**serial_number** | **str** | Serial number of the physical machine. | [optional] 
**vendor** | **str** | Vendor of the physical machine. | [optional] 

## Example

```python
from openapi_client.models.scale_unit_node_model import ScaleUnitNodeModel

# TODO update the JSON string below
json = "{}"
# create an instance of ScaleUnitNodeModel from a JSON string
scale_unit_node_model_instance = ScaleUnitNodeModel.from_json(json)
# print the JSON string representation of the object
print(ScaleUnitNodeModel.to_json())

# convert the object into a dict
scale_unit_node_model_dict = scale_unit_node_model_instance.to_dict()
# create an instance of ScaleUnitNodeModel from a dict
scale_unit_node_model_from_dict = ScaleUnitNodeModel.from_dict(scale_unit_node_model_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


