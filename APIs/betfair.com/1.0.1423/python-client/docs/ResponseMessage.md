# ResponseMessage


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **int** | Client generated unique id to link request with response (like json rpc) | [optional] 
**op** | **str** | The operation type | [optional] 

## Example

```python
from openapi_client.models.response_message import ResponseMessage

# TODO update the JSON string below
json = "{}"
# create an instance of ResponseMessage from a JSON string
response_message_instance = ResponseMessage.from_json(json)
# print the JSON string representation of the object
print(ResponseMessage.to_json())

# convert the object into a dict
response_message_dict = response_message_instance.to_dict()
# create an instance of ResponseMessage from a dict
response_message_from_dict = ResponseMessage.from_dict(response_message_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


