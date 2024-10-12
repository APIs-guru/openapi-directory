# HangoutsChatOptions

Additional options for Google Chat search

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**include_rooms** | **bool** | For searches by account or organizational unit, set to **true** to include rooms. | [optional] 

## Example

```python
from openapi_client.models.hangouts_chat_options import HangoutsChatOptions

# TODO update the JSON string below
json = "{}"
# create an instance of HangoutsChatOptions from a JSON string
hangouts_chat_options_instance = HangoutsChatOptions.from_json(json)
# print the JSON string representation of the object
print(HangoutsChatOptions.to_json())

# convert the object into a dict
hangouts_chat_options_dict = hangouts_chat_options_instance.to_dict()
# create an instance of HangoutsChatOptions from a dict
hangouts_chat_options_from_dict = HangoutsChatOptions.from_dict(hangouts_chat_options_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


