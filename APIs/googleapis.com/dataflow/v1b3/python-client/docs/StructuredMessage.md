# StructuredMessage

A rich message format, including a human readable string, a key for identifying the message, and structured data associated with the message for programmatic consumption.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**message_key** | **str** | Identifier for this message type. Used by external systems to internationalize or personalize message. | [optional] 
**message_text** | **str** | Human-readable version of message. | [optional] 
**parameters** | [**List[Parameter]**](Parameter.md) | The structured data associated with this message. | [optional] 

## Example

```python
from openapi_client.models.structured_message import StructuredMessage

# TODO update the JSON string below
json = "{}"
# create an instance of StructuredMessage from a JSON string
structured_message_instance = StructuredMessage.from_json(json)
# print the JSON string representation of the object
print(StructuredMessage.to_json())

# convert the object into a dict
structured_message_dict = structured_message_instance.to_dict()
# create an instance of StructuredMessage from a dict
structured_message_from_dict = StructuredMessage.from_dict(structured_message_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


