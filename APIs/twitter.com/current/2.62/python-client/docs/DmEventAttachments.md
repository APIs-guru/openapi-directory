# DmEventAttachments

Specifies the type of attachments (if any) present in this DM.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**card_ids** | **List[str]** | A list of card IDs (if cards are attached). | [optional] 
**media_keys** | **List[str]** | A list of Media Keys for each one of the media attachments (if media are attached). | [optional] 

## Example

```python
from openapi_client.models.dm_event_attachments import DmEventAttachments

# TODO update the JSON string below
json = "{}"
# create an instance of DmEventAttachments from a JSON string
dm_event_attachments_instance = DmEventAttachments.from_json(json)
# print the JSON string representation of the object
print(DmEventAttachments.to_json())

# convert the object into a dict
dm_event_attachments_dict = dm_event_attachments_instance.to_dict()
# create an instance of DmEventAttachments from a dict
dm_event_attachments_from_dict = DmEventAttachments.from_dict(dm_event_attachments_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


