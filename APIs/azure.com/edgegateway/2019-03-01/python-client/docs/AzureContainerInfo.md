# AzureContainerInfo

Azure container mapping of the endpoint.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**container_name** | **str** | Container name (Based on the data format specified, this represents the name of Azure Files/Page blob/Block blob). | 
**data_format** | **str** | Storage format used for the file represented by the share. | 
**storage_account_credential_id** | **str** | ID of the storage account credential used to access storage. | 

## Example

```python
from openapi_client.models.azure_container_info import AzureContainerInfo

# TODO update the JSON string below
json = "{}"
# create an instance of AzureContainerInfo from a JSON string
azure_container_info_instance = AzureContainerInfo.from_json(json)
# print the JSON string representation of the object
print(AzureContainerInfo.to_json())

# convert the object into a dict
azure_container_info_dict = azure_container_info_instance.to_dict()
# create an instance of AzureContainerInfo from a dict
azure_container_info_from_dict = AzureContainerInfo.from_dict(azure_container_info_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


