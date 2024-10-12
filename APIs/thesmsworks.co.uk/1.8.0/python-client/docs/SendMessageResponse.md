# SendMessageResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**credits** | **float** | The number of remaining credits on your SMS Works account. Floating point number. | 
**credits_used** | **float** | The number of credits used to send the message. Floating point number. | 
**messageid** | **str** |  | 
**status** | **str** |  | 

## Example

```python
from openapi_client.models.send_message_response import SendMessageResponse

# TODO update the JSON string below
json = "{}"
# create an instance of SendMessageResponse from a JSON string
send_message_response_instance = SendMessageResponse.from_json(json)
# print the JSON string representation of the object
print(SendMessageResponse.to_json())

# convert the object into a dict
send_message_response_dict = send_message_response_instance.to_dict()
# create an instance of SendMessageResponse from a dict
send_message_response_from_dict = SendMessageResponse.from_dict(send_message_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


