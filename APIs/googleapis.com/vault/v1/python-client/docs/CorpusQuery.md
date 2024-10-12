# CorpusQuery

Service-specific options for holds.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**drive_query** | [**HeldDriveQuery**](HeldDriveQuery.md) |  | [optional] 
**groups_query** | [**HeldGroupsQuery**](HeldGroupsQuery.md) |  | [optional] 
**hangouts_chat_query** | [**HeldHangoutsChatQuery**](HeldHangoutsChatQuery.md) |  | [optional] 
**mail_query** | [**HeldMailQuery**](HeldMailQuery.md) |  | [optional] 
**voice_query** | [**HeldVoiceQuery**](HeldVoiceQuery.md) |  | [optional] 

## Example

```python
from openapi_client.models.corpus_query import CorpusQuery

# TODO update the JSON string below
json = "{}"
# create an instance of CorpusQuery from a JSON string
corpus_query_instance = CorpusQuery.from_json(json)
# print the JSON string representation of the object
print(CorpusQuery.to_json())

# convert the object into a dict
corpus_query_dict = corpus_query_instance.to_dict()
# create an instance of CorpusQuery from a dict
corpus_query_from_dict = CorpusQuery.from_dict(corpus_query_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


