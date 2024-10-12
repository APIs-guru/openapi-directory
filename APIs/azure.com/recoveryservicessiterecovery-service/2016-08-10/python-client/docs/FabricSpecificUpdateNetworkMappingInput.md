# FabricSpecificUpdateNetworkMappingInput

Input details specific to fabrics during Network Mapping.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**instance_type** | **str** | The instance type. | [optional] 

## Example

```python
from openapi_client.models.fabric_specific_update_network_mapping_input import FabricSpecificUpdateNetworkMappingInput

# TODO update the JSON string below
json = "{}"
# create an instance of FabricSpecificUpdateNetworkMappingInput from a JSON string
fabric_specific_update_network_mapping_input_instance = FabricSpecificUpdateNetworkMappingInput.from_json(json)
# print the JSON string representation of the object
print(FabricSpecificUpdateNetworkMappingInput.to_json())

# convert the object into a dict
fabric_specific_update_network_mapping_input_dict = fabric_specific_update_network_mapping_input_instance.to_dict()
# create an instance of FabricSpecificUpdateNetworkMappingInput from a dict
fabric_specific_update_network_mapping_input_from_dict = FabricSpecificUpdateNetworkMappingInput.from_dict(fabric_specific_update_network_mapping_input_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


