# TranslateMessageRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**language** | **str** | Language to translate message to | 

## Example

```python
from openapi_client.models.translate_message_request import TranslateMessageRequest

# TODO update the JSON string below
json = "{}"
# create an instance of TranslateMessageRequest from a JSON string
translate_message_request_instance = TranslateMessageRequest.from_json(json)
# print the JSON string representation of the object
print(TranslateMessageRequest.to_json())

# convert the object into a dict
translate_message_request_dict = translate_message_request_instance.to_dict()
# create an instance of TranslateMessageRequest from a dict
translate_message_request_from_dict = TranslateMessageRequest.from_dict(translate_message_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


