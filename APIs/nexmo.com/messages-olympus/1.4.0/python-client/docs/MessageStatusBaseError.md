# MessageStatusBaseError

If the message encountered a problem a descriptive error will be supplied in this object.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**detail** | **str** | Text describing the error. See [our errors list](https://developer.nexmo.com/api-errors/messages-olympus) for a list of possible errors | [optional] 
**instance** | **str** | The record id of this error&#39;s occurrence. | [optional] 
**title** | **str** | The error code encountered when sending the message. See [our errors list](https://developer.nexmo.com/api-errors/messages-olympus) for a list of possible errors | [optional] 
**type** | **str** | The type of error encountered, follow URL for more details | [optional] 

## Example

```python
from openapi_client.models.message_status_base_error import MessageStatusBaseError

# TODO update the JSON string below
json = "{}"
# create an instance of MessageStatusBaseError from a JSON string
message_status_base_error_instance = MessageStatusBaseError.from_json(json)
# print the JSON string representation of the object
print(MessageStatusBaseError.to_json())

# convert the object into a dict
message_status_base_error_dict = message_status_base_error_instance.to_dict()
# create an instance of MessageStatusBaseError from a dict
message_status_base_error_from_dict = MessageStatusBaseError.from_dict(message_status_base_error_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


