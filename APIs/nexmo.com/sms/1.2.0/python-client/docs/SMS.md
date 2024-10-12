# SMS

Message sent

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**message_count** | **str** | The amount of messages in the request | [optional] 
**messages** | [**List[Message]**](Message.md) |  | [optional] 

## Example

```python
from openapi_client.models.sms import SMS

# TODO update the JSON string below
json = "{}"
# create an instance of SMS from a JSON string
sms_instance = SMS.from_json(json)
# print the JSON string representation of the object
print(SMS.to_json())

# convert the object into a dict
sms_dict = sms_instance.to_dict()
# create an instance of SMS from a dict
sms_from_dict = SMS.from_dict(sms_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


