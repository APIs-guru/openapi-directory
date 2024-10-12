# ModerateTextRequest

The document moderation request message.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**document** | [**Document**](Document.md) |  | [optional] 

## Example

```python
from openapi_client.models.moderate_text_request import ModerateTextRequest

# TODO update the JSON string below
json = "{}"
# create an instance of ModerateTextRequest from a JSON string
moderate_text_request_instance = ModerateTextRequest.from_json(json)
# print the JSON string representation of the object
print(ModerateTextRequest.to_json())

# convert the object into a dict
moderate_text_request_dict = moderate_text_request_instance.to_dict()
# create an instance of ModerateTextRequest from a dict
moderate_text_request_from_dict = ModerateTextRequest.from_dict(moderate_text_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


