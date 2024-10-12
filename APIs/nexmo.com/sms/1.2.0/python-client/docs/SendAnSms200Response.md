# SendAnSms200Response


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**message_count** | **str** | The amount of messages in the request | [optional] 
**messages** | [**List[ErrorMessage]**](ErrorMessage.md) |  | [optional] 

## Example

```python
from openapi_client.models.send_an_sms200_response import SendAnSms200Response

# TODO update the JSON string below
json = "{}"
# create an instance of SendAnSms200Response from a JSON string
send_an_sms200_response_instance = SendAnSms200Response.from_json(json)
# print the JSON string representation of the object
print(SendAnSms200Response.to_json())

# convert the object into a dict
send_an_sms200_response_dict = send_an_sms200_response_instance.to_dict()
# create an instance of SendAnSms200Response from a dict
send_an_sms200_response_from_dict = SendAnSms200Response.from_dict(send_an_sms200_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


