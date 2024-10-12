# GetManyMessagesResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**duration** | **str** |  | 
**messages** | [**List[Message]**](Message.md) | List of messages | 

## Example

```python
from openapi_client.models.get_many_messages_response import GetManyMessagesResponse

# TODO update the JSON string below
json = "{}"
# create an instance of GetManyMessagesResponse from a JSON string
get_many_messages_response_instance = GetManyMessagesResponse.from_json(json)
# print the JSON string representation of the object
print(GetManyMessagesResponse.to_json())

# convert the object into a dict
get_many_messages_response_dict = get_many_messages_response_instance.to_dict()
# create an instance of GetManyMessagesResponse from a dict
get_many_messages_response_from_dict = GetManyMessagesResponse.from_dict(get_many_messages_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


