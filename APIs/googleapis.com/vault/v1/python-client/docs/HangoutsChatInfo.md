# HangoutsChatInfo

The Chat spaces to search

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**room_id** | **List[str]** | A list of Chat spaces IDs, as provided by the [Chat API](https://developers.google.com/chat). There is a limit of exporting from 500 Chat spaces per request. | [optional] 

## Example

```python
from openapi_client.models.hangouts_chat_info import HangoutsChatInfo

# TODO update the JSON string below
json = "{}"
# create an instance of HangoutsChatInfo from a JSON string
hangouts_chat_info_instance = HangoutsChatInfo.from_json(json)
# print the JSON string representation of the object
print(HangoutsChatInfo.to_json())

# convert the object into a dict
hangouts_chat_info_dict = hangouts_chat_info_instance.to_dict()
# create an instance of HangoutsChatInfo from a dict
hangouts_chat_info_from_dict = HangoutsChatInfo.from_dict(hangouts_chat_info_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


