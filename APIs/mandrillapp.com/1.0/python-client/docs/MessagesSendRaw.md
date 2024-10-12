# MessagesSendRaw


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**var_async** | **bool** |  | [optional] 
**from_email** | **str** |  | [optional] 
**from_name** | **str** |  | [optional] 
**ip_pool** | **str** |  | [optional] 
**key** | **str** |  | [optional] 
**raw_message** | **str** |  | [optional] 
**send_at** | **str** |  | [optional] 
**to** | **List[str]** |  | [optional] 

## Example

```python
from openapi_client.models.messages_send_raw import MessagesSendRaw

# TODO update the JSON string below
json = "{}"
# create an instance of MessagesSendRaw from a JSON string
messages_send_raw_instance = MessagesSendRaw.from_json(json)
# print the JSON string representation of the object
print(MessagesSendRaw.to_json())

# convert the object into a dict
messages_send_raw_dict = messages_send_raw_instance.to_dict()
# create an instance of MessagesSendRaw from a dict
messages_send_raw_from_dict = MessagesSendRaw.from_dict(messages_send_raw_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


