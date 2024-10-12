# ForwardMessagePost200Response


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ok** | **bool** |  | [default to True]
**result** | [**Message**](Message.md) |  | 

## Example

```python
from openapi_client.models.forward_message_post200_response import ForwardMessagePost200Response

# TODO update the JSON string below
json = "{}"
# create an instance of ForwardMessagePost200Response from a JSON string
forward_message_post200_response_instance = ForwardMessagePost200Response.from_json(json)
# print the JSON string representation of the object
print(ForwardMessagePost200Response.to_json())

# convert the object into a dict
forward_message_post200_response_dict = forward_message_post200_response_instance.to_dict()
# create an instance of ForwardMessagePost200Response from a dict
forward_message_post200_response_from_dict = ForwardMessagePost200Response.from_dict(forward_message_post200_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


