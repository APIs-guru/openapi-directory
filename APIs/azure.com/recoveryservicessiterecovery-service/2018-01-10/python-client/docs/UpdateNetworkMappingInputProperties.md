# UpdateNetworkMappingInputProperties

Common input details for network mapping operation.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**fabric_specific_details** | [**FabricSpecificUpdateNetworkMappingInput**](FabricSpecificUpdateNetworkMappingInput.md) |  | [optional] 
**recovery_fabric_name** | **str** | Recovery fabric name. | [optional] 
**recovery_network_id** | **str** | Recovery network Id. | [optional] 

## Example

```python
from openapi_client.models.update_network_mapping_input_properties import UpdateNetworkMappingInputProperties

# TODO update the JSON string below
json = "{}"
# create an instance of UpdateNetworkMappingInputProperties from a JSON string
update_network_mapping_input_properties_instance = UpdateNetworkMappingInputProperties.from_json(json)
# print the JSON string representation of the object
print(UpdateNetworkMappingInputProperties.to_json())

# convert the object into a dict
update_network_mapping_input_properties_dict = update_network_mapping_input_properties_instance.to_dict()
# create an instance of UpdateNetworkMappingInputProperties from a dict
update_network_mapping_input_properties_from_dict = UpdateNetworkMappingInputProperties.from_dict(update_network_mapping_input_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


