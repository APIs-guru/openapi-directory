# MessagePropertyContent


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**audio** | [**AudioProperty**](AudioProperty.md) |  | [optional] 
**file** | [**FileProperty**](FileProperty.md) |  | [optional] 
**image** | [**ImageProperty**](ImageProperty.md) |  | [optional] 
**template** | [**TemplateProperty**](TemplateProperty.md) |  | [optional] 
**text** | **str** | The text of the message.  **Messenger**: Is limited to 640 characters  **SMS** or **Viber**: Is 1000 characters  **WhatsApp**: is 4096 characters  | [optional] 
**type** | **str** | The type of message that you are sending.  **Messenger**: supports &#x60;text&#x60;, &#x60;image&#x60;, &#x60;audio&#x60;, &#x60;video&#x60; and &#x60;file&#x60;.  **Viber Business Messages**: supports &#x60;image&#x60; and &#x60;text&#x60;.  **WhatsApp**: supports &#x60;template&#x60;, &#x60;text&#x60;, &#x60;image&#x60;, &#x60;audio&#x60;, &#x60;video&#x60; and &#x60;file&#x60;.  **SMS**: supports &#x60;text&#x60;.  | 
**video** | [**VideoProperty**](VideoProperty.md) |  | [optional] 

## Example

```python
from openapi_client.models.message_property_content import MessagePropertyContent

# TODO update the JSON string below
json = "{}"
# create an instance of MessagePropertyContent from a JSON string
message_property_content_instance = MessagePropertyContent.from_json(json)
# print the JSON string representation of the object
print(MessagePropertyContent.to_json())

# convert the object into a dict
message_property_content_dict = message_property_content_instance.to_dict()
# create an instance of MessagePropertyContent from a dict
message_property_content_from_dict = MessagePropertyContent.from_dict(message_property_content_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


