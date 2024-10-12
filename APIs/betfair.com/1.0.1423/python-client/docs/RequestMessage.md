# RequestMessage


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **int** | Client generated unique id to link request with response (like json rpc) | [optional] 
**op** | **str** | The operation type | [optional] 

## Example

```python
from openapi_client.models.request_message import RequestMessage

# TODO update the JSON string below
json = "{}"
# create an instance of RequestMessage from a JSON string
request_message_instance = RequestMessage.from_json(json)
# print the JSON string representation of the object
print(RequestMessage.to_json())

# convert the object into a dict
request_message_dict = request_message_instance.to_dict()
# create an instance of RequestMessage from a dict
request_message_from_dict = RequestMessage.from_dict(request_message_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


