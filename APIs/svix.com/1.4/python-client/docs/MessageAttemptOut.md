# MessageAttemptOut


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**endpoint_id** | **str** |  | 
**id** | **str** |  | 
**msg_id** | **str** |  | 
**response** | **str** |  | 
**response_status_code** | **int** |  | 
**status** | [**MessageStatus**](MessageStatus.md) |  | 
**timestamp** | **datetime** |  | 
**trigger_type** | [**MessageAttemptTriggerType**](MessageAttemptTriggerType.md) |  | 
**url** | **str** |  | 

## Example

```python
from openapi_client.models.message_attempt_out import MessageAttemptOut

# TODO update the JSON string below
json = "{}"
# create an instance of MessageAttemptOut from a JSON string
message_attempt_out_instance = MessageAttemptOut.from_json(json)
# print the JSON string representation of the object
print(MessageAttemptOut.to_json())

# convert the object into a dict
message_attempt_out_dict = message_attempt_out_instance.to_dict()
# create an instance of MessageAttemptOut from a dict
message_attempt_out_from_dict = MessageAttemptOut.from_dict(message_attempt_out_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


