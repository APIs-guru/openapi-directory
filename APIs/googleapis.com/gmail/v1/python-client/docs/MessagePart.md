# MessagePart

A single MIME message part.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**body** | [**MessagePartBody**](MessagePartBody.md) |  | [optional] 
**filename** | **str** | The filename of the attachment. Only present if this message part represents an attachment. | [optional] 
**headers** | [**List[MessagePartHeader]**](MessagePartHeader.md) | List of headers on this message part. For the top-level message part, representing the entire message payload, it will contain the standard RFC 2822 email headers such as &#x60;To&#x60;, &#x60;From&#x60;, and &#x60;Subject&#x60;. | [optional] 
**mime_type** | **str** | The MIME type of the message part. | [optional] 
**part_id** | **str** | The immutable ID of the message part. | [optional] 
**parts** | [**List[MessagePart]**](MessagePart.md) | The child MIME message parts of this part. This only applies to container MIME message parts, for example &#x60;multipart/*&#x60;. For non- container MIME message part types, such as &#x60;text/plain&#x60;, this field is empty. For more information, see RFC 1521. | [optional] 

## Example

```python
from openapi_client.models.message_part import MessagePart

# TODO update the JSON string below
json = "{}"
# create an instance of MessagePart from a JSON string
message_part_instance = MessagePart.from_json(json)
# print the JSON string representation of the object
print(MessagePart.to_json())

# convert the object into a dict
message_part_dict = message_part_instance.to_dict()
# create an instance of MessagePart from a dict
message_part_from_dict = MessagePart.from_dict(message_part_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


