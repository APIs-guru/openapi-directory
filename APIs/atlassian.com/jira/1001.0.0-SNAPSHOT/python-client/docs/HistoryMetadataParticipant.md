# HistoryMetadataParticipant

Details of user or system associated with a issue history metadata item.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**avatar_url** | **str** | The URL to an avatar for the user or system associated with a history record. | [optional] 
**display_name** | **str** | The display name of the user or system associated with a history record. | [optional] 
**display_name_key** | **str** | The key of the display name of the user or system associated with a history record. | [optional] 
**id** | **str** | The ID of the user or system associated with a history record. | [optional] 
**type** | **str** | The type of the user or system associated with a history record. | [optional] 
**url** | **str** | The URL of the user or system associated with a history record. | [optional] 

## Example

```python
from openapi_client.models.history_metadata_participant import HistoryMetadataParticipant

# TODO update the JSON string below
json = "{}"
# create an instance of HistoryMetadataParticipant from a JSON string
history_metadata_participant_instance = HistoryMetadataParticipant.from_json(json)
# print the JSON string representation of the object
print(HistoryMetadataParticipant.to_json())

# convert the object into a dict
history_metadata_participant_dict = history_metadata_participant_instance.to_dict()
# create an instance of HistoryMetadataParticipant from a dict
history_metadata_participant_from_dict = HistoryMetadataParticipant.from_dict(history_metadata_participant_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


