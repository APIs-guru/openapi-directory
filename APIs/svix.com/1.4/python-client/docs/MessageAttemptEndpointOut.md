# MessageAttemptEndpointOut


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
from openapi_client.models.message_attempt_endpoint_out import MessageAttemptEndpointOut

# TODO update the JSON string below
json = "{}"
# create an instance of MessageAttemptEndpointOut from a JSON string
message_attempt_endpoint_out_instance = MessageAttemptEndpointOut.from_json(json)
# print the JSON string representation of the object
print(MessageAttemptEndpointOut.to_json())

# convert the object into a dict
message_attempt_endpoint_out_dict = message_attempt_endpoint_out_instance.to_dict()
# create an instance of MessageAttemptEndpointOut from a dict
message_attempt_endpoint_out_from_dict = MessageAttemptEndpointOut.from_dict(message_attempt_endpoint_out_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


