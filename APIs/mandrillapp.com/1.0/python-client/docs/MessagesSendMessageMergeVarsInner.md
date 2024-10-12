# MessagesSendMessageMergeVarsInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**rcpt** | **str** |  | [optional] 
**vars** | [**List[MessagesSendMessageGlobalMergeVarsInner]**](MessagesSendMessageGlobalMergeVarsInner.md) |  | [optional] 

## Example

```python
from openapi_client.models.messages_send_message_merge_vars_inner import MessagesSendMessageMergeVarsInner

# TODO update the JSON string below
json = "{}"
# create an instance of MessagesSendMessageMergeVarsInner from a JSON string
messages_send_message_merge_vars_inner_instance = MessagesSendMessageMergeVarsInner.from_json(json)
# print the JSON string representation of the object
print(MessagesSendMessageMergeVarsInner.to_json())

# convert the object into a dict
messages_send_message_merge_vars_inner_dict = messages_send_message_merge_vars_inner_instance.to_dict()
# create an instance of MessagesSendMessageMergeVarsInner from a dict
messages_send_message_merge_vars_inner_from_dict = MessagesSendMessageMergeVarsInner.from_dict(messages_send_message_merge_vars_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


