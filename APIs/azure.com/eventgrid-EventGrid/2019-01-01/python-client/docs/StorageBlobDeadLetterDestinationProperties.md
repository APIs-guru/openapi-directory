# StorageBlobDeadLetterDestinationProperties

Properties of the storage blob based dead letter destination.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**blob_container_name** | **str** | The name of the Storage blob container that is the destination of the deadletter events | [optional] 
**resource_id** | **str** | The Azure Resource ID of the storage account that is the destination of the deadletter events. For example: /subscriptions/{AzureSubscriptionId}/resourceGroups/{ResourceGroupName}/providers/microsoft.Storage/storageAccounts/{StorageAccountName} | [optional] 

## Example

```python
from openapi_client.models.storage_blob_dead_letter_destination_properties import StorageBlobDeadLetterDestinationProperties

# TODO update the JSON string below
json = "{}"
# create an instance of StorageBlobDeadLetterDestinationProperties from a JSON string
storage_blob_dead_letter_destination_properties_instance = StorageBlobDeadLetterDestinationProperties.from_json(json)
# print the JSON string representation of the object
print(StorageBlobDeadLetterDestinationProperties.to_json())

# convert the object into a dict
storage_blob_dead_letter_destination_properties_dict = storage_blob_dead_letter_destination_properties_instance.to_dict()
# create an instance of StorageBlobDeadLetterDestinationProperties from a dict
storage_blob_dead_letter_destination_properties_from_dict = StorageBlobDeadLetterDestinationProperties.from_dict(storage_blob_dead_letter_destination_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


