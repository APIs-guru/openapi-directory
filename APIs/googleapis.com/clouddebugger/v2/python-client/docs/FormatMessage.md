# FormatMessage

Represents a message with parameters.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**format** | **str** | Format template for the message. The &#x60;format&#x60; uses placeholders &#x60;$0&#x60;, &#x60;$1&#x60;, etc. to reference parameters. &#x60;$$&#x60; can be used to denote the &#x60;$&#x60; character. Examples: * &#x60;Failed to load &#39;$0&#39; which helps debug $1 the first time it is loaded. Again, $0 is very important.&#x60; * &#x60;Please pay $$10 to use $0 instead of $1.&#x60; | [optional] 
**parameters** | **List[str]** | Optional parameters to be embedded into the message. | [optional] 

## Example

```python
from openapi_client.models.format_message import FormatMessage

# TODO update the JSON string below
json = "{}"
# create an instance of FormatMessage from a JSON string
format_message_instance = FormatMessage.from_json(json)
# print the JSON string representation of the object
print(FormatMessage.to_json())

# convert the object into a dict
format_message_dict = format_message_instance.to_dict()
# create an instance of FormatMessage from a dict
format_message_from_dict = FormatMessage.from_dict(format_message_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


