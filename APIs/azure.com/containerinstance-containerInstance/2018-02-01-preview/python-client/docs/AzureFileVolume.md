# AzureFileVolume

The properties of the Azure File volume. Azure File shares are mounted as volumes.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**read_only** | **bool** | The flag indicating whether the Azure File shared mounted as a volume is read-only. | [optional] 
**share_name** | **str** | The name of the Azure File share to be mounted as a volume. | 
**storage_account_key** | **str** | The storage account access key used to access the Azure File share. | [optional] 
**storage_account_name** | **str** | The name of the storage account that contains the Azure File share. | 

## Example

```python
from openapi_client.models.azure_file_volume import AzureFileVolume

# TODO update the JSON string below
json = "{}"
# create an instance of AzureFileVolume from a JSON string
azure_file_volume_instance = AzureFileVolume.from_json(json)
# print the JSON string representation of the object
print(AzureFileVolume.to_json())

# convert the object into a dict
azure_file_volume_dict = azure_file_volume_instance.to_dict()
# create an instance of AzureFileVolume from a dict
azure_file_volume_from_dict = AzureFileVolume.from_dict(azure_file_volume_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


