# SendWithFailoverMessage

Send With Failover Message

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**failover** | [**FailoverProperty**](FailoverProperty.md) |  | [optional] 
**var_from** | [**FromProperty**](FromProperty.md) |  | 
**message** | [**MessageProperty**](MessageProperty.md) |  | 
**to** | [**ToProperty**](ToProperty.md) |  | 

## Example

```python
from openapi_client.models.send_with_failover_message import SendWithFailoverMessage

# TODO update the JSON string below
json = "{}"
# create an instance of SendWithFailoverMessage from a JSON string
send_with_failover_message_instance = SendWithFailoverMessage.from_json(json)
# print the JSON string representation of the object
print(SendWithFailoverMessage.to_json())

# convert the object into a dict
send_with_failover_message_dict = send_with_failover_message_instance.to_dict()
# create an instance of SendWithFailoverMessage from a dict
send_with_failover_message_from_dict = SendWithFailoverMessage.from_dict(send_with_failover_message_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


