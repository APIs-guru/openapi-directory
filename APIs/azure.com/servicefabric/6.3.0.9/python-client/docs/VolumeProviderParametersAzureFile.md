# VolumeProviderParametersAzureFile

This type describes a volume provided by an Azure Files file share.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**account_key** | **str** | Access key of the Azure storage account for the File Share. | [optional] 
**account_name** | **str** | Name of the Azure storage account for the File Share. | 
**share_name** | **str** | Name of the Azure Files file share that provides storage for the volume. | 

## Example

```python
from openapi_client.models.volume_provider_parameters_azure_file import VolumeProviderParametersAzureFile

# TODO update the JSON string below
json = "{}"
# create an instance of VolumeProviderParametersAzureFile from a JSON string
volume_provider_parameters_azure_file_instance = VolumeProviderParametersAzureFile.from_json(json)
# print the JSON string representation of the object
print(VolumeProviderParametersAzureFile.to_json())

# convert the object into a dict
volume_provider_parameters_azure_file_dict = volume_provider_parameters_azure_file_instance.to_dict()
# create an instance of VolumeProviderParametersAzureFile from a dict
volume_provider_parameters_azure_file_from_dict = VolumeProviderParametersAzureFile.from_dict(volume_provider_parameters_azure_file_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


