# MessageStatusError


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**code** | **int** | The error code. See [our errors list](/api-errors/messages-olympus) for a list of possible errors | [optional] 
**reason** | **str** | Text describing the error. See [our errors list](/api-errors/messages-olympus) for a list of possible errors | [optional] 

## Example

```python
from openapi_client.models.message_status_error import MessageStatusError

# TODO update the JSON string below
json = "{}"
# create an instance of MessageStatusError from a JSON string
message_status_error_instance = MessageStatusError.from_json(json)
# print the JSON string representation of the object
print(MessageStatusError.to_json())

# convert the object into a dict
message_status_error_dict = message_status_error_instance.to_dict()
# create an instance of MessageStatusError from a dict
message_status_error_from_dict = MessageStatusError.from_dict(message_status_error_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


