# SendMessagesResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data** | [**SendMessagesResponseData**](SendMessagesResponseData.md) |  | [optional] 

## Example

```python
from openapi_client.models.send_messages_response import SendMessagesResponse

# TODO update the JSON string below
json = "{}"
# create an instance of SendMessagesResponse from a JSON string
send_messages_response_instance = SendMessagesResponse.from_json(json)
# print the JSON string representation of the object
print(SendMessagesResponse.to_json())

# convert the object into a dict
send_messages_response_dict = send_messages_response_instance.to_dict()
# create an instance of SendMessagesResponse from a dict
send_messages_response_from_dict = SendMessagesResponse.from_dict(send_messages_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


