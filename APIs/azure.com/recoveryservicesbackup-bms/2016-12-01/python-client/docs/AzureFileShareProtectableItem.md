# AzureFileShareProtectableItem

Protectable item for Azure Fileshare workloads.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**azure_file_share_type** | **str** | File Share type XSync or XSMB. | [optional] 
**parent_container_fabric_id** | **str** | Full Fabric ID of container to which this protectable item belongs. For example, ARM ID. | [optional] 
**parent_container_friendly_name** | **str** | Friendly name of container to which this protectable item belongs. | [optional] 

## Example

```python
from openapi_client.models.azure_file_share_protectable_item import AzureFileShareProtectableItem

# TODO update the JSON string below
json = "{}"
# create an instance of AzureFileShareProtectableItem from a JSON string
azure_file_share_protectable_item_instance = AzureFileShareProtectableItem.from_json(json)
# print the JSON string representation of the object
print(AzureFileShareProtectableItem.to_json())

# convert the object into a dict
azure_file_share_protectable_item_dict = azure_file_share_protectable_item_instance.to_dict()
# create an instance of AzureFileShareProtectableItem from a dict
azure_file_share_protectable_item_from_dict = AzureFileShareProtectableItem.from_dict(azure_file_share_protectable_item_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


