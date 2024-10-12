# StorageBlobDeadLetterDestination

Information about the storage blob based dead letter destination.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**properties** | [**StorageBlobDeadLetterDestinationProperties**](StorageBlobDeadLetterDestinationProperties.md) |  | [optional] 

## Example

```python
from openapi_client.models.storage_blob_dead_letter_destination import StorageBlobDeadLetterDestination

# TODO update the JSON string below
json = "{}"
# create an instance of StorageBlobDeadLetterDestination from a JSON string
storage_blob_dead_letter_destination_instance = StorageBlobDeadLetterDestination.from_json(json)
# print the JSON string representation of the object
print(StorageBlobDeadLetterDestination.to_json())

# convert the object into a dict
storage_blob_dead_letter_destination_dict = storage_blob_dead_letter_destination_instance.to_dict()
# create an instance of StorageBlobDeadLetterDestination from a dict
storage_blob_dead_letter_destination_from_dict = StorageBlobDeadLetterDestination.from_dict(storage_blob_dead_letter_destination_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


