# AzureToAzureNetworkMappingSettings

A2A Network Mapping fabric specific settings.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**primary_fabric_location** | **str** | The primary fabric location. | [optional] 
**recovery_fabric_location** | **str** | The recovery fabric location. | [optional] 

## Example

```python
from openapi_client.models.azure_to_azure_network_mapping_settings import AzureToAzureNetworkMappingSettings

# TODO update the JSON string below
json = "{}"
# create an instance of AzureToAzureNetworkMappingSettings from a JSON string
azure_to_azure_network_mapping_settings_instance = AzureToAzureNetworkMappingSettings.from_json(json)
# print the JSON string representation of the object
print(AzureToAzureNetworkMappingSettings.to_json())

# convert the object into a dict
azure_to_azure_network_mapping_settings_dict = azure_to_azure_network_mapping_settings_instance.to_dict()
# create an instance of AzureToAzureNetworkMappingSettings from a dict
azure_to_azure_network_mapping_settings_from_dict = AzureToAzureNetworkMappingSettings.from_dict(azure_to_azure_network_mapping_settings_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


