# CreateNetworkMappingInputProperties

Common input details for network mapping operation.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**fabric_specific_details** | [**FabricSpecificCreateNetworkMappingInput**](FabricSpecificCreateNetworkMappingInput.md) |  | [optional] 
**recovery_fabric_name** | **str** | Recovery fabric Name. | [optional] 
**recovery_network_id** | **str** | Recovery network Id. | [optional] 

## Example

```python
from openapi_client.models.create_network_mapping_input_properties import CreateNetworkMappingInputProperties

# TODO update the JSON string below
json = "{}"
# create an instance of CreateNetworkMappingInputProperties from a JSON string
create_network_mapping_input_properties_instance = CreateNetworkMappingInputProperties.from_json(json)
# print the JSON string representation of the object
print(CreateNetworkMappingInputProperties.to_json())

# convert the object into a dict
create_network_mapping_input_properties_dict = create_network_mapping_input_properties_instance.to_dict()
# create an instance of CreateNetworkMappingInputProperties from a dict
create_network_mapping_input_properties_from_dict = CreateNetworkMappingInputProperties.from_dict(create_network_mapping_input_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


