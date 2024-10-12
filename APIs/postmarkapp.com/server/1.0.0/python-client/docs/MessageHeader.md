# MessageHeader

A single header for an email message.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** | The header&#39;s name. | [optional] 
**value** | **str** | The header&#39;s value. | [optional] 

## Example

```python
from openapi_client.models.message_header import MessageHeader

# TODO update the JSON string below
json = "{}"
# create an instance of MessageHeader from a JSON string
message_header_instance = MessageHeader.from_json(json)
# print the JSON string representation of the object
print(MessageHeader.to_json())

# convert the object into a dict
message_header_dict = message_header_instance.to_dict()
# create an instance of MessageHeader from a dict
message_header_from_dict = MessageHeader.from_dict(message_header_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


