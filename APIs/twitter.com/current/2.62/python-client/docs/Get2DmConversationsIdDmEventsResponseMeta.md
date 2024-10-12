# Get2DmConversationsIdDmEventsResponseMeta


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_token** | **str** | The next token. | [optional] 
**previous_token** | **str** | The previous token. | [optional] 
**result_count** | **int** | The number of results returned in this response. | [optional] 

## Example

```python
from openapi_client.models.get2_dm_conversations_id_dm_events_response_meta import Get2DmConversationsIdDmEventsResponseMeta

# TODO update the JSON string below
json = "{}"
# create an instance of Get2DmConversationsIdDmEventsResponseMeta from a JSON string
get2_dm_conversations_id_dm_events_response_meta_instance = Get2DmConversationsIdDmEventsResponseMeta.from_json(json)
# print the JSON string representation of the object
print(Get2DmConversationsIdDmEventsResponseMeta.to_json())

# convert the object into a dict
get2_dm_conversations_id_dm_events_response_meta_dict = get2_dm_conversations_id_dm_events_response_meta_instance.to_dict()
# create an instance of Get2DmConversationsIdDmEventsResponseMeta from a dict
get2_dm_conversations_id_dm_events_response_meta_from_dict = Get2DmConversationsIdDmEventsResponseMeta.from_dict(get2_dm_conversations_id_dm_events_response_meta_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


