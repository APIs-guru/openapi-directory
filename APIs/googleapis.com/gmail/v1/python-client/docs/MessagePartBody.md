# MessagePartBody

The body of a single MIME message part.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**attachment_id** | **str** | When present, contains the ID of an external attachment that can be retrieved in a separate &#x60;messages.attachments.get&#x60; request. When not present, the entire content of the message part body is contained in the data field. | [optional] 
**data** | **bytearray** | The body data of a MIME message part as a base64url encoded string. May be empty for MIME container types that have no message body or when the body data is sent as a separate attachment. An attachment ID is present if the body data is contained in a separate attachment. | [optional] 
**size** | **int** | Number of bytes for the message part data (encoding notwithstanding). | [optional] 

## Example

```python
from openapi_client.models.message_part_body import MessagePartBody

# TODO update the JSON string below
json = "{}"
# create an instance of MessagePartBody from a JSON string
message_part_body_instance = MessagePartBody.from_json(json)
# print the JSON string representation of the object
print(MessagePartBody.to_json())

# convert the object into a dict
message_part_body_dict = message_part_body_instance.to_dict()
# create an instance of MessagePartBody from a dict
message_part_body_from_dict = MessagePartBody.from_dict(message_part_body_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


