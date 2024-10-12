# CreateTextMessageRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**attachments** | [**List[DmMediaAttachment]**](DmMediaAttachment.md) | Attachments to a DM Event. | [optional] 
**text** | **str** | Text of the message. | 

## Example

```python
from openapi_client.models.create_text_message_request import CreateTextMessageRequest

# TODO update the JSON string below
json = "{}"
# create an instance of CreateTextMessageRequest from a JSON string
create_text_message_request_instance = CreateTextMessageRequest.from_json(json)
# print the JSON string representation of the object
print(CreateTextMessageRequest.to_json())

# convert the object into a dict
create_text_message_request_dict = create_text_message_request_instance.to_dict()
# create an instance of CreateTextMessageRequest from a dict
create_text_message_request_from_dict = CreateTextMessageRequest.from_dict(create_text_message_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


