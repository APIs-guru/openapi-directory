# AzureFileShareReference

Azure File Share mounting configuration.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**account_name** | **str** | Name of the Azure storage account. | 
**azure_file_url** | **str** | URL to access the Azure File. | 
**credentials** | [**AzureStorageCredentialsInfo**](AzureStorageCredentialsInfo.md) |  | 
**directory_mode** | **str** | File mode for directories on the mounted file share. Default value: 0777. | [optional] [default to '0777']
**file_mode** | **str** | File mode for files on the mounted file share. Default value: 0777. | [optional] [default to '0777']
**relative_mount_path** | **str** | The relative path on the compute node where the Azure File share will be mounted. Note that all cluster level file shares will be mounted under $AZ_BATCHAI_MOUNT_ROOT location and all job level file shares will be mounted under $AZ_BATCHAI_JOB_MOUNT_ROOT. | 

## Example

```python
from openapi_client.models.azure_file_share_reference import AzureFileShareReference

# TODO update the JSON string below
json = "{}"
# create an instance of AzureFileShareReference from a JSON string
azure_file_share_reference_instance = AzureFileShareReference.from_json(json)
# print the JSON string representation of the object
print(AzureFileShareReference.to_json())

# convert the object into a dict
azure_file_share_reference_dict = azure_file_share_reference_instance.to_dict()
# create an instance of AzureFileShareReference from a dict
azure_file_share_reference_from_dict = AzureFileShareReference.from_dict(azure_file_share_reference_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


