# PromptMessageResponse

The response to a prompt message.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**response** | **List[str]** | The list of responses a cmdlet expects. | [optional] 

## Example

```python
from openapi_client.models.prompt_message_response import PromptMessageResponse

# TODO update the JSON string below
json = "{}"
# create an instance of PromptMessageResponse from a JSON string
prompt_message_response_instance = PromptMessageResponse.from_json(json)
# print the JSON string representation of the object
print(PromptMessageResponse.to_json())

# convert the object into a dict
prompt_message_response_dict = prompt_message_response_instance.to_dict()
# create an instance of PromptMessageResponse from a dict
prompt_message_response_from_dict = PromptMessageResponse.from_dict(prompt_message_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


