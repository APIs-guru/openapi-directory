# MessageWrapped


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**callback** | **str** |  | [optional] 
**meta** | [**Meta**](Meta.md) |  | [optional] 
**results** | [**List[Message]**](Message.md) |  | [optional] 

## Example

```python
from openapi_client.models.message_wrapped import MessageWrapped

# TODO update the JSON string below
json = "{}"
# create an instance of MessageWrapped from a JSON string
message_wrapped_instance = MessageWrapped.from_json(json)
# print the JSON string representation of the object
print(MessageWrapped.to_json())

# convert the object into a dict
message_wrapped_dict = message_wrapped_instance.to_dict()
# create an instance of MessageWrapped from a dict
message_wrapped_from_dict = MessageWrapped.from_dict(message_wrapped_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


