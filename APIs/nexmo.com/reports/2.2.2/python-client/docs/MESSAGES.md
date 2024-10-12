# MESSAGES

Messages

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**direction** | [**Direction**](Direction.md) |  | 
**var_from** | **str** | Request from this number. | [optional] 
**id** | **str** | Search only messages with the specified uuid. | [optional] 
**include_message** | **bool** | Include the text of messages in the report. | [optional] [default to False]
**product** | [**ProductMessages**](ProductMessages.md) |  | 
**to** | **str** | Request to this number. | [optional] 

## Example

```python
from openapi_client.models.messages import MESSAGES

# TODO update the JSON string below
json = "{}"
# create an instance of MESSAGES from a JSON string
messages_instance = MESSAGES.from_json(json)
# print the JSON string representation of the object
print(MESSAGES.to_json())

# convert the object into a dict
messages_dict = messages_instance.to_dict()
# create an instance of MESSAGES from a dict
messages_from_dict = MESSAGES.from_dict(messages_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


