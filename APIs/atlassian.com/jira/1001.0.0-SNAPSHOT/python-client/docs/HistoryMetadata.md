# HistoryMetadata

Details of issue history metadata.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**activity_description** | **str** | The activity described in the history record. | [optional] 
**activity_description_key** | **str** | The key of the activity described in the history record. | [optional] 
**actor** | [**HistoryMetadataParticipant**](HistoryMetadataParticipant.md) | Details of the user whose action created the history record. | [optional] 
**cause** | [**HistoryMetadataParticipant**](HistoryMetadataParticipant.md) | Details of the cause that triggered the creation the history record. | [optional] 
**description** | **str** | The description of the history record. | [optional] 
**description_key** | **str** | The description key of the history record. | [optional] 
**email_description** | **str** | The description of the email address associated the history record. | [optional] 
**email_description_key** | **str** | The description key of the email address associated the history record. | [optional] 
**extra_data** | **Dict[str, str]** | Additional arbitrary information about the history record. | [optional] 
**generator** | [**HistoryMetadataParticipant**](HistoryMetadataParticipant.md) | Details of the system that generated the history record. | [optional] 
**type** | **str** | The type of the history record. | [optional] 

## Example

```python
from openapi_client.models.history_metadata import HistoryMetadata

# TODO update the JSON string below
json = "{}"
# create an instance of HistoryMetadata from a JSON string
history_metadata_instance = HistoryMetadata.from_json(json)
# print the JSON string representation of the object
print(HistoryMetadata.to_json())

# convert the object into a dict
history_metadata_dict = history_metadata_instance.to_dict()
# create an instance of HistoryMetadata from a dict
history_metadata_from_dict = HistoryMetadata.from_dict(history_metadata_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


