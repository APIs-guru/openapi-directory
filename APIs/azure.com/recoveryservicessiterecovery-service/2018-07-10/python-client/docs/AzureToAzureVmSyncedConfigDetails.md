# AzureToAzureVmSyncedConfigDetails

Azure to Azure VM synced configuration details.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**input_endpoints** | [**List[InputEndpoint]**](InputEndpoint.md) | The Azure VM input endpoints. | [optional] 
**tags** | **Dict[str, str]** | The Azure VM tags. | [optional] 

## Example

```python
from openapi_client.models.azure_to_azure_vm_synced_config_details import AzureToAzureVmSyncedConfigDetails

# TODO update the JSON string below
json = "{}"
# create an instance of AzureToAzureVmSyncedConfigDetails from a JSON string
azure_to_azure_vm_synced_config_details_instance = AzureToAzureVmSyncedConfigDetails.from_json(json)
# print the JSON string representation of the object
print(AzureToAzureVmSyncedConfigDetails.to_json())

# convert the object into a dict
azure_to_azure_vm_synced_config_details_dict = azure_to_azure_vm_synced_config_details_instance.to_dict()
# create an instance of AzureToAzureVmSyncedConfigDetails from a dict
azure_to_azure_vm_synced_config_details_from_dict = AzureToAzureVmSyncedConfigDetails.from_dict(azure_to_azure_vm_synced_config_details_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


