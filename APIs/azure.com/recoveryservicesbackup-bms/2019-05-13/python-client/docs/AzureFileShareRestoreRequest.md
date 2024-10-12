# AzureFileShareRestoreRequest

AzureFileShare Restore Request

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**copy_options** | **str** | Options to resolve copy conflicts. | [optional] 
**recovery_type** | **str** | Type of this recovery. | [optional] 
**restore_file_specs** | [**List[RestoreFileSpecs]**](RestoreFileSpecs.md) | List of Source Files/Folders(which need to recover) and TargetFolderPath details | [optional] 
**restore_request_type** | **str** | Restore Type (FullShareRestore or ItemLevelRestore) | [optional] 
**source_resource_id** | **str** | Source storage account ARM Id | [optional] 
**target_details** | [**TargetAFSRestoreInfo**](TargetAFSRestoreInfo.md) |  | [optional] 

## Example

```python
from openapi_client.models.azure_file_share_restore_request import AzureFileShareRestoreRequest

# TODO update the JSON string below
json = "{}"
# create an instance of AzureFileShareRestoreRequest from a JSON string
azure_file_share_restore_request_instance = AzureFileShareRestoreRequest.from_json(json)
# print the JSON string representation of the object
print(AzureFileShareRestoreRequest.to_json())

# convert the object into a dict
azure_file_share_restore_request_dict = azure_file_share_restore_request_instance.to_dict()
# create an instance of AzureFileShareRestoreRequest from a dict
azure_file_share_restore_request_from_dict = AzureFileShareRestoreRequest.from_dict(azure_file_share_restore_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


