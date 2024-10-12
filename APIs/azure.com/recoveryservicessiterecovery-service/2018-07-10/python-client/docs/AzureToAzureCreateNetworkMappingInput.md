# AzureToAzureCreateNetworkMappingInput

Create network mappings input properties/behavior specific to Azure to Azure Network mapping.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**primary_network_id** | **str** | The primary azure vnet Id. | [optional] 

## Example

```python
from openapi_client.models.azure_to_azure_create_network_mapping_input import AzureToAzureCreateNetworkMappingInput

# TODO update the JSON string below
json = "{}"
# create an instance of AzureToAzureCreateNetworkMappingInput from a JSON string
azure_to_azure_create_network_mapping_input_instance = AzureToAzureCreateNetworkMappingInput.from_json(json)
# print the JSON string representation of the object
print(AzureToAzureCreateNetworkMappingInput.to_json())

# convert the object into a dict
azure_to_azure_create_network_mapping_input_dict = azure_to_azure_create_network_mapping_input_instance.to_dict()
# create an instance of AzureToAzureCreateNetworkMappingInput from a dict
azure_to_azure_create_network_mapping_input_from_dict = AzureToAzureCreateNetworkMappingInput.from_dict(azure_to_azure_create_network_mapping_input_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


