# AzureFileShareConfiguration


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**account_key** | **str** |  | 
**account_name** | **str** |  | 
**azure_file_url** | **str** | This is of the form &#39;https://{account}.file.core.windows.net/&#39;. | 
**mount_options** | **str** | These are &#39;net use&#39; options in Windows and &#39;mount&#39; options in Linux. | [optional] 
**relative_mount_path** | **str** | All file systems are mounted relative to the Batch mounts directory, accessible via the AZ_BATCH_NODE_MOUNTS_DIR environment variable. | 

## Example

```python
from openapi_client.models.azure_file_share_configuration import AzureFileShareConfiguration

# TODO update the JSON string below
json = "{}"
# create an instance of AzureFileShareConfiguration from a JSON string
azure_file_share_configuration_instance = AzureFileShareConfiguration.from_json(json)
# print the JSON string representation of the object
print(AzureFileShareConfiguration.to_json())

# convert the object into a dict
azure_file_share_configuration_dict = azure_file_share_configuration_instance.to_dict()
# create an instance of AzureFileShareConfiguration from a dict
azure_file_share_configuration_from_dict = AzureFileShareConfiguration.from_dict(azure_file_share_configuration_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


