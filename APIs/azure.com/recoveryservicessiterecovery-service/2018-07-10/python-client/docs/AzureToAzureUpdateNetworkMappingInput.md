# AzureToAzureUpdateNetworkMappingInput

Updates network mappings input.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**primary_network_id** | **str** | The primary azure vnet Id. | [optional] 

## Example

```python
from openapi_client.models.azure_to_azure_update_network_mapping_input import AzureToAzureUpdateNetworkMappingInput

# TODO update the JSON string below
json = "{}"
# create an instance of AzureToAzureUpdateNetworkMappingInput from a JSON string
azure_to_azure_update_network_mapping_input_instance = AzureToAzureUpdateNetworkMappingInput.from_json(json)
# print the JSON string representation of the object
print(AzureToAzureUpdateNetworkMappingInput.to_json())

# convert the object into a dict
azure_to_azure_update_network_mapping_input_dict = azure_to_azure_update_network_mapping_input_instance.to_dict()
# create an instance of AzureToAzureUpdateNetworkMappingInput from a dict
azure_to_azure_update_network_mapping_input_from_dict = AzureToAzureUpdateNetworkMappingInput.from_dict(azure_to_azure_update_network_mapping_input_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


