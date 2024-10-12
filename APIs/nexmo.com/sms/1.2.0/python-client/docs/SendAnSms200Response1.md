# SendAnSms200Response1


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**messages** | [**List[ErrorMessage]**](ErrorMessage.md) |  | [optional] 

## Example

```python
from openapi_client.models.send_an_sms200_response1 import SendAnSms200Response1

# TODO update the JSON string below
json = "{}"
# create an instance of SendAnSms200Response1 from a JSON string
send_an_sms200_response1_instance = SendAnSms200Response1.from_json(json)
# print the JSON string representation of the object
print(SendAnSms200Response1.to_json())

# convert the object into a dict
send_an_sms200_response1_dict = send_an_sms200_response1_instance.to_dict()
# create an instance of SendAnSms200Response1 from a dict
send_an_sms200_response1_from_dict = SendAnSms200Response1.from_dict(send_an_sms200_response1_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


