# ChatLocation

Represents a location to which a chat is connected.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**address** | **str** | Location address; 1-64 characters, as defined by the chat owner | 
**location** | [**Location**](Location.md) |  | 

## Example

```python
from openapi_client.models.chat_location import ChatLocation

# TODO update the JSON string below
json = "{}"
# create an instance of ChatLocation from a JSON string
chat_location_instance = ChatLocation.from_json(json)
# print the JSON string representation of the object
print(ChatLocation.to_json())

# convert the object into a dict
chat_location_dict = chat_location_instance.to_dict()
# create an instance of ChatLocation from a dict
chat_location_from_dict = ChatLocation.from_dict(chat_location_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


