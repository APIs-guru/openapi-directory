# AzureDiskDetails

The details of an Azure VM disk.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**disk_id** | **str** | Azure disk ID. | [optional] 
**disk_number** | **int** | The ordinal number of the disk. | [optional] 
**size_gb** | **str** | Size in GB. | [optional] 

## Example

```python
from openapi_client.models.azure_disk_details import AzureDiskDetails

# TODO update the JSON string below
json = "{}"
# create an instance of AzureDiskDetails from a JSON string
azure_disk_details_instance = AzureDiskDetails.from_json(json)
# print the JSON string representation of the object
print(AzureDiskDetails.to_json())

# convert the object into a dict
azure_disk_details_dict = azure_disk_details_instance.to_dict()
# create an instance of AzureDiskDetails from a dict
azure_disk_details_from_dict = AzureDiskDetails.from_dict(azure_disk_details_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


