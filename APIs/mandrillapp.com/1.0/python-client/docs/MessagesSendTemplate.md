# MessagesSendTemplate


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**var_async** | **bool** |  | [optional] 
**ip_pool** | **str** |  | [optional] 
**key** | **str** |  | [optional] 
**message** | [**MessagesSendMessage**](MessagesSendMessage.md) |  | [optional] 
**send_at** | **str** |  | [optional] 
**template_content** | [**List[MessagesSendMessageGlobalMergeVarsInner]**](MessagesSendMessageGlobalMergeVarsInner.md) |  | [optional] 
**template_name** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.messages_send_template import MessagesSendTemplate

# TODO update the JSON string below
json = "{}"
# create an instance of MessagesSendTemplate from a JSON string
messages_send_template_instance = MessagesSendTemplate.from_json(json)
# print the JSON string representation of the object
print(MessagesSendTemplate.to_json())

# convert the object into a dict
messages_send_template_dict = messages_send_template_instance.to_dict()
# create an instance of MessagesSendTemplate from a dict
messages_send_template_from_dict = MessagesSendTemplate.from_dict(messages_send_template_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


