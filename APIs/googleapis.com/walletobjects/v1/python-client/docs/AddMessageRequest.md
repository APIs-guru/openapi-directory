# AddMessageRequest

Resource used when the AddMessage endpoints are called.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**message** | [**Message**](Message.md) |  | [optional] 

## Example

```python
from openapi_client.models.add_message_request import AddMessageRequest

# TODO update the JSON string below
json = "{}"
# create an instance of AddMessageRequest from a JSON string
add_message_request_instance = AddMessageRequest.from_json(json)
# print the JSON string representation of the object
print(AddMessageRequest.to_json())

# convert the object into a dict
add_message_request_dict = add_message_request_instance.to_dict()
# create an instance of AddMessageRequest from a dict
add_message_request_from_dict = AddMessageRequest.from_dict(add_message_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


