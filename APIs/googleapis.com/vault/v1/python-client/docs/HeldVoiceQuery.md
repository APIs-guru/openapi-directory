# HeldVoiceQuery

Options for Voice holds.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**covered_data** | **List[str]** | A list of data types covered by the hold. Should be non-empty. Order does not matter and duplicates are ignored. | [optional] 

## Example

```python
from openapi_client.models.held_voice_query import HeldVoiceQuery

# TODO update the JSON string below
json = "{}"
# create an instance of HeldVoiceQuery from a JSON string
held_voice_query_instance = HeldVoiceQuery.from_json(json)
# print the JSON string representation of the object
print(HeldVoiceQuery.to_json())

# convert the object into a dict
held_voice_query_dict = held_voice_query_instance.to_dict()
# create an instance of HeldVoiceQuery from a dict
held_voice_query_from_dict = HeldVoiceQuery.from_dict(held_voice_query_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


