# HeldHangoutsChatQuery

Options for Chat holds.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**include_rooms** | **bool** | To include messages in Chat spaces the user was a member of, set to **true**. | [optional] 

## Example

```python
from openapi_client.models.held_hangouts_chat_query import HeldHangoutsChatQuery

# TODO update the JSON string below
json = "{}"
# create an instance of HeldHangoutsChatQuery from a JSON string
held_hangouts_chat_query_instance = HeldHangoutsChatQuery.from_json(json)
# print the JSON string representation of the object
print(HeldHangoutsChatQuery.to_json())

# convert the object into a dict
held_hangouts_chat_query_dict = held_hangouts_chat_query_instance.to_dict()
# create an instance of HeldHangoutsChatQuery from a dict
held_hangouts_chat_query_from_dict = HeldHangoutsChatQuery.from_dict(held_hangouts_chat_query_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


