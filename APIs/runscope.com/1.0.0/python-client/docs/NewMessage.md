# NewMessage


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**request** | [**NewMessageRequest**](NewMessageRequest.md) |  | [optional] 
**response** | [**NewMessageResponse**](NewMessageResponse.md) |  | [optional] 

## Example

```python
from openapi_client.models.new_message import NewMessage

# TODO update the JSON string below
json = "{}"
# create an instance of NewMessage from a JSON string
new_message_instance = NewMessage.from_json(json)
# print the JSON string representation of the object
print(NewMessage.to_json())

# convert the object into a dict
new_message_dict = new_message_instance.to_dict()
# create an instance of NewMessage from a dict
new_message_from_dict = NewMessage.from_dict(new_message_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


